const genres = [
  { id: "piano", label: "Piano" }
];

const tracks = [
  {
    id: "yoru-ni-kakeru-piano-cover",
    title: "Yoru ni Kakeru",
    artist: "YOASOBI",
    album: "Piano Covers",
    duration: "4:31",
    seconds: 271,
    color: "cover-dawn",
    tag: "PIANO",
    genre: "piano",
    audio: "assets/audio/YOASOBI - Yoru ni Kakeru (Racing Into The Night) - Piano Cover (Visualizer and Sheets).mp3",
    cover: "assets/covers/yoru-ni-kakeru.png"
  }
];

const state = { currentId: null, isPlaying: false, repeat: false, shuffle: false, activePlaylistId: null, profile: "Khách nghe nhạc", profiles: {}, likes: new Set(), playlists: [] };
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const audio = $("#audio-player");
const storeKey = "am-luu-v1";
const themeKey = "am-luu-theme";

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storeKey));
    if (!saved) return;
    state.profile = saved.profile || "Khách nghe nhạc";
    state.profiles = saved.profiles || {};
    // Giữ được dữ liệu của bản giao diện cũ nếu có trong trình duyệt.
    if (!saved.profiles && (saved.playlists || saved.likes)) state.profiles[state.profile] = { playlists: saved.playlists || [], likes: saved.likes || [] };
    loadProfileData();
    saveState();
  } catch { localStorage.removeItem(storeKey); }
}
function loadProfileData() {
  const profileData = state.profiles[state.profile] || { playlists: [], likes: [] };
  const availableTrackIds = new Set(tracks.map(track => track.id));
  state.playlists = Array.isArray(profileData.playlists) ? profileData.playlists.map(playlist => ({ ...playlist, trackIds: (playlist.trackIds || []).filter(id => availableTrackIds.has(id)) })) : [];
  state.likes = new Set((profileData.likes || []).filter(id => availableTrackIds.has(id)));
  state.activePlaylistId = null;
}
function saveState() {
  state.profiles[state.profile] = { playlists: state.playlists, likes: [...state.likes] };
  localStorage.setItem(storeKey, JSON.stringify({ profile: state.profile, profiles: state.profiles }));
}
function getTrack(id) { return tracks.find(track => track.id === id); }
function displayName() { return state.profile; }
function formatTime(value) { if (!Number.isFinite(value)) return "0:00"; const minutes = Math.floor(value / 60); const seconds = Math.floor(value % 60).toString().padStart(2, "0"); return `${minutes}:${seconds}`; }

function showToast(message) { const toast = $("#toast"); toast.textContent = message; toast.classList.add("visible"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("visible"), 2600); }
function setProfileUi() { const name = displayName(); $("#profile-name").textContent = name; $("#side-profile-name").textContent = name.toUpperCase(); $("#profile-initial").textContent = name.trim().charAt(0).toUpperCase() || "K"; }
function applyTheme(theme) {
  const isDark = theme === "dark";
  const button = $("#theme-toggle");
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  button.textContent = isDark ? "☀" : "☾";
  button.setAttribute("aria-label", isDark ? "Bật chế độ sáng" : "Bật chế độ tối");
  button.setAttribute("aria-pressed", String(isDark));
  button.title = isDark ? "Bật chế độ sáng" : "Bật chế độ tối";
}
function loadTheme() { applyTheme(localStorage.getItem(themeKey) === "dark" ? "dark" : "light"); }
function toggleTheme() {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(themeKey, theme);
  applyTheme(theme);
}

function coverMarkup(track, fallback) { return track.cover ? `<img src="${track.cover}" alt="Bìa album của ${track.title}" />` : fallback; }
function trackRow(track, index, options = {}) {
  const current = track.id === state.currentId ? " current-track" : "";
  const remove = options.remove ? `<button class="subtle-button remove-from-playlist" data-track-id="${track.id}" data-playlist-id="${options.playlistId}" type="button">Bỏ khỏi playlist</button>` : "";
  return `<article class="track-row${current}" data-track-id="${track.id}">
    <span class="track-index">${track.id === state.currentId && state.isPlaying ? "♫" : String(index + 1).padStart(2, "0")}</span>
    <div class="track-cover ${track.color}${track.cover ? " has-cover" : ""}">${coverMarkup(track, String(index + 1).padStart(2, "0"))}</div>
    <div class="track-info"><strong>${track.title}</strong><span>${track.artist}</span></div>
    <span class="track-album">${track.album}</span><span class="track-tag">${track.tag}</span><span class="track-duration">${track.duration}</span>
    <div class="track-menu"><button class="row-menu" data-menu-track="${track.id}" type="button" aria-label="Thêm ${track.title} vào playlist">•••</button>${remove}</div>
  </article>`;
}
function emptyTracksMessage() { return `<p class="empty-state">Không tìm thấy bài hát phù hợp.</p>`; }
function tracksForGenre(genre, items) { return genre.id === "unclassified" ? items.filter(track => !genres.some(item => item.id === track.genre)) : items.filter(track => track.genre === genre.id); }
function genreGroups(items) {
  const unclassifiedTracks = items.filter(track => !genres.some(genre => genre.id === track.genre));
  return unclassifiedTracks.length ? [...genres, { id: "unclassified", label: "Chưa phân loại" }] : genres;
}
function genreGroup(genre, items) {
  const genreTracks = tracksForGenre(genre, items);
  const rows = genreTracks.length ? genreTracks.map((track, index) => trackRow(track, index)).join("") : `<p class="empty-state">Chưa có bài hát thuộc thể loại ${genre.label}.</p>`;
  return `<section class="genre-group"><div class="genre-heading"><div><p class="eyebrow">THỂ LOẠI</p><h3>${genre.label}</h3></div><span class="count-label">${genreTracks.length} BÀI HÁT</span></div><div class="track-list">${rows}</div></section>`;
}
function renderTracks(items = tracks, isSearching = false) {
  const html = isSearching && !items.length ? emptyTracksMessage() : genreGroups(items).map(genre => genreGroup(genre, items)).join("");
  $("#featured-tracks").innerHTML = html;
  $("#library-tracks").innerHTML = html;
  $("#track-count").textContent = tracks.length ? `${tracks.length} BÀI HÁT` : "CHƯA CÓ BÀI HÁT";
  $$(".track-row").forEach(row => row.addEventListener("click", event => { if (event.target.closest("button")) return; playTrack(row.dataset.trackId); }));
  $$("[data-menu-track]").forEach(button => button.addEventListener("click", event => { event.stopPropagation(); openTrackMenu(button); }));
}
function renderSidebar() {
  const target = $("#sidebar-playlist-list");
  target.innerHTML = state.playlists.length ? state.playlists.map(playlist => `<button class="sidebar-playlist-item" data-open-playlist="${playlist.id}" type="button">${playlist.name}</button>`).join("") : `<p class="empty-side-playlist">Chưa có playlist nào.<br />Hãy tạo một danh sách đầu tiên.</p>`;
  $$('[data-open-playlist]').forEach(button => button.addEventListener("click", () => openPlaylist(button.dataset.openPlaylist)));
}
function renderPlaylists() {
  const cards = state.playlists.map((playlist, index) => {
    const colors = ["#e36a3b", "#86a68f", "#b18cce", "#4e86a9", "#c5955d"];
    const count = playlist.trackIds.length;
    return `<article class="playlist-card" style="--card-accent:${colors[index % colors.length]}" data-playlist-card="${playlist.id}"><h3>${playlist.name}</h3><p>${playlist.description || (count ? "Một góc nghe của riêng bạn" : "Chưa có bài hát")} · ${count} bài</p><button class="playlist-dots" data-delete-playlist="${playlist.id}" type="button" aria-label="Xóa playlist ${playlist.name}">•••</button></article>`;
  }).join("");
  $("#playlist-grid").innerHTML = `${cards}<button class="playlist-card new-playlist-card" type="button" data-new-playlist><span class="plus-circle">＋</span><strong>Tạo playlist mới</strong></button>`;
  $$('[data-playlist-card]').forEach(card => card.addEventListener("click", event => { if (event.target.closest("button")) return; openPlaylist(card.dataset.playlistCard); }));
  $$('[data-delete-playlist]').forEach(button => button.addEventListener("click", event => { event.stopPropagation(); deletePlaylist(button.dataset.deletePlaylist); }));
  $$('[data-new-playlist]').forEach(button => button.addEventListener("click", openPlaylistDialog));
}
function renderPlaylistDetail() {
  const target = $("#playlist-detail");
  const playlist = state.playlists.find(item => item.id === state.activePlaylistId);
  if (!playlist) { target.classList.add("hidden"); target.innerHTML = ""; return; }
  const playlistTracks = playlist.trackIds.map(getTrack).filter(Boolean);
  target.classList.remove("hidden");
  target.innerHTML = `<div class="playlist-detail-title"><div><p class="eyebrow">PLAYLIST ĐANG MỞ</p><h2>${playlist.name}</h2></div><button class="subtle-button" type="button" data-close-playlist>Đóng chi tiết</button></div><div class="track-list">${playlistTracks.length ? playlistTracks.map((track, index) => trackRow(track, index, { remove: true, playlistId: playlist.id })).join("") : `<p class="empty-state">Playlist này còn trống. Dùng dấu ••• bên cạnh bài hát để thêm nhạc.</p>`}</div>`;
  $$('[data-close-playlist]', target).forEach(button => button.addEventListener("click", () => { state.activePlaylistId = null; renderPlaylistDetail(); }));
  $$(".track-row", target).forEach(row => row.addEventListener("click", event => { if (event.target.closest("button")) return; playTrack(row.dataset.trackId); }));
  $$('[data-menu-track]', target).forEach(button => button.addEventListener("click", event => { event.stopPropagation(); openTrackMenu(button); }));
  $$(".remove-from-playlist", target).forEach(button => button.addEventListener("click", () => removeTrackFromPlaylist(button.dataset.playlistId, button.dataset.trackId)));
}
function renderAll() { renderTracks(); renderSidebar(); renderPlaylists(); renderPlaylistDetail(); setProfileUi(); updatePlayerUi(); }

function updatePlayerUi() {
  const track = getTrack(state.currentId);
  const pageTrack = track || tracks[0];
  $("#play-button").textContent = state.isPlaying ? "Ⅱ" : "▶";
  $("#play-button").setAttribute("aria-label", state.isPlaying ? "Tạm dừng" : "Phát");
  $("#page-play-button").textContent = state.isPlaying ? "Ⅱ" : "▶";
  $("#page-play-button").setAttribute("aria-label", state.isPlaying ? "Tạm dừng" : "Phát");
  $("#shuffle-button").classList.toggle("active", state.shuffle);
  $("#repeat-button").classList.toggle("active", state.repeat);
  $("#like-button").classList.toggle("liked", !!track && state.likes.has(track.id));
  $("#like-button").textContent = track && state.likes.has(track.id) ? "♥" : "♡";
  if (track) { $("#player-title").textContent = track.title; $("#player-artist").textContent = track.artist; const cover = $("#player-cover"); cover.className = `mini-cover ${track.color}${track.cover ? " has-cover" : ""}`; cover.innerHTML = coverMarkup(track, track.title.slice(0, 2).toUpperCase()); }
  if (pageTrack) {
    $("#page-player-title").textContent = pageTrack.title;
    $("#page-player-artist").textContent = pageTrack.artist;
    $("#page-player-album").textContent = pageTrack.album;
    $("#page-player-cover").src = pageTrack.cover || "";
    $("#page-player-cover").alt = pageTrack.cover ? `Bìa album của ${pageTrack.title}` : "";
  }
  $("#player-page").classList.toggle("is-playing", !!track && state.isPlaying);
  $("#page-player-status").textContent = track && state.isPlaying ? "ĐANG PHÁT" : "SẴN SÀNG PHÁT";
  $$(".track-row").forEach(row => { const isCurrent = row.dataset.trackId === state.currentId; row.classList.toggle("current-track", isCurrent); const index = $(".track-index", row); if (index) index.textContent = isCurrent && state.isPlaying ? "♫" : String(tracks.findIndex(track => track.id === row.dataset.trackId) + 1).padStart(2, "0"); });
}
function playTrack(id) {
  const track = getTrack(id); if (!track) return;
  const changingTrack = id !== state.currentId;
  state.currentId = id;
  if (changingTrack) { audio.src = track.audio; audio.currentTime = 0; }
  audio.play().then(() => { state.isPlaying = true; updatePlayerUi(); }).catch(() => { state.isPlaying = false; updatePlayerUi(); showToast("Không thể phát file nhạc này."); });
  updatePlayerUi();
}
function playFirstTrack() { const firstTrack = tracks[0]; if (!firstTrack) { showToast("Thư viện chưa có bài hát."); return; } playTrack(firstTrack.id); }
function togglePlayback() { if (!state.currentId) { playFirstTrack(); return; } if (audio.paused) { audio.play(); state.isPlaying = true; } else { audio.pause(); state.isPlaying = false; } updatePlayerUi(); }
function moveTrack(direction) { if (!tracks.length) { showToast("Thư viện chưa có bài hát."); return; } let index = tracks.findIndex(track => track.id === state.currentId); if (index < 0) index = 0; if (state.shuffle) { let next = Math.floor(Math.random() * tracks.length); if (tracks.length > 1 && next === index) next = (next + 1) % tracks.length; playTrack(tracks[next].id); return; } playTrack(tracks[(index + direction + tracks.length) % tracks.length].id); }

function openTrackMenu(button) {
  $$(".track-menu-popover").forEach(menu => menu.remove());
  const id = button.dataset.menuTrack;
  const menu = document.createElement("div"); menu.className = "track-menu-popover";
  menu.innerHTML = state.playlists.length ? `<p>THÊM VÀO PLAYLIST</p>${state.playlists.map(playlist => `<button type="button" data-add-to-playlist="${playlist.id}" data-track="${id}">${playlist.name}</button>`).join("")}` : `<p>CHƯA CÓ PLAYLIST</p><button type="button" data-create-before-add="${id}">Tạo playlist trước</button>`;
  button.parentElement.append(menu);
  $$('[data-add-to-playlist]', menu).forEach(item => item.addEventListener("click", () => addTrackToPlaylist(item.dataset.addToPlaylist, item.dataset.track)));
  const create = $('[data-create-before-add]', menu); if (create) create.addEventListener("click", () => { $("#playlist-dialog").dataset.pendingTrack = id; openPlaylistDialog(); });
}
function addTrackToPlaylist(playlistId, trackId) { const playlist = state.playlists.find(item => item.id === playlistId); if (!playlist) return; if (playlist.trackIds.includes(trackId)) { showToast("Bài hát đã có trong playlist này."); return; } playlist.trackIds.push(trackId); saveState(); renderSidebar(); renderPlaylists(); renderPlaylistDetail(); $$(".track-menu-popover").forEach(menu => menu.remove()); showToast(`Đã thêm vào “${playlist.name}”.`); }
function removeTrackFromPlaylist(playlistId, trackId) { const playlist = state.playlists.find(item => item.id === playlistId); if (!playlist) return; playlist.trackIds = playlist.trackIds.filter(id => id !== trackId); saveState(); renderSidebar(); renderPlaylists(); renderPlaylistDetail(); showToast("Đã bỏ bài hát khỏi playlist."); }
function deletePlaylist(id) { const playlist = state.playlists.find(item => item.id === id); if (!playlist) return; if (!confirm(`Xóa playlist “${playlist.name}”?`)) return; state.playlists = state.playlists.filter(item => item.id !== id); if (state.activePlaylistId === id) state.activePlaylistId = null; saveState(); renderSidebar(); renderPlaylists(); renderPlaylistDetail(); showToast("Đã xóa playlist."); }
function openPlaylist(id) { state.activePlaylistId = id; showPage("playlists"); renderPlaylistDetail(); setTimeout(() => $("#playlist-detail").scrollIntoView({ behavior: "smooth", block: "start" }), 40); }
function openPlaylistDialog() { const dialog = $("#playlist-dialog"); if (dialog.open) return; $$(".track-menu-popover").forEach(menu => menu.remove()); $("#playlist-form").reset(); dialog.showModal(); setTimeout(() => $("#playlist-name-input").focus(), 100); }
function openPlayerPage() {
  const firstTrack = tracks[0];
  if (!state.currentId && firstTrack) { state.currentId = firstTrack.id; audio.src = firstTrack.audio; audio.currentTime = 0; }
  if (!state.currentId) { showToast("Thư viện chưa có bài hát."); return; }
  showPage("player");
  updatePlayerUi();
}
function showPage(page) { $$(".page").forEach(item => item.classList.toggle("active-page", item.id === `${page}-page`)); $$(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.page === page)); $(".sidebar").classList.remove("open"); window.scrollTo({ top: 0, behavior: "smooth" }); }

function registerEvents() {
  $("#hero-play-button").addEventListener("click", playFirstTrack);
  $("#play-button").addEventListener("click", togglePlayback); $("#previous-button").addEventListener("click", () => moveTrack(-1)); $("#next-button").addEventListener("click", () => moveTrack(1));
  $("#page-play-button").addEventListener("click", togglePlayback); $("#page-previous-button").addEventListener("click", () => moveTrack(-1)); $("#page-next-button").addEventListener("click", () => moveTrack(1));
  $("#shuffle-button").addEventListener("click", () => { state.shuffle = !state.shuffle; updatePlayerUi(); showToast(state.shuffle ? "Đã bật phát ngẫu nhiên." : "Đã tắt phát ngẫu nhiên."); });
  $("#repeat-button").addEventListener("click", () => { state.repeat = !state.repeat; audio.loop = state.repeat; updatePlayerUi(); showToast(state.repeat ? "Đang lặp lại bài hát." : "Đã tắt lặp lại."); });
  $("#like-button").addEventListener("click", () => { if (!state.currentId) return; state.likes.has(state.currentId) ? state.likes.delete(state.currentId) : state.likes.add(state.currentId); saveState(); updatePlayerUi(); });
  $("#progress-input").addEventListener("input", event => { if (audio.duration) audio.currentTime = (event.target.value / 100) * audio.duration; });
  $("#volume-input").addEventListener("input", event => { audio.volume = event.target.value / 100; $("#mute-button").textContent = audio.volume === 0 ? "◌" : "◖"; });
  $("#mute-button").addEventListener("click", () => { audio.muted = !audio.muted; $("#mute-button").textContent = audio.muted ? "◌" : "◖"; });
  audio.addEventListener("loadedmetadata", () => { $("#duration-time").textContent = formatTime(audio.duration); });
  audio.addEventListener("timeupdate", () => { $("#elapsed-time").textContent = formatTime(audio.currentTime); $("#progress-input").value = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0; });
  audio.addEventListener("play", () => { state.isPlaying = true; updatePlayerUi(); }); audio.addEventListener("pause", () => { state.isPlaying = false; updatePlayerUi(); }); audio.addEventListener("ended", () => { if (!state.repeat) moveTrack(1); });
  $("#search-input").addEventListener("input", event => { const query = event.target.value.trim().toLowerCase(); const found = tracks.filter(track => `${track.title} ${track.artist} ${track.album} ${track.genre}`.toLowerCase().includes(query)); renderTracks(found, Boolean(query)); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") { $("#search-input").value = ""; $("#search-input").blur(); $$(".track-menu-popover").forEach(menu => menu.remove()); } });
  $$("[data-page]").forEach(link => link.addEventListener("click", event => { event.preventDefault(); link.dataset.page === "player" ? openPlayerPage() : showPage(link.dataset.page); }));
  $("#new-playlist-button").addEventListener("click", openPlaylistDialog); $("#profile-button").addEventListener("click", () => { $("#profile-name-input").value = state.profile || ""; $("#profile-dialog").showModal(); }); $("#mobile-menu-button").addEventListener("click", () => $(".sidebar").classList.toggle("open")); $("#theme-toggle").addEventListener("click", toggleTheme); $("#open-player-page").addEventListener("click", openPlayerPage);
  $("#playlist-form").addEventListener("submit", event => { event.preventDefault(); const name = $("#playlist-name-input").value.trim(); if (!name) return; const playlist = { id: crypto.randomUUID(), name, description: $("#playlist-description-input").value.trim(), trackIds: [] }; state.playlists.unshift(playlist); const pending = $("#playlist-dialog").dataset.pendingTrack; if (pending) { playlist.trackIds.push(pending); delete $("#playlist-dialog").dataset.pendingTrack; } saveState(); $("#playlist-dialog").close(); renderSidebar(); renderPlaylists(); showToast(pending ? `Đã tạo “${name}” và thêm bài hát.` : `Đã tạo playlist “${name}”.`); });
  $("#profile-form").addEventListener("submit", event => { event.preventDefault(); const name = $("#profile-name-input").value.trim(); if (!name) return; saveState(); state.profile = name; loadProfileData(); saveState(); $("#profile-dialog").close(); renderAll(); showToast(`Đang dùng hồ sơ ${name}. Playlist được lưu riêng trên thiết bị này.`); });
  $$('[data-close-dialog]').forEach(button => button.addEventListener("click", () => { const dialog = button.closest("dialog"); if (dialog.id === "playlist-dialog") delete dialog.dataset.pendingTrack; dialog.close(); }));
  document.addEventListener("click", event => { if (!event.target.closest(".track-menu")) $$(".track-menu-popover").forEach(menu => menu.remove()); if (event.target.closest("[data-new-playlist]")) openPlaylistDialog(); });
}

loadTheme(); loadState(); renderAll(); registerEvents();
