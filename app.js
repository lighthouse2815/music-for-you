const genres = [
  { id: "piano", label: "Piano" },
  { id: "japanese-music", label: "Nhạc Nhật" },
  { id: "chinese-music", label: "Nhạc Trung" },
  { id: "nightcore", label: "Nightcore" }
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
  },
  {
    id: "yoru-ni-kakeru-vocal",
    title: "Yoru ni Kakeru",
    artist: "YOASOBI",
    album: "Nhạc Nhật",
    duration: "4:21",
    seconds: 261,
    color: "cover-lilac",
    tag: "J-POP",
    genre: "japanese-music",
    audio: "assets/audio/yoru-ni-kakeru-vocal.mp3",
    cover: "assets/covers/yoru-ni-kakeru.png"
  },
  {
    id: "gunjou",
    title: "Gunjou",
    artist: "YOASOBI",
    album: "Nhạc Nhật",
    duration: "4:22",
    seconds: 262,
    color: "cover-sienna",
    tag: "J-POP",
    genre: "japanese-music",
    audio: "assets/audio/gunjou.mp3",
    cover: "assets/covers/gunjou.png"
  },
  {
    id: "crying-for-rain",
    title: "Kawaki wo Ameku",
    artist: "Minami",
    album: "Kawaki wo Ameku",
    duration: "4:13",
    seconds: 253,
    color: "cover-dusk",
    tag: "J-POP",
    genre: "japanese-music",
    audio: "assets/audio/crying-for-rain.mp3",
    cover: "assets/covers/crying-for-rain.png"
  },
  {
    id: "aliez",
    title: "aLIEz",
    artist: "SawanoHiroyuki[nZk]:mizuki",
    album: "A/Z | aLIEz",
    duration: "4:28",
    seconds: 268,
    color: "cover-midnight",
    tag: "ANIME",
    genre: "japanese-music",
    audio: "assets/audio/aliez.mp3",
    cover: "assets/covers/aliez.png"
  },
  {
    id: "sakura",
    title: "Sakura",
    artist: "Ikimonogakari",
    album: "SAKURA",
    duration: "5:55",
    seconds: 355,
    color: "cover-rose",
    tag: "J-POP",
    genre: "japanese-music",
    audio: "assets/audio/sakura.mp3",
    cover: "assets/covers/sakura.png"
  },
  {
    id: "dochuu-ni-saku",
    title: "Dochuu ni Saku",
    artist: "Wolpis Carter",
    album: "Kore kara mo Wolpis-sha no Teikyou de Okuri shimasu",
    duration: "4:50",
    seconds: 290,
    color: "cover-rain",
    tag: "J-POP",
    genre: "japanese-music",
    audio: "assets/audio/dochuu-ni-saku.mp3",
    cover: "assets/covers/dochuu-ni-saku.png"
  },
  {
    id: "call-of-silence-clear-sky-remix",
    title: "Call of Silence (Clear Sky Remix)",
    artist: "Hiroyuki Sawano feat. Gemie",
    album: "Attack on Titan Season 2 Original Soundtrack",
    duration: "4:40",
    seconds: 280,
    color: "cover-steel",
    tag: "ANIME",
    genre: "japanese-music",
    audio: "assets/audio/call-of-silence-clear-sky-remix.mp3",
    cover: "assets/covers/call-of-silence-clear-sky-remix.png"
  },
  {
    id: "unravel",
    title: "unravel",
    artist: "TK from Ling tosite sigure",
    album: "unravel",
    duration: "4:27",
    seconds: 267,
    color: "cover-azure",
    tag: "ANIME",
    genre: "japanese-music",
    audio: "assets/audio/unravel.mp3",
    cover: "assets/covers/unravel.png"
  },
  {
    id: "hotaru",
    title: "Hotaru",
    artist: "Fujita Maiko",
    album: "Shunkan",
    duration: "4:57",
    seconds: 297,
    color: "cover-nightfall",
    tag: "J-POP",
    genre: "japanese-music",
    audio: "assets/audio/hotaru.mp3",
    cover: "assets/covers/hotaru.png"
  },
  {
    id: "ci-jiu-men-hui-yi",
    title: "Ci Jiu Men Hui Yi",
    artist: "Deng Shenme Jun",
    album: "Ci Jiu Men Hui Yi",
    duration: "4:00",
    seconds: 240,
    color: "cover-crimson",
    tag: "C-POP",
    genre: "chinese-music",
    audio: "assets/audio/ci-jiu-men-hui-yi.mp3",
    cover: "assets/covers/ci-jiu-men-hui-yi.png"
  },
  {
    id: "sparkle",
    title: "Sparkle (Movie Version)",
    artist: "RADWIMPS",
    album: "Your Name. Original Motion Picture Soundtrack",
    duration: "6:50",
    seconds: 410,
    color: "cover-starlight",
    tag: "ANIME",
    genre: "japanese-music",
    audio: "assets/audio/sparkle.mp3",
    cover: "assets/covers/sparkle.png"
  },
  {
    id: "butterflies-nightcore",
    title: "Butterflies",
    artist: "RevoMemel",
    album: "Nightcore Butterflies",
    duration: "3:26",
    seconds: 206,
    color: "cover-violet",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/butterflies-nightcore.mp3",
    cover: "assets/covers/butterflies-nightcore.png"
  },
  {
    id: "shadows-nightcore",
    title: "Shadows",
    artist: "it's different feat. Miss Mary",
    album: "Shadows",
    duration: "2:45",
    seconds: 165,
    color: "cover-shadow",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/shadows-nightcore.mp3",
    cover: "assets/covers/shadows-nightcore.png"
  },
  {
    id: "lily-nightcore",
    title: "Lily",
    artist: "Alan Walker, K-391 & Emelie Hollow",
    album: "Different World",
    duration: "3:01",
    seconds: 181,
    color: "cover-forest",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/lily-nightcore.mp3",
    cover: "assets/covers/lily-nightcore.png"
  },
  {
    id: "angel-with-a-shotgun-nightcore",
    title: "Angel With a Shotgun",
    artist: "The Cab",
    album: "Symphony Soldier",
    duration: "3:12",
    seconds: 192,
    color: "cover-ink",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/angel-with-a-shotgun-nightcore.mp3",
    cover: "assets/covers/angel-with-a-shotgun-nightcore.png"
  },
  {
    id: "what-a-shame-nightcore",
    title: "What a Shame",
    artist: "Leyla Blue",
    album: "What a Shame",
    duration: "2:27",
    seconds: 147,
    color: "cover-rosewood",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/what-a-shame-nightcore.mp3",
    cover: "assets/covers/what-a-shame-nightcore.png"
  },
  {
    id: "lost-control-nightcore",
    title: "Lost Control",
    artist: "Alan Walker & Sorana",
    album: "Different World",
    duration: "3:22",
    seconds: 202,
    color: "cover-lilac",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/lost-control-nightcore.mp3",
    cover: "assets/covers/lost-control-nightcore.png"
  },
  {
    id: "to-be-human-nightcore",
    title: "To Be Human",
    artist: "MARINA",
    album: "LOVE + FEAR",
    duration: "3:34",
    seconds: 214,
    color: "cover-slate",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/to-be-human-nightcore.mp3",
    cover: "assets/covers/to-be-human-nightcore.png"
  },
  {
    id: "hiding-in-the-blue-nightcore",
    title: "Hiding In The Blue",
    artist: "TheFatRat & RIELL",
    album: "PARALLAX",
    duration: "3:19",
    seconds: 199,
    color: "cover-cosmos",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/hiding-in-the-blue-nightcore.mp3",
    cover: "assets/covers/hiding-in-the-blue-nightcore.png"
  },
  {
    id: "without-me-illenium-remix-nightcore",
    title: "Without Me (ILLENIUM Remix)",
    artist: "Halsey & ILLENIUM",
    album: "Without Me (ILLENIUM Remix)",
    duration: "3:43",
    seconds: 223,
    color: "cover-blush",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/without-me-illenium-remix-nightcore.mp3",
    cover: "assets/covers/without-me-illenium-remix-nightcore.png"
  },
  {
    id: "close-to-the-sun-nightcore",
    title: "Close To The Sun",
    artist: "TheFatRat & Anjulie",
    album: "Close To The Sun",
    duration: "2:51",
    seconds: 171,
    color: "cover-dawn",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/close-to-the-sun-nightcore.mp3",
    cover: "assets/covers/close-to-the-sun-nightcore.png"
  },
  {
    id: "home-nightcore",
    title: "Home",
    artist: "Cr3on feat. Thorns & Swedish Red Elephant",
    album: "Home",
    duration: "3:08",
    seconds: 188,
    color: "cover-amethyst",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/home-nightcore.mp3",
    cover: "assets/covers/home-nightcore.png"
  },
  {
    id: "do-or-die-nightcore",
    title: "Do Or Die",
    artist: "Axel Johansson",
    album: "Do Or Die",
    duration: "2:58",
    seconds: 178,
    color: "cover-moonlit",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/do-or-die-nightcore.mp3",
    cover: "assets/covers/do-or-die-nightcore.png"
  },
  {
    id: "darkside-nightcore",
    title: "Darkside",
    artist: "Alan Walker, Au/Ra & Tomine Harket",
    album: "Different World",
    duration: "3:05",
    seconds: 185,
    color: "cover-aquamarine",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/darkside-nightcore.mp3",
    cover: "assets/covers/darkside-nightcore.png"
  },
  {
    id: "qing-hua-ci-cantonese",
    title: "Qing Hua Ci (Cantonese Version)",
    artist: "Simyee",
    album: "Qing Hua Ci (Cantonese Version)",
    duration: "3:21",
    seconds: 201,
    color: "cover-lantern",
    tag: "C-POP",
    genre: "chinese-music",
    audio: "assets/audio/qing-hua-ci-cantonese.mp3",
    cover: "assets/covers/qing-hua-ci-cantonese.png"
  },
  {
    id: "where-we-started-nightcore",
    title: "Where We Started",
    artist: "Lost Sky feat. Jex",
    album: "Where We Started",
    duration: "3:18",
    seconds: 198,
    color: "cover-sapphire",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/where-we-started-nightcore.mp3",
    cover: "assets/covers/where-we-started-nightcore.png"
  },
  {
    id: "different-world-nightcore",
    title: "Different World",
    artist: "Alan Walker, K-391, Sofia Carson & CORSAK",
    album: "Different World",
    duration: "3:03",
    seconds: 183,
    color: "cover-starlight",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/different-world-nightcore.mp3",
    cover: "assets/covers/different-world-nightcore.png"
  },
  {
    id: "alone-pt-ii-nightcore",
    title: "Alone, Pt. II",
    artist: "Alan Walker & Ava Max",
    album: "World Of Walker",
    duration: "2:52",
    seconds: 172,
    color: "cover-orchid",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/alone-pt-ii-nightcore.mp3",
    cover: "assets/covers/alone-pt-ii-nightcore.png"
  },
  {
    id: "miracles-nightcore",
    title: "Miracles",
    artist: "Axel Johansson feat. Tina Stachowiak",
    album: "Miracles",
    duration: "2:46",
    seconds: 166,
    color: "cover-petal",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/miracles-nightcore.mp3",
    cover: "assets/covers/miracles-nightcore.png"
  },
  {
    id: "the-river-nightcore",
    title: "The River",
    artist: "Axel Johansson",
    album: "The River",
    duration: "3:04",
    seconds: 184,
    color: "cover-river",
    tag: "NIGHTCORE",
    genre: "nightcore",
    audio: "assets/audio/the-river-nightcore.mp3",
    cover: "assets/covers/the-river-nightcore.png"
  }
];

const state = { currentId: null, isPlaying: false, repeat: false, shuffle: false, activePlaylistId: null, profile: "Khách nghe nhạc", profiles: {}, likes: new Set(), playlists: [] };
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const audio = $("#audio-player");
const storeKey = "am-luu-v1";
const fallingNotesKey = "am-luu-falling-notes-v1";
let fallingNotesEnabled = localStorage.getItem(fallingNotesKey) !== "off";
let audioContext;
let audioAnalyser;
let audioFrequencyData;
let visualizerFrame;

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

function resetAudioVisualizer() {
  if (visualizerFrame) cancelAnimationFrame(visualizerFrame);
  visualizerFrame = null;
  const visualizer = $("#audio-visualizer");
  visualizer.classList.remove("is-active");
  $$("span", visualizer).forEach((bar, index) => {
    bar.style.setProperty("--level", index % 3 === 1 ? ".13" : ".18");
    bar.style.setProperty("--bar-opacity", ".32");
  });
  const playerPage = $("#player-page");
  playerPage.style.setProperty("--music-note-opacity", ".16");
  playerPage.style.setProperty("--music-note-scale", ".88");
  playerPage.style.setProperty("--music-note-glow", "9px");
  playerPage.style.setProperty("--record-glow", "0px");
}

function prepareAudioVisualizer() {
  if (audioAnalyser) {
    if (audioContext?.state === "suspended") audioContext.resume().catch(() => {});
    return true;
  }
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return false;
  try {
    audioContext = new AudioContextClass();
    const source = audioContext.createMediaElementSource(audio);
    audioAnalyser = audioContext.createAnalyser();
    audioAnalyser.fftSize = 128;
    audioAnalyser.smoothingTimeConstant = .82;
    source.connect(audioAnalyser);
    audioAnalyser.connect(audioContext.destination);
    audioFrequencyData = new Uint8Array(audioAnalyser.frequencyBinCount);
    $("#audio-visualizer").classList.add("is-live");
    audioContext.resume().catch(() => {});
    return true;
  } catch {
    return false;
  }
}

function startAudioVisualizer() {
  if (!prepareAudioVisualizer()) return;
  if (visualizerFrame) cancelAnimationFrame(visualizerFrame);
  const visualizer = $("#audio-visualizer");
  const bars = $$("span", visualizer);
  const playerPage = $("#player-page");
  visualizer.classList.add("is-active");
  const paint = () => {
    if (audio.paused || audio.ended || !audioAnalyser) { resetAudioVisualizer(); return; }
    audioAnalyser.getByteFrequencyData(audioFrequencyData);
    const spectrumLength = Math.max(1, Math.floor(audioFrequencyData.length * .72));
    let totalEnergy = 0;
    bars.forEach((bar, index) => {
      const from = Math.floor((index / bars.length) * spectrumLength);
      const to = Math.max(from + 1, Math.floor(((index + 1) / bars.length) * spectrumLength));
      let total = 0;
      for (let position = from; position < to; position += 1) total += audioFrequencyData[position];
      const energy = Math.pow(total / ((to - from) * 255), .78);
      totalEnergy += energy;
      bar.style.setProperty("--level", (0.13 + energy * .87).toFixed(3));
      bar.style.setProperty("--bar-opacity", (0.34 + energy * .66).toFixed(3));
    });
    const averageEnergy = totalEnergy / bars.length;
    playerPage.style.setProperty("--music-note-opacity", (0.24 + averageEnergy * .68).toFixed(3));
    playerPage.style.setProperty("--music-note-scale", (0.9 + averageEnergy * .24).toFixed(3));
    playerPage.style.setProperty("--music-note-glow", `${Math.round(9 + averageEnergy * 25)}px`);
    playerPage.style.setProperty("--record-glow", `${Math.round(2 + averageEnergy * 16)}px`);
    visualizerFrame = requestAnimationFrame(paint);
  };
  paint();
}

function showToast(message) { const toast = $("#toast"); toast.textContent = message; toast.classList.add("visible"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("visible"), 2600); }
function setProfileUi() { const name = displayName(); $("#profile-name").textContent = name; $("#side-profile-name").textContent = name.toUpperCase(); $("#profile-initial").textContent = name.trim().charAt(0).toUpperCase() || "K"; }
function updateFallingNotesUi() {
  const playerPage = $("#player-page");
  const button = $("#falling-notes-toggle");
  playerPage.classList.toggle("notes-rain-enabled", fallingNotesEnabled);
  button.setAttribute("aria-pressed", String(fallingNotesEnabled));
  button.title = fallingNotesEnabled ? "Tắt hiệu ứng nốt nhạc rơi" : "Bật hiệu ứng nốt nhạc rơi";
  $("[data-notes-rain-state]", button).textContent = fallingNotesEnabled ? "Bật" : "Tắt";
}
function toggleFallingNotes() {
  fallingNotesEnabled = !fallingNotesEnabled;
  localStorage.setItem(fallingNotesKey, fallingNotesEnabled ? "on" : "off");
  updateFallingNotesUi();
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
  return `<section class="genre-group"><div class="genre-heading"><h3>${genre.label}</h3><span class="count-label">${genreTracks.length} BÀI HÁT</span></div><div class="track-list">${rows}</div></section>`;
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
  if (!state.playlists.length) {
    $("#playlist-grid").innerHTML = `<section class="playlist-empty"><div class="playlist-empty-art" aria-hidden="true"><span>♫</span></div><p class="eyebrow">GÓC NGHE CỦA BẠN</p><h2>Bạn chưa có playlist nào</h2><p>Tạo playlist đầu tiên để lưu những bài hát bạn yêu thích và nghe theo cách của riêng bạn.</p><button class="primary-button" type="button" data-new-playlist><span>＋</span> Tạo playlist mới</button></section>`;
    $$('[data-new-playlist]').forEach(button => button.addEventListener("click", openPlaylistDialog));
    return;
  }
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

function syncProgressUi() {
  const progress = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  $("#elapsed-time").textContent = formatTime(audio.currentTime);
  $("#duration-time").textContent = formatTime(audio.duration);
  $("#progress-input").value = progress;
  $("#page-elapsed-time").textContent = formatTime(audio.currentTime);
  $("#page-duration-time").textContent = formatTime(audio.duration);
  $("#page-progress-input").value = progress;
}

function updatePlayerUi() {
  const track = getTrack(state.currentId);
  const pageTrack = track || tracks[0];
  const pageTrackIndex = Math.max(0, tracks.findIndex(item => item.id === pageTrack?.id));
  const pageGenre = genres.find(genre => genre.id === pageTrack?.genre)?.label || pageTrack?.tag || "Thư viện";
  $("#play-button").textContent = state.isPlaying ? "Ⅱ" : "▶";
  $("#play-button").setAttribute("aria-label", state.isPlaying ? "Tạm dừng" : "Phát");
  $("#page-play-button").textContent = state.isPlaying ? "Ⅱ" : "▶";
  $("#page-play-button").setAttribute("aria-label", state.isPlaying ? "Tạm dừng" : "Phát");
  $("#shuffle-button").classList.toggle("active", state.shuffle);
  $("#repeat-button").classList.toggle("active", state.repeat);
  $("#page-shuffle-button").classList.toggle("active", state.shuffle);
  $("#page-repeat-button").classList.toggle("active", state.repeat);
  $("#like-button").classList.toggle("liked", !!track && state.likes.has(track.id));
  $("#like-button").textContent = track && state.likes.has(track.id) ? "♥" : "♡";
  const pageLike = $("#page-like-button");
  const isLiked = !!track && state.likes.has(track.id);
  pageLike.classList.toggle("liked", isLiked);
  pageLike.textContent = isLiked ? "♥" : "♡";
  pageLike.setAttribute("aria-pressed", String(isLiked));
  if (track) { $("#player-title").textContent = track.title; $("#player-artist").textContent = track.artist; const cover = $("#player-cover"); cover.className = `mini-cover ${track.color}${track.cover ? " has-cover" : ""}`; cover.innerHTML = coverMarkup(track, track.title.slice(0, 2).toUpperCase()); }
  if (pageTrack) {
    $("#page-player-title").textContent = pageTrack.title;
    $("#page-player-artist").textContent = pageTrack.artist;
    $("#page-player-album").textContent = pageTrack.album;
    $("#page-player-cover").src = pageTrack.cover || "";
    $("#page-player-cover").alt = pageTrack.cover ? `Bìa album của ${pageTrack.title}` : "";
    $("#page-player-genre").textContent = pageGenre.toUpperCase();
    $("#page-player-index").textContent = String(pageTrackIndex + 1).padStart(2, "0");
    $("#page-player-tag").textContent = pageTrack.tag;
    $("#page-player-position").textContent = `${String(pageTrackIndex + 1).padStart(2, "0")} / ${String(tracks.length).padStart(2, "0")}`;
    $("#page-player-quote").textContent = `“ ${pageTrack.title} — ${pageTrack.artist} ”`;
    $("#player-page").style.setProperty("--page-cover", pageTrack.cover ? `url("${pageTrack.cover}")` : "none");
  }
  $("#player-page").classList.toggle("is-playing", !!track && state.isPlaying);
  $("#page-player-status").textContent = track && state.isPlaying ? "ĐANG PHÁT" : "SẴN SÀNG PHÁT";
  syncProgressUi();
  $$(".track-row").forEach(row => { const isCurrent = row.dataset.trackId === state.currentId; row.classList.toggle("current-track", isCurrent); const index = $(".track-index", row); if (index) index.textContent = isCurrent && state.isPlaying ? "♫" : String(tracks.findIndex(track => track.id === row.dataset.trackId) + 1).padStart(2, "0"); });
}
function playTrack(id) {
  const track = getTrack(id); if (!track) return;
  const changingTrack = id !== state.currentId;
  state.currentId = id;
  if (changingTrack) { audio.src = track.audio; audio.currentTime = 0; }
  prepareAudioVisualizer();
  audio.play().then(() => { state.isPlaying = true; updatePlayerUi(); }).catch(() => { state.isPlaying = false; updatePlayerUi(); showToast("Không thể phát file nhạc này."); });
  updatePlayerUi();
}
function playFirstTrack() { const firstTrack = tracks[0]; if (!firstTrack) { showToast("Thư viện chưa có bài hát."); return; } playTrack(firstTrack.id); }
function togglePlayback() { if (!state.currentId) { playFirstTrack(); return; } if (audio.paused) { prepareAudioVisualizer(); audio.play(); state.isPlaying = true; } else { audio.pause(); state.isPlaying = false; } updatePlayerUi(); }
function moveTrack(direction) { if (!tracks.length) { showToast("Thư viện chưa có bài hát."); return; } let index = tracks.findIndex(track => track.id === state.currentId); if (index < 0) index = 0; if (state.shuffle) { let next = Math.floor(Math.random() * tracks.length); if (tracks.length > 1 && next === index) next = (next + 1) % tracks.length; playTrack(tracks[next].id); return; } playTrack(tracks[(index + direction + tracks.length) % tracks.length].id); }
function toggleShuffle() { state.shuffle = !state.shuffle; updatePlayerUi(); showToast(state.shuffle ? "Đã bật phát ngẫu nhiên." : "Đã tắt phát ngẫu nhiên."); }
function toggleRepeat() { state.repeat = !state.repeat; audio.loop = state.repeat; updatePlayerUi(); showToast(state.repeat ? "Đang lặp lại bài hát." : "Đã tắt lặp lại bài hát."); }
function toggleCurrentLike() { if (!state.currentId) return; state.likes.has(state.currentId) ? state.likes.delete(state.currentId) : state.likes.add(state.currentId); saveState(); updatePlayerUi(); }

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
function showPage(page) { $$(".page").forEach(item => item.classList.toggle("active-page", item.id === `${page}-page`)); $$(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.page === page)); document.body.classList.toggle("player-mode", page === "player"); $(".sidebar").classList.remove("open"); window.scrollTo({ top: 0, behavior: "smooth" }); }

function registerEvents() {
  $("#hero-play-button").addEventListener("click", playFirstTrack);
  $("#play-button").addEventListener("click", togglePlayback); $("#previous-button").addEventListener("click", () => moveTrack(-1)); $("#next-button").addEventListener("click", () => moveTrack(1));
  $("#page-play-button").addEventListener("click", togglePlayback); $("#page-previous-button").addEventListener("click", () => moveTrack(-1)); $("#page-next-button").addEventListener("click", () => moveTrack(1));
  $("#page-shuffle-button").addEventListener("click", toggleShuffle); $("#page-repeat-button").addEventListener("click", toggleRepeat); $("#page-like-button").addEventListener("click", toggleCurrentLike);
  $("#shuffle-button").addEventListener("click", () => { state.shuffle = !state.shuffle; updatePlayerUi(); showToast(state.shuffle ? "Đã bật phát ngẫu nhiên." : "Đã tắt phát ngẫu nhiên."); });
  $("#repeat-button").addEventListener("click", () => { state.repeat = !state.repeat; audio.loop = state.repeat; updatePlayerUi(); showToast(state.repeat ? "Đang lặp lại bài hát." : "Đã tắt lặp lại."); });
  $("#like-button").addEventListener("click", () => { if (!state.currentId) return; state.likes.has(state.currentId) ? state.likes.delete(state.currentId) : state.likes.add(state.currentId); saveState(); updatePlayerUi(); });
  const seekToPercent = event => { if (audio.duration) audio.currentTime = (event.target.value / 100) * audio.duration; };
  $("#progress-input").addEventListener("input", seekToPercent); $("#page-progress-input").addEventListener("input", seekToPercent);
  $("#volume-input").addEventListener("input", event => { audio.volume = event.target.value / 100; $("#mute-button").textContent = audio.volume === 0 ? "◌" : "◖"; });
  $("#mute-button").addEventListener("click", () => { audio.muted = !audio.muted; $("#mute-button").textContent = audio.muted ? "◌" : "◖"; });
  audio.addEventListener("loadedmetadata", syncProgressUi);
  audio.addEventListener("timeupdate", syncProgressUi);
  audio.addEventListener("play", () => { state.isPlaying = true; startAudioVisualizer(); updatePlayerUi(); }); audio.addEventListener("pause", () => { state.isPlaying = false; resetAudioVisualizer(); updatePlayerUi(); }); audio.addEventListener("ended", () => { if (!state.repeat) moveTrack(1); });
  $("#search-input").addEventListener("input", event => { const query = event.target.value.trim().toLowerCase(); const found = tracks.filter(track => `${track.title} ${track.artist} ${track.album} ${track.genre}`.toLowerCase().includes(query)); renderTracks(found, Boolean(query)); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") { $("#search-input").value = ""; $("#search-input").blur(); $$(".track-menu-popover").forEach(menu => menu.remove()); } });
  $$("[data-page]").forEach(link => link.addEventListener("click", event => { event.preventDefault(); link.dataset.page === "player" ? openPlayerPage() : showPage(link.dataset.page); }));
  $("#new-playlist-button").addEventListener("click", openPlaylistDialog); $("#profile-button").addEventListener("click", () => { $("#profile-name-input").value = state.profile || ""; $("#profile-dialog").showModal(); }); $("#mobile-menu-button").addEventListener("click", () => $(".sidebar").classList.toggle("open")); $("#open-player-page").addEventListener("click", openPlayerPage);
  $("#falling-notes-toggle").addEventListener("click", toggleFallingNotes);
  $("#playlist-form").addEventListener("submit", event => { event.preventDefault(); const name = $("#playlist-name-input").value.trim(); if (!name) return; const playlist = { id: crypto.randomUUID(), name, description: $("#playlist-description-input").value.trim(), trackIds: [] }; state.playlists.unshift(playlist); const pending = $("#playlist-dialog").dataset.pendingTrack; if (pending) { playlist.trackIds.push(pending); delete $("#playlist-dialog").dataset.pendingTrack; } saveState(); $("#playlist-dialog").close(); renderSidebar(); renderPlaylists(); showToast(pending ? `Đã tạo “${name}” và thêm bài hát.` : `Đã tạo playlist “${name}”.`); });
  $("#profile-form").addEventListener("submit", event => { event.preventDefault(); const name = $("#profile-name-input").value.trim(); if (!name) return; saveState(); state.profile = name; loadProfileData(); saveState(); $("#profile-dialog").close(); renderAll(); showToast(`Đang dùng hồ sơ ${name}. Playlist được lưu riêng trên thiết bị này.`); });
  $$('[data-close-dialog]').forEach(button => button.addEventListener("click", () => { const dialog = button.closest("dialog"); if (dialog.id === "playlist-dialog") delete dialog.dataset.pendingTrack; dialog.close(); }));
  document.addEventListener("click", event => { if (!event.target.closest(".track-menu")) $$(".track-menu-popover").forEach(menu => menu.remove()); if (event.target.closest("[data-new-playlist]")) openPlaylistDialog(); });
}

loadState(); renderAll(); updateFallingNotesUi(); registerEvents();
