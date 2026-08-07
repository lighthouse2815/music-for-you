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

## Thay nhạc thật

Ba file WAV hiện có chỉ là nhạc demo tự tạo để web hoạt động ngay. Khi sử dụng nội bộ, hãy đặt các MP3 đã được cấp quyền sử dụng trong `assets/audio/`, rồi sửa danh sách `tracks` ở đầu [app.js](./app.js). Ví dụ:

```js
audio: "assets/audio/ten-bai-hat.mp3"
```

Xem thêm trong [assets/audio/README.md](./assets/audio/README.md).

## Deploy Cloudflare Pages

Lệnh dưới đây tạo `dist/` chỉ gồm các file cần public và deploy lên project Cloudflare Pages hiện tại:

```powershell
npm run deploy
```

## Deploy tự động từ nhánh `main`

Workflow [deploy-cloudflare-pages.yml](./.github/workflows/deploy-cloudflare-pages.yml) đã chạy mỗi khi có push vào `main`. Để kích hoạt workflow trên GitHub, vào **Settings → Secrets and variables → Actions** của repository và thêm hai repository secrets:

| Secret | Giá trị |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token có quyền **Cloudflare Pages: Edit** cho tài khoản đang chứa project. |
| `CLOUDFLARE_ACCOUNT_ID` | `620f11a12729cd7939cfc0943aac9bf0` |

Sau đó mọi lần push vào `main` sẽ tự build và deploy production lên `https://music-for-you.pages.dev/`.

> Project Pages hiện tại được tạo theo kiểu Direct Upload. Workflow dùng Wrangler để giữ nguyên URL hiện có, thay vì phải tạo một Pages project Git integration mới.
