# GoCare - An Tâm Chăm Sóc, Kết Nối Tức Thì
### Hệ Thống Bệnh Viện & Viện Dưỡng Lão Chuẩn Quốc Tế 5 Sao
**Stitch Interactive Project ID:** `11591164442392986229`

---

## 🌟 Tổng Quan Dự Án

**GoCare - An tâm chăm sóc, kết nối tức thì** là nền tảng y tế số và dưỡng lão chuẩn quốc tế 5 sao cao cấp với giao diện tương tác đa màn hình, chuẩn hóa 100% font chữ tiếng Việt, giữ nguyên bảng màu sang trọng nhận diện thương hiệu hoàng gia (Warm Walnut, Amber, Gold Accent & Dark Charcoal), bổ sung hệ thống chuyển động mượt mà (animations) và các giải pháp công nghệ y khoa đột phá:

1. **Bản đồ GPS tìm đường đi ngắn nhất (Dijkstra & A*)**:
   - Tích hợp trực tiếp bản đồ định vị thời gian thực Leaflet.js.
   - Ứng dụng **Thuật toán Dijkstra** (tối ưu khoảng cách tích lũy nhỏ nhất) và **Thuật toán A\* (A-Star)** (heuristic mặt cầu Haversine) trên mạng lưới giao thông y tế TP.HCM kết nối các cơ sở GoCare và các Bệnh viện tuyến Trung ương (Chợ Rẫy, Đại học Y Dược).
   - Cho phép lấy toạ độ GPS thực tế của người dùng thông qua trình duyệt, vẽ vệt sáng polyline hoạt họa di chuyển và thống kê số nút duyệt, thời gian xe cấp cứu tiếp cận.

2. **Cổng Bệnh Nhân (Patient Portal & EHR) yêu cầu đăng nhập bằng Google thật**:
   - Bảo mật thông tin bệnh án điện tử cấp độ 4 theo quy chuẩn **HIPAA & HL7 FHIR**.
   - Tích hợp xác thực tài khoản Google thật (Google Identity Services / OAuth 2.0).
   - Tự động đồng bộ họ tên, email Gmail, và avatar Google của người dùng vào Thẻ Bệnh Nhân Điện Tử.
   - Mở khóa toàn diện: chỉ số sinh hiệu IoT thời gian thực, biểu đồ điện tâm đồ ECG hoạt họa nhịp nhàng, thang đo đau VAS (0-10) tương tác trực tiếp với hệ thống kích hoạt cảnh báo khẩn cấp **CODE RED 24/7**.

3. **Hệ sinh thái dịch vụ hoàn chỉnh**:
   - **Trang 1: Trang Chủ & Không Gian Y Khoa**: Bảng giá phân cấp Ngoại trú - Bán trú - Nội trú, form đăng ký dịch vụ có validation và modal xác nhận.
   - **Trang 2: Chuyên Khoa & Đội Ngũ Bác Sĩ**: Lọc chuyên khoa Tim mạch, Lão khoa, Phục hồi chức năng, Thần kinh, Tâm lý; Modal đặt lịch khám 1:1; Player liệu pháp âm thanh tần số não bộ 432Hz & 528Hz kèm sóng âm thanh chuyển động; Trợ lý AI y khoa 24/7.
   - **Trang 3: Điều Dưỡng CCHN & GPS Bản Đồ**: Danh sách điều dưỡng viên có chứng chỉ hành nghề Bộ Y Tế, bảng giá ca trực 4h/8h/12h/24h và hệ thống GPS Dijkstra/A*.
   - **Trang 4: Wellness & Nhà Thuốc**: Tìm kiếm thuốc theo tên và hoạt chất theo thời gian thực, liên kết đối tác phân phối FPT Long Châu & An Khang (MWG) giao hỏa tốc 1 - 2h, cổng tải ảnh toa thuốc bác sĩ.

---

## 🚀 Cách Khởi Chạy & Trải Nghiệm

- Mở trực tiếp file `index.html` trong bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Safari).
- Không yêu cầu cài đặt build step hay `npm`.
- Tương tác góc dưới bên phải với nút **"Stitch Project Hub"** để chuyển đổi tức thì giữa 5 màn hình hoặc xem mockup gốc độ phân giải cao qua Lightbox.

---

## 📱 Cấu Trúc Các Màn Hình (5 Stitch Screens)

| # | Màn Hình | Đường Dẫn SPA | Tính Năng Nổi Bật |
|---|---|---|---|
| **1** | **Trang Chủ & Không Gian Y Khoa** | `/` | Hero Cinematic, Bảng giá Ngoại trú/Bán trú/Nội trú, Form đặt lịch hẹn trực tuyến |
| **2** | **Chuyên Khoa & Hội Đồng Bác Sĩ** | `/chuyen-khoa` | Lọc 5 chuyên khoa, Đặt khám 1:1, Âm nhạc trị liệu 432Hz, Trợ lý AI Y khoa 24/7 |
| **3** | **Điều Dưỡng CCHN & GPS Dijkstra/A\*** | `/dieu-duong` | Bộ thẻ điều dưỡng CCHN, Bản đồ GPS tìm đường ngắn nhất bằng thuật toán Dijkstra & A* |
| **4** | **Wellness & Nhà Thuốc Liên Kết** | `/wellness` | Live search thuốc, Liên kết hỏa tốc FPT Long Châu & An Khang, Gửi toa bác sĩ |
| **5** | **Cổng Bệnh Nhân & Bệnh Án EHR** | `/cong-benh-nhan` | Đăng nhập tài khoản Google thật, Điện tâm đồ ECG realtime, Thang đo đau Code Red |
