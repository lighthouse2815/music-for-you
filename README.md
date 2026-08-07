# Âm Lưu

Website nghe nhạc nội bộ, thuần frontend — không cần đăng nhập, backend, database hay API.

**Trang đang chạy:** [music-for-you.pages.dev](https://music-for-you.pages.dev/)

## Có gì trong web?

- Phát, tạm dừng, chuyển bài, tua bài, chỉnh âm lượng, lặp lại và phát ngẫu nhiên.
- Tìm kiếm theo tên bài, nghệ sĩ hoặc album.
- Đánh dấu bài hát yêu thích.
- Tạo, xóa và thêm/xóa bài hát trong playlist.
- Đổi tên hồ sơ khi dùng chung máy. Mỗi hồ sơ có playlist và bài yêu thích riêng.
- Giao diện tối ưu cho cả máy tính lẫn điện thoại.

## Dữ liệu được lưu ở đâu?

| Dữ liệu | Nơi lưu | Ghi chú |
| --- | --- | --- |
| File nhạc | `assets/audio/` | Là file tĩnh, được trình duyệt phát trực tiếp. |
| Hồ sơ, playlist, bài yêu thích | `localStorage` | Chỉ nằm trong trình duyệt và thiết bị đang dùng. |

Do không có backend, playlist sẽ không tự đồng bộ sang máy khác. Nếu xóa dữ liệu trình duyệt, dữ liệu cục bộ cũng sẽ mất.

## Chạy trên máy

Không cần cài dependency. Mở `index.html` trực tiếp bằng trình duyệt, hoặc dùng một static server đơn giản:

```powershell
python -m http.server 4173
```

Sau đó mở `http://localhost:4173`.

## Thêm nhạc

Thư viện khởi đầu trống. Đặt các MP3 đã được cấp quyền sử dụng trong `assets/audio/`, rồi thêm bài hát vào danh sách `tracks` ở đầu [app.js](./app.js). Ví dụ:

```js
genre: "piano",
audio: "assets/audio/ten-bai-hat.mp3",
cover: "assets/covers/ten-bai-hat.png"
```

Các bài được hiển thị theo thể loại. Muốn thêm Guitar sau này, thêm `{ id: "guitar", label: "Guitar" }` vào `genres` ở đầu `app.js`, rồi gán `genre: "guitar"` cho từng bài Guitar.

Mỗi bài có thể có `cover` trỏ tới ảnh bìa trong `assets/covers/`. Ảnh này sẽ hiện ở thư viện, thanh phát và trang Đang phát.

Xem thêm trong [assets/audio/README.md](./assets/audio/README.md).

## Deploy tự động từ nhánh `main`

Cloudflare Pages được kết nối trực tiếp với repository GitHub này. Không cần Cloudflare API token, GitHub Actions hay lệnh deploy thủ công.

Thiết lập trên Cloudflare Pages:

| Mục | Giá trị |
| --- | --- |
| Git provider | GitHub |
| Repository | `lighthouse2815/music-for-you` |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |

Sau khi kết nối, mọi lần push vào `main` sẽ tự build và deploy production. Pull request hoặc branch khác có thể tạo preview deployment nếu được bật trong Cloudflare.
