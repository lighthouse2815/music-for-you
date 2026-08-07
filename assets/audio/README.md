# Thư mục nhạc tĩnh

Các file `.wav` ở đây là demo tự tạo để trang hoạt động ngay cả khi không có backend.

Khi dùng thật, đặt các file nhạc đã được cấp quyền sử dụng (khuyến nghị `.mp3`) trong chính thư mục này, rồi đổi thuộc tính `audio` của bài hát tương ứng trong `app.js`. Ví dụ:

```js
audio: "assets/audio/ten-bai-hat.mp3"
```

Nhạc được web phát trực tiếp như tài nguyên tĩnh. Playlist và tên hồ sơ chỉ được lưu trong `localStorage` của trình duyệt đang dùng.
