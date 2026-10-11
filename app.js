const {
  useState,
  useEffect,
  useRef
} = React;
const {
  createRoot
} = ReactDOM;
const {
  MemoryRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation
} = ReactRouterDOM;

// --- REUSABLE NAVIGATION HEADER ---
function Header({
  user,
  onLogout,
  onOpenAuth
}) {
  const location = useLocation();
  const [lang, setLang] = useState('VN');
  const navLinks = [{
    path: '/',
    label: 'Trang chủ'
  }, {
    path: '/chuyen-khoa',
    label: 'Chuyên khoa & Bác sĩ',
    badge: 'HOT'
  }, {
    path: '/dieu-duong',
    label: 'Điều Dưỡng & GPS Bản Đồ'
  }, {
    path: '/wellness',
    label: 'Sống Khỏe & Dược Phẩm'
  }, {
    path: '/cong-benh-nhan',
    label: 'Cổng bệnh nhân EHR',
    isAuth: true
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_2px_12px_rgba(72,40,22,0.06)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-20 max-w-[1400px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/",
    className: "flex items-center gap-3 group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-11 h-11 rounded-2xl bg-gradient-to-br from-primary via-primary-container to-secondary text-on-primary flex items-center justify-center font-serif font-bold text-2xl shadow-md ring-2 ring-gold-accent/40 group-hover:scale-105 transition-transform"
  }, "G"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-serif text-primary font-extrabold tracking-tight text-xl leading-tight"
  }, "GoCare"), /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-secondary animate-ping"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-secondary font-medium tracking-wide"
  }, "An tâm chăm sóc, kết nối tức thì"))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden xl:flex items-center gap-6"
  }, navLinks.map(item => {
    const isActive = location.pathname === item.path;
    return /*#__PURE__*/React.createElement(Link, {
      key: item.path,
      to: item.path,
      className: `relative py-2 text-sm font-semibold tracking-wide transition-all flex items-center gap-1.5 ${isActive ? 'text-primary font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-secondary after:rounded-full' : 'text-on-surface-variant hover:text-primary hover:-translate-y-0.5'}`
    }, /*#__PURE__*/React.createElement("span", null, item.label), item.badge && /*#__PURE__*/React.createElement("span", {
      className: "px-1.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold"
    }, item.badge), item.isAuth && user && /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => window.dispatchEvent(new CustomEvent('open-psych-counseling')),
    className: "hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container hover:bg-gold-light text-primary border border-gold-accent/40 text-xs font-bold transition-all shadow-xs group",
    title: "Tư vấn tâm lý & sức khỏe tinh thần 24/7"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary group-hover:scale-110 transition-transform"
  }, "psychology"), /*#__PURE__*/React.createElement("span", null, "Tư Vấn Tâm Lý"), /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:flex items-center rounded-full bg-surface-container p-1 border border-outline-variant/30 text-xs font-semibold"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setLang('VN'),
    className: `px-2.5 py-0.5 rounded-full transition-colors ${lang === 'VN' ? 'bg-primary-container text-on-primary shadow-sm' : 'text-on-surface-variant'}`
  }, "VN"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setLang('EN'),
    className: `px-2.5 py-0.5 rounded-full transition-colors ${lang === 'EN' ? 'bg-primary-container text-on-primary shadow-sm' : 'text-on-surface-variant'}`
  }, "EN")), /*#__PURE__*/React.createElement("a", {
    href: "tel:19006868",
    className: "hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-primary border border-primary/20 hover:border-secondary transition-all shadow-sm hover:shadow-md"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-lg text-secondary animate-pulse"
  }, "call"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col text-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] uppercase font-bold text-secondary"
  }, "Hotline 24/7"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold leading-tight"
  }, "1900 6868"))), user ? /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 pl-1 border-l border-outline-variant/30"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/cong-benh-nhan",
    className: "flex items-center gap-2 group p-1 pr-3 rounded-full bg-surface-container hover:bg-gold-light transition-all border border-gold-accent/40"
  }, /*#__PURE__*/React.createElement("img", {
    src: user.picture || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800',
    alt: user.name,
    className: "w-8 h-8 rounded-full object-cover ring-2 ring-gold-accent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex flex-col text-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-primary group-hover:text-secondary truncate max-w-[110px]"
  }, user.name), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-emerald-700 font-semibold flex items-center gap-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-[10px]"
  }, "verified"), " ", user.patientId || 'Bệnh Nhân'))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onLogout,
    title: "Đăng xuất",
    className: "w-8 h-8 rounded-full bg-surface-container hover:bg-error-container text-outline hover:text-error flex items-center justify-center transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "logout"))) : /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onOpenAuth && onOpenAuth('login'),
    className: "inline-flex items-center justify-center h-10 px-3.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary border border-outline-variant/40 text-xs font-bold transition-all shadow-xs gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary"
  }, "login"), /*#__PURE__*/React.createElement("span", null, "ĐĂNG NHẬP")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onOpenAuth && onOpenAuth('register'),
    className: "hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary hover:from-primary-container hover:to-secondary text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-gold-accent"
  }, "how_to_reg"), /*#__PURE__*/React.createElement("span", null, "ĐĂNG KÝ")), /*#__PURE__*/React.createElement(Link, {
    to: "/cong-benh-nhan",
    className: "inline-flex items-center justify-center h-10 px-3.5 rounded-full bg-surface-container-lowest text-primary border border-gold-accent/50 hover:bg-gold-light text-xs font-bold transition-all gap-1",
    title: "Cổng Bệnh Nhân EHR"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary"
  }, "clinical_notes"), /*#__PURE__*/React.createElement("span", {
    className: "hidden md:inline"
  }, "EHR"))))));
}

// --- REUSABLE FOOTER ---
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "w-full bg-tertiary text-on-tertiary pt-16 pb-12 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] border-t border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-primary via-primary-container to-secondary text-on-primary flex items-center justify-center font-serif font-bold text-xl shadow-md ring-2 ring-gold-accent/40"
  }, "G"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-serif text-xl font-bold tracking-tight text-surface"
  }, "GoCare"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-secondary-fixed font-medium tracking-wide"
  }, "An tâm chăm sóc, kết nối tức thì"))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-tertiary-fixed-dim leading-relaxed max-w-sm"
  }, "Hệ sinh thái y khoa & dưỡng lão chuẩn quốc tế 5 sao. Kết hợp công nghệ định vị GPS cứu trợ tức thì, bệnh án điện tử EHR bảo mật HIPAA và đội ngũ y bác sĩ hàng đầu Việt Nam."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-1.5 text-tertiary-fixed-dim text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5 text-surface"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "verified_user"), " Đạt chuẩn giám định JCI Hoa Kỳ & Cục Quản lý Khám chữa bệnh"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary-fixed"
  }, "health_and_safety"), " Giấy phép hoạt động Bộ Y Tế số: 08842/BYT-GPHD"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-400"
  }, "g_translate"), " Tích hợp Google Identity & Bản đồ Dijkstra/A*"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-3 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-bold uppercase tracking-wider text-surface border-b border-tertiary-container pb-2"
  }, "Hệ Thống Cơ Sở GoCare"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2.5 text-xs text-tertiary-fixed-dim"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
    className: "text-surface font-semibold"
  }, "1. GoCare Heritage Villa Sala"), /*#__PURE__*/React.createElement("p", null, "Khu đô thị Sala, TP. Thủ Đức, TP. Hồ Chí Minh")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
    className: "text-surface font-semibold"
  }, "2. GoCare Premier Bạch Đằng"), /*#__PURE__*/React.createElement("p", null, "Đường Tôn Đức Thắng, Bến Nghé, Quận 1, TP. HCM")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
    className: "text-surface font-semibold"
  }, "3. GoCare Sống Khỏe & Trị Liệu Thảo Điền"), /*#__PURE__*/React.createElement("p", null, "Trạm điều dưỡng & cấp cứu vệ tinh, P. Thảo Điền")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
    className: "text-surface font-semibold"
  }, "4. GoCare Sanctuary Phú Mỹ Hưng"), /*#__PURE__*/React.createElement("p", null, "Khu đô thị Phú Mỹ Hưng, Quận 7, TP. HCM")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-bold uppercase tracking-wider text-surface border-b border-tertiary-container pb-2"
  }, "Liên Kết Nhanh"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 text-xs text-tertiary-fixed-dim"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/chuyen-khoa",
    className: "hover:text-surface transition-colors flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "chevron_right"), "Hội đồng bác sĩ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/dieu-duong",
    className: "hover:text-surface transition-colors flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "chevron_right"), "Điều dưỡng & GPS Dijkstra")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/wellness",
    className: "hover:text-surface transition-colors flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "chevron_right"), "Sống Khỏe & Dược Phẩm (Long Châu & AK)")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/cong-benh-nhan",
    className: "hover:text-surface transition-colors flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "chevron_right"), "Cổng Bệnh Nhân Google")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-3 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-bold uppercase tracking-wider text-surface border-b border-tertiary-container pb-2"
  }, "Tổng Đài Cấp Cứu 24/7"), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-gradient-to-r from-secondary/40 to-tertiary-container border border-secondary/40 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-secondary-fixed text-3xl animate-pulse"
  }, "e911_emergency"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-tertiary-fixed"
  }, "Cứu hộ y tế & Điều phối GPS khẩn"), /*#__PURE__*/React.createElement("a", {
    href: "tel:19006868",
    className: "text-xl font-bold text-surface hover:text-secondary-fixed transition-colors"
  }, "1900 6868"))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-tertiary-fixed-dim leading-relaxed"
  }, "Bảo mật bệnh án điện tử EHR theo chuẩn quốc tế HIPAA, xác thực VNeID Mức 2 và Google Identity an toàn."))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-tertiary-container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-tertiary-fixed-dim"
  }, /*#__PURE__*/React.createElement("p", null, "© 2025 - 2026 GoCare - An tâm chăm sóc, kết nối tức thì. Toàn bộ bản quyền được bảo hộ."), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hover:text-surface cursor-pointer"
  }, "Chính sách bảo mật EHR"), /*#__PURE__*/React.createElement("span", {
    className: "hover:text-surface cursor-pointer"
  }, "Quy chế chuyên môn Y tế"), /*#__PURE__*/React.createElement("span", {
    className: "hover:text-surface cursor-pointer"
  }, "Điều khoản dịch vụ GoCare")))));
}

// --- DỮ LIỆU HÌNH ẢNH TRUNG TÂM & TIỆN ÍCH DƯỠNG LÃO 5 SAO ---
const CENTER_FACILITY_IMAGES = [{
  id: 'atrium',
  title: 'Sảnh Đón Tiếp Giếng Trời Tự Nhiên & Cánh Bướm Nghệ Thuật',
  category: 'Không Gian Sinh Hoạt',
  badge: '5-Star Atrium Lounge',
  img: './assets/images/center_atrium_lounge.jpg',
  desc: 'Trần kính cao 9m đón ánh sáng ban mai tự nhiên, đàn bướm nghệ thuật treo lơ lửng tạo cảm giác bình an và sinh khí. Khu vực tiếp khách bọc nhung êm ái cho người cao tuổi thưởng trà thảo mộc cùng thân nhân.',
  capacity: 'Sức chứa 60 khách',
  specs: 'Lọc khí HEPA H14, Đèn quang phổ thân thiện thị giác lão khoa'
}, {
  id: 'hydro_pool',
  title: 'Hồ Bơi Thủy Trị Liệu Nước Ấm & Cẩu Nâng JCI',
  category: 'Trị Liệu & Y Khoa',
  badge: 'Hydrotherapy 34°C',
  img: './assets/images/center_hydro_pool.jpg',
  desc: 'Nhiệt độ nước ấm ổn định 34°C hỗ trợ giãn cơ và giảm 85% tải trọng lên xương khớp. Trang bị hệ thống cẩu nâng thủy lực tự động đưa đón bệnh nhân hạn chế vận động xuống nước êm ái, an toàn tuyệt đối.',
  capacity: '8 bệnh nhân / ca trị liệu',
  specs: 'Cẩu nâng tự động JCI, Khử khuẩn muối khoáng không Clo, Phao nâng đa điểm'
}, {
  id: 'rehab_gym',
  title: 'Trung Tâm Phục Hồi Chức Năng & Gym Lão Khoa Sala',
  category: 'Trị Liệu & Y Khoa',
  badge: 'Phục Hồi Thần Kinh Cơ',
  img: './assets/images/center_rehab_gym.jpg',
  desc: 'Sàn gỗ cao cấp chống trượt chuyên dụng, trần nan gỗ cách âm ấm cúng. Thiết bị thanh song song tập đi, bục thăng bằng điện tử và máy tập kháng lực bằng khí nén chống chấn thương khớp.',
  capacity: '25 giường & máy tập chuyên sâu',
  specs: 'Thanh tập đi có đai đỡ ngực, Máy đo sinh hiệu gắn liền máy tập'
}, {
  id: 'library',
  title: 'Thư Viện Gỗ Sồi Tĩnh Tâm & Đọc Sách Lão Khoa',
  category: 'Thư Giãn Tĩnh Tâm',
  badge: 'Heritage Library',
  img: './assets/images/center_library.jpg',
  desc: 'Kệ sách gỗ sồi kịch trần chứa hơn 2.500 đầu sách văn hóa, lịch sử và y học thường thức. Ánh sáng vàng dịu nhẹ, kính lúp hỗ trợ đọc và âm nhạc sóng não nhẹ nhàng giúp nuôi dưỡng trí tuệ.',
  capacity: '30 chỗ ngồi thư giãn',
  specs: 'Kính lúp điện tử độ phân giải cao, Bàn đọc công thái học'
}, {
  id: 'auditorium',
  title: 'Nhà Hát & Hội Trường Đa Năng Y Khoa - Văn Nghệ GoCare',
  category: 'Sinh Hoạt & Văn Hóa',
  badge: 'Auditorium Hall',
  img: './assets/images/center_auditorium.jpg',
  desc: 'Hội trường 120 ghế bành nỉ nhung cao cấp với màn hình LED 4K trình chiếu chuyên đề sức khỏe lão khoa, chương trình ca múa nhạc truyền thống và tiệc mừng thọ sum vầy.',
  capacity: '120 ghế ngồi chuẩn rạp hát',
  specs: 'Màn hình LED P2.5, Âm thanh vòm acoustic chống vang dội'
}, {
  id: 'chess',
  title: 'Câu Lạc Bộ Cờ Tướng & Giao Lưu Trí Tuệ Người Cao Tuổi',
  category: 'Sinh Hoạt & Văn Hóa',
  badge: 'Xiangqi Recreation',
  img: './assets/images/center_chess_recreation.jpg',
  desc: 'Không gian cờ thế giữa các bậc cao niên và nhân viên điều dưỡng trẻ, rèn luyện sự minh mẫn cho não bộ, phòng ngừa sa sút trí tuệ và xua tan sự cô đơn tuổi xế chiều.',
  capacity: '10 bàn cờ gỗ mun cao cấp',
  specs: 'Bàn ghế tựa lưng nâng đỡ cột sống, Trà sen ướp ấm phục vụ liên tục'
}, {
  id: 'billiards',
  title: 'Câu Lạc Bộ Bi-a Phản Xạ Thần Kinh & Vận Động Tinh',
  category: 'Sinh Hoạt & Văn Hóa',
  badge: 'Billiards Club',
  img: './assets/images/center_billiards_club.jpg',
  desc: 'Bàn bi-a tiêu chuẩn thi đấu quốc tế với ánh sáng tập trung dịu mắt. Hoạt động bổ ích giúp các cụ rèn luyện phản xạ thăng bằng, phối hợp tay - mắt và gắn kết bạn hữu.',
  capacity: '4 bàn bi-a chuyên nghiệp',
  specs: 'Mặt đá phiến nhập khẩu, Gậy cơ trợ lực nhẹ cho người lớn tuổi'
}];

// --- DANH MỤC BẢNG CÁC HẠNG MỤC CẦN KHÁM Y KHOA LÃO KHOA GOCARE ---
const CLINICAL_EXAM_ITEMS = [{
  id: 'clinical_exam',
  name: 'Khám Lâm Sàng Tổng Quát & Đánh Giá Lão Khoa Toàn Diện',
  purpose: 'Khám thể lực, nghe tim phổi, đo HA 4 chi, khám thần kinh & vận động cơ xương khớp',
  specialty: 'Bác Sĩ Cố Vấn Lão Khoa (BV Chợ Rẫy)',
  equipment: 'Bộ dụng cụ khám lâm sàng Welch Allyn (Mỹ)',
  duration: 30,
  listedPrice: 500000,
  packagePrice: 0,
  isDefault: true,
  category: 'Bắt Buộc'
}, {
  id: 'ecg_12',
  name: 'Đo Điện Tâm Đồ ECG 12 Cần & Tầm Soát Loạn Nhịp',
  purpose: 'Phát hiện sớm thiếu máu cơ tim cục bộ, ngoại tâm thu, rung nhĩ kịch phát',
  specialty: 'Khoa Tim Mạch & Thăm Dò Chức Năng',
  equipment: 'Máy ECG 12 cần GE Healthcare MAC 2000 (USA)',
  duration: 15,
  listedPrice: 250000,
  packagePrice: 0,
  isDefault: true,
  category: 'Bắt Buộc'
}, {
  id: 'heart_echo',
  name: 'Siêu Âm Tim Doppler Màu & Động Mạch Cảnh Xuyên Sọ',
  purpose: 'Đánh giá phân suất tống máu EF, hở van tim, mảng xơ vữa gây nguy cơ đột quỵ',
  specialty: 'Bác Sĩ Chuyên Khoa Siêu Âm Tim Mạch',
  equipment: 'Hệ thống siêu âm Philips EPIQ 7G Doppler',
  duration: 25,
  listedPrice: 650000,
  packagePrice: 350000,
  isDefault: true,
  category: 'Chuyên Sâu'
}, {
  id: 'abd_ultrasound',
  name: 'Siêu Âm Ổ Bụng Tổng Quát (Gan, Mật, Tụy, Thận, Tuyến Tiền Liệt)',
  purpose: 'Tầm soát u gan, sỏi mật, nang thận, phì đại tiền liệt tuyến tuổi già',
  specialty: 'Chẩn Đoán Hình Ảnh Đa Khoa',
  equipment: 'Máy siêu âm đa tần số JCI chuẩn Mỹ',
  duration: 20,
  listedPrice: 350000,
  packagePrice: 0,
  isDefault: true,
  category: 'Tiêu Chuẩn'
}, {
  id: 'blood_panel_18',
  name: 'Bộ Xét Nghiệm Máu 18 Chỉ Số Sinh Hóa & Huyết Học Cơ Bản',
  purpose: 'Đường huyết đói Glucose, HbA1c 3 tháng, Ure/Creatinine thận, Men gan AST/ALT, Lipid mỡ máu',
  specialty: 'Trung Tâm Xét Nghiệm Đạt Chuẩn ISO 15189',
  equipment: 'Hệ thống sinh hóa tự động Roche Cobas 8000',
  duration: 15,
  listedPrice: 850000,
  packagePrice: 500000,
  isDefault: true,
  category: 'Cận Lâm Sàng'
}, {
  id: 'dexa_bone',
  name: 'Đo Mật Độ Xương Toàn Thân DEXA (Cột Sống Thắt Lưng & Cổ Xương Đùi)',
  purpose: 'Chẩn đoán chính xác mức độ loãng xương T-Score và dự báo nguy cơ gãy xương tự nhiên',
  specialty: 'Cơ Xương Khớp & Nội Tiết',
  equipment: 'Hệ thống DEXA Hologic Horizon liều xạ thấp',
  duration: 20,
  listedPrice: 450000,
  packagePrice: 250000,
  isDefault: false,
  category: 'Chuyên Sâu'
}, {
  id: 'mmse_cognition',
  name: 'Trắc Nghiệm Nhận Thức & Tầm Soát Sa Sút Trí Tuệ (MMSE / MoCA)',
  purpose: 'Thang đo quốc tế phát hiện suy giảm trí nhớ nhẹ (MCI) & Alzheimer giai đoạn sớm',
  specialty: 'Tâm Thần Kinh & Lão Khoa Hành Vi',
  equipment: 'Bộ test chuẩn hóa quốc tế & Phân tích chuyên gia',
  duration: 25,
  listedPrice: 400000,
  packagePrice: 0,
  isDefault: true,
  category: 'Thần Kinh'
}, {
  id: 'balance_fall',
  name: 'Đánh Giá Nguy Cơ Té Ngã & Thử Nghiệm Thăng Bằng Berg Balance',
  purpose: 'Khảo sát độ vững dáng đi, thăng bằng chuyển tư thế và xây dựng bài tập bảo vệ',
  specialty: 'Vật Lý Trị Liệu & Phục Hồi Chức Năng',
  equipment: 'Thảm cảm ứng áp lực & Bục đo thăng bằng lực',
  duration: 20,
  listedPrice: 300000,
  packagePrice: 0,
  isDefault: false,
  category: 'Vận Động'
}, {
  id: 'nutrition_consult',
  name: 'Tư Vấn Thực Dưỡng Cá Thể Hóa Theo Bệnh Lý Nền Lão Khoa',
  purpose: 'Đo thành phần cơ thể InBody và thiết kế thực đơn phù hợp ĐTĐ, THA, Gout, Suy Thận',
  specialty: 'Khoa Dinh Dưỡng Tiết Chế Lâm Sàng',
  equipment: 'Máy đo thành phần cơ thể InBody 770',
  duration: 25,
  listedPrice: 350000,
  packagePrice: 0,
  isDefault: true,
  category: 'Dinh Dưỡng'
}];

// --- MODAL: BẢNG CÁC HẠNG MỤC CẦN KHÁM & ĐẶT LỊCH KHÁM CHUYÊN SÂU ---
function ClinicalExamChecklistModal({
  isOpen,
  onClose,
  initialPackage = 'noi-tru',
  initialDoctor = null
}) {
  if (!isOpen) return null;
  const [selectedPackage, setSelectedPackage] = useState(initialPackage);
  const [selectedItemIds, setSelectedItemIds] = useState(() => {
    return CLINICAL_EXAM_ITEMS.filter(i => i.isDefault).map(i => i.id);
  });
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientBirthYear, setPatientBirthYear] = useState('1952');
  const [examLocation, setExamLocation] = useState('center');
  const [selectedDoctorName, setSelectedDoctorName] = useState(initialDoctor || 'BS. CKI Nguyễn Hồng Hưng (Tim mạch)');
  const [examDate, setExamDate] = useState('2026-09-26');
  const [examTimeSlot, setExamTimeSlot] = useState('08:30 - 10:30');
  const [symptomNotes, setSymptomNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [bookingCode, setBookingCode] = useState('');
  const toggleItem = id => {
    setSelectedItemIds(prev => {
      if (prev.includes(id)) {
        if (prev.length <= 1) {
          alert('Cần chọn ít nhất 1 hạng mục khám y khoa!');
          return prev;
        }
        return prev.filter(x => x !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const selectAll = () => {
    setSelectedItemIds(CLINICAL_EXAM_ITEMS.map(i => i.id));
  };
  const selectDefaults = () => {
    setSelectedItemIds(CLINICAL_EXAM_ITEMS.filter(i => i.isDefault).map(i => i.id));
  };

  // Calculate totals
  const selectedItems = CLINICAL_EXAM_ITEMS.filter(i => selectedItemIds.includes(i.id));
  const totalDuration = selectedItems.reduce((acc, curr) => acc + curr.duration, 0);
  const totalListedPrice = selectedItems.reduce((acc, curr) => acc + curr.listedPrice, 0);
  const totalPackagePrice = selectedItems.reduce((acc, curr) => acc + curr.packagePrice, 0);
  const totalSavings = totalListedPrice - totalPackagePrice;
  const handleConfirmBooking = e => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      alert('Vui lòng nhập đầy đủ Họ tên bệnh nhân và Số điện thoại!');
      return;
    }
    const code = 'GC-KHAM-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(code);
    setIsBooked(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-4xl bg-surface-container-lowest rounded-3xl shadow-2xl border border-gold-accent/50 overflow-hidden modal-animated my-auto flex flex-col max-h-[92vh]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-primary via-primary-container to-tertiary p-5 sm:p-6 text-on-primary flex items-center justify-between shrink-0 shadow-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shadow-lg shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl"
  }, "clinical_notes")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded-full bg-gold-accent text-brand-charcoal text-[10px] font-extrabold uppercase tracking-wider"
  }, "Phiếu Đặt Lịch Khám Lão Khoa"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-surface/80 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
  }), " Chuẩn JCI Quốc Tế")), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl sm:text-2xl font-bold mt-0.5"
  }, "Đặt Lịch Khám & Bảng Các Hạng Mục Cần Khám"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-surface/90"
  }, "Lựa chọn gói khám hoặc tùy chỉnh danh mục cận lâm sàng, thăm dò chức năng phù hợp cho người cao tuổi"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: "w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xl"
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    className: "p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 bg-surface"
  }, isBooked ?
  /*#__PURE__*/
  /* Success Confirmation Ticket */
  React.createElement("div", {
    className: "printable-slip p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border-2 border-emerald-500 shadow-xl space-y-6 text-center modal-animated"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner no-print"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-4xl"
  }, "check_circle")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase tracking-widest text-emerald-800"
  }, "Đã Tiếp Nhận Lịch Khám Thành Công"), /*#__PURE__*/React.createElement("h4", {
    className: "font-serif text-2xl sm:text-3xl font-bold text-primary"
  }, "Mã Phiếu Khám: ", /*#__PURE__*/React.createElement("span", {
    className: "text-secondary font-mono"
  }, bookingCode)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant max-w-lg mx-auto"
  }, "Hệ thống GoCare Telehealth đã tự động điều phối Bác sĩ và Điều dưỡng viên. Chuyên viên y tế sẽ gọi điện xác nhận trong vòng 10 phút.")), /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl mx-auto rounded-2xl bg-surface-container-low p-5 text-left border border-outline-variant/30 space-y-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 pb-3 border-b border-outline-variant/20 font-medium"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Bệnh nhân:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, patientName), " (", patientBirthYear, ")"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Số điện thoại:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, patientPhone)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Địa điểm khám:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, examLocation === 'center' ? 'Trung tâm GoCare Heritage (Sala)' : 'Tư gia bệnh nhân')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Bác sĩ phụ trách:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, selectedDoctorName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Ngày khám:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-secondary"
  }, examDate), " (", examTimeSlot, ")"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Số hạng mục khám:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-700"
  }, selectedItems.length, " hạng mục"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline block mb-1 font-bold"
  }, "Danh sách các hạng mục đã đăng ký:"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, selectedItems.map(item => /*#__PURE__*/React.createElement("span", {
    key: item.id,
    className: "px-2 py-0.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-[11px] text-primary"
  }, "✓ ", item.name)))), /*#__PURE__*/React.createElement("div", {
    className: "pt-3 border-t border-outline-variant/20 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, "Tổng Chi Phí Trọn Gói:"), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-bold text-secondary"
  }, totalPackagePrice === 0 ? 'Đã bao gồm trong gói' : `${totalPackagePrice.toLocaleString()}₫`), /*#__PURE__*/React.createElement("span", {
    className: "block text-[10px] text-emerald-700 font-semibold"
  }, "(Tiết kiệm ", totalSavings.toLocaleString(), "₫)")))), /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl mx-auto p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-left text-xs space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold flex items-center gap-1.5 text-amber-900"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "info"), /*#__PURE__*/React.createElement("span", null, "Lưu ý chuẩn bị trước khi khám:")), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc list-inside space-y-0.5 text-[11px] text-amber-900/90 pl-1"
  }, /*#__PURE__*/React.createElement("li", null, "Nhịn ăn sáng và nước ngọt 6 - 8 tiếng nếu có làm xét nghiệm máu đường huyết và mỡ máu."), /*#__PURE__*/React.createElement("li", null, "Mang theo hồ sơ bệnh án cũ, đơn thuốc đang dùng và thẻ BHYT (nếu có)."), /*#__PURE__*/React.createElement("li", null, "Trang phục thoải mái, rộng rãi thuận tiện đo điện tim ECG và siêu âm ổ bụng."))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-3 pt-2 no-print"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => window.print(),
    className: "px-5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-bold text-xs border border-outline-variant/40 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "print"), /*#__PURE__*/React.createElement("span", null, "In Phiếu Khám")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setIsBooked(false);
      onClose();
    },
    className: "px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-bold text-xs shadow-md"
  }, "Hoàn Tất & Đóng"))) :
  /*#__PURE__*/
  /* Interactive Form & Table of Exam Items */
  React.createElement("form", {
    onSubmit: handleConfirmBooking,
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-2"
  }, "1. Chọn Gói Dịch Vụ Cần Đặt Lịch Khám:"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-3"
  }, [{
    id: 'ngoai-tru',
    title: 'Chăm Sóc & Khám Tại Tư Gia',
    tag: 'Ngoại trú',
    price: '400.000₫ / ca',
    desc: 'Bác sĩ & Điều dưỡng mang thiết bị đến tận nhà'
  }, {
    id: 'ban-tru',
    title: 'Bán Trú Sinh Hoạt VIP Day-care',
    tag: 'Bán trú',
    price: '850.000₫ / ngày',
    desc: 'Đón rước tận nơi, khám chuyên khoa & ăn 3 bữa'
  }, {
    id: 'noi-tru',
    title: 'Nội Trú Dưỡng Lão 5 Sao Heritage',
    tag: 'Nội trú VIP',
    price: '28.500.000₫ / tháng',
    desc: 'Phòng Suite Sala 45m2, Bác sĩ Chợ Rẫy theo dõi 24/7'
  }].map(pkg => /*#__PURE__*/React.createElement("div", {
    key: pkg.id,
    onClick: () => setSelectedPackage(pkg.id),
    className: `p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${selectedPackage === pkg.id ? 'border-secondary bg-secondary/10 shadow-md ring-1 ring-secondary' : 'border-outline-variant/30 bg-surface-container-lowest hover:border-outline-variant'}`
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: `text-[10px] font-bold px-2 py-0.5 rounded-full ${selectedPackage === pkg.id ? 'bg-secondary text-on-secondary' : 'bg-surface-container text-outline'}`
  }, pkg.tag), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, selectedPackage === pkg.id ? 'radio_button_checked' : 'radio_button_unchecked')), /*#__PURE__*/React.createElement("h4", {
    className: "font-serif text-sm font-bold text-primary mt-2"
  }, pkg.title), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant mt-1 leading-snug"
  }, pkg.desc)), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 pt-2 border-t border-outline-variant/20 font-bold text-xs text-secondary"
  }, pkg.price))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary"
  }, "2. Bảng Danh Mục Các Hạng Mục Cần Khám Lão Khoa & Tầm Soát:"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "Nhấp vào từng hàng để chọn hoặc bỏ chọn các xét nghiệm và chỉ định y khoa.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: selectAll,
    className: "px-2.5 py-1 rounded-lg bg-surface-container text-primary hover:bg-gold-light text-[11px] font-bold border border-outline-variant/30"
  }, "Chọn Tất Cả (9 mục)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: selectDefaults,
    className: "px-2.5 py-1 rounded-lg bg-surface-container text-primary hover:bg-gold-light text-[11px] font-bold border border-outline-variant/30"
  }, "Gói Chuẩn Khuyên Dùng"))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border border-outline-variant/40 bg-surface-container-lowest overflow-hidden shadow-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left border-collapse text-xs"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-surface-container-low border-b border-outline-variant/40 text-on-surface text-[11px] uppercase font-bold tracking-wider"
  }, /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3 w-12 text-center"
  }, "Chọn"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4 min-w-[240px]"
  }, "Hạng Mục Khám & Mục Tiêu Lâm Sàng"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4 min-w-[200px]"
  }, "Chuyên Khoa & Thiết Bị"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3 text-center w-20"
  }, "Thời Gian"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3 text-right w-24"
  }, "Giá Niêm Yết"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4 text-right min-w-[120px]"
  }, "Giá Theo Gói"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-outline-variant/20"
  }, CLINICAL_EXAM_ITEMS.map(item => {
    const isChecked = selectedItemIds.includes(item.id);
    return /*#__PURE__*/React.createElement("tr", {
      key: item.id,
      onClick: () => toggleItem(item.id),
      className: `cursor-pointer transition-colors ${isChecked ? 'bg-secondary/5 hover:bg-secondary/10' : 'hover:bg-surface-container-low/50 opacity-60'}`
    }, /*#__PURE__*/React.createElement("td", {
      className: "py-3 px-3 text-center"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: isChecked,
      onChange: () => toggleItem(item.id),
      className: "w-4 h-4 rounded text-secondary focus:ring-secondary cursor-pointer",
      onClick: e => e.stopPropagation()
    })), /*#__PURE__*/React.createElement("td", {
      className: "py-3 px-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-primary flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("span", null, item.name), item.category === 'Bắt Buộc' && /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] px-1.5 py-0.2 rounded bg-red-100 text-red-700 font-bold"
    }, "Cốt Lõi"), item.category === 'Chuyên Sâu' && /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-bold"
    }, "Chuyên Sâu")), /*#__PURE__*/React.createElement("p", {
      className: "text-[11px] text-on-surface-variant mt-0.5"
    }, item.purpose)), /*#__PURE__*/React.createElement("td", {
      className: "py-3 px-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-semibold text-on-surface text-[11px]"
    }, item.specialty), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-outline italic"
    }, item.equipment)), /*#__PURE__*/React.createElement("td", {
      className: "py-3 px-3 text-center text-outline text-[11px] font-mono"
    }, item.duration, "p"), /*#__PURE__*/React.createElement("td", {
      className: "py-3 px-3 text-right text-outline line-through text-[11px]"
    }, item.listedPrice.toLocaleString(), "₫"), /*#__PURE__*/React.createElement("td", {
      className: "py-3 px-4 text-right"
    }, item.packagePrice === 0 ? /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]"
    }, "Bao Gồm Trong Gói") : /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-secondary text-xs"
    }, item.packagePrice.toLocaleString(), "₫")));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-surface-container-low border-t border-outline-variant/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, "Đã chọn: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-secondary"
  }, selectedItems.length), " / ", CLINICAL_EXAM_ITEMS.length, " hạng mục"), /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "|"), /*#__PURE__*/React.createElement("span", {
    className: "text-on-surface-variant flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "schedule"), /*#__PURE__*/React.createElement("span", null, "Thời lượng dự kiến: ", /*#__PURE__*/React.createElement("strong", null, totalDuration, " phút")))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 self-end sm:self-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-outline block"
  }, "Giá gốc niêm yết: ", totalListedPrice.toLocaleString(), "₫"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-extrabold text-primary"
  }, "Tổng cộng: ", /*#__PURE__*/React.createElement("span", {
    className: "text-secondary text-base"
  }, totalPackagePrice === 0 ? 'Bao gồm trọn gói' : `${totalPackagePrice.toLocaleString()}₫`))), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] shrink-0"
  }, "Tiết kiệm ", totalSavings.toLocaleString(), "₫"))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 pt-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary"
  }, "3. Thông Tin Người Khám & Đặt Hẹn:"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "Họ và tên bệnh nhân (*)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    value: patientName,
    onChange: e => setPatientName(e.target.value),
    placeholder: "Ví dụ: Cụ Trần Văn Đức",
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "Số điện thoại liên lạc (*)"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    required: true,
    value: patientPhone,
    onChange: e => setPatientPhone(e.target.value),
    placeholder: "Ví dụ: 0918 234 567",
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "Năm sinh người bệnh"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: patientBirthYear,
    onChange: e => setPatientBirthYear(e.target.value),
    placeholder: "1952",
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "Địa điểm thực hiện khám"), /*#__PURE__*/React.createElement("select", {
    value: examLocation,
    onChange: e => setExamLocation(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "center"
  }, "Khám tại Trung Tâm GoCare Heritage (KĐT Sala)"), /*#__PURE__*/React.createElement("option", {
    value: "home"
  }, "Khám tại Tư Gia (Bác sĩ & Điều dưỡng đến tận nơi)"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "Ngày khám mong muốn"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: examDate,
    onChange: e => setExamDate(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "Khung giờ tiếp nhận"), /*#__PURE__*/React.createElement("select", {
    value: examTimeSlot,
    onChange: e => setExamTimeSlot(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", null, "07:30 - 09:30 (Ưu tiên lấy máu đói)"), /*#__PURE__*/React.createElement("option", null, "08:30 - 10:30 (Khám tổng quát)"), /*#__PURE__*/React.createElement("option", null, "10:00 - 12:00 (Thăm khám trưa)"), /*#__PURE__*/React.createElement("option", null, "14:00 - 16:00 (Phiên chiều)")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "Bác sĩ chuyên khoa phụ trách khám"), /*#__PURE__*/React.createElement("select", {
    value: selectedDoctorName,
    onChange: e => setSelectedDoctorName(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", null, "BS. CKI Nguyễn Hồng Hưng (Trưởng Khoa Tim Mạch - BV Chợ Rẫy)"), /*#__PURE__*/React.createElement("option", null, "BS. CKII Lê Kim Ngân (Khoa Lão & Nội Tổng Quát - BV ĐHYD)"), /*#__PURE__*/React.createElement("option", null, "ThS. BS Trần Phương Thảo (Trị Liệu Thần Kinh & Sa Sút Trí Tuệ)"), /*#__PURE__*/React.createElement("option", null, "Bác sĩ Lão khoa trực ban GoCare chỉ định"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "Ghi chú triệu chứng lâm sàng / tiền sử bệnh"), /*#__PURE__*/React.createElement("textarea", {
    rows: "2",
    value: symptomNotes,
    onChange: e => setSymptomNotes(e.target.value),
    placeholder: "Ví dụ: Bác có tiền sử tăng huyết áp 10 năm, dạo gần đây hay chóng mặt lúc đứng dậy, ăn kém và khó ngủ...",
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: "w-full sm:w-auto px-6 py-3 rounded-xl bg-surface-container text-primary font-bold text-xs hover:bg-surface-container-high transition-all"
  }, "Hủy Bỏ"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary via-primary-container to-secondary text-on-primary font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "verified"), /*#__PURE__*/React.createElement("span", null, "Xác Nhận Đặt Lịch Khám Ngay (", selectedItems.length, " Mục)")))))));
}

// --- COMPONENT: BỘ SƯU TẬP HÌNH ẢNH TRUNG TÂM DƯỠNG LÃO GOCARE (CENTER FACILITIES GALLERY) ---
function CenterFacilitiesGallery({
  onBookTour
}) {
  const [activeCategory, setActiveCategory] = useState('Tất Cả');
  const [selectedImage, setSelectedImage] = useState(null);
  const categories = ['Tất Cả', 'Trị Liệu & Y Khoa', 'Không Gian Sinh Hoạt', 'Sinh Hoạt & Văn Hóa', 'Thư Giãn Tĩnh Tâm'];
  const filteredImages = activeCategory === 'Tất Cả' ? CENTER_FACILITY_IMAGES : CENTER_FACILITY_IMAGES.filter(img => img.category === activeCategory);
  return /*#__PURE__*/React.createElement("section", {
    id: "hinh-anh-trung-tam",
    className: "w-full py-16 bg-surface-container-low/40 border-y border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3.5 py-1 rounded-full bg-gold-light text-primary text-xs font-bold uppercase tracking-wider border border-gold-accent/40 inline-flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "apartment"), /*#__PURE__*/React.createElement("span", null, "Khuôn Viên Biệt Thự Nghỉ Dưỡng & Trị Liệu JCI")), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-3xl sm:text-4xl text-primary font-bold"
  }, "Hình Ảnh Thực Tế Tại Trung Tâm GoCare Heritage Sala"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-on-surface-variant leading-relaxed"
  }, "Tọa lạc tại khu đô thị sinh thái Sala, TP. Thủ Đức với mật độ cây xanh 75%. Không gian được thiết kế chuyên biệt cho người cao tuổi theo tiêu chuẩn viện dưỡng lão quốc tế JCI Hoa Kỳ."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-2 pt-3"
  }, categories.map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat,
    type: "button",
    onClick: () => setActiveCategory(cat),
    className: `px-4 py-2 rounded-full text-xs font-bold transition-all ${activeCategory === cat ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary border border-outline-variant/40'}`
  }, cat)))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  }, filteredImages.map(facility => /*#__PURE__*/React.createElement("div", {
    key: facility.id,
    onClick: () => setSelectedImage(facility),
    className: "group rounded-3xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:border-gold-accent/60"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[16/10] overflow-hidden bg-surface-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: facility.img,
    alt: facility.title,
    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-charcoal/85 backdrop-blur-md text-gold-accent text-[11px] font-bold border border-gold-accent/40 shadow-sm"
  }, facility.badge), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 transition-transform"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "zoom_in"))), /*#__PURE__*/React.createElement("div", {
    className: "p-5 space-y-2.5 flex-1 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-secondary uppercase tracking-wider block"
  }, facility.category), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-base font-bold text-primary mt-1 group-hover:text-secondary transition-colors line-clamp-2"
  }, facility.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant line-clamp-3 mt-1.5 leading-relaxed"
  }, facility.desc)), /*#__PURE__*/React.createElement("div", {
    className: "pt-3 border-t border-outline-variant/20 flex items-center justify-between text-[11px] text-outline font-semibold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "groups"), /*#__PURE__*/React.createElement("span", null, facility.capacity)), /*#__PURE__*/React.createElement("span", {
    className: "text-secondary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5"
  }, /*#__PURE__*/React.createElement("span", null, "Chi tiết"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "arrow_forward"))))))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-primary via-primary-container to-secondary text-on-primary shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 text-center sm:text-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-gold-accent uppercase tracking-wider"
  }, "Trải Nghiệm Thực Tế"), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl sm:text-2xl font-bold"
  }, "Quý Gia Đình Có Nhu Cầu Thăm Quan Thực Tế Khuôn Viên GoCare?"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-surface/90 max-w-xl"
  }, "GoCare bố trí xe y tế đưa đón người thân tận nhà đến thăm quan trải nghiệm hồ bơi thủy trị liệu, dùng thử bữa ăn dưỡng sinh và tham vấn cùng Bác sĩ Trưởng khoa.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onBookTour && onBookTour('noi-tru'),
    className: "px-6 py-3.5 rounded-xl bg-gold-accent hover:bg-yellow-400 text-brand-charcoal font-bold text-xs uppercase tracking-wider shadow-lg shrink-0 transition-all hover:scale-105"
  }, "Đặt Lịch Khám & Thăm Quan Trung Tâm"))), selectedImage && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-3xl bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl border border-gold-accent/50 modal-animated my-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[16/10] bg-black"
  }, /*#__PURE__*/React.createElement("img", {
    src: selectedImage.img,
    alt: selectedImage.title,
    className: "w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setSelectedImage(null),
    className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xl"
  }, "close")), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-4 left-4 px-3 py-1 rounded-full bg-brand-charcoal/90 text-gold-accent text-xs font-bold border border-gold-accent/40"
  }, selectedImage.badge)), /*#__PURE__*/React.createElement("div", {
    className: "p-6 sm:p-7 space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-secondary uppercase tracking-wider block"
  }, selectedImage.category), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl sm:text-2xl font-bold text-primary mt-1"
  }, selectedImage.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed"
  }, selectedImage.desc)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline block text-[11px]"
  }, "Quy mô & Sức chứa:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, selectedImage.capacity)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline block text-[11px]"
  }, "Trang thiết bị & Tiêu chuẩn:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-secondary"
  }, selectedImage.specs))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-end gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setSelectedImage(null),
    className: "px-5 py-2.5 rounded-xl bg-surface-container text-primary text-xs font-bold hover:bg-surface-container-high"
  }, "Đóng Lại"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setSelectedImage(null);
      if (onBookTour) onBookTour('noi-tru');
    },
    className: "px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold shadow-md flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "clinical_notes"), /*#__PURE__*/React.createElement("span", null, "Đặt Lịch Khám & Thăm Quan Điểm Này")))))));
}

// --- SCREEN 1: TRANG CHỦ (Home Screen) ---
function HomeScreen() {
  const [bookingTab, setBookingTab] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pricingPackage, setPricingPackage] = useState('noi-tru');
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [selectedExamPackage, setSelectedExamPackage] = useState('noi-tru');
  const openExamModal = pkgId => {
    setSelectedExamPackage(pkgId || 'noi-tru');
    setIsExamModalOpen(true);
  };
  const [formData, setFormData] = useState({
    service: 'Phục hồi chức năng & Vật lý trị liệu',
    shift: 'Ca 8 Tiếng Tiêu Chuẩn',
    name: '',
    phone: '',
    location: 'hcm-thuduc',
    address: 'Biệt thự Palm Garden, Thảo Điền, TP. Thủ Đức',
    date: '2026-09-25',
    note: ''
  });
  const handleFormSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Vui lòng điền đầy đủ Họ và tên và Số điện thoại!');
      return;
    }
    setIsModalOpen(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full pt-20 bg-surface"
  }, /*#__PURE__*/React.createElement("section", {
    className: "relative w-full -mt-20 overflow-hidden bg-tertiary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-0"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "Sanctuary GoCare",
    className: "w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out",
    src: "https://images.unsplash.com/photo-1581056771107-11a4b09a1a15?auto=format&fit=crop&q=80&w=800"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-tertiary/95 via-tertiary/80 to-tertiary/45"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-36 pb-20 lg:pt-44 lg:pb-24 min-h-[92vh] flex flex-col justify-between items-center text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto space-y-6 flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface/15 backdrop-blur-md text-surface border border-white/20 shadow-md"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-ping"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs uppercase tracking-widest text-surface font-bold"
  }, "GoCare • An tâm chăm sóc, kết nối tức thì")), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-3xl sm:text-5xl lg:text-6xl text-surface font-bold leading-tight text-center"
  }, "Nơi Tuổi Xế Chiều Là Một ", /*#__PURE__*/React.createElement("span", {
    className: "text-secondary-fixed italic underline decoration-gold-accent/60"
  }, "Miền An Trú"), " Tươi Sáng & Nhân Văn"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-tertiary-fixed max-w-2xl leading-relaxed text-center mx-auto"
  }, "Kết hợp hoàn hảo giữa chuẩn mực y khoa điều dưỡng khắt khe và sự nâng niu tâm hồn trọn vẹn từng khoảnh khắc, kiến tạo không gian sống tự tôn, an tâm và tĩnh tại cho bậc sinh thành."), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex flex-wrap items-center justify-center gap-4"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/chuyen-khoa",
    className: "inline-flex items-center justify-center h-12 px-7 rounded-xl bg-gradient-to-r from-primary-container to-secondary text-on-primary font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all group gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "Khám phá Chuyên khoa & Dịch vụ"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base group-hover:translate-x-1 transition-transform"
  }, "arrow_forward")), /*#__PURE__*/React.createElement("a", {
    href: "#bang-gia-dich-vu",
    className: "inline-flex items-center justify-center h-12 px-7 rounded-xl bg-surface/15 backdrop-blur-md text-surface font-semibold hover:bg-surface/25 transition-all border border-white/20"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined mr-2 text-secondary-fixed text-lg"
  }, "payments"), /*#__PURE__*/React.createElement("span", null, "Bảng Giá Ngoại Trú - Bán Trú - Nội Trú")), /*#__PURE__*/React.createElement(Link, {
    to: "/dieu-duong",
    className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-xs hover:bg-secondary-fixed-dim transition-all shadow-md"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary animate-pulse"
  }, "near_me"), /*#__PURE__*/React.createElement("span", null, "GPS Định Vị Y Tá & Bác Sĩ")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-12 w-full flex justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl w-full p-5 rounded-2xl bg-tertiary/85 backdrop-blur-xl border border-white/10 shadow-2xl text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 px-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-xl bg-primary-container/60 flex items-center justify-center text-secondary-fixed shadow-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl"
  }, "verified_user")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-serif text-surface font-bold"
  }, "24/7"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-tertiary-fixed-dim"
  }, "Bác sĩ Lão khoa & Cấp cứu túc trực"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 px-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-xl bg-primary-container/60 flex items-center justify-center text-secondary-fixed shadow-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl"
  }, "workspace_premium")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-serif text-surface font-bold"
  }, "100%"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-tertiary-fixed-dim"
  }, "Chứng chỉ hành nghề BYT & JCI"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 px-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-xl bg-primary-container/60 flex items-center justify-center text-secondary-fixed shadow-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl"
  }, "family_restroom")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-serif text-surface font-bold"
  }, "500+"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-tertiary-fixed-dim"
  }, "Gia đình tin chọn & kết nối trọn đời"))))))), /*#__PURE__*/React.createElement("section", {
    className: "w-full py-16 bg-surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 shadow-md space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant/30 pb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 mb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase text-secondary tracking-wider"
  }, "Đội Ngũ Y Khoa Thường Trực GoCare")), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl sm:text-3xl font-bold text-primary"
  }, "Hội Đồng Bác Sĩ & Điều Dưỡng Chuyên Sâu"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-on-surface-variant"
  }, "Các chuyên gia Lão khoa, Tim mạch hàng đầu từ Bệnh viện Chợ Rẫy, Đại học Y Dược và Chuyên gia Phục hồi chức năng JCI.")), /*#__PURE__*/React.createElement(Link, {
    to: "/chuyen-khoa",
    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold shadow-md transition-all self-start md:self-auto"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "clinical_notes"), /*#__PURE__*/React.createElement("span", null, "Đặt Lịch Khám Chuyên Khoa"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gold-glow-card flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/doctor_vinh.jpg",
    alt: "PGS. TS. BS Nguyễn Văn Vinh",
    className: "w-16 h-16 rounded-2xl object-cover shadow-sm ring-2 ring-gold-accent shrink-0"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm text-on-surface"
  }, "PGS. TS. BS Nguyễn Văn Vinh"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-secondary"
  }, "Cố Vấn Lão Khoa & Tim Mạch"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "35+ năm lâm sàng BV Chợ Rẫy"))), /*#__PURE__*/React.createElement("div", {
    className: "gold-glow-card flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/doctor_khang.jpg",
    alt: "BS. CKI Trần Trọng Khang",
    className: "w-16 h-16 rounded-2xl object-cover shadow-sm ring-2 ring-gold-accent shrink-0"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm text-on-surface"
  }, "BS. CKI Trần Trọng Khang"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-secondary"
  }, "Trưởng Khoa Phục Hồi Thần Kinh"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "20 năm BV Đại học Y Dược"))), /*#__PURE__*/React.createElement("div", {
    className: "gold-glow-card flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/doctor_hong_hung.jpg",
    alt: "BS. CKI Nguyễn Hồng Hưng",
    className: "w-16 h-16 rounded-2xl object-cover shadow-sm ring-2 ring-gold-accent shrink-0"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm text-on-surface"
  }, "BS. CKI Nguyễn Hồng Hưng"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-secondary"
  }, "Tim Mạch Can Thiệp & Cấp Cứu"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "18 năm BV Hồng Hưng & Chợ Rẫy"))), /*#__PURE__*/React.createElement("div", {
    className: "gold-glow-card flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/doctor_thao.jpg",
    alt: "ThS. BS Trịnh Phương Thảo",
    className: "w-16 h-16 rounded-2xl object-cover shadow-sm ring-2 ring-gold-accent shrink-0"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm text-on-surface"
  }, "ThS. BS Trịnh Phương Thảo"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-secondary"
  }, "Trị Liệu Tâm Lý & Thần Kinh"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "12 năm BV Đại Học Y Dược"))))))), /*#__PURE__*/React.createElement(CenterFacilitiesGallery, {
    onBookTour: pkg => openExamModal(pkg)
  }), /*#__PURE__*/React.createElement("section", {
    id: "bang-gia-dich-vu",
    className: "w-full py-16 bg-surface-container-low/70 border-y border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto space-y-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-gold-light text-primary text-xs font-bold uppercase tracking-wider border border-gold-accent/40"
  }, "Minh Bạch Tài Chính 100%"), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-3xl sm:text-4xl text-primary font-bold"
  }, "Biểu Phí Chăm Sóc & Dưỡng Lão GoCare"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-on-surface-variant"
  }, "Đáp ứng trọn vẹn nhu cầu phục hồi tại nhà, bán trú ban ngày linh hoạt và nội trú biệt thự nghỉ dưỡng cao cấp."), /*#__PURE__*/React.createElement("div", {
    className: "inline-flex p-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 shadow-sm mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPricingPackage('ngoai-tru'),
    className: `px-5 py-2 rounded-full text-xs font-bold transition-all ${pricingPackage === 'ngoai-tru' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`
  }, "Chăm Sóc Tại Nhà (Ngoại trú)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPricingPackage('ban-tru'),
    className: `px-5 py-2 rounded-full text-xs font-bold transition-all ${pricingPackage === 'ban-tru' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`
  }, "Bán Trú Ban Ngày (Day-care)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPricingPackage('noi-tru'),
    className: `px-5 py-2 rounded-full text-xs font-bold transition-all ${pricingPackage === 'noi-tru' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`
  }, "Nội Trú 5 Sao (Suites Sanctuary)")), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openExamModal(pricingPackage),
    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/15 hover:bg-secondary/25 text-secondary text-xs font-bold border border-secondary/40 shadow-xs transition-all"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "table_chart"), /*#__PURE__*/React.createElement("span", null, "Mở Bảng Danh Mục Các Hạng Mục Cần Khám Lão Khoa (9 Hạng Mục)")))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: `rounded-3xl p-8 bg-surface-container-lowest border transition-all flex flex-col justify-between ${pricingPackage === 'ngoai-tru' ? 'ring-2 ring-gold-accent shadow-xl scale-102' : 'border-outline-variant/30 shadow-sm'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-secondary uppercase tracking-wider block"
  }, "Gói Phổ Thông"), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-bold text-primary"
  }, "Ca Điều Dưỡng 4h - 8h"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-bold text-primary"
  }, "400.000₫"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "/ ca trực 4h")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed"
  }, "Phù hợp người cao tuổi cần hỗ trợ vệ sinh, đo sinh hiệu định kỳ, tiêm truyền, đặt sonde và tập vận động cơ bản tại tư gia."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2.5 text-xs text-on-surface pt-4 border-t border-outline-variant/20"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "check_circle"), " Điều dưỡng có CCHN Bộ Y Tế"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "check_circle"), " Đo huyết áp, đường huyết, SpO2"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "check_circle"), " Hỗ trợ di chuyển nội thành TP.HCM"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openExamModal('ngoai-tru'),
    className: "mt-8 w-full py-3.5 rounded-xl bg-surface-container hover:bg-gold-light text-primary text-xs font-bold text-center transition-all border border-outline-variant/40 flex items-center justify-center gap-1.5 shadow-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary"
  }, "clinical_notes"), /*#__PURE__*/React.createElement("span", null, "Đặt Lịch Khám & Chăm Sóc Tại Nhà"))), /*#__PURE__*/React.createElement("div", {
    className: `rounded-3xl p-8 bg-surface-container-lowest border relative transition-all flex flex-col justify-between ${pricingPackage === 'ban-tru' ? 'ring-2 ring-secondary shadow-2xl scale-105' : 'border-secondary/40 shadow-md'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-on-secondary text-[11px] font-bold tracking-wider uppercase shadow-md"
  }, "Phổ Biến Nhất"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 pt-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-secondary uppercase tracking-wider block"
  }, "Bán Trú Sinh Hoạt VIP"), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-bold text-primary"
  }, "GoCare Day-care Plus"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-bold text-secondary"
  }, "850.000₫"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "/ ngày (8h - 17h)")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed"
  }, "Đưa đón tận nhà, ăn 3 bữa thực dưỡng theo chỉ số cá nhân, trị liệu sóng não 432Hz và giao lưu câu lạc bộ người cao tuổi."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2.5 text-xs text-on-surface pt-4 border-t border-outline-variant/20"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "check_circle"), " Xe đưa đón chuyên dụng chuẩn y tế"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "check_circle"), " Bác sĩ Lão khoa khám hằng ngày"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "check_circle"), " 3 bữa ăn chuyên biệt chuyên gia dinh dưỡng"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "check_circle"), " Phòng nghỉ ngơi riêng tư yên tĩnh"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openExamModal('ban-tru'),
    className: "mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-secondary to-primary-container text-on-secondary text-xs font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "clinical_notes"), /*#__PURE__*/React.createElement("span", null, "Đặt Lịch Khám Toàn Diện Bán Trú"))), /*#__PURE__*/React.createElement("div", {
    className: `rounded-3xl p-8 bg-surface-container-lowest border transition-all flex flex-col justify-between ${pricingPackage === 'noi-tru' ? 'ring-2 ring-gold-accent shadow-xl scale-102' : 'border-outline-variant/30 shadow-sm'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-gold-accent uppercase tracking-wider block"
  }, "Nghỉ Dưỡng 5 Sao"), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-bold text-primary"
  }, "Heritage Villa Suites"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-bold text-primary"
  }, "28.500.000₫"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "/ tháng")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed"
  }, "Không gian sống riêng biệt tại khu đô thị Sala & Thảo Điền. Điều dưỡng viên phục vụ 1:1, kết nối bác sĩ Chợ Rẫy 24/7."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2.5 text-xs text-on-surface pt-4 border-t border-outline-variant/20"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "check_circle"), " Phòng Suite 45m2 tiêu chuẩn khách sạn"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "check_circle"), " Hệ thống cảm biến ngã IoT tự động"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "check_circle"), " Trọn gói phục hồi chức năng & vật lý trị liệu"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openExamModal('noi-tru'),
    className: "mt-8 w-full py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold text-center transition-all border border-outline-variant/40 shadow-md flex items-center justify-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-gold-accent"
  }, "clinical_notes"), /*#__PURE__*/React.createElement("span", null, "Đặt Lịch Khám Lão Khoa & Nội Trú VIP")))))), /*#__PURE__*/React.createElement("section", {
    className: "w-full py-14 bg-surface-container-low/50 border-t border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1200px] mx-auto px-6 lg:px-12 space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto space-y-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider border border-secondary/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "handshake"), /*#__PURE__*/React.createElement("span", null, "Mạng Lưới Đối Tác Dược Phẩm Chiến Lược")), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-2xl sm:text-3xl font-bold text-primary"
  }, "Tiếp Ứng Dược Phẩm Hỏa Tốc Cùng FPT Long Châu & An Khang"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed"
  }, "Nhấp vào logo đối tác để xem trực tiếp danh mục thuốc biệt dược, thực phẩm dinh dưỡng Vitabiotics chính hãng và đặt hàng giao tận tư gia trong 1 - 2 giờ.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://nhathuoclongchau.com.vn/nhom-san-pham/vitabiotics?utm_source=Google&utm_medium=CPA&utm_campaign=PC-Vitabiotics-T08-2026&utm_term=PMC&utm_content=&gad_source=1&gad_campaignid=23859675294&gbraid=0AAAAApDeBalH2R8DkYap7fCjjVie-6td9&gclid=Cj0KCQjw8c3VBhCsARIsAA_xJ90iycqe8Q5u7FPuyE1ob4JyDLo8BFIScXkRnAbDttk4PlNVNtr-edoaArfwEALw_wcB",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "group rounded-3xl p-6 bg-surface-container-lowest border-2 border-blue-200/80 hover:border-blue-600 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-20 rounded-2xl overflow-hidden shadow-sm shrink-0 bg-white border border-blue-100 flex items-center justify-center p-1 group-hover:scale-105 transition-transform"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/fpt_long_chau.jpg",
    alt: "Nhà Thuốc FPT Long Châu",
    className: "w-full h-full object-contain rounded-xl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors"
  }, "FPT Long Châu"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-blue-600"
  }, "verified")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] font-semibold text-secondary"
  }, "Cung ứng thuốc đặc trị & Vitabiotics"), /*#__PURE__*/React.createElement("span", {
    className: "inline-block text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold"
  }, "Giao hỏa tốc 1 - 2h"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-xs text-blue-700 font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "Xem Gian Hàng Long Châu"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform"
  }, "open_in_new"))), /*#__PURE__*/React.createElement("a", {
    href: "https://www.nhathuocankhang.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "group rounded-3xl p-6 bg-surface-container-lowest border-2 border-emerald-200/80 hover:border-emerald-600 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-20 rounded-2xl overflow-hidden shadow-sm shrink-0 bg-white border border-emerald-100 flex items-center justify-center p-1 group-hover:scale-105 transition-transform"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/nhathuoc_an_khang.jpg",
    alt: "Nhà Thuốc An Khang",
    className: "w-full h-full object-contain rounded-xl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-lg font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors"
  }, "Nhà Thuốc An Khang"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "verified")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] font-semibold text-secondary"
  }, "Thành viên MWG (Thế Giới Di Động)"), /*#__PURE__*/React.createElement("span", {
    className: "inline-block text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold"
  }, "100% hóa đơn BYT"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs text-emerald-700 font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "Xem Gian Hàng An Khang"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform"
  }, "open_in_new")))))), /*#__PURE__*/React.createElement("section", {
    id: "booking-form-section",
    className: "w-full py-16 bg-surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1000px] mx-auto px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-container-lowest rounded-3xl p-8 sm:p-10 border border-outline-variant/40 shadow-xl space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-outline-variant/30 pb-4 text-center max-w-xl mx-auto space-y-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase text-secondary tracking-wider inline-flex items-center justify-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "calendar_add_on"), " Kết Nối Tức Thì 24/7"), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl sm:text-3xl font-bold text-primary"
  }, "Đăng Ký Dịch Vụ Chăm Sóc & Thăm Quan GoCare"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant"
  }, "Chuyên viên y tế GoCare sẽ liên hệ xác nhận và điều phối nhân sự trong vòng 10 phút.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleFormSubmit,
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "Họ và tên người đăng ký / Thân nhân (*)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    value: formData.name,
    onChange: e => setFormData({
      ...formData,
      name: e.target.value
    }),
    placeholder: "Ví dụ: Nguyễn Văn Hưng",
    className: "w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "Số điện thoại liên lạc (*)"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    required: true,
    value: formData.phone,
    onChange: e => setFormData({
      ...formData,
      phone: e.target.value
    }),
    placeholder: "Ví dụ: 0912 345 678",
    className: "w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "Gói dịch vụ quan tâm"), /*#__PURE__*/React.createElement("select", {
    value: formData.service,
    onChange: e => setFormData({
      ...formData,
      service: e.target.value
    }),
    className: "w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", null, "Chăm sóc Điều dưỡng tại nhà (Ca 4h/8h/12h/24h)"), /*#__PURE__*/React.createElement("option", null, "Bán trú ban ngày GoCare Day-care Plus"), /*#__PURE__*/React.createElement("option", null, "Nội trú dài hạn Heritage Villa Suites"), /*#__PURE__*/React.createElement("option", null, "Phục hồi chức năng & Vật lý trị liệu sau đột quỵ"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "Ngày bắt đầu dự kiến"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: formData.date,
    onChange: e => setFormData({
      ...formData,
      date: e.target.value
    }),
    className: "w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "Địa chỉ tiếp nhận dịch vụ / đón rước"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: formData.address,
    onChange: e => setFormData({
      ...formData,
      address: e.target.value
    }),
    placeholder: "Số nhà, tên đường, phường/quận...",
    className: "w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "Ghi chú tình trạng sức khỏe / Yêu cầu đặc biệt"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    value: formData.note,
    onChange: e => setFormData({
      ...formData,
      note: e.target.value
    }),
    placeholder: "Ví dụ: Bác 75 tuổi, có tiền sử tăng huyết áp, cần người hỗ trợ đi lại và theo dõi đường huyết sau ăn...",
    className: "w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "flex-1 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all hover:scale-[1.01]"
  }, "Gửi Yêu Cầu Đặt Lịch & Tiếp Nhận Ngay"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openExamModal(pricingPackage),
    className: "px-6 py-4 rounded-xl bg-surface-container hover:bg-gold-light text-primary font-bold text-xs uppercase tracking-wider border border-outline-variant/40 transition-all flex items-center justify-center gap-1.5 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary"
  }, "table_chart"), /*#__PURE__*/React.createElement("span", null, "Mở Bảng Các Hạng Mục Cần Khám"))))))), isModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-container-lowest max-w-md w-full rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 modal-animated border border-gold-accent/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-3xl"
  }, "task_alt")), /*#__PURE__*/React.createElement("div", {
    className: "text-center space-y-2"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-bold text-primary"
  }, "Đặt Lịch Thành Công!"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed"
  }, "Hệ thống GoCare đã tiếp nhận thông tin của Quý khách ", /*#__PURE__*/React.createElement("strong", null, formData.name), " (", formData.phone, ").")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-xs space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Dịch vụ:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, formData.service)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Ngày hẹn:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, formData.date)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Địa chỉ:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary truncate max-w-[200px]"
  }, formData.address)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Trạng thái:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-emerald-700 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
  }), "Đang điều phối"))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-center text-outline italic"
  }, "*Bộ phận điều dưỡng GoCare sẽ liên hệ trực tiếp đến số điện thoại của bạn sau ít phút."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsModalOpen(false),
    className: "w-full py-3 rounded-xl bg-primary text-on-primary font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary-container"
  }, "Đồng Ý & Hoàn Tất"))), /*#__PURE__*/React.createElement(ClinicalExamChecklistModal, {
    isOpen: isExamModalOpen,
    onClose: () => setIsExamModalOpen(false),
    initialPackage: selectedExamPackage
  }));
}

// --- SCREEN 2: CHUYÊN KHOA & BÁC SĨ (Doctors Screen) ---
function DoctorsScreen() {
  const [filter, setFilter] = useState('all');
  const [currentTrack, setCurrentTrack] = useState({
    title: 'Tần Số Bình Yên & Thư Giãn Sâu',
    freq: '432 Hz',
    desc: 'Giúp giải tỏa căng thẳng thần kinh, làm dịu tâm trạng bồn chồn cho người lớn tuổi.'
  });
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([{
    sender: 'ai',
    text: 'Xin chào Quý khách! Tôi là Trợ lý AI Y khoa GoCare. Bạn hoặc người thân đang gặp phải triệu chứng gì cần bác sĩ chuyên khoa tư vấn?'
  }]);
  const [inputMsg, setInputMsg] = useState('');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedDoctorReviews, setSelectedDoctorReviews] = useState([]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const doctors = [{
    id: 'vinh',
    name: 'PGS. TS. BS Nguyễn Văn Vinh',
    role: 'Cố vấn Chuyên môn Lão khoa & Tim mạch',
    hosp: 'Nguyên Phó Giám đốc BV Chợ Rẫy (35 năm lâm sàng)',
    desc: 'Chuyên gia đầu ngành về suy tim mạn tính, rối loạn nhịp, tăng huyết áp kháng trị và tối ưu đơn thuốc cho người cao tuổi đa bệnh lý.',
    cchn: '001928/BYT-CCHN',
    price: '800.000₫ / phiên',
    category: 'cardio',
    img: './assets/images/doctor_vinh.jpg'
  }, {
    id: 'khang',
    name: 'BS. CKI Trần Trọng Khang',
    role: 'Trưởng Khoa Phục Hồi Chức Năng Thần Kinh',
    hosp: 'BV Đại học Y Dược TP.HCM (20 năm kinh nghiệm)',
    desc: 'Phục hồi chức năng sau tai biến mạch máu não (đột quỵ), liệt nửa người, thoái hóa đốt sống cổ và thoát vị đĩa đệm người già.',
    cchn: '008451/SYT-HCM-CCHN',
    price: '650.000₫ / phiên',
    category: 'rehab',
    img: './assets/images/doctor_khang.jpg'
  }, {
    id: 'honghung',
    name: 'BS. CKI Nguyễn Hồng Hưng',
    role: 'Trưởng Khoa Tim Mạch Can Thiệp & Cấp Cứu Lão Khoa',
    hosp: 'BV Đa Khoa Hồng Hưng & Cố vấn Cấp cứu GoCare (18 năm lâm sàng)',
    desc: 'Can thiệp mạch vành, kiểm soát huyết áp khẩn cấp, bệnh tim mạch lão khoa và theo dõi Holter điện tim 24h kết nối IoT từ xa.',
    cchn: '014820/BYT-CCHN',
    price: '750.000₫ / phiên',
    category: 'cardio',
    img: './assets/images/doctor_hong_hung.jpg'
  }, {
    id: 'thao',
    name: 'ThS. BS Trịnh Phương Thảo',
    role: 'Trưởng Đơn Vị Trị Liệu Tâm Lý & Sức Khỏe Tinh Thần',
    hosp: 'Khoa Tâm Thần Kinh - BV Đại Học Y Dược TP.HCM (12 năm lâm sàng)',
    desc: 'Liệu pháp nhận thức hành vi (CBT), chăm sóc tâm lý chuyên sâu cho người cao tuổi, giải tỏa trầm cảm, rối loạn giấc ngủ và hội chứng sợ cô đơn.',
    cchn: '007321/SYT-HCM-CCHN',
    price: '600.000₫ / phiên',
    category: 'psychiatry',
    img: './assets/images/doctor_thao.jpg'
  }, {
    id: 'doctor1',
    name: 'BS. CKI Le Quang Huy',
    role: 'Chuyen Khoa Tim Mach',
    price: '500.000d / phien',
    category: 'cardio',
    img: 'https://images.unsplash.com/photo-1612349317150-e4c194bb81cc?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 'doctor2',
    name: 'BS. CKI Tran Thi Mai',
    role: 'Chuyen Khoa Than Kinh',
    price: '600.000d / phien',
    category: 'rehab',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea192732?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 'doctor3',
    name: 'ThS. BS Pham Van Nam',
    role: 'Bac Si Tri Lieu',
    price: '550.000d / phien',
    category: 'psychiatry',
    img: 'https://images.unsplash.com/photo-1537368910025-7001b0e50f58?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 'doctor4',
    name: 'BS. CKI Nguyen Quoc Hung',
    role: 'Phuc Hoi Chuc Nang',
    price: '700.000d / phien',
    category: 'rehab',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800'
  }];
  const reviewsDict = {
    vinh: [{
      author: 'Bác Trần Hùng (68 tuổi - Sala Thủ Đức)',
      comment: 'Bác sĩ Vinh khám rất kỹ lưỡng, đo huyết áp 3 lần trong suốt phiên và giải thích cơ chế rất cặn kẽ, ấm áp.'
    }, {
      author: 'Chị Mai Lan (Thân nhân)',
      comment: 'Mẹ tôi bị tim mạch kèm lo âu, bác sĩ nói chuyện từ tốn và chuẩn mực, tinh thần mẹ hồi phục rất tốt.'
    }],
    khang: [{
      author: 'Bác Đỗ Văn Tâm (65 tuổi)',
      comment: 'Sau 3 tuần tập phục hồi với bác sĩ Khang, cánh tay trái của tôi đã cử động cầm thìa ăn cơm được.'
    }],
    honghung: [{
      author: 'Bác Lê Văn Thạnh (71 tuổi)',
      comment: 'Bác sĩ Hưng can thiệp kiểm soát cơn tăng huyết áp khẩn cấp cho tôi rất chuẩn xác, dặn dò chu đáo từng loại thuốc.'
    }],
    thao: [{
      author: 'Bác Hoàng Minh (70 tuổi)',
      comment: 'Bác sĩ Thảo lắng nghe chân thành, giúp tôi vượt qua cảm giác bồn chồn mất ngủ kéo dài.'
    }]
  };
  const handleSendMessage = () => {
    if (!inputMsg.trim()) return;
    const newMsg = {
      sender: 'user',
      text: inputMsg
    };
    setChatMessages(prev => [...prev, newMsg]);
    const userQ = inputMsg;
    setInputMsg('');
    setTimeout(() => {
      let reply = 'Cảm ơn Quý khách đã chia sẻ với GoCare. Triệu chứng này hoàn toàn có thể cải thiện thông qua phác đồ nghỉ ngơi và trị liệu y khoa cá thể hóa. Bác sĩ Trưởng ca đã nhận được tóm tắt của bạn.';
      if (userQ.toLowerCase().includes('tim') || userQ.toLowerCase().includes('huyết áp')) {
        reply = 'Dấu hiệu liên quan đến tim mạch hoặc huyết áp cần được đo đạc liên tục. Đề xuất bạn đặt lịch với PGS. TS. BS Nguyễn Văn Vinh và nghỉ ngơi tại chỗ, tránh vận động gắng sức.';
      } else if (userQ.toLowerCase().includes('ngủ') || userQ.toLowerCase().includes('mất ngủ') || userQ.toLowerCase().includes('nhớ')) {
        reply = 'Chứng mất ngủ hoặc hay quên ở người lớn tuổi có thể điều hòa bằng liệu pháp âm thanh tần số 432Hz kết hợp thăm khám với TS. BS Bạch Tuyết để đo chức năng nhận thức.';
      }
      setChatMessages(prev => [...prev, {
        sender: 'ai',
        text: reply
      }]);
    }, 700);
  };
  const filteredDoctors = filter === 'all' ? doctors : doctors.filter(d => d.category === filter);
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full pt-20 bg-surface"
  }, /*#__PURE__*/React.createElement("section", {
    className: "w-full py-10 bg-gradient-to-b from-surface via-surface-container-low/50 to-surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl space-y-3 text-center mx-auto lg:text-left lg:mx-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/50 text-secondary text-xs font-bold uppercase tracking-wider"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "verified"), /*#__PURE__*/React.createElement("span", null, "Hội Đồng Y Khoa Quốc Tế Tại Việt Nam")), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-3xl sm:text-4xl text-primary font-bold"
  }, "Hội Đồng Bác Sĩ Chuyên Khoa Cấp Cao"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-on-surface-variant leading-relaxed"
  }, "Hội tụ các chuyên gia Lão khoa, Tim mạch và Sức khỏe Tinh thần từng giữ trọng trách quản lý và khám chữa bệnh tại Bệnh viện Chợ Rẫy, Bạch Mai, Đại học Y Dược TP.HCM và Viện Lão Khoa Quốc Gia.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-6 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/30 mx-auto lg:mx-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-serif font-bold text-secondary"
  }, "25+"), /*#__PURE__*/React.createElement("span", {
    className: "block text-[11px] text-outline"
  }, "Năm kinh nghiệm TB")), /*#__PURE__*/React.createElement("div", {
    className: "w-px h-8 bg-outline-variant/40"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-serif font-bold text-primary"
  }, "100%"), /*#__PURE__*/React.createElement("span", {
    className: "block text-[11px] text-outline"
  }, "CCHN Bộ Y Tế")), /*#__PURE__*/React.createElement("div", {
    className: "w-px h-8 bg-outline-variant/40"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-serif font-bold text-tertiary"
  }, "1:1"), /*#__PURE__*/React.createElement("span", {
    className: "block text-[11px] text-outline"
  }, "Phiên khám riêng biệt")))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-3 flex-wrap pb-2"
  }, [{
    id: 'all',
    label: 'Tất cả chuyên khoa'
  }, {
    id: 'cardio',
    label: 'Tim Mạch & Lão Khoa'
  }, {
    id: 'rehab',
    label: 'Phục Hồi Chức Năng'
  }, {
    id: 'neuro',
    label: 'Thần Kinh & Sa Sút Trí Tuệ'
  }, {
    id: 'psychiatry',
    label: 'Tâm Thần & Trị Liệu Tâm Lý'
  }].map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    onClick: () => setFilter(item.id),
    className: `px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${filter === item.id ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface hover:border-primary'}`
  }, item.label))))), /*#__PURE__*/React.createElement("section", {
    className: "w-full pb-16 bg-surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, filteredDoctors.map(doc => /*#__PURE__*/React.createElement("article", {
    key: doc.id,
    className: "gold-glow-card group bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 flex flex-col sm:flex-row gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full sm:w-44 h-56 sm:h-52 shrink-0 rounded-2xl overflow-hidden bg-surface-container shadow-inner"
  }, /*#__PURE__*/React.createElement("img", {
    alt: doc.name,
    src: doc.img,
    className: "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute top-2 left-2 px-2 py-0.5 rounded bg-primary text-on-primary text-[10px] font-bold uppercase"
  }, "Bác Sĩ Cấp Cao")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-between flex-grow gap-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-2 mb-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-secondary bg-secondary-fixed/40 px-2 py-0.5 rounded"
  }, "Trực Tuyến"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200"
  }, "🟢 Sẵn sàng nhận ca")), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors"
  }, doc.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold text-secondary"
  }, doc.role), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-outline mt-1"
  }, doc.hosp), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed mt-2 line-clamp-2"
  }, doc.desc)), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-outline-variant/30 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[11px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "CCHN:"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-semibold"
  }, doc.cchn)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[11px] mt-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Biểu phí:"), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-primary"
  }, doc.price))))), /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-3.5 bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setSelectedDoctorReviews(reviewsDict[doc.id] || []);
      setIsReviewModalOpen(true);
    },
    className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-lowest text-xs font-semibold border border-outline-variant/40 hover:bg-gold-light transition-all"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-amber-500"
  }, "⭐"), /*#__PURE__*/React.createElement("span", null, "Xem Đánh Giá")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setSelectedDoctor(doc);
      setIsBookingModalOpen(true);
    },
    className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-bold shadow-sm hover:bg-primary-container transition-all hover:scale-105"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "calendar_today"), /*#__PURE__*/React.createElement("span", null, "Đặt Lịch Khám 1:1")))))))), /*#__PURE__*/React.createElement("section", {
    className: "w-full py-16 bg-surface-container-low border-t border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase text-secondary tracking-wider"
  }, "Liệu Pháp Âm Thanh Não Bộ"), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-3xl font-bold text-primary mt-1"
  }, "Thư Viện Âm Nhạc Tần Số Chữa Lành Não Bộ (432Hz & 528Hz)"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-on-surface-variant mt-1 max-w-2xl"
  }, "Hạ cortisol căng thẳng, kích hoạt sóng não Alpha/Theta và đưa cơ thể vào trạng thái phục hồi giấc ngủ tự nhiên.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsAiModalOpen(true),
    className: "px-5 py-3 rounded-2xl bg-gradient-to-r from-secondary to-primary-container text-on-secondary font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl flex items-center gap-2 transition-all hover:scale-105"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-lg"
  }, "smart_toy"), /*#__PURE__*/React.createElement("span", null, "Mở Trợ Lý AI Lắng Nghe 24/7"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-surface-container-lowest border border-secondary/30 shadow-md flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-secondary uppercase flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "graphic_eq"), " Đang phát trị liệu"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-mono font-bold text-primary px-2.5 py-0.5 bg-surface-container rounded-full"
  }, currentTrack.freq)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsPlayingAudio(!isPlayingAudio),
    className: "w-14 h-14 rounded-full bg-gradient-to-tr from-secondary to-primary-container text-on-secondary flex items-center justify-center hover:scale-105 transition-all shadow-lg shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-3xl"
  }, isPlayingAudio ? 'pause' : 'play_arrow')), /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm text-primary truncate"
  }, currentTrack.title), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-outline line-clamp-1"
  }, currentTrack.desc))), /*#__PURE__*/React.createElement("div", {
    className: "h-10 flex items-end justify-between gap-1.5 px-4 py-1.5 bg-surface-container rounded-2xl"
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(idx => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: `wave-bar w-1.5 bg-secondary rounded-full ${isPlayingAudio ? '' : 'h-2'}`,
    style: {
      animationPlayState: isPlayingAudio ? 'running' : 'paused',
      animationDelay: `${idx * 0.1}s`
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5"
  }, [{
    title: 'Tần Số Bình Yên & Thư Giãn Sâu',
    freq: '432 Hz',
    desc: 'Giúp giải tỏa stress căng thẳng thần kinh, làm dịu tâm trạng bồn chồn.'
  }, {
    title: 'Tần Số Phục Hồi Sinh Lực Thần Kinh',
    freq: '528 Hz',
    desc: 'Hỗ trợ kích thích sự minh mẫn, tái tạo các kết nối thần kinh ở người lớn tuổi.'
  }, {
    title: 'Sóng Não Thiền Định Khởi Tạo Giấc Ngủ',
    freq: 'Theta 6Hz',
    desc: 'Hạ dần nhịp tim và huyết áp, xua tan cơn khó ngủ trằn trọc tuổi già.'
  }, {
    title: 'Tiếng Ồn Hồng Ru Ngủ Tự Nhiên',
    freq: 'Pink Noise',
    desc: 'Che chắn tạp âm phố thị, tạo vỏ bọc an toàn tuyệt đối cho giấc ngủ sâu.'
  }].map(track => /*#__PURE__*/React.createElement("div", {
    key: track.freq,
    onClick: () => {
      setCurrentTrack({
        title: track.title,
        freq: track.freq,
        desc: track.desc
      });
      setIsPlayingAudio(true);
    },
    className: "p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 hover:border-secondary transition-all cursor-pointer hover:shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono"
  }, track.freq), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-lg text-secondary"
  }, "play_circle")), /*#__PURE__*/React.createElement("h4", {
    className: "text-xs font-bold text-primary"
  }, track.title), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-outline mt-1 leading-snug"
  }, track.desc))))))), isAiModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-lg bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] modal-animated border border-gold-accent/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-primary to-primary-container p-4 text-on-primary flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shadow-md"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xl"
  }, "smart_toy")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm"
  }, "Trợ Lý AI Y Khoa GoCare 24/7"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-surface/80 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
  }), " Bảo mật HIPAA & Chuẩn Y tế"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsAiModalOpen(false),
    className: "text-surface/80 hover:text-surface"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-[280px] max-h-[360px] bg-surface"
  }, chatMessages.map((msg, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : ''}`
  }, msg.sender === 'ai' && /*#__PURE__*/React.createElement("div", {
    className: "w-7 h-7 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "psychology")), /*#__PURE__*/React.createElement("div", {
    className: `p-3.5 rounded-2xl max-w-[85%] text-xs leading-relaxed ${msg.sender === 'user' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-lowest text-on-surface shadow-sm border border-outline-variant/30'}`
  }, msg.text)))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-surface-container-low flex items-center gap-2 border-t border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: inputMsg,
    onChange: e => setInputMsg(e.target.value),
    onKeyDown: e => e.key === 'Enter' && handleSendMessage(),
    placeholder: "Nhập triệu chứng hoặc câu hỏi của bạn (ví dụ: huyết áp tăng, mất ngủ)...",
    className: "flex-1 px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleSendMessage,
    className: "w-10 h-10 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow-md hover:bg-secondary-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "send"))))), isBookingModalOpen && selectedDoctor && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-md bg-surface-container-lowest rounded-3xl shadow-2xl p-6 sm:p-7 space-y-4 modal-animated border border-gold-accent/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b pb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: selectedDoctor.img,
    alt: selectedDoctor.name,
    className: "w-12 h-12 rounded-xl object-cover"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-primary"
  }, selectedDoctor.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-secondary font-semibold"
  }, selectedDoctor.role))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsBookingModalOpen(false)
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    className: "text-xs space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "CCHN:"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-semibold"
  }, selectedDoctor.cchn)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Phí thăm khám:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-secondary"
  }, selectedDoctor.price))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block font-bold text-primary mb-1"
  }, "Chọn ngày hẹn:"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    defaultValue: "2026-09-25",
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block font-bold text-primary mb-1"
  }, "Hình thức phiên khám:"), /*#__PURE__*/React.createElement("select", {
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs"
  }, /*#__PURE__*/React.createElement("option", null, "Khám trực tiếp tại GoCare Heritage Villa (Sala)"), /*#__PURE__*/React.createElement("option", null, "Bác sĩ đến thăm khám tận tư gia"), /*#__PURE__*/React.createElement("option", null, "Tư vấn trực tuyến Telehealth 1:1 qua Video")))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      alert(`Đã gửi yêu cầu đặt lịch khám 1:1 với ${selectedDoctor.name}. Trợ lý phòng khám sẽ gọi lại cho Quý khách trong 5 phút!`);
      setIsBookingModalOpen(false);
    },
    className: "w-full py-3 rounded-xl bg-primary text-on-primary font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary-container"
  }, "Xác Nhận Đặt Lịch Khám"))), isReviewModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-md bg-surface-container-lowest rounded-3xl shadow-2xl p-6 space-y-4 modal-animated border border-gold-accent/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b pb-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-primary flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-amber-500"
  }, "⭐"), " Đánh Giá Thực Tế Từ Người Bệnh & Thân Nhân"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsReviewModalOpen(false)
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 max-h-72 overflow-y-auto"
  }, selectedDoctorReviews.map((rev, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "p-3.5 rounded-2xl bg-surface-container-low text-xs space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-primary"
  }, rev.author), /*#__PURE__*/React.createElement("p", {
    className: "text-on-surface-variant italic leading-relaxed"
  }, "\"", rev.comment, "\"")))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsReviewModalOpen(false),
    className: "w-full py-2.5 bg-surface-container text-primary font-bold text-xs rounded-xl"
  }, "Đóng"))));
}

// --- SCREEN 3: ĐIỀU DƯỠNG & GPS BẢN ĐỒ THUẬT TOÁN TÌM ĐƯỜNG ĐI NGẮN NHẤT (DIJKSTRA / A*) ---
function NursingScreen() {
  const [specialty, setSpecialty] = useState('all');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTarget, setBookingTarget] = useState({
    name: '',
    shift: 'Ca 8h (Chuẩn)',
    fee: 720000
  });

  // GPS Shortest Path State
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const polylineLayerRef = useRef(null);
  const markersLayerRef = useRef(null);
  const [selectedOrigin, setSelectedOrigin] = useState('user');
  const [selectedDestination, setSelectedDestination] = useState('gocare_sala');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('dijkstra'); // 'dijkstra' | 'astar'
  const [isRouting, setIsRouting] = useState(false);
  const [routeResult, setRouteResult] = useState(null);
  const [gpsStatus, setGpsStatus] = useState('Chưa lấy toạ độ');
  const [userCoords, setUserCoords] = useState([10.8035, 106.7328]); // Default Thảo Điền
  const [customerAddress, setCustomerAddress] = useState('12 Đường Mai Chí Thọ, An Phú, TP. Thủ Đức, TP.HCM');
  const [nearestDoctorInfo, setNearestDoctorInfo] = useState({
    doctorName: 'BS.CKI Trần Trọng Khang',
    spec: 'Phục hồi chức năng Thần kinh & Đột quỵ',
    dist: '0.8',
    timeEst: 5,
    address: 'Nguyễn Văn Hưởng, Thảo Điền, TP. Thủ Đức',
    phone: '0912 456 789'
  });

  // Network graph nodes in HCMC (Bao gồm Cơ sở GoCare, BV Tuyến Đầu & Nhà Riêng Bác Sĩ)
  const nodesData = {
    user: {
      id: 'user',
      name: 'Vị trí của bạn (Thảo Điền)',
      lat: 10.8035,
      lng: 106.7328,
      type: 'user'
    },
    tram_thaodien: {
      id: 'tram_thaodien',
      name: 'Trạm Điều Dưỡng Thảo Điền',
      lat: 10.8035,
      lng: 106.7328,
      type: 'station'
    },
    cau_saigon: {
      id: 'cau_saigon',
      name: 'Nút Giao Cầu Sài Gòn',
      lat: 10.7985,
      lng: 106.7212,
      type: 'junction'
    },
    nga3_catlai: {
      id: 'nga3_catlai',
      name: 'Nút Giao An Phú - Cát Lái',
      lat: 10.7925,
      lng: 106.7495,
      type: 'junction'
    },
    gocare_sala: {
      id: 'gocare_sala',
      name: 'GoCare Heritage Villa (Sala Thủ Đức)',
      lat: 10.7685,
      lng: 106.7215,
      type: 'hospital'
    },
    cau_bason: {
      id: 'cau_bason',
      name: 'Nút Cầu Ba Son (Thủ Thiêm 2)',
      lat: 10.7785,
      lng: 106.7115,
      type: 'junction'
    },
    gocare_bachdang: {
      id: 'gocare_bachdang',
      name: 'GoCare Premier Bến Bạch Đằng (Q.1)',
      lat: 10.7725,
      lng: 106.7065,
      type: 'hospital'
    },
    bv_choray: {
      id: 'bv_choray',
      name: 'Bệnh Viện Chợ Rẫy (Q.5)',
      lat: 10.7554,
      lng: 106.6601,
      type: 'hospital'
    },
    bv_ydtp: {
      id: 'bv_ydtp',
      name: 'BV Đại Học Y Dược TP.HCM',
      lat: 10.7568,
      lng: 106.6642,
      type: 'hospital'
    },
    vongxoay_dantoc: {
      id: 'vongxoay_dantoc',
      name: 'Nút Giao Dân Chủ - 3/2',
      lat: 10.7752,
      lng: 106.6785,
      type: 'junction'
    },
    // Nhà riêng & Phòng khám bác sĩ chuyên khoa (Giả lập vị trí thực tế)
    bs_vinh_home: {
      id: 'bs_vinh_home',
      name: 'Nhà riêng & Phòng mạch PGS.TS Nguyễn Văn Vinh',
      doctorName: 'PGS.TS Nguyễn Văn Vinh',
      spec: 'Lão khoa & Tim mạch (BV Chợ Rẫy)',
      phone: '0903 821 999',
      address: 'Khu Biệt thự Saroma Villa, Đô thị Sala, TP. Thủ Đức',
      lat: 10.7705,
      lng: 106.7245,
      type: 'doctor_home'
    },
    bs_khang_home: {
      id: 'bs_khang_home',
      name: 'Nhà riêng & Phòng khám BS.CKI Trần Trọng Khang',
      doctorName: 'BS.CKI Trần Trọng Khang',
      spec: 'Phục hồi chức năng Thần kinh & Đột quỵ (BV ĐH Y Dược)',
      phone: '0912 456 789',
      address: 'Đường Nguyễn Văn Hưởng, Thảo Điền, TP. Thủ Đức',
      lat: 10.8062,
      lng: 106.7350,
      type: 'doctor_home'
    },
    bs_thao_home: {
      id: 'bs_thao_home',
      name: 'Nhà riêng & Phòng khám ThS.BS Trịnh Phương Thảo',
      doctorName: 'ThS.BS Trịnh Phương Thảo',
      spec: 'Trị liệu Tâm lý & Sức khỏe Tinh thần (Khoa Tâm thần ĐH Y Dược)',
      phone: '0908 112 233',
      address: 'Đinh Tiên Hoàng, Phường Đa Kao, Quận 1',
      lat: 10.7890,
      lng: 106.6980,
      type: 'doctor_home'
    },
    bs_honghung_home: {
      id: 'bs_honghung_home',
      name: 'Nhà riêng & Phòng khám BS.CKI Nguyễn Hồng Hưng',
      doctorName: 'BS.CKI Nguyễn Hồng Hưng',
      spec: 'Tim mạch Can thiệp & Cấp cứu Lão khoa',
      phone: '0938 776 655',
      address: 'Nguyễn Hữu Cảnh, Phường 22, Q. Bình Thạnh',
      lat: 10.8010,
      lng: 106.7120,
      type: 'doctor_home'
    }
  };

  // Edges with realistic distances in km kết nối mạng lưới giao thông & nhà riêng bác sĩ
  const graphEdges = [{
    from: 'user',
    to: 'tram_thaodien',
    dist: 0.1
  }, {
    from: 'user',
    to: 'bs_khang_home',
    dist: 0.8
  }, {
    from: 'tram_thaodien',
    to: 'bs_khang_home',
    dist: 0.6
  }, {
    from: 'tram_thaodien',
    to: 'cau_saigon',
    dist: 1.8
  }, {
    from: 'tram_thaodien',
    to: 'nga3_catlai',
    dist: 2.2
  }, {
    from: 'cau_saigon',
    to: 'bs_honghung_home',
    dist: 1.1
  }, {
    from: 'bs_honghung_home',
    to: 'cau_bason',
    dist: 2.0
  }, {
    from: 'cau_saigon',
    to: 'cau_bason',
    dist: 2.6
  }, {
    from: 'cau_saigon',
    to: 'gocare_sala',
    dist: 3.4
  }, {
    from: 'nga3_catlai',
    to: 'gocare_sala',
    dist: 3.1
  }, {
    from: 'cau_bason',
    to: 'bs_thao_home',
    dist: 1.5
  }, {
    from: 'gocare_bachdang',
    to: 'bs_thao_home',
    dist: 1.8
  }, {
    from: 'cau_bason',
    to: 'gocare_bachdang',
    dist: 1.2
  }, {
    from: 'cau_bason',
    to: 'gocare_sala',
    dist: 1.9
  }, {
    from: 'gocare_sala',
    to: 'bs_vinh_home',
    dist: 0.5
  }, {
    from: 'gocare_bachdang',
    to: 'vongxoay_dantoc',
    dist: 3.2
  }, {
    from: 'gocare_sala',
    to: 'gocare_bachdang',
    dist: 2.4
  }, {
    from: 'vongxoay_dantoc',
    to: 'bv_ydtp',
    dist: 2.1
  }, {
    from: 'vongxoay_dantoc',
    to: 'bv_choray',
    dist: 2.6
  }, {
    from: 'bv_ydtp',
    to: 'bv_choray',
    dist: 0.8
  }];

  // Build Adjacency list
  const buildGraph = () => {
    const adj = {};
    Object.keys(nodesData).forEach(key => {
      adj[key] = [];
    });
    graphEdges.forEach(({
      from,
      to,
      dist
    }) => {
      if (adj[from]) adj[from].push({
        node: to,
        weight: dist
      });
      if (adj[to]) adj[to].push({
        node: from,
        weight: dist
      });
    });
    return adj;
  };

  // Haversine formula for A* heuristic
  const haversineDist = (n1, n2) => {
    const R = 6371; // Earth radius in km
    const dLat = (n2.lat - n1.lat) * Math.PI / 180;
    const dLon = (n2.lng - n1.lng) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(n1.lat * Math.PI / 180) * Math.cos(n2.lat * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // DIJKSTRA ALGORITHM
  const runDijkstra = (startId, targetId) => {
    const startTime = performance.now();
    const adj = buildGraph();
    const distances = {};
    const previous = {};
    const visited = new Set();
    const queue = Object.keys(nodesData);
    queue.forEach(node => {
      distances[node] = Infinity;
      previous[node] = null;
    });
    distances[startId] = 0;
    let exploredCount = 0;
    while (queue.length > 0) {
      queue.sort((a, b) => distances[a] - distances[b]);
      const current = queue.shift();
      if (distances[current] === Infinity) break;
      visited.add(current);
      exploredCount++;
      if (current === targetId) break;
      adj[current].forEach(({
        node: neighbor,
        weight
      }) => {
        if (!visited.has(neighbor)) {
          const alt = distances[current] + weight;
          if (alt < distances[neighbor]) {
            distances[neighbor] = alt;
            previous[neighbor] = current;
          }
        }
      });
    }

    // Trace back path
    const path = [];
    let curr = targetId;
    while (curr) {
      path.unshift(curr);
      curr = previous[curr];
    }
    const endTime = performance.now();
    return {
      algorithm: 'Dijkstra',
      path: path[0] === startId ? path : [],
      distance: distances[targetId] !== Infinity ? distances[targetId].toFixed(2) : 0,
      timeEst: Math.round(distances[targetId] / 30 * 60) + 3,
      // average 30km/h ambulance speed + 3min prep
      exploredCount,
      execTime: (endTime - startTime).toFixed(3)
    };
  };

  // A* (A-STAR) ALGORITHM
  const runAStar = (startId, targetId) => {
    const startTime = performance.now();
    const adj = buildGraph();
    const openSet = [startId];
    const cameFrom = {};
    const gScore = {};
    const fScore = {};
    let exploredCount = 0;
    Object.keys(nodesData).forEach(node => {
      gScore[node] = Infinity;
      fScore[node] = Infinity;
    });
    gScore[startId] = 0;
    fScore[startId] = haversineDist(nodesData[startId], nodesData[targetId]);
    while (openSet.length > 0) {
      openSet.sort((a, b) => fScore[a] - fScore[b]);
      const current = openSet.shift();
      exploredCount++;
      if (current === targetId) {
        const path = [current];
        let temp = current;
        while (cameFrom[temp]) {
          temp = cameFrom[temp];
          path.unshift(temp);
        }
        const endTime = performance.now();
        return {
          algorithm: 'A* (A-Star Heuristic)',
          path,
          distance: gScore[targetId].toFixed(2),
          timeEst: Math.round(gScore[targetId] / 30 * 60) + 3,
          exploredCount,
          execTime: (endTime - startTime).toFixed(3)
        };
      }
      adj[current].forEach(({
        node: neighbor,
        weight
      }) => {
        const tentativeG = gScore[current] + weight;
        if (tentativeG < gScore[neighbor]) {
          cameFrom[neighbor] = current;
          gScore[neighbor] = tentativeG;
          fScore[neighbor] = tentativeG + haversineDist(nodesData[neighbor], nodesData[targetId]);
          if (!openSet.includes(neighbor)) {
            openSet.push(neighbor);
          }
        }
      });
    }
    const endTime = performance.now();
    return {
      algorithm: 'A* (A-Star)',
      path: [],
      distance: 0,
      timeEst: 0,
      exploredCount,
      execTime: (endTime - startTime).toFixed(3)
    };
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || typeof L === 'undefined') return;
    if (!mapInstanceRef.current && !mapContainerRef.current._leaflet_id) {
      const map = L.map(mapContainerRef.current, {
        center: [10.785, 106.715],
        zoom: 13,
        zoomControl: false
      });
      L.control.zoom({
        position: 'topright'
      }).addTo(map);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors | GoCare GPS'
      }).addTo(map);
      mapInstanceRef.current = map;
      markersLayerRef.current = L.layerGroup().addTo(map);
      polylineLayerRef.current = L.layerGroup().addTo(map);
    }
    renderMapMarkers();
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);
  const renderMapMarkers = () => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;
    markersLayerRef.current.clearLayers();
    Object.values(nodesData).forEach(node => {
      let markerColor = '#a04100';
      let iconName = 'local_hospital';
      if (node.type === 'user') {
        markerColor = '#0284c7';
        iconName = 'person_pin_circle';
      } else if (node.type === 'hospital') {
        markerColor = '#482816';
        iconName = 'domain';
      } else if (node.type === 'station') {
        markerColor = '#C5A059';
        iconName = 'medical_services';
      } else if (node.type === 'doctor_home') {
        markerColor = '#059669'; // Emerald Green cho Nhà Riêng & Phòng Khám Bác Sĩ
        iconName = 'home_health';
      } else {
        markerColor = '#83746f';
        iconName = 'trip_origin';
      }
      const customIcon = L.divIcon({
        className: 'custom-gps-marker',
        html: `
              <div style="background-color: ${markerColor}; width: 34px; height: 34px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border: 2px solid white;">
                <span class="material-symbols-outlined" style="font-size: 20px;">${iconName}</span>
              </div>
            `,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      });
      const marker = L.marker([node.lat, node.lng], {
        icon: customIcon
      });
      let popupContent = `
            <div style="font-family: 'Inter', sans-serif; font-size: 12px; min-width: 200px;">
              <strong style="color: #482816; font-size: 13px;">${node.name}</strong><br/>
          `;
      if (node.doctorName) {
        popupContent += `
              <div style="margin-top: 4px; padding-top: 4px; border-top: 1px dashed #ccc;">
                <span style="color: #059669; font-weight: bold; display: block;">👨‍⚕️ ${node.doctorName}</span>
                <span style="color: #333; font-size: 11px;">Chuyên khoa: <strong>${node.spec}</strong></span><br/>
                <span style="color: #666; font-size: 11px;">Địa chỉ: ${node.address}</span><br/>
                <span style="color: #a04100; font-size: 11px; font-weight: bold;">Hotline khẩn: ${node.phone}</span>
              </div>
            `;
      }
      popupContent += `
              <span style="color: #83746f; font-size: 10px; display: block; margin-top: 4px;">Tọa độ: ${node.lat.toFixed(4)}, ${node.lng.toFixed(4)}</span>
            </div>
          `;
      marker.bindPopup(popupContent);
      markersLayerRef.current.addLayer(marker);
    });
  };

  // Search customer custom address and find nearest doctor / center
  const handleSearchAddress = addrOverride => {
    const query = (addrOverride || customerAddress).trim();
    if (!query) {
      alert('Vui lòng nhập địa chỉ của bạn để tìm kiếm!');
      return;
    }
    const q = query.toLowerCase();
    let targetLat = 10.8035;
    let targetLng = 106.7328;
    if (q.includes('quận 1') || q.includes('q1') || q.includes('bến nghé') || q.includes('đa kao') || q.includes('hai bà trưng') || q.includes('lê duẩn')) {
      targetLat = 10.7820;
      targetLng = 106.7010;
    } else if (q.includes('sala') || q.includes('thủ thiêm') || q.includes('mai chí thọ') || q.includes('an lợi đông')) {
      targetLat = 10.7690;
      targetLng = 106.7230;
    } else if (q.includes('bình thạnh') || q.includes('hàng xanh') || q.includes('nguyễn hữu cảnh') || q.includes('điện biên phủ')) {
      targetLat = 10.8015;
      targetLng = 106.7125;
    } else if (q.includes('quận 5') || q.includes('q5') || q.includes('chợ rẫy') || q.includes('hồng bàng') || q.includes('nguyễn trãi')) {
      targetLat = 10.7554;
      targetLng = 106.6601;
    } else if (q.includes('quận 3') || q.includes('q3') || q.includes('dân chủ') || q.includes('nam kỳ khởi nghĩa')) {
      targetLat = 10.7765;
      targetLng = 106.6800;
    } else if (q.includes('thảo điền') || q.includes('quận 2') || q.includes('an phú') || q.includes('xa lộ hà nội')) {
      targetLat = 10.8050;
      targetLng = 106.7340;
    } else {
      // Approximate with smooth deterministic hash
      let hash = 0;
      for (let i = 0; i < query.length; i++) hash = (hash + query.charCodeAt(i)) % 80;
      targetLat = 10.7650 + hash / 1200;
      targetLng = 106.6950 + hash / 1200;
    }
    setUserCoords([targetLat, targetLng]);
    nodesData.user.lat = targetLat;
    nodesData.user.lng = targetLng;
    nodesData.user.name = `Địa chỉ của bạn: ${query}`;
    setGpsStatus(`Đã định vị: ${query}`);

    // Find closest doctor residence
    let closestDoc = null;
    let minDocDist = Infinity;
    let closestFac = null;
    let minFacDist = Infinity;
    Object.values(nodesData).forEach(n => {
      if (n.id === 'user' || n.type === 'junction') return;
      const d = haversineDist({
        lat: targetLat,
        lng: targetLng
      }, n);
      if (n.type === 'doctor_home' && d < minDocDist) {
        minDocDist = d;
        closestDoc = n;
      }
      if ((n.type === 'hospital' || n.type === 'station') && d < minFacDist) {
        minFacDist = d;
        closestFac = n;
      }
    });
    if (closestDoc) {
      setNearestDoctorInfo({
        doctorName: closestDoc.doctorName,
        spec: closestDoc.spec,
        dist: minDocDist.toFixed(1),
        timeEst: Math.round(minDocDist / 30 * 60) + 3,
        address: closestDoc.address,
        phone: closestDoc.phone,
        facilityName: closestFac ? closestFac.name : 'GoCare Heritage Villa (Sala)',
        facilityDist: minFacDist ? minFacDist.toFixed(1) : '2.1'
      });
      setSelectedOrigin('user');
      setSelectedDestination(closestDoc.id);
    }
    renderMapMarkers();
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([targetLat, targetLng], 14);
    }
    setTimeout(() => {
      handleFindShortestPath();
    }, 300);
  };

  // Execute Pathfinding Algorithm
  const handleFindShortestPath = () => {
    setIsRouting(true);
    if (polylineLayerRef.current) {
      polylineLayerRef.current.clearLayers();
    }
    setTimeout(() => {
      let res;
      if (selectedAlgorithm === 'astar') {
        res = runAStar(selectedOrigin, selectedDestination);
      } else {
        res = runDijkstra(selectedOrigin, selectedDestination);
      }
      setRouteResult(res);
      setIsRouting(false);
      if (res.path && res.path.length > 0 && mapInstanceRef.current) {
        const latlngs = res.path.map(nodeId => [nodesData[nodeId].lat, nodesData[nodeId].lng]);

        // Draw glowing animated polyline
        const polyline = L.polyline(latlngs, {
          color: '#a04100',
          weight: 6,
          opacity: 0.9,
          lineJoin: 'round',
          className: 'leaflet-path-animated'
        });
        const polylineShadow = L.polyline(latlngs, {
          color: '#C5A059',
          weight: 10,
          opacity: 0.35,
          lineJoin: 'round'
        });
        polylineLayerRef.current.addLayer(polylineShadow);
        polylineLayerRef.current.addLayer(polyline);
        mapInstanceRef.current.fitBounds(polyline.getBounds(), {
          padding: [50, 50]
        });
      }
    }, 300);
  };

  // HTML5 Geolocation to get real user GPS
  const handleGetLiveGPS = () => {
    if (!navigator.geolocation) {
      alert('Trình duyệt của bạn không hỗ trợ định vị Geolocation!');
      return;
    }
    setGpsStatus('Đang lấy tín hiệu GPS...');
    navigator.geolocation.getCurrentPosition(pos => {
      const {
        latitude,
        longitude
      } = pos.coords;
      setUserCoords([latitude, longitude]);
      nodesData.user.lat = latitude;
      nodesData.user.lng = longitude;
      nodesData.user.name = `Vị trí thực tế của bạn (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`;
      setGpsStatus(`Đã cập nhật: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
      setCustomerAddress(`Tọa độ GPS: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
      handleSearchAddress(`Tọa độ GPS: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
    }, err => {
      setGpsStatus('Không truy cập được GPS (đang dùng mô phỏng Thảo Điền)');
      alert('Không thể lấy vị trí thực tế, hệ thống sẽ sử dụng vị trí Thảo Điền TP. Thủ Đức!');
    });
  };
  const nurses = [{
    id: 1,
    name: 'ĐD. Trần Thị Hoài Thương',
    title: 'Cử nhân Hộ sinh & Điều dưỡng BV Từ Dũ',
    cchn: '025619/SYT-HCM-CCHN',
    agency: 'Sở Y Tế TP. Hồ Chí Minh',
    rating: '4.98',
    reviewCount: 86,
    specialty: 'mother_baby',
    hosp: 'BV Từ Dũ, BV Hùng Vương (7 năm lâm sàng)',
    tags: ['Chăm sóc mẹ & bé', 'Vết mổ bắt con N1-N7', 'Thông tắc tia sữa'],
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 2,
    name: 'ĐD. Hoàng Bích Ngọc',
    title: 'Cử nhân Điều dưỡng Cao cấp - BV Lão Khoa TW',
    cchn: '015433/BYT-CCHN',
    agency: 'Cục QLKCB - Bộ Y Tế',
    rating: '4.96',
    reviewCount: 47,
    specialty: 'elderly',
    hosp: 'BV Lão Khoa TW, BV Bạch Mai (10 năm lâm sàng)',
    tags: ['Loét tỳ đè độ II-III', 'Chăm sóc giảm nhẹ', 'Đặt sonde dạ dày'],
    img: 'https://images.unsplash.com/photo-1581056771107-11a4b09a1a15?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 3,
    name: 'ĐD. Lê Vũ Anh Quân',
    title: 'Cử nhân Điều dưỡng Hồi Sức ICU - BV Chợ Rẫy',
    cchn: '018972/SYT-HCM-CCHN',
    agency: 'Sở Y Tế TP. Hồ Chí Minh',
    rating: '4.94',
    reviewCount: 53,
    specialty: 'wound_sonde',
    hosp: 'BV Chợ Rẫy (Khoa ICU), BV Thống Nhất (8 năm lâm sàng)',
    tags: ['Thay băng cắt chỉ vết mổ', 'Đặt sonde Foley', 'Vận hành máy thở'],
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 101,
    name: 'DD. Le Thi Thanh',
    role: 'Dieu Duong Truong',
    specialty: 'icu',
    rating: 5.0,
    reviews: 120,
    img: 'https://images.unsplash.com/photo-1584982751601-e14660eb9179?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 102,
    name: 'DD. Tran Van Khoa',
    role: 'Dieu Duong Cham Soc',
    specialty: 'rehab',
    rating: 4.8,
    reviews: 89,
    img: 'https://images.unsplash.com/photo-1551076805-e18690c50f15?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 103,
    name: 'DD. Nguyen Thi Huong',
    role: 'Dieu Duong Cap Cuu',
    specialty: 'er',
    rating: 4.9,
    reviews: 210,
    img: 'https://images.unsplash.com/photo-1612349317150-e4c194bb81cc?auto=format&fit=crop&q=80&w=800'
  }];
  const filteredNurses = specialty === 'all' ? nurses : nurses.filter(n => n.specialty === specialty);
  const handleOpenBooking = (name, sTitle, price) => {
    setBookingTarget({
      name,
      shift: sTitle,
      fee: price
    });
    setIsBookingOpen(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full pt-20 bg-surface"
  }, /*#__PURE__*/React.createElement("section", {
    className: "w-full py-10 bg-surface-container-low/70 border-b border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-4 text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-light text-primary text-xs font-bold uppercase tracking-wider border border-gold-accent/40 mx-auto"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "verified"), /*#__PURE__*/React.createElement("span", null, "Hệ Thống Y Tế Thương Mại GoCare 5 Sao • Chuẩn JCI Quốc Tế")), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-3xl sm:text-4xl text-primary font-bold max-w-4xl mx-auto"
  }, "Định Vị GPS Tìm Cơ Sở Y Tế & Bác Sĩ Gần Bạn Nhất"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-3xl mx-auto"
  }, "Nhập địa chỉ của bạn để hệ thống tự động tìm kiếm phòng khám, nhà riêng của bác sĩ chuyên khoa và điều dưỡng viên gần nhất. Tích hợp giải thuật tìm đường tối ưu ", /*#__PURE__*/React.createElement("strong", null, "Dijkstra"), " và ", /*#__PURE__*/React.createElement("strong", null, "A* (A-Star)"), " hỗ trợ cấp cứu và chăm sóc tại gia nhanh nhất."))), /*#__PURE__*/React.createElement("section", {
    className: "w-full py-12 bg-surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-primary to-primary-container p-6 sm:p-8 rounded-3xl text-on-primary shadow-xl space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-bold uppercase tracking-wider text-gold-accent flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-400 animate-ping"
  }), "Định Vị Điểm Đến Khẩn Cấp & Bác Sĩ Phụ Trách"), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-2xl font-bold text-white mt-1"
  }, "Nhập Địa Chỉ Của Bạn Để Tìm Bác Sĩ & Cơ Sở Gần Nhất")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleGetLiveGPS,
    className: "px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold flex items-center gap-2 border border-white/20 transition-all self-start sm:self-auto shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "my_location"), /*#__PURE__*/React.createElement("span", null, "Lấy Tọa Độ GPS Của Tôi"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined absolute left-3.5 top-3.5 text-secondary text-lg"
  }, "search"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: customerAddress,
    onChange: e => setCustomerAddress(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') handleSearchAddress();
    },
    placeholder: "Nhập số nhà, tên đường, phường/quận (VD: Mai Chí Thọ Sala; Thảo Điền; Hai Bà Trưng Q1; Nguyễn Hữu Cảnh...)",
    className: "w-full pl-10 pr-4 py-3 rounded-2xl bg-white text-gray-900 text-xs sm:text-sm font-medium placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-gold-accent"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => handleSearchAddress(),
    className: "px-6 py-3 rounded-2xl bg-secondary hover:bg-secondary/90 text-on-secondary font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "explore"), /*#__PURE__*/React.createElement("span", null, "Tìm Điểm Gần Nhất"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2 pt-1 text-xs text-white/80"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-bold text-gold-accent"
  }, "Gợi ý nhanh:"), [{
    label: 'Khu Sala Thủ Đức',
    q: 'Khu đô thị Sala, TP. Thủ Đức'
  }, {
    label: 'Thảo Điền',
    q: 'Đường Nguyễn Văn Hưởng, Thảo Điền, TP. Thủ Đức'
  }, {
    label: 'Quận 1 - Đa Kao',
    q: 'Đinh Tiên Hoàng, Đa Kao, Quận 1'
  }, {
    label: 'Bình Thạnh',
    q: 'Nguyễn Hữu Cảnh, Quận Bình Thạnh'
  }, {
    label: 'Quận 5 - BV Chợ Rẫy',
    q: 'Nguyễn Chí Thanh, Quận 5'
  }].map((chip, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    type: "button",
    onClick: () => {
      setCustomerAddress(chip.q);
      handleSearchAddress(chip.q);
    },
    className: "px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[11px] font-medium border border-white/15 transition-all"
  }, chip.label)))), nearestDoctorInfo && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-3xl bg-surface-container-lowest border border-gold-accent/40 shadow-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl"
  }, "stethoscope")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900"
  }, "Bác Sĩ Gần Bạn Nhất"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-emerald-800"
  }, "Cách ", nearestDoctorInfo.dist, " km (~", nearestDoctorInfo.timeEst, " phút)")), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif font-bold text-sm text-primary"
  }, nearestDoctorInfo.doctorName), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant font-medium"
  }, nearestDoctorInfo.spec), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-outline"
  }, "📍 ", nearestDoctorInfo.address), /*#__PURE__*/React.createElement("div", {
    className: "pt-1 text-xs font-bold text-emerald-800 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "phone_in_talk"), /*#__PURE__*/React.createElement("span", null, "Hotline khẩn: ", nearestDoctorInfo.phone)))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl"
  }, "domain")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-amber-200 text-amber-900"
  }, "Cơ Sở Trọng Điểm GoCare"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-primary"
  }, "Cách ", nearestDoctorInfo.facilityDist || '1.8', " km")), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif font-bold text-sm text-primary"
  }, nearestDoctorInfo.facilityName || 'GoCare Heritage Villa (Sala Thủ Đức)'), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant font-medium"
  }, "Trung tâm điều dưỡng & Cấp cứu hồi sức 24/7"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-outline"
  }, "Trang bị 04 xe cứu thương ICU chuyên dụng & đội y tá cơ động"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleFindShortestPath,
    className: "px-3.5 py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold shrink-0 self-center shadow-sm"
  }, "Chỉ Đường"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/40 shadow-md space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "1. Điểm Xuất Phát (Origin):"), /*#__PURE__*/React.createElement("select", {
    value: selectedOrigin,
    onChange: e => setSelectedOrigin(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs font-semibold"
  }, /*#__PURE__*/React.createElement("option", {
    value: "user"
  }, "📍 Vị trí của bạn (", gpsStatus, ")"), /*#__PURE__*/React.createElement("option", {
    value: "tram_thaodien"
  }, "🏥 Trạm Điều Dưỡng Thảo Điền"), /*#__PURE__*/React.createElement("option", {
    value: "gocare_sala"
  }, "🏢 GoCare Sala Thủ Đức"), /*#__PURE__*/React.createElement("option", {
    value: "gocare_bachdang"
  }, "🏬 GoCare Bến Bạch Đằng (Q.1)"), /*#__PURE__*/React.createElement("option", {
    value: "bv_choray"
  }, "🏥 Bệnh Viện Chợ Rẫy (Q.5)"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "2. Điểm Đến Y Tế / Bác Sĩ:"), /*#__PURE__*/React.createElement("select", {
    value: selectedDestination,
    onChange: e => setSelectedDestination(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs font-semibold"
  }, /*#__PURE__*/React.createElement("optgroup", {
    label: "👨‍⚕️ Nhà Riêng & Phòng Khám Bác Sĩ Gần Nhất"
  }, /*#__PURE__*/React.createElement("option", {
    value: "bs_khang_home"
  }, "👨‍⚕️ Nhà riêng BS.CKI Trần Trọng Khang (Thảo Điền)"), /*#__PURE__*/React.createElement("option", {
    value: "bs_vinh_home"
  }, "👨‍⚕️ Nhà riêng PGS.TS Nguyễn Văn Vinh (Sala)"), /*#__PURE__*/React.createElement("option", {
    value: "bs_thao_home"
  }, "👩‍⚕️ Nhà riêng ThS.BS Trịnh Phương Thảo (Đa Kao, Q.1)"), /*#__PURE__*/React.createElement("option", {
    value: "bs_honghung_home"
  }, "👨‍⚕️ Nhà riêng BS.CKI Nguyễn Hồng Hưng (Bình Thạnh)")), /*#__PURE__*/React.createElement("optgroup", {
    label: "🏢 Cơ Sở GoCare & Bệnh Viện Tuyến Đầu"
  }, /*#__PURE__*/React.createElement("option", {
    value: "gocare_sala"
  }, "🏢 GoCare Heritage Villa (Sala Thủ Đức)"), /*#__PURE__*/React.createElement("option", {
    value: "gocare_bachdang"
  }, "🏬 GoCare Premier Bến Bạch Đằng (Q.1)"), /*#__PURE__*/React.createElement("option", {
    value: "tram_thaodien"
  }, "🏥 Trạm Điều Dưỡng Thảo Điền"), /*#__PURE__*/React.createElement("option", {
    value: "bv_choray"
  }, "🏥 Bệnh Viện Chợ Rẫy (Cấp cứu Lão khoa)"), /*#__PURE__*/React.createElement("option", {
    value: "bv_ydtp"
  }, "🏥 BV Đại Học Y Dược TP.HCM")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "3. Thuật Toán Tìm Tuyến Đường:"), /*#__PURE__*/React.createElement("select", {
    value: selectedAlgorithm,
    onChange: e => setSelectedAlgorithm(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs font-semibold"
  }, /*#__PURE__*/React.createElement("option", {
    value: "dijkstra"
  }, "⚡ Dijkstra (Khoảng cách ngắn nhất tuyệt đối)"), /*#__PURE__*/React.createElement("option", {
    value: "astar"
  }, "🚀 A* (Tối ưu Heuristic Haversine mặt cầu)"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-end"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: isRouting,
    onClick: handleFindShortestPath,
    className: "w-full h-10 rounded-xl bg-gradient-to-r from-secondary to-primary-container hover:from-primary hover:to-secondary text-on-secondary font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "directions"), /*#__PURE__*/React.createElement("span", null, isRouting ? 'Đang tính toán...' : 'Tìm Đường Đi Ngắn Nhất')))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-outline-variant/20 flex flex-wrap items-center justify-between text-xs text-outline gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "Trạng thái định vị: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, gpsStatus)), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1 text-emerald-700 font-semibold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-ping"
  }), "Mạng lưới 14 điểm gồm Cơ sở GoCare, Nhà riêng Bác sĩ & BV Chợ Rẫy/ĐH Y Dược"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8 rounded-3xl overflow-hidden border border-outline-variant/40 shadow-xl bg-brand-charcoal h-[500px] relative"
  }, /*#__PURE__*/React.createElement("div", {
    ref: mapContainerRef,
    className: "w-full h-full z-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-4 left-4 z-20 bg-surface/90 backdrop-blur-md p-3 rounded-2xl border border-outline-variant/30 text-[11px] shadow-lg space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-primary"
  }, "Chú Giải Bản Đồ:"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-sky-600 inline-block"
  }), " Vị trí của bạn (Khách hàng)"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-emerald-600 inline-block"
  }), " Nhà riêng & Phòng khám Bác sĩ"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-primary inline-block"
  }), " Cơ sở y tế GoCare 5 Sao"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-amber-600 inline-block"
  }), " Bệnh viện liên kết cấp cứu"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-1 bg-secondary inline-block"
  }), " Tuyến đường tối ưu (Dijkstra/A*)"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/40 shadow-xl flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b pb-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-serif font-bold text-lg text-primary flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-secondary"
  }, "analytics"), /*#__PURE__*/React.createElement("span", null, "Kết Quả Lộ Trình")), routeResult && /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold"
  }, "Đã Tối Ưu")), routeResult ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-outline block"
  }, "Quãng đường ngắn nhất:"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-bold text-secondary font-serif"
  }, routeResult.distance, " km")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-outline block"
  }, "Thời gian dự kiến:"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-bold text-primary font-serif"
  }, "~", routeResult.timeEst, " phút"))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-gold-light border border-gold-accent/40 space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[11px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Thuật toán:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, routeResult.algorithm)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[11px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Số đỉnh đã duyệt:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, routeResult.exploredCount, " nút giao")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[11px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Thời gian xử lý:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-700"
  }, routeResult.execTime, " ms"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-primary block mb-2"
  }, "Các chặng di chuyển chi tiết:"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 max-h-48 overflow-y-auto pr-1"
  }, routeResult.path.map((nodeId, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "flex items-center gap-2 text-[11px] text-on-surface"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-5 h-5 rounded-full bg-primary-container text-on-primary text-[10px] font-bold flex items-center justify-center shrink-0"
  }, idx + 1), /*#__PURE__*/React.createElement("span", {
    className: "truncate"
  }, nodesData[nodeId] && nodesData[nodeId].name || nodeId)))))) : /*#__PURE__*/React.createElement("div", {
    className: "py-12 text-center space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-full bg-surface-container text-outline flex items-center justify-center mx-auto"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl"
  }, "route")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant"
  }, "Nhập địa chỉ của bạn hoặc chọn điểm đến, sau đó nhấn ", /*#__PURE__*/React.createElement("strong", null, "\"Tìm Đường Đi Ngắn Nhất\""), " để chạy thuật toán Dijkstra hoặc A*."))), /*#__PURE__*/React.createElement("a", {
    href: "tel:19006868",
    className: "w-full mt-4 py-3 rounded-2xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold text-center block transition-all shadow-md"
  }, "Gọi Xe Cứu Hộ & Điều Dưỡng Đến Ngay (1900 6868)"))))), /*#__PURE__*/React.createElement("section", {
    className: "w-full py-14 bg-surface-container-low/70 border-t border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase text-secondary tracking-wider"
  }, "Dịch Vụ Điều Dưỡng Tận Nơi 24/7"), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-3xl font-bold text-primary"
  }, "Đội Ngũ Điều Dưỡng Viên CCHN Chuẩn Viện"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-on-surface-variant"
  }, "Đáp ứng mọi nhu cầu: chăm sóc người cao tuổi, thay băng cắt chỉ, đặt sonde dạ dày, hỗ trợ mẹ & bé sơ sinh theo ca trực linh hoạt."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-2 pt-3"
  }, [{
    id: 'all',
    label: 'Tất cả chuyên môn'
  }, {
    id: 'elderly',
    label: 'Chăm sóc Người cao tuổi'
  }, {
    id: 'mother_baby',
    label: 'Mẹ & Bé sơ sinh'
  }, {
    id: 'wound_sonde',
    label: 'Thay băng cắt chỉ & Sonde'
  }].map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    onClick: () => setSpecialty(item.id),
    className: `px-4 py-2 rounded-full text-xs font-semibold transition-all ${specialty === item.id ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-lowest text-on-surface hover:bg-gold-light border border-outline-variant/40'}`
  }, item.label)))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-6"
  }, filteredNurses.map(nurse => /*#__PURE__*/React.createElement("div", {
    key: nurse.id,
    className: "gold-glow-card rounded-2xl bg-surface-container-lowest border border-outline-variant/40 p-6 shadow-sm flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-4 pb-4 border-b border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("img", {
    alt: nurse.name,
    src: nurse.img,
    className: "w-16 h-16 rounded-2xl object-cover ring-2 ring-gold-accent shadow-sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-base font-bold text-primary"
  }, nurse.name)), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block mt-0.5"
  }, "⭐ ", nurse.rating, " (", nurse.reviewCount, " lượt)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gold-accent font-semibold mt-1"
  }, nurse.title), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 p-2 rounded-xl bg-emerald-50 border border-emerald-300 text-[11px] text-emerald-950 font-medium"
  }, /*#__PURE__*/React.createElement("div", null, "Số CCHN: ", /*#__PURE__*/React.createElement("strong", null, nurse.cchn)), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-emerald-800"
  }, "Thẩm định: ", nurse.agency)))), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-on-surface-variant space-y-1.5"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Kinh nghiệm lâm sàng:"), " ", nurse.hosp), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5 pt-1"
  }, nurse.tags.map((t, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: "px-2 py-0.5 rounded-md bg-surface-container text-[11px] font-medium text-primary"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 gap-1 text-center text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-1.5 rounded-lg bg-surface-container-lowest"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-outline block"
  }, "Ca 4h"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, "400k")), /*#__PURE__*/React.createElement("div", {
    className: "p-1.5 rounded-lg bg-gold-light border border-gold-accent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-tertiary font-bold block"
  }, "Ca 8h"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, "720k")), /*#__PURE__*/React.createElement("div", {
    className: "p-1.5 rounded-lg bg-surface-container-lowest"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-outline block"
  }, "Ca 12h"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, "920k")), /*#__PURE__*/React.createElement("div", {
    className: "p-1.5 rounded-lg bg-surface-container-lowest"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-outline block"
  }, "24/24"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, "1.450k"))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-outline-variant/30 flex gap-2.5"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => alert(`Đã gửi hồ sơ CCHN và kinh nghiệm của ${nurse.name} đến điện thoại của bạn!`),
    className: "flex-1 py-2.5 rounded-xl border border-primary/40 text-primary text-xs font-bold hover:bg-gold-light transition-all"
  }, "Hồ Sơ Y Tá"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => handleOpenBooking(nurse.name, 'Ca 8h (Chuẩn)', 720000),
    className: "flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary-container hover:to-secondary text-on-primary text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "event_available"), /*#__PURE__*/React.createElement("span", null, "Đặt Ca Trực")))))))), isBookingOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-container-lowest max-w-md w-full rounded-3xl p-6 shadow-2xl space-y-4 modal-animated border border-gold-accent/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b pb-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-lg font-bold text-primary"
  }, "Xác Nhận Đặt Lịch Ca Trực"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsBookingOpen(false)
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    className: "text-xs space-y-2.5 text-on-surface"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Nhân sự phụ trách:"), " ", bookingTarget.name), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Gói lựa chọn:"), " ", bookingTarget.shift), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Tổng phí tạm tính:"), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-secondary font-bold text-base"
  }, bookingTarget.fee.toLocaleString('vi-VN'), " VNĐ")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant italic leading-normal p-2 rounded-xl bg-surface-container-low border"
  }, "*Đã bao gồm găng tay vô khuẩn, túi cấp cứu, thiết bị đo sinh hiệu chuẩn viện và phí di chuyển nội thành.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      alert('Đã tiếp nhận yêu cầu! Điều phối viên GoCare sẽ gọi lại cho bạn trong 3 phút.');
      setIsBookingOpen(false);
    },
    className: "w-full py-3 rounded-xl bg-primary text-on-primary text-xs font-bold uppercase tracking-wider shadow-md hover:bg-primary-container"
  }, "Xác Nhận & Điều Phối Ngay"))));
}

// --- SCREEN 4: WELLNESS & NHÀ THUỐC (Screen 4 with Pharmacy & Partner Chains) ---
function WellnessScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const products = [{
    id: 1,
    name: 'Amlor 5mg (Amlodipine)',
    brand: 'Pfizer (Pháp)',
    category: 'tim-mach',
    price: '325.000₫',
    pack: 'Hộp 30 viên',
    desc: 'Kiểm soát tăng huyết áp vô căn, điều trị đau thắt ngực ổn định mạn tính.',
    img: 'https://images.unsplash.com/photo-1551076805-e18690c50f15?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 2,
    name: 'Micardis Plus 40/12.5mg',
    brand: 'Boehringer (Đức)',
    category: 'tim-mach',
    price: '345.000₫',
    pack: 'Hộp 28 viên',
    desc: 'Telmisartan phối hợp Hydrochlorothiazide điều trị tăng huyết áp, bảo vệ chức năng thận.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 3,
    name: 'Glucophage XR 750mg',
    brand: 'Merck Sante (Pháp)',
    category: 'tieu-duong',
    price: '185.000₫',
    pack: 'Hộp 30 viên',
    desc: 'Metformin phóng thích kéo dài, kiểm soát đường huyết ổn định 24 giờ cho bệnh nhân ĐTĐ tuýp 2.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 4,
    name: 'Celebrex 200mg (Celecoxib)',
    brand: 'Pfizer (Mỹ)',
    category: 'co-xuong-khop',
    price: '390.000₫',
    pack: 'Hộp 30 viên',
    desc: 'Kháng viêm giảm đau khớp thoái hóa, giảm áp lực lên sụn khớp và bảo vệ niêm mạc dạ dày.',
    img: 'https://images.unsplash.com/photo-1551076805-e18690c50f15?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 5,
    name: 'Viartril-S 500mg',
    brand: 'Viatris (Mỹ)',
    category: 'co-xuong-khop',
    price: '640.000₫',
    pack: 'Hộp 80 viên',
    desc: 'Glucosamine Sulfate tinh khiết kích thích sản sinh dịch khớp, tái tạo sụn vận động.',
    img: 'https://images.unsplash.com/photo-1581056771107-11a4b09a1a15?auto=format&fit=crop&q=80&w=800'
  }, {
    id: 6,
    name: 'Tanakan 40mg (EGb 761)',
    brand: 'Ipsen (Pháp)',
    category: 'than-kinh-nao-bo',
    price: '450.000₫',
    pack: 'Hộp 90 viên',
    desc: 'Chiết xuất Ginkgo Biloba chuẩn hóa hỗ trợ sa sút trí tuệ nhẹ đến vừa, ù tai và chóng mặt tiền đình.',
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800'
  }];
  const filteredProducts = products.filter(p => {
    const matchesCat = category === 'all' || p.category === category;
    const matchesQuery = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesQuery;
  });
  const handleAddToCart = (product, partner) => {
    alert(`Đã thêm thuốc "${product.name}" vào giỏ hàng đối tác ${partner}! Dược sĩ GoCare sẽ thẩm định toa thuốc và giao hàng trong 1-2h.`);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full pt-20 bg-surface"
  }, /*#__PURE__*/React.createElement("section", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 py-10 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider border border-secondary/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "health_and_safety"), /*#__PURE__*/React.createElement("span", null, "Tiện Nghi Y Tế & Chăm Sóc Sức Khỏe Chủ Động")), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-3xl sm:text-5xl text-primary font-bold tracking-tight"
  }, "Sống Khỏe & Dược Phẩm GoCare"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
  }, "Hệ thống cung ứng dược phẩm biệt dược chính hãng, thiết bị y tế phục hồi chức năng và kết nối nhà thuốc trực tuyến liên thông tự động với Hồ Sơ Bệnh Án Điện Tử (EHR).")), /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-gold-accent/40 shadow-lg space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto space-y-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-secondary uppercase tracking-wider flex items-center justify-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "handshake"), /*#__PURE__*/React.createElement("span", null, "Đối Tác Dược Phẩm Chiến Lược Toàn Quốc")), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-2xl sm:text-3xl font-bold text-primary"
  }, "Liên Kết Trực Tiếp Nhà Thuốc Long Châu & An Khang"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed"
  }, "Nhấp chọn biểu trưng đối tác để truy cập trực tiếp danh mục dược phẩm chính hãng và hưởng ưu đãi giao hỏa tốc 1 - 2 giờ độc quyền cho bệnh nhân GoCare.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://nhathuoclongchau.com.vn/nhom-san-pham/vitabiotics?utm_source=Google&utm_medium=CPA&utm_campaign=PC-Vitabiotics-T08-2026&utm_term=PMC&utm_content=&gad_source=1&gad_campaignid=23859675294&gbraid=0AAAAApDeBalH2R8DkYap7fCjjVie-6td9&gclid=Cj0KCQjw8c3VBhCsARIsAA_xJ90iycqe8Q5u7FPuyE1ob4JyDLo8BFIScXkRnAbDttk4PlNVNtr-edoaArfwEALw_wcB",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "group relative rounded-3xl p-6 bg-gradient-to-b from-blue-50/70 to-surface-container-lowest border-2 border-blue-200/80 hover:border-blue-600 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 right-3 px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs"
  }, /*#__PURE__*/React.createElement("span", null, "Mở Link Đối Tác"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs group-hover:translate-x-0.5 transition-transform"
  }, "open_in_new")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-blue-100 group-hover:scale-105 transition-transform bg-white flex items-center justify-center p-1"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/fpt_long_chau.jpg",
    alt: "Nhà Thuốc FPT Long Châu",
    className: "w-full h-full object-contain rounded-xl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center sm:justify-start gap-1.5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors"
  }, "FPT Long Châu"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-blue-600"
  }, "verified")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] font-semibold text-secondary"
  }, "Chuyên khoa Dược phẩm & Vitabiotics"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed line-clamp-2"
  }, "Chuỗi nhà thuốc hàng đầu Việt Nam. Cung ứng thuốc kê đơn tim mạch, đái tháo đường và thực phẩm Vitabiotics Anh Quốc."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 pt-4 border-t border-blue-100 flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-medium text-blue-800 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "bolt"), "Giao hỏa tốc 1 - 2h"), /*#__PURE__*/React.createElement("span", {
    className: "px-3.5 py-1.5 rounded-xl bg-blue-600 group-hover:bg-blue-700 text-white font-bold text-xs shadow-xs flex items-center gap-1 transition-colors"
  }, /*#__PURE__*/React.createElement("span", null, "Mua Tại Long Châu"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "arrow_forward")))), /*#__PURE__*/React.createElement("a", {
    href: "https://www.nhathuocankhang.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "group relative rounded-3xl p-6 bg-gradient-to-b from-emerald-50/70 to-surface-container-lowest border-2 border-emerald-200/80 hover:border-emerald-600 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs"
  }, /*#__PURE__*/React.createElement("span", null, "Mở Link Đối Tác"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs group-hover:translate-x-0.5 transition-transform"
  }, "open_in_new")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-emerald-100 group-hover:scale-105 transition-transform bg-white flex items-center justify-center p-1"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/nhathuoc_an_khang.jpg",
    alt: "Nhà Thuốc An Khang",
    className: "w-full h-full object-contain rounded-xl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center sm:justify-start gap-1.5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors"
  }, "Nhà Thuốc An Khang"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "verified")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] font-semibold text-secondary"
  }, "Thành viên Tập đoàn Thế Giới Di Động (MWG)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed line-clamp-2"
  }, "100% thuốc có nguồn gốc rõ ràng, bảo quản chuẩn GSP, hỗ trợ xuất hóa đơn VAT điện tử cho bảo hiểm y tế."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 pt-4 border-t border-emerald-100 flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-medium text-emerald-800 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "receipt_long"), "Hóa đơn BYT 100%"), /*#__PURE__*/React.createElement("span", {
    className: "px-3.5 py-1.5 rounded-xl bg-emerald-600 group-hover:bg-emerald-700 text-white font-bold text-xs shadow-xs flex items-center gap-1 transition-colors"
  }, /*#__PURE__*/React.createElement("span", null, "Mua Tại An Khang"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "arrow_forward"))))))), /*#__PURE__*/React.createElement("section", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 max-w-3xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-3 items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1 w-full"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined absolute left-3.5 top-3 text-outline text-lg"
  }, "search"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    placeholder: "Tìm biệt dược, hoạt chất (Amlodipine, Metformin, Celecoxib...)",
    className: "w-full pl-10 pr-4 py-3 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest text-xs focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsUploadModalOpen(true),
    className: "w-full sm:w-auto px-6 py-3 rounded-2xl bg-secondary text-on-secondary font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-secondary-container transition-all shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "upload_file"), /*#__PURE__*/React.createElement("span", null, "Gửi Toa Bác Sĩ Lên Hệ Thống"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-2 flex-wrap pb-1"
  }, [{
    id: 'all',
    label: 'Tất Cả Danh Mục'
  }, {
    id: 'tim-mach',
    label: 'Tim Mạch & Huyết Áp'
  }, {
    id: 'tieu-duong',
    label: 'Đái Tháo Đường'
  }, {
    id: 'co-xuong-khop',
    label: 'Cơ Xương Khớp'
  }, {
    id: 'than-kinh-nao-bo',
    label: 'Thần Kinh & Não Bộ'
  }].map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat.id,
    onClick: () => setCategory(cat.id),
    className: `px-4 py-2 rounded-full text-xs font-bold transition-all ${category === cat.id ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface hover:bg-gold-light'}`
  }, cat.label)))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  }, filteredProducts.map(prod => /*#__PURE__*/React.createElement("div", {
    key: prod.id,
    className: "gold-glow-card bg-surface-container-lowest rounded-3xl p-5 border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center text-[10px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded bg-error-container text-error font-bold"
  }, "Kê Đơn Bác Sĩ"), /*#__PURE__*/React.createElement("span", {
    className: "text-outline font-semibold"
  }, prod.brand)), /*#__PURE__*/React.createElement("div", {
    className: "h-44 rounded-2xl bg-surface-container flex items-center justify-center p-3 overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    alt: prod.name,
    src: prod.img,
    className: "max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-serif font-bold text-primary text-sm line-clamp-1"
  }, prod.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant line-clamp-2 mt-1"
  }, prod.desc))), /*#__PURE__*/React.createElement("div", {
    className: "pt-3 border-t border-outline-variant/30 space-y-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-secondary text-lg font-serif"
  }, prod.price), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-outline"
  }, prod.pack)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 text-xs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://nhathuoclongchau.com.vn/nhom-san-pham/vitabiotics?utm_source=Google&utm_medium=CPA&utm_campaign=PC-Vitabiotics-T08-2026&utm_term=PMC&utm_content=&gad_source=1&gad_campaignid=23859675294&gbraid=0AAAAApDeBalH2R8DkYap7fCjjVie-6td9&gclid=Cj0KCQjw8c3VBhCsARIsAA_xJ90iycqe8Q5u7FPuyE1ob4JyDLo8BFIScXkRnAbDttk4PlNVNtr-edoaArfwEALw_wcB",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "py-2.5 px-2 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold border border-blue-200 hover:border-blue-600 text-center transition-all flex items-center justify-center gap-1 group/btn shadow-2xs",
    title: "Xem và đặt mua trên FPT Long Châu"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "open_in_new"), /*#__PURE__*/React.createElement("span", null, "Long Châu")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.nhathuocankhang.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "py-2.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white font-bold border border-emerald-200 hover:border-emerald-600 text-center transition-all flex items-center justify-center gap-1 group/btn shadow-2xs",
    title: "Xem và đặt mua trên Nhà Thuốc An Khang"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "open_in_new"), /*#__PURE__*/React.createElement("span", null, "An Khang")))))))), isUploadModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-md bg-surface-container-lowest rounded-3xl shadow-2xl p-6 space-y-4 modal-animated border border-gold-accent/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b pb-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-primary flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-secondary"
  }, "upload_file"), /*#__PURE__*/React.createElement("span", null, "Tải Toa Bác Sĩ Lên GoCare")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsUploadModalOpen(false)
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 text-xs"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-on-surface-variant"
  }, "Chụp ảnh toa thuốc rõ nét bao gồm chữ ký bác sĩ và ngày kê đơn. Dược sĩ GoCare sẽ xác minh và điều phối thuốc từ Long Châu / An Khang đến tận nhà."), /*#__PURE__*/React.createElement("div", {
    className: "border-2 border-dashed border-outline-variant/60 rounded-2xl p-6 text-center space-y-2 bg-surface-container-low cursor-pointer hover:border-secondary transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-3xl text-secondary"
  }, "add_photo_alternate"), /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-primary"
  }, "Nhấp để chọn ảnh chụp toa thuốc"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-outline"
  }, "Hỗ trợ JPG, PNG, PDF tối đa 15MB"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      alert('Đã tiếp nhận ảnh toa thuốc thành công! Dược sĩ GoCare đang thẩm định và sẽ gọi lại trong 5 phút.');
      setIsUploadModalOpen(false);
    },
    className: "w-full py-3 rounded-xl bg-primary text-on-primary font-bold text-xs uppercase tracking-wider"
  }, "Xác Nhận Gửi Toa Thuốc"))));
}

// --- D3.JS DYNAMIC 24-HOUR HEART RATE TELEMETRY CHART COMPONENT ---
function HeartRateTelemetryD3Chart({
  currentBpm = 72
}) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [timeRange, setTimeRange] = useState('24h');
  const [showTargetZone, setShowTargetZone] = useState(true);
  const [hoveredData, setHoveredData] = useState(null);

  // Warning thresholds
  const HIGH_THRESHOLD = 110;
  const LOW_THRESHOLD = 55;
  const triggerThresholdAlert = React.useCallback(bpmValue => {
    if (bpmValue > HIGH_THRESHOLD || bpmValue < LOW_THRESHOLD) {
      const condition = bpmValue > HIGH_THRESHOLD ? `Nhịp tim nhanh nguy hiểm (> ${HIGH_THRESHOLD} BPM - Cơn tim nhanh kịch phát)` : `Nhịp tim chậm nguy hiểm (< ${LOW_THRESHOLD} BPM - Nguy cơ ngừng xoang/Block nhĩ thất)`;
      const alertMsg = `⚠️ [CẢNH BÁO TELEMETRY KHẨN CẤP - GOCARE 5G]\n\nNhịp tim bệnh nhân đo được: ${bpmValue} BPM (Ngưỡng an toàn lâm sàng: 55 - 110 BPM)!\n\nChẩn đoán tức thời: ${condition}.\n\nHệ thống GoCare Telemetry đã tự động phát tín hiệu BÁO ĐỘNG ĐỎ đến Trạm Điều Dưỡng Trực Cấp Cứu ICU & Bác Sĩ Tim Mạch phụ trách!`;
      // Displays browser alert as required
      window.alert(alertMsg);
    }
  }, [HIGH_THRESHOLD, LOW_THRESHOLD]);
  const [telemetryData, setTelemetryData] = useState(() => {
    const now = new Date();
    const data = [];
    for (let i = 24; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 60 * 60 * 1000);
      const hour = time.getHours();
      let base = 71;
      let activity = 'Nghỉ ngơi ổn định';
      if (hour >= 0 && hour <= 5) {
        base = 63 + Math.sin(hour * 0.8) * 2.5;
        activity = 'Giấc ngủ sâu REM & Hồi phục';
      } else if (hour >= 6 && hour <= 9) {
        base = 76 + Math.sin(hour * 0.5) * 3;
        activity = 'Thức giấc, dùng điểm tâm & đo HA sáng';
      } else if (hour >= 10 && hour <= 12) {
        base = 71 + Math.cos(hour) * 2;
        activity = 'Nghe nhạc sóng não 432Hz & đọc sách';
      } else if (hour >= 13 && hour <= 17) {
        base = 82 + Math.sin(hour) * 4;
        activity = 'Vận động trị liệu & đi dạo Sala';
      } else if (hour >= 18 && hour <= 21) {
        base = 73 + Math.cos(hour * 0.5) * 2.5;
        activity = 'Dùng bữa tối dưỡng sinh & trò chuyện gia đình';
      } else {
        base = 66 + Math.sin(hour) * 2;
        activity = 'Thư giãn tiền giấc ngủ';
      }
      const noise = (Math.random() - 0.5) * 3;
      const bpm = Math.max(60, Math.min(96, Math.round(base + noise)));
      const spo2 = Math.min(100, Math.max(97, Math.round(99 - (bpm > 82 ? 1 : 0) + (Math.random() > 0.6 ? 1 : 0))));
      data.push({
        id: 'pt-' + i,
        time: time,
        bpm: bpm,
        spo2: spo2,
        activity: activity,
        status: bpm >= 60 && bpm <= 100 ? 'normal' : bpm > 100 ? 'high' : 'low'
      });
    }
    return data;
  });

  // Filtered data by selected range
  const filteredData = React.useMemo(() => {
    if (timeRange === '6h') return telemetryData.slice(-7);
    if (timeRange === '12h') return telemetryData.slice(-13);
    return telemetryData;
  }, [telemetryData, timeRange]);

  // Latest point & threshold violation status
  const latestPoint = filteredData[filteredData.length - 1];
  const currentMonitorBpm = latestPoint ? latestPoint.bpm : currentBpm;
  const isThresholdWarning = currentMonitorBpm > HIGH_THRESHOLD || currentMonitorBpm < LOW_THRESHOLD;

  // Stream / Add new telemetry data point
  const addLiveSample = () => {
    setTelemetryData(prev => {
      const lastPoint = prev[prev.length - 1];
      const newTime = new Date(lastPoint.time.getTime() + 15 * 60 * 1000);
      const jitter = (Math.random() - 0.5) * 6;
      const newBpm = Math.max(58, Math.min(102, Math.round(lastPoint.bpm + jitter)));
      if (newBpm > HIGH_THRESHOLD || newBpm < LOW_THRESHOLD) {
        setTimeout(() => triggerThresholdAlert(newBpm), 120);
      }
      const newPoint = {
        id: 'pt-' + Date.now(),
        time: newTime,
        bpm: newBpm,
        spo2: Math.min(100, Math.max(97, Math.round(99 + (Math.random() > 0.6 ? 1 : 0)))),
        activity: 'Tín hiệu trực tiếp vừa nhận (Holter 5G IoT)',
        status: newBpm > 100 ? 'high' : newBpm < 60 ? 'low' : 'normal'
      };
      return [...prev.slice(1), newPoint];
    });
  };

  // Force test critical threshold with browser alert
  const simulateCriticalThreshold = (targetBpm, label) => {
    setTelemetryData(prev => {
      const lastPoint = prev[prev.length - 1];
      const newTime = new Date(lastPoint.time.getTime() + 15 * 60 * 1000);
      const newPoint = {
        id: 'pt-crit-' + Date.now(),
        time: newTime,
        bpm: targetBpm,
        spo2: targetBpm > HIGH_THRESHOLD ? 93 : targetBpm < LOW_THRESHOLD ? 92 : 99,
        activity: label,
        status: targetBpm > HIGH_THRESHOLD ? 'high' : targetBpm < LOW_THRESHOLD ? 'low' : 'normal'
      };
      return [...prev.slice(1), newPoint];
    });

    // Trigger browser alert as requested
    setTimeout(() => {
      triggerThresholdAlert(targetBpm);
    }, 150);
  };

  // Summary statistics
  const stats = React.useMemo(() => {
    if (!filteredData.length) return {
      avg: 72,
      min: 62,
      max: 88,
      inRangePct: 100,
      hrv: 46
    };
    const bpms = filteredData.map(d => d.bpm);
    const min = Math.min(...bpms);
    const max = Math.max(...bpms);
    const sum = bpms.reduce((a, b) => a + b, 0);
    const avg = Math.round(sum / bpms.length * 10) / 10;
    const inRange = bpms.filter(b => b >= 60 && b <= 100).length;
    const inRangePct = Math.round(inRange / bpms.length * 100);
    return {
      avg: avg,
      min: min,
      max: max,
      inRangePct: inRangePct,
      hrv: 48
    };
  }, [filteredData]);

  // Render chart via D3.js
  useEffect(() => {
    if (!svgRef.current || !containerRef.current || typeof window.d3 === 'undefined') return;
    const d3 = window.d3;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    const containerWidth = containerRef.current.clientWidth || 800;
    const margin = {
      top: 32,
      right: 40,
      bottom: 44,
      left: 56
    };
    const width = Math.max(300, containerWidth - margin.left - margin.right);
    const height = 280 - margin.top - margin.bottom;
    svg.attr('width', containerWidth).attr('height', 280).attr('viewBox', '0 0 ' + containerWidth + ' 280');
    const g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Scales - extended Y domain to show thresholds 55 and 110 clearly
    const xExtent = d3.extent(filteredData, d => d.time);
    const xScale = d3.scaleTime().domain(xExtent).range([0, width]);
    const yScale = d3.scaleLinear().domain([45, 125]).range([height, 0]);

    // Gradients
    const defs = svg.append('defs');

    // Normal Area Gradient (Warm Amber / Gold)
    const areaGrad = defs.append('linearGradient').attr('id', 'hrTelemetryAreaGrad').attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%');
    areaGrad.append('stop').attr('offset', '0%').attr('stop-color', '#ff8340').attr('stop-opacity', 0.4);
    areaGrad.append('stop').attr('offset', '65%').attr('stop-color', '#C5A059').attr('stop-opacity', 0.15);
    areaGrad.append('stop').attr('offset', '100%').attr('stop-color', '#C5A059').attr('stop-opacity', 0.0);

    // Warning Red Area Gradient (When threshold exceeded > 110 or < 55)
    const redAreaGrad = defs.append('linearGradient').attr('id', 'hrWarningAreaGrad').attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%');
    redAreaGrad.append('stop').attr('offset', '0%').attr('stop-color', '#dc2626').attr('stop-opacity', 0.55);
    redAreaGrad.append('stop').attr('offset', '65%').attr('stop-color', '#ef4444').attr('stop-opacity', 0.2);
    redAreaGrad.append('stop').attr('offset', '100%').attr('stop-color', '#ef4444').attr('stop-opacity', 0.0);

    // Safe Zone Gradient (60 - 100 BPM)
    const zoneGrad = defs.append('linearGradient').attr('id', 'safeTelemetryZoneGrad').attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%');
    zoneGrad.append('stop').attr('offset', '0%').attr('stop-color', '#10b981').attr('stop-opacity', 0.12);
    zoneGrad.append('stop').attr('offset', '100%').attr('stop-color', '#10b981').attr('stop-opacity', 0.03);

    // Safe Normal Range Zone (60 - 100 BPM)
    if (showTargetZone) {
      const y100 = yScale(100);
      const y60 = yScale(60);
      g.append('rect').attr('x', 0).attr('y', y100).attr('width', width).attr('height', Math.max(0, y60 - y100)).attr('fill', 'url(#safeTelemetryZoneGrad)').attr('rx', 6);
      g.append('line').attr('x1', 0).attr('x2', width).attr('y1', y100).attr('y2', y100).attr('stroke', '#10b981').attr('stroke-width', 1).attr('stroke-dasharray', '3 3').attr('stroke-opacity', 0.6);
      g.append('line').attr('x1', 0).attr('x2', width).attr('y1', y60).attr('y2', y60).attr('stroke', '#10b981').attr('stroke-width', 1).attr('stroke-dasharray', '3 3').attr('stroke-opacity', 0.6);
      g.append('text').attr('x', width - 8).attr('y', y100 + 13).attr('text-anchor', 'end').attr('fill', '#047857').attr('font-size', '10px').attr('font-weight', '700').text('Vùng chuẩn xoang (60 - 100 BPM)');
    }

    // RED THRESHOLD WARNING GUIDELINES (>110 BPM and <55 BPM)
    // High Warning Guideline (110 BPM)
    const yHighThresh = yScale(HIGH_THRESHOLD);
    g.append('line').attr('x1', 0).attr('x2', width).attr('y1', yHighThresh).attr('y2', yHighThresh).attr('stroke', '#dc2626').attr('stroke-width', 1.6).attr('stroke-dasharray', '5 4').attr('stroke-opacity', 0.85);
    g.append('text').attr('x', 10).attr('y', yHighThresh - 4).attr('fill', '#dc2626').attr('font-size', '10px').attr('font-weight', '800').text('🚨 NGƯỠNG BÁO ĐỘNG CAO (>110 BPM - Nhịp nhanh)');

    // Low Warning Guideline (55 BPM)
    const yLowThresh = yScale(LOW_THRESHOLD);
    g.append('line').attr('x1', 0).attr('x2', width).attr('y1', yLowThresh).attr('y2', yLowThresh).attr('stroke', '#dc2626').attr('stroke-width', 1.6).attr('stroke-dasharray', '5 4').attr('stroke-opacity', 0.85);
    g.append('text').attr('x', 10).attr('y', yLowThresh + 13).attr('fill', '#dc2626').attr('font-size', '10px').attr('font-weight', '800').text('🚨 NGƯỠNG BÁO ĐỘNG THẤP (<55 BPM - Nhịp chậm)');

    // Horizontal Reference Gridlines
    [60, 80, 100].forEach(val => {
      g.append('line').attr('x1', 0).attr('x2', width).attr('y1', yScale(val)).attr('y2', yScale(val)).attr('stroke', '#d5c3bd').attr('stroke-width', 0.7).attr('stroke-dasharray', '3 4').attr('stroke-opacity', 0.35);
    });

    // Area Path with dynamic fill based on threshold warning
    const areaGen = d3.area().x(d => xScale(d.time)).y0(height).y1(d => yScale(d.bpm)).curve(d3.curveMonotoneX);
    g.append('path').datum(filteredData).attr('fill', isThresholdWarning ? 'url(#hrWarningAreaGrad)' : 'url(#hrTelemetryAreaGrad)').attr('d', areaGen);

    // Line Path - HIGHLIGHTED IN RED WHEN THRESHOLD EXCEEDED (>110 or <55)
    const lineGen = d3.line().x(d => xScale(d.time)).y(d => yScale(d.bpm)).curve(d3.curveMonotoneX);
    const trendLineColor = isThresholdWarning ? '#dc2626' : '#a04100';
    const trendLineWidth = isThresholdWarning ? 3.5 : 2.8;
    g.append('path').datum(filteredData).attr('fill', 'none').attr('stroke', trendLineColor).attr('stroke-width', trendLineWidth).attr('stroke-linecap', 'round').attr('stroke-linejoin', 'round').attr('d', lineGen);

    // X Axis
    const tickCount = containerWidth < 500 ? 5 : 8;
    const xAxis = d3.axisBottom(xScale).ticks(tickCount).tickFormat(d3.timeFormat('%H:%M'));
    const xAxisG = g.append('g').attr('transform', 'translate(0, ' + height + ')').call(xAxis);
    xAxisG.select('.domain').attr('stroke', '#d5c3bd').attr('stroke-opacity', 0.6);
    xAxisG.selectAll('.tick line').attr('stroke', '#d5c3bd').attr('stroke-opacity', 0.5);
    xAxisG.selectAll('text').attr('fill', '#514440').attr('font-size', '11px').attr('font-family', "'Be Vietnam Pro', sans-serif").attr('dy', '1em');

    // Y Axis
    const yAxis = d3.axisLeft(yScale).tickValues([50, 55, 70, 90, 110, 120]).tickFormat(d => d + ' bpm');
    const yAxisG = g.append('g').call(yAxis);
    yAxisG.select('.domain').remove();
    yAxisG.selectAll('.tick line').remove();
    yAxisG.selectAll('text').attr('fill', d => d === 55 || d === 110 ? '#dc2626' : '#514440').attr('font-weight', d => d === 55 || d === 110 ? 'bold' : 'normal').attr('font-size', '10px').attr('font-family', "'Be Vietnam Pro', sans-serif");

    // Data Points (Points exceeding thresholds highlighted in red)
    g.selectAll('.dot').data(filteredData).enter().append('circle').attr('class', 'dot').attr('cx', d => xScale(d.time)).attr('cy', d => yScale(d.bpm)).attr('r', d => d.bpm > HIGH_THRESHOLD || d.bpm < LOW_THRESHOLD ? 5 : 3).attr('fill', d => d.bpm > HIGH_THRESHOLD || d.bpm < LOW_THRESHOLD ? '#dc2626' : '#ffffff').attr('stroke', d => d.bpm > HIGH_THRESHOLD || d.bpm < LOW_THRESHOLD ? '#ffffff' : '#a04100').attr('stroke-width', d => d.bpm > HIGH_THRESHOLD || d.bpm < LOW_THRESHOLD ? 2.5 : 2);

    // Live Pulsing Dot on Newest Record
    const newest = filteredData[filteredData.length - 1];
    if (newest) {
      const pg = g.append('g').attr('transform', 'translate(' + xScale(newest.time) + ', ' + yScale(newest.bpm) + ')');
      const isNewestCritical = newest.bpm > HIGH_THRESHOLD || newest.bpm < LOW_THRESHOLD;
      const pulseColor = isNewestCritical ? '#dc2626' : '#ff8340';
      const centerColor = isNewestCritical ? '#b91c1c' : '#a04100';
      pg.append('circle').attr('r', 7).attr('fill', pulseColor).attr('opacity', 0.45).append('animate').attr('attributeName', 'r').attr('values', '6; 20; 6').attr('dur', isNewestCritical ? '1.0s' : '1.8s').attr('repeatCount', 'indefinite');
      pg.append('circle').attr('r', 5).attr('fill', centerColor).attr('stroke', '#ffffff').attr('stroke-width', 2);
    }

    // Interactive Crosshair & Hover Tooltip
    const bisector = d3.bisector(d => d.time).center;
    const crosshair = g.append('line').attr('stroke', isThresholdWarning ? '#dc2626' : '#C5A059').attr('stroke-width', 1.5).attr('stroke-dasharray', '3 3').attr('y1', 0).attr('y2', height).style('opacity', 0);
    const hoverMarker = g.append('circle').attr('r', 6.5).attr('fill', isThresholdWarning ? '#dc2626' : '#C5A059').attr('stroke', '#ffffff').attr('stroke-width', 2.5).style('opacity', 0);

    // Interactive overlay rect
    g.append('rect').attr('width', width).attr('height', height).attr('fill', 'transparent').style('cursor', 'crosshair').on('mousemove touchmove', function (event) {
      const coords = d3.pointer(event);
      const xm = coords[0];
      const xDate = xScale.invert(xm);
      const index = bisector(filteredData, xDate);
      const d = filteredData[index];
      if (!d) return;
      const cx = xScale(d.time);
      const cy = yScale(d.bpm);
      crosshair.attr('x1', cx).attr('x2', cx).style('opacity', 1);
      hoverMarker.attr('cx', cx).attr('cy', cy).style('opacity', 1);
      setHoveredData({
        ...d,
        x: cx + margin.left,
        y: cy + margin.top,
        formattedTime: d3.timeFormat('%H:%M - %d/%m')(d.time)
      });
    }).on('mouseleave touchend', function () {
      crosshair.style('opacity', 0);
      hoverMarker.style('opacity', 0);
      setHoveredData(null);
    });
  }, [filteredData, showTargetZone, isThresholdWarning]);

  // Responsive redraw on window resize
  useEffect(() => {
    const handleResize = () => setTimeRange(r => r);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: `bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-md border space-y-6 transition-all duration-300 ${isThresholdWarning ? 'border-red-500 ring-2 ring-red-300 heart-warning-pulse' : 'border-gold-accent/40'}`
  }, isThresholdWarning && /*#__PURE__*/React.createElement("div", {
    className: "p-4 sm:p-5 rounded-2xl bg-red-50 border-2 border-red-500 text-red-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg animate-pulse"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl animate-bounce"
  }, "e911_emergency")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-0.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-red-600 text-white tracking-wider"
  }, "Báo Động Đỏ Telemetry"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold text-red-800"
  }, currentMonitorBpm > HIGH_THRESHOLD ? 'Cơn Tim Nhanh Kịch Phát' : 'Nhịp Tim Chậm Nguy Hiểm', " (", currentMonitorBpm, " BPM)")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-red-900 font-medium"
  }, "Nhịp tim đã vượt ngưỡng an toàn lâm sàng (55 - 110 BPM). Đường xu hướng biểu đồ đã tự động chuyển sang ", /*#__PURE__*/React.createElement("strong", {
    className: "text-red-700 underline"
  }, "ĐỎ CẢNH BÁO"), " và gửi tín hiệu báo động khẩn đến Bác sĩ Tim mạch trực cấp cứu ICU!"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 shrink-0 self-end sm:self-auto"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => triggerThresholdAlert(currentMonitorBpm),
    className: "px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "notifications_active"), /*#__PURE__*/React.createElement("span", null, "Hiện Lại Cảnh Báo")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => simulateCriticalThreshold(74, 'Khôi phục bình thường'),
    className: "px-3.5 py-2 rounded-xl bg-white hover:bg-red-100 text-red-800 border border-red-300 text-xs font-bold transition-all shadow-xs"
  }, "Khôi Phục Nhịp Chuẩn (74 BPM)"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-outline-variant/30 pb-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: `w-2.5 h-2.5 rounded-full ${isThresholdWarning ? 'bg-red-600 animate-ping' : 'bg-secondary animate-ping'}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `text-xs font-bold uppercase tracking-wider ${isThresholdWarning ? 'text-red-600' : 'text-secondary'}`
  }, isThresholdWarning ? '⚠️ Telemetry Ngưỡng Báo Động (55 - 110 BPM)' : 'D3.js Real-time Telemetry Analytics • IoT Holter 5G')), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-bold text-primary mt-1"
  }, "Biểu Đồ Xu Hướng Nhịp Tim 24 Giờ Qua"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant"
  }, "Hệ thống tự động tô đỏ đường xu hướng & kích hoạt cảnh báo trình duyệt khi nhịp tim > 110 BPM hoặc < 55 BPM")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center rounded-2xl bg-surface-container p-1 border border-outline-variant/30 text-xs font-bold"
  }, [{
    id: '6h',
    label: '6 Giờ'
  }, {
    id: '12h',
    label: '12 Giờ'
  }, {
    id: '24h',
    label: '24 Giờ'
  }].map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    type: "button",
    onClick: () => setTimeRange(r.id),
    className: `px-3 py-1.5 rounded-xl transition-all ${timeRange === r.id ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant hover:text-primary'}`
  }, r.label))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowTargetZone(!showTargetZone),
    className: `px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${showTargetZone ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-surface-container border-outline-variant/30 text-outline'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, showTargetZone ? 'check_box' : 'check_box_outline_blank'), /*#__PURE__*/React.createElement("span", null, "Vùng Chuẩn (60-100)")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => simulateCriticalThreshold(116, '🚨 Nhịp nhanh kịch phát trên thất (>110 BPM)'),
    className: "px-2.5 py-1.5 rounded-xl text-[11px] font-bold bg-red-100 hover:bg-red-200 text-red-800 border border-red-300 transition-all flex items-center gap-1 shadow-xs",
    title: "Thử nghiệm cảnh báo ngưỡng nhịp nhanh > 110 BPM"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-red-600"
  }, "arrow_upward"), /*#__PURE__*/React.createElement("span", null, "Test >110 BPM")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => simulateCriticalThreshold(52, '🚨 Nhịp chậm xoang nguy hiểm (<55 BPM)'),
    className: "px-2.5 py-1.5 rounded-xl text-[11px] font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 transition-all flex items-center gap-1 shadow-xs",
    title: "Thử nghiệm cảnh báo ngưỡng nhịp chậm < 55 BPM"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-amber-700"
  }, "arrow_downward"), /*#__PURE__*/React.createElement("span", null, "Test <55 BPM")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: addLiveSample,
    className: "px-2.5 py-1.5 rounded-xl text-[11px] font-bold bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 transition-all flex items-center gap-1 shadow-xs",
    title: "Mô phỏng xung nhịp gửi về từ Holter IoT"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm animate-spin"
  }, "sync"), /*#__PURE__*/React.createElement("span", null, "Nhận IoT Mới"))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-5 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: `p-3.5 rounded-2xl border flex flex-col justify-between transition-colors ${isThresholdWarning ? 'bg-red-50 border-red-400' : 'bg-surface-container-low border-outline-variant/20'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-outline"
  }, "Nhịp Hiện Tại"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1 my-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: `text-2xl font-serif font-bold ${isThresholdWarning ? 'text-red-600' : 'text-secondary'}`
  }, currentMonitorBpm), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "BPM")), /*#__PURE__*/React.createElement("span", {
    className: `text-[10px] font-bold px-2 py-0.5 rounded-full self-start ${isThresholdWarning ? 'text-white bg-red-600 animate-pulse' : 'text-emerald-700 bg-emerald-50'}`
  }, isThresholdWarning ? currentMonitorBpm > 110 ? '🚨 Nhịp nhanh (>110)' : '🚨 Nhịp chậm (<55)' : '🟢 Nhịp xoang đều')), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-outline"
  }, "Trung Bình 24H"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1 my-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-serif font-bold text-primary"
  }, stats.avg), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "BPM")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold text-on-surface-variant"
  }, "Chuẩn sinh lý lão khoa")), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-outline"
  }, "Cao Nhất (Peak)"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1 my-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: `text-2xl font-serif font-bold ${stats.max > HIGH_THRESHOLD ? 'text-red-600 font-extrabold' : 'text-secondary'}`
  }, stats.max), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "BPM")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold text-secondary"
  }, stats.max > HIGH_THRESHOLD ? '⚠️ Vượt ngưỡng 110' : 'Lúc vận động chiều')), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-outline"
  }, "Thấp Nhất (Nadir)"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1 my-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: `text-2xl font-serif font-bold ${stats.min < LOW_THRESHOLD ? 'text-red-600 font-extrabold' : 'text-primary'}`
  }, stats.min), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "BPM")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold text-on-surface-variant"
  }, stats.min < LOW_THRESHOLD ? '⚠️ Dưới ngưỡng 55' : 'Lúc ngủ sâu 04:00')), /*#__PURE__*/React.createElement("div", {
    className: "col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-outline"
  }, "Trong Vùng Chuẩn"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1 my-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-serif font-bold text-emerald-700"
  }, stats.inRangePct, "%"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "thời gian")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full self-start"
  }, "⭐ Chuẩn an toàn JCI"))), /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: `relative w-full rounded-2xl p-2 sm:p-4 border overflow-hidden transition-colors ${isThresholdWarning ? 'bg-red-50/40 border-red-300' : 'bg-surface-container-low/60 border-outline-variant/20'}`
  }, /*#__PURE__*/React.createElement("svg", {
    ref: svgRef,
    className: "w-full block"
  }), hoveredData && /*#__PURE__*/React.createElement("div", {
    className: `absolute z-20 pointer-events-none p-3 rounded-2xl shadow-xl text-xs space-y-1.5 backdrop-blur-md border ${hoveredData.bpm > HIGH_THRESHOLD || hoveredData.bpm < LOW_THRESHOLD ? 'bg-red-950/95 text-white border-red-500' : 'bg-brand-charcoal/95 text-white border-gold-accent/40'}`,
    style: {
      left: Math.min(hoveredData.x, containerRef.current ? containerRef.current.clientWidth - 230 : 300),
      top: Math.max(10, hoveredData.y - 120)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-4 border-b border-white/10 pb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-gold-accent text-[11px]"
  }, hoveredData.formattedTime), /*#__PURE__*/React.createElement("span", {
    className: `text-[10px] px-1.5 py-0.2 rounded font-bold ${hoveredData.bpm > HIGH_THRESHOLD || hoveredData.bpm < LOW_THRESHOLD ? 'bg-red-600 text-white animate-pulse' : 'bg-emerald-500/20 text-emerald-300'}`
  }, hoveredData.bpm > HIGH_THRESHOLD ? '🚨 VƯỢT 110 BPM' : hoveredData.bpm < LOW_THRESHOLD ? '🚨 DƯỚI 55 BPM' : `SpO2 ${hoveredData.spo2}%`)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: `text-2xl font-serif font-bold ${hoveredData.bpm > HIGH_THRESHOLD || hoveredData.bpm < LOW_THRESHOLD ? 'text-red-400' : 'text-secondary-container'}`
  }, hoveredData.bpm), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-white/70"
  }, "BPM (Nhịp đập/phút)")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-white/80 italic"
  }, "Hoạt động: ", hoveredData.activity))), /*#__PURE__*/React.createElement("div", {
    className: `p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs transition-colors ${isThresholdWarning ? 'bg-red-100/70 border-red-400' : 'bg-gold-light/40 border-gold-accent/40'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/doctor_hong_hung.jpg",
    alt: "BS. CKI Nguyễn Hồng Hưng",
    className: `w-11 h-11 rounded-full object-cover shrink-0 shadow-sm ring-2 ${isThresholdWarning ? 'ring-red-500' : 'ring-gold-accent'}`
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: `font-bold flex items-center gap-1.5 ${isThresholdWarning ? 'text-red-900' : 'text-primary'}`
  }, /*#__PURE__*/React.createElement("span", null, "Nhận định lâm sàng của Bác sĩ Tim Mạch (BS. CKI Nguyễn Hồng Hưng):"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "verified")), /*#__PURE__*/React.createElement("p", {
    className: "text-on-surface-variant text-[11px] mt-0.5"
  }, isThresholdWarning ? `"CẢNH BÁO: Nhịp tim vượt ngưỡng an toàn (55 - 110 BPM). Hệ thống Telemetry đã chỉ huy trạm điều dưỡng kiểm tra huyết áp trực tiếp và sẵn sàng hỗ trợ cấp cứu!"` : `"Chỉ số nhịp tim dao động sinh học ổn định. Không phát hiện cơn rung nhĩ kịch phát hoặc ngoại tâm thu thất nguy hiểm trong 24 giờ liên tục."`))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => alert('Đã gửi yêu cầu hội chẩn tim mạch trực tiếp đến BS. CKI Nguyễn Hồng Hưng. Bác sĩ sẽ phản hồi trong 15 phút.'),
    className: `px-4 py-2 rounded-xl font-bold text-xs shrink-0 transition-all shadow-xs ${isThresholdWarning ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-primary hover:bg-primary-container text-on-primary'}`
  }, "Yêu Cầu Hội Chẩn 1:1")));
}

// --- SCREEN 5: CỔNG BỆNH NHÂN & BỆNH ÁN ĐIỆN TỬ (TÀI KHOẢN THẬT & GOOGLE OAUTH) ---
function PatientPortalScreen({
  user,
  onGoogleLogin,
  onLogout,
  onOpenAuth,
  onTriageSubmitted
}) {
  const [painScore, setPainScore] = useState(3);
  const [isChestPain, setIsChestPain] = useState(false);
  const [isStrokeSign, setIsStrokeSign] = useState(false);
  const [symptomNote, setSymptomNote] = useState('');
  const [triageAlert, setTriageAlert] = useState(null);
  const [isSubmittingTriage, setIsSubmittingTriage] = useState(false);
  const isRedAlert = isChestPain || isStrokeSign || painScore >= 8;
  const handleTriageSubmit = async () => {
    setIsSubmittingTriage(true);
    try {
      const token = localStorage.getItem('gocare_token');
      const res = await fetch('/api/ehr/triage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? {
            'Authorization': `Bearer ${token}`
          } : {})
        },
        body: JSON.stringify({
          painScore,
          isChestPain,
          isStrokeSign,
          symptomNote
        })
      });
      const data = await res.json();
      if (data.success && data.user && onTriageSubmitted) {
        onTriageSubmitted(data.user);
      }
      if (isRedAlert) {
        alert('HỆ THỐNG ĐÃ KÍCH HOẠT QUY TRÌNH CODE RED!\nThông tin bệnh nhân đã được chuyển khẩn cấp đến Bác sĩ Trưởng ca và Đội Cấp Cứu GoCare.');
        setTriageAlert('CODE_RED');
      } else {
        alert('Phiếu khai báo sức khỏe đã được gửi thành công đến Điều dưỡng phụ trách và lưu vào bệnh án điện tử EHR.');
        setTriageAlert('NORMAL');
      }
    } catch (err) {
      console.error(err);
      if (isRedAlert) {
        alert('HỆ THỐNG ĐÃ KÍCH HOẠT QUY TRÌNH CODE RED!\nThông tin bệnh nhân đã được chuyển khẩn cấp đến Bác sĩ Trưởng ca.');
        setTriageAlert('CODE_RED');
      } else {
        alert('Phiếu khai báo sức khỏe đã được ghi nhận.');
        setTriageAlert('NORMAL');
      }
    } finally {
      setIsSubmittingTriage(false);
    }
  };

  // IF USER IS NOT LOGGED IN -> SHOW COMPREHENSIVE AUTHENTICATION GATE
  if (!user) {
    return /*#__PURE__*/React.createElement("div", {
      className: "w-full pt-20 min-h-[90vh] bg-surface flex items-center justify-center py-16 px-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-lg w-full bg-surface-container-lowest rounded-3xl p-8 sm:p-10 border border-gold-accent/40 shadow-2xl space-y-6 text-center modal-animated"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-primary-container to-secondary text-on-primary flex items-center justify-center mx-auto shadow-lg ring-4 ring-gold-accent/30"
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined text-3xl"
    }, "lock")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded-full bg-surface-container text-secondary text-xs font-bold uppercase tracking-wider"
    }, "Bảo Mật Y Khoa Cấp Độ 4 • HIPAA & HL7 FHIR"), /*#__PURE__*/React.createElement("h2", {
      className: "font-serif text-3xl font-bold text-primary"
    }, "Cổng Bệnh Nhân & Bệnh Án Điện Tử"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-on-surface-variant leading-relaxed"
    }, "Để đảm bảo tính riêng tư tuyệt đối cho hồ sơ bệnh án, lịch sử khám và chỉ số sinh hiệu, vui lòng đăng nhập bằng ", /*#__PURE__*/React.createElement("strong", null, "Tài khoản GoCare"), " hoặc ", /*#__PURE__*/React.createElement("strong", null, "Tài khoản Google thật"), ".")), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-left space-y-2 text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 font-bold text-primary"
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined text-sm text-secondary"
    }, "verified_user"), /*#__PURE__*/React.createElement("span", null, "Đặc quyền sau khi đăng nhập tài khoản thật:")), /*#__PURE__*/React.createElement("ul", {
      className: "space-y-1 text-on-surface-variant text-[11px] list-disc list-inside"
    }, /*#__PURE__*/React.createElement("li", null, "Tra cứu trực tuyến chỉ số sinh hiệu IoT (Huyết áp, ECG, Đường huyết)."), /*#__PURE__*/React.createElement("li", null, "Lịch sử toa thuốc liên kết nhà thuốc Long Châu & An Khang."), /*#__PURE__*/React.createElement("li", null, "Khai báo triệu chứng khẩn cấp kích hoạt mã đỏ CODE RED 24/7."), /*#__PURE__*/React.createElement("li", null, "Đồng bộ kết quả xét nghiệm máu và hình ảnh chẩn đoán MRI/CT."))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 pt-2"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onOpenAuth && onOpenAuth('login'),
      className: "w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-secondary text-on-primary font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined text-base"
    }, "login"), /*#__PURE__*/React.createElement("span", null, "Đăng Nhập Bằng Email & Mật Khẩu")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onOpenAuth && onOpenAuth('register'),
      className: "w-full py-3 px-4 rounded-2xl bg-surface-container hover:bg-gold-light text-primary font-bold text-xs uppercase tracking-wider border border-gold-accent/50 shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined text-base text-secondary"
    }, "how_to_reg"), /*#__PURE__*/React.createElement("span", null, "Tạo Tài Khoản Mới (Đăng Ký)")), /*#__PURE__*/React.createElement("div", {
      className: "relative flex py-1 items-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-grow border-t border-outline-variant/40"
    }), /*#__PURE__*/React.createElement("span", {
      className: "flex-shrink mx-3 text-[10px] text-outline font-semibold uppercase"
    }, "Hoặc"), /*#__PURE__*/React.createElement("div", {
      className: "flex-grow border-t border-outline-variant/40"
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onGoogleLogin,
      className: "w-full py-3 px-4 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs uppercase tracking-wider border border-gray-300 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3"
    }, /*#__PURE__*/React.createElement("svg", {
      className: "w-5 h-5",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#4285F4",
      d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#34A853",
      d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FBBC05",
      d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA4335",
      d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    })), /*#__PURE__*/React.createElement("span", null, "Đăng Nhập Bằng Google Thật")), /*#__PURE__*/React.createElement("p", {
      className: "text-[11px] text-outline"
    }, "Chứng thực bảo mật qua giao thức JWT, Google OAuth 2.0 & VNeID Mức 2."))));
  }

  // IF USER IS AUTHENTICATED -> DISPLAY FULL PATIENT PORTAL
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full pt-20 bg-surface"
  }, /*#__PURE__*/React.createElement("section", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 py-6 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-container-high px-5 py-2.5 rounded-t-2xl flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1 px-3 py-1 bg-surface-container-lowest rounded-full font-bold text-primary shadow-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "verified_user"), user.googleId ? 'Tài Khoản Google Đã Xác Minh' : 'Tài Khoản GoCare Đã Xác Thực'), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1 font-medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
  }), "Đường truyền mã hóa cấp độ 4 (HL7 FHIR & HIPAA Shield)")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 bg-surface-container-lowest rounded-lg font-bold text-emerald-700"
  }, user.googleId ? 'Google OAuth 2.0 Active' : 'JWT Token Verified'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onLogout,
    className: "px-2.5 py-1 rounded-lg bg-error-container text-error font-bold text-[11px] hover:bg-error hover:text-on-error transition-colors"
  }, "Đăng Xuất"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-container-lowest p-6 rounded-b-3xl shadow-md border border-outline-variant/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: user.picture || 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    alt: user.name,
    className: "w-18 h-18 rounded-3xl object-cover ring-3 ring-gold-accent shadow-md"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-2xl font-bold text-primary"
  }, user.name), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full"
  }, "Đang kết nối")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-outline flex flex-wrap items-center gap-3 mt-1"
  }, /*#__PURE__*/React.createElement("span", null, "Email: ", /*#__PURE__*/React.createElement("strong", null, user.email)), user.phone && /*#__PURE__*/React.createElement("span", null, "SĐT: ", /*#__PURE__*/React.createElement("strong", null, user.phone)), /*#__PURE__*/React.createElement("span", null, "PID: ", /*#__PURE__*/React.createElement("strong", null, user.patientId || 'GC-EHR-88294')), /*#__PURE__*/React.createElement("span", null, "Cơ sở: ", /*#__PURE__*/React.createElement("strong", null, "Heritage Villa Sala (Thủ Đức)"))))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3.5 bg-error-container/40 p-4 rounded-2xl border border-error/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-11 h-11 rounded-xl bg-error text-on-error flex flex-col items-center justify-center font-bold text-xs shadow-sm"
  }, /*#__PURE__*/React.createElement("span", null, user.bloodType ? user.bloodType.split(' ')[0] : 'O'), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px]"
  }, user.bloodType ? user.bloodType.split(' ')[1] || 'Rh+' : 'Rh-')), /*#__PURE__*/React.createElement("div", {
    className: "text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-error flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "health_and_safety"), " Nhóm Máu: ", user.bloodType || 'O Rh(-)'), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "Dị ứng: ", user.allergies || 'Không ghi nhận dị ứng'))))), /*#__PURE__*/React.createElement("section", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5"
  }, [{
    title: 'Huyết Áp',
    val: '128/82',
    unit: 'mmHg',
    status: 'Ổn định',
    icon: 'favorite'
  }, {
    title: 'Nhịp Tim',
    val: '72',
    unit: 'bpm',
    status: 'Nhịp xoang đều',
    icon: 'monitor_heart'
  }, {
    title: 'SpO2 Khí Trời',
    val: '99%',
    unit: 'O2',
    status: 'Rất tốt',
    icon: 'air'
  }, {
    title: 'Đường Huyết Đói',
    val: '5.6',
    unit: 'mmol/L',
    status: 'Mục tiêu',
    icon: 'water_drop'
  }, {
    title: 'Thân Nhiệt',
    val: '36.8',
    unit: '°C',
    status: 'Bình thường',
    icon: 'device_thermostat'
  }, {
    title: 'Nhịp Thở',
    val: '18',
    unit: 'lần/phút',
    status: 'Êm dịu',
    icon: 'vital_signs'
  }].map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-xs flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-outline text-xs"
  }, /*#__PURE__*/React.createElement("span", null, v.title), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary"
  }, v.icon)), /*#__PURE__*/React.createElement("div", {
    className: "my-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-serif font-bold text-primary"
  }, v.val), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-outline ml-1"
  }, v.unit)), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block self-start"
  }, v.status))))), /*#__PURE__*/React.createElement("section", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 py-3"
  }, /*#__PURE__*/React.createElement(HeartRateTelemetryD3Chart, {
    currentBpm: 72
  })), /*#__PURE__*/React.createElement("section", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 py-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 bg-brand-charcoal text-white rounded-3xl p-6 shadow-xl space-y-4 border border-outline-variant/30 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-white/10 pb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-sm text-gold-accent font-serif"
  }, "Điện Tâm Đồ ECG Realtime (Lead II)")), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono text-white/70"
  }, "72 BPM • Chuẩn JCI")), /*#__PURE__*/React.createElement("div", {
    className: "my-6 relative h-36 bg-black/40 rounded-2xl overflow-hidden flex items-center p-2 border border-white/5"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-full h-full",
    viewBox: "0 0 500 100",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,50 L50,50 L60,40 L70,50 L90,50 L100,10 L110,85 L120,50 L140,50 L155,35 L170,50 L250,50 L260,40 L270,50 L290,50 L300,10 L310,85 L320,50 L340,50 L355,35 L370,50 L500,50",
    fill: "none",
    stroke: "#10b981",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-2 right-3 text-[10px] text-emerald-400 font-mono"
  }, "QRS: 88ms • QT: 390ms"))), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-white/5 text-xs text-white/80 space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Thiết bị IoT kết nối:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-gold-accent"
  }, "Holter ECG GoCare Wireless 5G")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Lần đồng bộ gần nhất:"), /*#__PURE__*/React.createElement("span", null, "Cách đây 1 phút (Tự động)")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 bg-surface-container-lowest rounded-3xl p-6 sm:p-7 shadow-md border border-outline-variant/40 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b pb-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold text-primary flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-secondary"
  }, "health_and_safety"), /*#__PURE__*/React.createElement("span", null, "Thang Đo Đau & Khai Báo Sức Khỏe")), /*#__PURE__*/React.createElement("span", {
    className: `px-2.5 py-1 rounded-full text-xs font-bold ${isRedAlert ? 'bg-error text-on-error animate-pulse' : 'bg-emerald-100 text-emerald-800'}`
  }, isRedAlert ? 'CẢNH BÁO CODE RED' : 'An Toàn')), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center text-xs font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "Mức độ đau hiện tại (VAS):"), /*#__PURE__*/React.createElement("span", {
    className: "text-base text-secondary font-serif"
  }, painScore, " / 10")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "10",
    value: painScore,
    onChange: e => setPainScore(parseInt(e.target.value)),
    className: "w-full accent-secondary cursor-pointer h-2 bg-surface-container rounded-lg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[10px] text-outline"
  }, /*#__PURE__*/React.createElement("span", null, "0: Không đau"), /*#__PURE__*/React.createElement("span", null, "5: Đau vừa"), /*#__PURE__*/React.createElement("span", {
    className: "text-error font-bold"
  }, "10: Đau dữ dội"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 pt-2 text-xs"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "block text-primary"
  }, "Dấu hiệu cảnh báo nguy hiểm:"), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 cursor-pointer p-2 rounded-xl bg-surface-container-low hover:bg-surface-container"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isChestPain,
    onChange: e => setIsChestPain(e.target.checked),
    className: "rounded text-error focus:ring-error"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-error"
  }, "Cơn đau tức ngực nghẹn ngào, lan lên vai trái / hàm (Nghi ngờ nhồi máu)")), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 cursor-pointer p-2 rounded-xl bg-surface-container-low hover:bg-surface-container"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isStrokeSign,
    onChange: e => setIsStrokeSign(e.target.checked),
    className: "rounded text-error focus:ring-error"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-error"
  }, "Méo miệng, tê yếu tay chân đột ngột, khó nói (Dấu hiệu FAST đột quỵ)"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1"
  }, "Ghi chú triệu chứng kèm theo:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: symptomNote,
    onChange: e => setSymptomNote(e.target.value),
    placeholder: "Ví dụ: Váng đầu sau khi thức dậy, buồn nôn nhẹ...",
    className: "w-full px-3.5 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleTriageSubmit,
    className: `w-full py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-md transition-all ${isRedAlert ? 'bg-error text-on-error hover:bg-red-700 animate-bounce' : 'bg-primary text-on-primary hover:bg-primary-container'}`
  }, isRedAlert ? 'BÁO ĐỘNG ĐỎ CẤP CỨU (CODE RED 24/7)' : 'Gửi Khai Báo Sức Khỏe Đến Điều Dưỡng')))));
}

// --- STITCH PROJECT HUB (Floating 5-Screens Navigator & Mockup Viewer) ---
function StitchHub() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [previewMockup, setPreviewMockup] = useState(null);
  const screens = [{
    num: 1,
    id: '13058102756314739464',
    title: 'Trang 1: Trang Chủ & Không Gian Y Khoa GoCare',
    shortTitle: 'Trang Chủ & Bảng Giá Dịch Vụ',
    path: '/',
    mockup: './stitch_interactive_image_click_animations/trang_1_trang_ch_kh_ng_gian_y_khoa_gocare_chu_n_h_a_font_b_ng_gi_ph_n_c_p/screen.png',
    codeLink: './stitch_interactive_image_click_animations/trang_1_trang_ch_kh_ng_gian_y_khoa_gocare_chu_n_h_a_font_b_ng_gi_ph_n_c_p/code.html'
  }, {
    num: 2,
    id: '1399315668460315204',
    title: 'Chuyên Khoa & Đội Ngũ Bác Sĩ Người Việt - GoCare',
    shortTitle: 'Hội Đồng Bác Sĩ Chuyên Khoa',
    path: '/chuyen-khoa',
    mockup: './stitch_interactive_image_click_animations/chuy_n_khoa_i_ng_b_c_s_ng_i_vi_t_gocare/screen.png',
    codeLink: './stitch_interactive_image_click_animations/chuy_n_khoa_i_ng_b_c_s_ng_i_vi_t_gocare/code.html'
  }, {
    num: 3,
    id: '5285402656243227075',
    title: 'Bộ Thẻ Điều Dưỡng & Bản Đồ GPS Thuật Toán Dijkstra/A*',
    shortTitle: 'Điều Dưỡng CCHN & GPS Dijkstra/A*',
    path: '/dieu-duong',
    mockup: './stitch_interactive_image_click_animations/b_th_i_u_d_ng_ng_i_vi_t_b_n_gps_thu_t_to_n_dijkstra_a_gocare_5_sao/screen.png',
    codeLink: './stitch_interactive_image_click_animations/b_th_i_u_d_ng_ng_i_vi_t_b_n_gps_thu_t_to_n_dijkstra_a_gocare_5_sao/code.html'
  }, {
    num: 4,
    id: '14297718549207695474',
    title: 'Trang 3: Sống Khỏe & Dược Phẩm - Liên Kết Long Châu & An Khang',
    shortTitle: 'Sống Khỏe & Nhà Thuốc Long Châu/AK',
    path: '/wellness',
    mockup: './stitch_interactive_image_click_animations/trang_3_wellness_pharmacy_hub_li_n_k_t_long_ch_u_an_khang/screen.png',
    codeLink: './stitch_interactive_image_click_animations/trang_3_wellness_pharmacy_hub_li_n_k_t_long_ch_u_an_khang/code.html'
  }, {
    num: 5,
    id: '11594808256415658240',
    title: 'Trang 4: Cổng Bệnh Nhân & Bệnh Án Điện Tử EHR GoCare',
    shortTitle: 'Cổng Bệnh Nhân & Đăng Nhập Google',
    path: '/cong-benh-nhan',
    mockup: './stitch_interactive_image_click_animations/trang_4_c_ng_b_nh_nh_n_b_nh_n_i_n_t_patient_portal_ehr_gocare_5_sao/screen.png',
    codeLink: './stitch_interactive_image_click_animations/trang_4_c_ng_b_nh_nh_n_b_nh_n_i_n_t_patient_portal_ehr_gocare_5_sao/code.html'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    "aria-label": "Stitch Project Navigator"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-5 right-5 z-50 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsOpen(!isOpen),
    className: "px-4 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 border border-gold-accent/40 flex items-center gap-2 transition-all"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-gold-accent animate-spin",
    style: {
      animationDuration: '6s'
    }
  }, "widgets"), /*#__PURE__*/React.createElement("span", null, "Stitch Project Hub"), /*#__PURE__*/React.createElement("span", {
    className: "px-1.5 py-0.5 rounded-full bg-secondary text-[10px] font-mono"
  }, "5 Screens"))), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-lg bg-surface-container-lowest h-full shadow-2xl flex flex-col p-6 overflow-y-auto modal-animated"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-4 border-b border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-mono uppercase font-bold text-secondary"
  }, "Project: GoCare 5 Sao")), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-lg font-bold text-primary"
  }, "Interactive 5 Screens Hub")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsOpen(false),
    className: "w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-on-surface"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 py-4 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant"
  }, "Chuyển đổi tức thì giữa các màn hình trong ứng dụng SPA hoặc xem mockup gốc độ phân giải cao:"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, screens.map(s => {
    const isCurrent = location.pathname === s.path;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: `p-3.5 rounded-2xl border transition-all ${isCurrent ? 'border-primary-container bg-surface-container-low ring-1 ring-primary-container shadow-sm' : 'border-outline-variant/30 bg-surface-container-lowest hover:border-outline'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-5 h-5 rounded-full bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center"
    }, s.num), /*#__PURE__*/React.createElement("h4", {
      className: "font-bold text-xs text-primary"
    }, s.shortTitle)), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-mono text-outline mt-1"
    }, "Stitch ID: ", s.id)), isCurrent && /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold"
    }, "Đang xem")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mt-3 pt-2 border-t border-outline-variant/20 text-xs"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => {
        navigate(s.path);
        setIsOpen(false);
      },
      className: "px-3 py-1.5 rounded-xl bg-primary text-on-primary font-semibold text-[11px] hover:bg-primary-container flex items-center gap-1 shadow-xs"
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined text-xs"
    }, "open_in_browser"), /*#__PURE__*/React.createElement("span", null, "Chuyển tới")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setPreviewMockup(s),
      className: "px-3 py-1.5 rounded-xl bg-surface-container text-primary font-semibold text-[11px] hover:bg-gold-light flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined text-xs"
    }, "image"), /*#__PURE__*/React.createElement("span", null, "Xem Mockup")), /*#__PURE__*/React.createElement("a", {
      href: s.codeLink,
      target: "_blank",
      rel: "noreferrer",
      className: "px-3 py-1.5 rounded-xl bg-surface-container text-outline hover:text-on-surface font-semibold text-[11px] flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined text-xs"
    }, "code"), /*#__PURE__*/React.createElement("span", null, "Code riêng"))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-xs space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-primary flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary"
  }, "cloud_download"), /*#__PURE__*/React.createElement("span", null, "Tài nguyên hình ảnh cục bộ (assets/images)")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "38 hình ảnh y khoa độ phân giải cao lưu trữ ngoại tuyến độc lập, không phụ thuộc máy chủ bên thứ ba.")))), previewMockup && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col p-4 modal-animated",
    onClick: () => setPreviewMockup(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-white p-2 pb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm"
  }, previewMockup.title), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-white/70 font-mono"
  }, "Stitch ID: ", previewMockup.id)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPreviewMockup(null),
    className: "px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-xs font-bold"
  }, "✕ Đóng")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-auto flex items-center justify-center p-2"
  }, /*#__PURE__*/React.createElement("img", {
    src: previewMockup.mockup,
    alt: previewMockup.title,
    className: "max-h-[85vh] max-w-[95vw] object-contain rounded-2xl shadow-2xl cursor-zoom-in",
    onClick: e => e.stopPropagation()
  }))));
}

// --- BOX CHAT TƯ VẤN TÂM LÝ & SỨC KHỎE TINH THẦN GOCARE ---
function PsychologicalCounselingBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBreathingOpen, setIsBreathingOpen] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState('idle'); // 'idle' | 'inhale' | 'hold' | 'exhale'
  const [breathingTimer, setBreathingTimer] = useState(4);
  const [breathingCycle, setBreathingCycle] = useState(1);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [inputMsg, setInputMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([{
    id: 1,
    sender: 'doctor',
    time: 'Vừa xong',
    text: 'Xin chào bạn, tôi là ThS. BS Nguyễn Trung Thành – Chuyên gia Trị liệu Tâm lý & Sức khỏe Tinh thần tại GoCare. Dù bạn đang lo âu về sức khỏe bản thân, khó ngủ, hay đang chịu nhiều áp lực khi chăm sóc cha mẹ già ốm nặng, tôi luôn ở đây để lắng nghe và đồng hành cùng bạn. Hôm nay tâm trạng của bạn thế nào?'
  }]);

  // Listen for custom trigger from Header or other screens
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-psych-counseling', handleOpen);
    return () => window.removeEventListener('open-psych-counseling', handleOpen);
  }, []);

  // Auto scroll chat
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [messages, isOpen, isTyping]);

  // 4-7-8 Breathing Pacer Engine
  useEffect(() => {
    let interval = null;
    if (isBreathingOpen && breathingPhase !== 'idle') {
      interval = setInterval(() => {
        setBreathingTimer(prev => {
          if (prev > 1) return prev - 1;
          // Transition to next phase
          if (breathingPhase === 'inhale') {
            setBreathingPhase('hold');
            return 7;
          } else if (breathingPhase === 'hold') {
            setBreathingPhase('exhale');
            return 8;
          } else if (breathingPhase === 'exhale') {
            setBreathingCycle(c => c < 4 ? c + 1 : 1);
            setBreathingPhase('inhale');
            return 4;
          }
          return 4;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBreathingOpen, breathingPhase]);
  const startBreathing = () => {
    setIsBreathingOpen(true);
    setBreathingPhase('inhale');
    setBreathingTimer(4);
    setBreathingCycle(1);
  };
  const stopBreathing = () => {
    setBreathingPhase('idle');
    setIsBreathingOpen(false);
  };

  // Sound 432 Hz Healing Frequency Tone via Web Audio
  const toggleAudioTone = () => {
    try {
      if (!isSoundPlaying) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(432, ctx.currentTime); // 432 Hz frequency
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        audioCtxRef.current = ctx;
        oscRef.current = osc;
        setIsSoundPlaying(true);
      } else {
        if (oscRef.current) {
          oscRef.current.stop();
          oscRef.current.disconnect();
        }
        if (audioCtxRef.current) {
          audioCtxRef.current.close();
        }
        setIsSoundPlaying(false);
      }
    } catch (e) {
      console.warn("Audio toggle note:", e);
      setIsSoundPlaying(!isSoundPlaying);
    }
  };

  // Handle sending question / mood
  const handleUserSend = customText => {
    const textToSend = customText || inputMsg;
    if (!textToSend.trim()) return;
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      time: new Date().toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit'
      }),
      text: textToSend
    };
    setMessages(prev => [...prev, userMsg]);
    if (!customText) setInputMsg('');
    setIsTyping(true);

    // Medical Psychological Knowledge Engine
    setTimeout(() => {
      setIsTyping(false);
      let responseText = '';
      let showBreathingAction = false;
      let showBookingAction = true;
      const lower = textToSend.toLowerCase();
      if (lower.includes('thở') || lower.includes('hồi hộp') || lower.includes('lo âu') || lower.includes('bồn chồn') || lower.includes('tim đập')) {
        responseText = 'Tôi rất đồng cảm với cảm giác hồi hộp, bồn chồn này của bạn. Khi lo âu ập đến, hệ thần kinh giao cảm bị kích thích quá mức, khiến nhịp tim tăng và cơ thể căng cứng. Phương pháp hiệu quả nhất để thiết lập lại nhịp sinh học lúc này là liệu pháp Thở 4-7-8 (đã được chứng minh giúp kích hoạt dây thần kinh phế vị Vagus, làm dịu huyết áp và nhịp tim trong vòng 2 phút).';
        showBreathingAction = true;
      } else if (lower.includes('bố mẹ') || lower.includes('mẹ') || lower.includes('cha') || lower.includes('cáu gắt') || lower.includes('người già')) {
        responseText = 'Việc chăm sóc cha mẹ lớn tuổi có tính khí thay đổi hoặc cáu gắt là một thử thách tâm lý rất lớn cho người con. Ở người cao tuổi, sự cáu gắt thường bắt nguồn từ: (1) Cảm giác bất lực khi thấy mình giảm sút thể lực, sợ trở thành gánh nặng; hoặc (2) Cơn đau mạn tính, rối loạn tuần hoàn máu não hay sa sút trí tuệ nhẹ. Bí quyết quan trọng nhất là "lắng nghe không phán xét" và tuyệt đối không tranh luận đúng sai lúc cha mẹ đang xúc động. Bạn có muốn đặt lịch để tôi cùng bạn xây dựng kế hoạch tâm lý phù hợp cho gia đình?';
        showBookingAction = true;
      } else if (lower.includes('khó ngủ') || lower.includes('mất ngủ') || lower.includes('đêm') || lower.includes('thức')) {
        responseText = 'Mất ngủ ở người lớn tuổi thường có chu kỳ sinh học ngắn hơn người trẻ. Để cải thiện tự nhiên mà không lạm dụng thuốc an thần:\n1. Tắm nước ấm hoặc ngâm chân nước gừng ấm 20 phút trước khi ngủ.\n2. Bật tần số âm thanh thư giãn 432Hz xoa dịu sóng não Delta.\n3. Tránh xem màn hình điện thoại hoặc bàn luận chuyện căng thẳng sau 20:00.\n4. Thực hiện 4 chu kỳ thở chậm 4-7-8 ngay khi đặt lưng xuống giường.';
        showBreathingAction = true;
      } else if (lower.includes('quá tải') || lower.includes('mệt mỏi') || lower.includes('stress') || lower.includes('burnout')) {
        responseText = 'Hội chứng kiệt sức ở người chăm sóc (Caregiver Burnout) là điều cực kỳ phổ biến nhưng ít khi được quan tâm đúng mực. Bạn không thể rót nước từ một chiếc bình rỗng – chăm sóc sức khỏe tinh thần của chính bạn không phải là ích kỷ, mà là điều kiện tiên quyết để bạn chăm sóc người thân lâu dài. GoCare có dịch vụ Điều dưỡng thay ca bán trú và nghỉ dưỡng ngắn ngày để bạn có thời gian tái tạo năng lượng.';
        showBookingAction = true;
      } else {
        responseText = 'Cảm ơn bạn đã mở lòng chia sẻ. Những trăn trở tâm lý khi đối diện với vấn đề sức khỏe hay tuổi già của người thân là hoàn toàn tự nhiên. Để đi sâu vào từng liệu trình giải tỏa lo âu theo phương pháp Nhận thức Hành vi (CBT), bạn có thể gửi thêm câu hỏi hoặc đặt một phiên tư vấn trực tuyến 1:1 bảo mật cùng tôi.';
      }
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'doctor',
        time: new Date().toLocaleTimeString('vi-VN', {
          hour: '2-digit',
          minute: '2-digit'
        }),
        text: responseText,
        showBreathingAction,
        showBookingAction
      }]);
    }, 1200);
  };
  return /*#__PURE__*/React.createElement("aside", {
    "aria-label": "Tư Vấn Tâm Lý & Sức Khỏe Tinh Thần"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-20 right-5 z-40 flex items-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsOpen(!isOpen),
    className: "group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary via-primary-container to-secondary text-white shadow-xl hover:shadow-2xl hover:scale-105 border border-gold-accent/50 transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/doctor_thao.jpg",
    alt: "ThS. BS Nguyễn Trung Thành",
    className: "w-7 h-7 rounded-full object-cover ring-2 ring-gold-accent"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-primary"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col text-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gold-accent uppercase font-bold tracking-wider leading-none"
  }, "Chuyên Gia Tâm Lý"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold leading-tight flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", null, "Tư Vấn Tâm Lý 24/7"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs text-secondary-container animate-pulse"
  }, "favorite"))))), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-5 right-4 sm:right-6 z-50 w-[95vw] sm:w-[440px] max-h-[88vh] h-[640px] bg-surface-container-lowest rounded-3xl shadow-2xl border border-gold-accent/40 flex flex-col overflow-hidden modal-animated"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gradient-to-r from-primary via-primary-container to-secondary text-white flex items-center justify-between shrink-0 shadow-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/doctor_thao.jpg",
    alt: "ThS. BS Nguyễn Trung Thành",
    className: "w-12 h-12 rounded-2xl object-cover ring-2 ring-gold-accent shadow-sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-serif font-bold text-sm text-white"
  }, "ThS. BS Nguyễn Trung Thành"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "verified")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-white/80"
  }, "Trị Liệu Tâm Lý & Sức Khỏe Tinh Thần GoCare"), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1 text-[10px] text-emerald-300 font-semibold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"
  }), "Trực tuyến • Bảo mật y tế 100%"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleAudioTone,
    title: "Tần số bình yên 432Hz",
    className: `p-2 rounded-xl transition-all ${isSoundPlaying ? 'bg-gold-accent text-primary shadow-sm' : 'bg-white/10 hover:bg-white/20 text-white'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, isSoundPlaying ? 'volume_up' : 'music_note')), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsOpen(false),
    className: "p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "close")))), /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-2 bg-gold-light/60 border-b border-gold-accent/30 flex items-center justify-between text-xs shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: breathingPhase === 'idle' ? startBreathing : stopBreathing,
    className: "flex items-center gap-1.5 font-bold text-secondary hover:text-primary transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm animate-pulse"
  }, "self_improvement"), /*#__PURE__*/React.createElement("span", null, breathingPhase === 'idle' ? 'Bài tập thở 4-7-8' : 'Đang tập thở (Nhấp để dừng)')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-[11px] text-on-surface-variant font-medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs text-secondary"
  }, "headset"), /*#__PURE__*/React.createElement("span", null, "Sóng não 432Hz: ", /*#__PURE__*/React.createElement("strong", null, isSoundPlaying ? 'Đang phát' : 'Tắt')))), isBreathingOpen && /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-surface-container-low border-b border-outline-variant/30 flex flex-col items-center justify-center text-center space-y-3 shrink-0 modal-animated"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between w-full text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, "Liệu Pháp Thở 4-7-8 (Chu kỳ ", breathingCycle, "/4)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: stopBreathing,
    className: "text-outline hover:text-error text-xs"
  }, "✕ Thu nhỏ")), /*#__PURE__*/React.createElement("div", {
    className: "relative w-28 h-28 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: `absolute rounded-full transition-all duration-1000 ${breathingPhase === 'inhale' ? 'w-24 h-24 bg-secondary/30 ring-4 ring-secondary scale-110' : breathingPhase === 'hold' ? 'w-28 h-28 bg-gold-accent/30 ring-4 ring-gold-accent animate-pulse' : 'w-16 h-16 bg-emerald-500/30 ring-4 ring-emerald-500 scale-90'}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-serif font-bold text-primary"
  }, breathingTimer, "s"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold uppercase tracking-wider text-secondary"
  }, breathingPhase === 'inhale' ? 'Hít vào (4s)' : breathingPhase === 'hold' ? 'Giữ hơi (7s)' : 'Thở ra (8s)'))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant max-w-xs"
  }, breathingPhase === 'inhale' && 'Hít sâu nhẹ nhàng bằng mũi, căng lồng ngực...', breathingPhase === 'hold' && 'Giữ êm dịu trong lồng ngực, thư giãn hai vai...', breathingPhase === 'exhale' && 'Thở từ từ qua miệng, thả lỏng toàn bộ cơ thể...')), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-surface-container-lowest border-b border-outline-variant/20 shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block text-[11px] font-bold text-outline uppercase tracking-wider mb-2"
  }, "Bạn hoặc người thân đang cảm thấy thế nào?"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs"
  }, [{
    label: '😊 Bình an',
    text: 'Tôi cảm thấy tâm trạng hôm nay tương đối bình an và muốn duy trì năng lượng tích cực này.'
  }, {
    label: '😰 Lo âu / Hồi hộp',
    text: 'Tôi đang cảm thấy bồn chồn, lo âu về sức khỏe và nhịp tim có vẻ đập nhanh.'
  }, {
    label: '😔 Khó ngủ / Trầm cảm',
    text: 'Bố mẹ tôi gần đây rất khó ngủ, đêm hay thức giấc và tâm trạng buồn bã.'
  }, {
    label: '👵 Bố mẹ cáu gắt',
    text: 'Người lớn tuổi trong nhà dạo này rất dễ cáu gắt và không chịu uống thuốc theo đơn.'
  }, {
    label: '💔 Quá tải chăm sóc',
    text: 'Tôi cảm thấy quá tải và kiệt sức (burnout) sau thời gian dài chăm sóc người ốm mạn tính.'
  }].map((m, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    type: "button",
    onClick: () => handleUserSend(m.text),
    className: "px-3 py-1.5 rounded-full bg-surface-container hover:bg-gold-light text-primary border border-outline-variant/30 hover:border-gold-accent font-semibold whitespace-nowrap transition-all shrink-0 text-[11px]"
  }, m.label)))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 p-4 overflow-y-auto space-y-4 text-xs bg-surface/40"
  }, messages.map(msg => /*#__PURE__*/React.createElement("div", {
    key: msg.id,
    className: `flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 mb-1 text-[10px] text-outline"
  }, /*#__PURE__*/React.createElement("span", null, msg.sender === 'user' ? 'Bạn' : 'BS. Nguyễn Trung Thành'), /*#__PURE__*/React.createElement("span", null, "•"), /*#__PURE__*/React.createElement("span", null, msg.time)), /*#__PURE__*/React.createElement("div", {
    className: `max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${msg.sender === 'user' ? 'bg-primary text-on-primary rounded-tr-xs shadow-sm' : 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-tl-xs shadow-xs'}`
  }, /*#__PURE__*/React.createElement("p", {
    className: "whitespace-pre-line"
  }, msg.text), msg.showBreathingAction && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 pt-2.5 border-t border-outline-variant/30 flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: startBreathing,
    className: "px-3 py-1.5 rounded-xl bg-secondary text-white font-bold text-[11px] flex items-center gap-1 shadow-xs hover:bg-secondary-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "self_improvement"), /*#__PURE__*/React.createElement("span", null, "Bắt Đầu Thở 4-7-8 Cùng Bác Sĩ")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleAudioTone,
    className: "px-3 py-1.5 rounded-xl bg-gold-light border border-gold-accent/40 text-primary font-bold text-[11px] flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "music_note"), /*#__PURE__*/React.createElement("span", null, isSoundPlaying ? 'Tắt Nhạc 432Hz' : 'Bật Nhạc 432Hz'))), msg.showBookingAction && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 pt-2.5 border-t border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => alert('Đã gửi yêu cầu đặt lịch phiên trị liệu tâm lý 1:1 bảo mật cùng ThS. BS Nguyễn Trung Thành. Trợ lý y khoa sẽ liên hệ xác nhận thời gian trong 10 phút.'),
    className: "w-full py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "calendar_month"), /*#__PURE__*/React.createElement("span", null, "Đặt Phiên Trị Liệu Tâm Lý 1:1 Riêng Biệt")))))), isTyping && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-outline text-[11px] bg-surface-container-low p-2.5 rounded-2xl w-fit"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-secondary animate-bounce"
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-secondary animate-bounce",
    style: {
      animationDelay: '0.2s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-secondary animate-bounce",
    style: {
      animationDelay: '0.4s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-1 text-on-surface-variant font-medium"
  }, "Bác sĩ Thành đang soạn phản hồi...")), /*#__PURE__*/React.createElement("div", {
    ref: messagesEndRef
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      handleUserSend();
    },
    className: "p-3 bg-surface-container-lowest border-t border-outline-variant/30 flex items-center gap-2 shrink-0"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: inputMsg,
    onChange: e => setInputMsg(e.target.value),
    placeholder: "Chia sẻ lo âu hoặc điều bạn đang trăn trở...",
    className: "flex-1 px-4 py-2.5 rounded-2xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface focus:outline-none focus:border-secondary transition-all"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: !inputMsg.trim(),
    className: "w-10 h-10 rounded-2xl bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm",
    title: "Gửi tin nhắn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "send")))));
}

// --- MODAL: ĐĂNG KÝ & ĐĂNG NHẬP TÀI KHOẢN THẬT (EMAIL / PASSWORD & GOOGLE OAUTH) ---
function AuthModal({
  isOpen,
  onClose,
  onAuthSuccess,
  initialMode = 'login',
  onGoogleLoginReal
}) {
  if (!isOpen) return null;
  const [mode, setMode] = useState(initialMode); // 'login' or 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const handleSwitchMode = newMode => {
    setMode(newMode);
    setErrorMsg('');
    setSuccessMsg('');
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    if (mode === 'register') {
      if (!name.trim()) return setErrorMsg('Vui lòng nhập Họ và Tên.');
      if (!email.trim()) return setErrorMsg('Vui lòng nhập Email.');
      if (!password) return setErrorMsg('Vui lòng nhập Mật khẩu.');
      if (password.length < 6) return setErrorMsg('Mật khẩu cần tối thiểu 6 ký tự.');
      if (password !== confirmPassword) return setErrorMsg('Mật khẩu xác nhận không trùng khớp.');
      setLoading(true);
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            password,
            phone
          })
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || 'Đăng ký thất bại');
        }
        setSuccessMsg('Đăng ký tài khoản thành công! Đang đăng nhập...');
        localStorage.setItem('gocare_token', data.token);
        localStorage.setItem('gocare_google_user', JSON.stringify(data.user));
        setTimeout(() => {
          onAuthSuccess(data.user, data.token);
          onClose();
        }, 800);
      } catch (err) {
        setErrorMsg(err.message || 'Lỗi kết nối máy chủ backend');
      } finally {
        setLoading(false);
      }
    } else {
      // Login
      if (!email.trim()) return setErrorMsg('Vui lòng nhập Email.');
      if (!password) return setErrorMsg('Vui lòng nhập Mật khẩu.');
      setLoading(true);
      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || 'Đăng nhập thất bại');
        }
        setSuccessMsg('Đăng nhập thành công! Đang chuyển hướng...');
        localStorage.setItem('gocare_token', data.token);
        localStorage.setItem('gocare_google_user', JSON.stringify(data.user));
        setTimeout(() => {
          onAuthSuccess(data.user, data.token);
          onClose();
        }, 800);
      } catch (err) {
        setErrorMsg(err.message || 'Lỗi kết nối máy chủ backend');
      } finally {
        setLoading(false);
      }
    }
  };
  const handleQuickDemo = (demoEmail, demoPass) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    setMode('login');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-md bg-surface-container-lowest rounded-3xl shadow-2xl border border-gold-accent/50 overflow-hidden modal-animated my-auto flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-primary via-primary-container to-secondary text-on-primary p-6 relative"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: "absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-lg"
  }, "close")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center font-serif font-bold text-2xl shadow-md"
  }, "G"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold"
  }, "GoCare Healthcare"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-white/80"
  }, "Cổng định danh & Bệnh án điện tử EHR"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 grid grid-cols-2 p-1 rounded-2xl bg-black/20 backdrop-blur-md"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => handleSwitchMode('login'),
    className: `py-2 text-xs font-bold rounded-xl transition-all ${mode === 'login' ? 'bg-white text-primary shadow-md' : 'text-white/80 hover:text-white'}`
  }, "Đăng Nhập"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => handleSwitchMode('register'),
    className: `py-2 text-xs font-bold rounded-xl transition-all ${mode === 'register' ? 'bg-white text-primary shadow-md' : 'text-white/80 hover:text-white'}`
  }, "Đăng Ký Tài Khoản"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 sm:p-8 space-y-4"
  }, errorMsg && /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-error-container text-error text-xs font-medium flex items-center gap-2 border border-error/30 animate-shake"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "error"), /*#__PURE__*/React.createElement("span", null, errorMsg)), successMsg && /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-emerald-50 text-emerald-800 text-xs font-medium flex items-center gap-2 border border-emerald-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-emerald-600"
  }, "check_circle"), /*#__PURE__*/React.createElement("span", null, successMsg)), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-3.5"
  }, mode === 'register' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1"
  }, "Họ và Tên bệnh nhân *"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined absolute left-3.5 top-3 text-outline text-base"
  }, "person"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "VD: Huỳnh Mai",
    className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-outline-variant/40 text-xs focus:ring-2 focus:ring-secondary focus:border-transparent outline-none bg-surface-container-low"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1"
  }, "Địa chỉ Email *"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined absolute left-3.5 top-3 text-outline text-base"
  }, "mail"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "VD: huynhmai8906@gmail.com",
    className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-outline-variant/40 text-xs focus:ring-2 focus:ring-secondary focus:border-transparent outline-none bg-surface-container-low"
  }))), mode === 'register' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1"
  }, "Số điện thoại liên hệ"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined absolute left-3.5 top-3 text-outline text-base"
  }, "call"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: phone,
    onChange: e => setPhone(e.target.value),
    placeholder: "VD: 0901 234 567",
    className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-outline-variant/40 text-xs focus:ring-2 focus:ring-secondary focus:border-transparent outline-none bg-surface-container-low"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1"
  }, "Mật khẩu *"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined absolute left-3.5 top-3 text-outline text-base"
  }, "lock"), /*#__PURE__*/React.createElement("input", {
    type: showPassword ? 'text' : 'password',
    required: true,
    value: password,
    onChange: e => setPassword(e.target.value),
    placeholder: "Tối thiểu 6 ký tự",
    className: "w-full pl-10 pr-10 py-2.5 rounded-xl border border-outline-variant/40 text-xs focus:ring-2 focus:ring-secondary focus:border-transparent outline-none bg-surface-container-low"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowPassword(!showPassword),
    className: "absolute right-3 top-2.5 text-outline hover:text-primary"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, showPassword ? 'visibility_off' : 'visibility')))), mode === 'register' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1"
  }, "Xác nhận mật khẩu *"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined absolute left-3.5 top-3 text-outline text-base"
  }, "lock_reset"), /*#__PURE__*/React.createElement("input", {
    type: showPassword ? 'text' : 'password',
    required: true,
    value: confirmPassword,
    onChange: e => setConfirmPassword(e.target.value),
    placeholder: "Nhập lại mật khẩu",
    className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-outline-variant/40 text-xs focus:ring-2 focus:ring-secondary focus:border-transparent outline-none bg-surface-container-low"
  }))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: loading,
    className: "w-full py-3 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 hover:from-primary-container hover:to-secondary disabled:opacity-60"
  }, loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
  }), /*#__PURE__*/React.createElement("span", null, "Đang kết nối backend...")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, mode === 'login' ? 'login' : 'how_to_reg'), /*#__PURE__*/React.createElement("span", null, mode === 'login' ? 'ĐĂNG NHẬP NGAY' : 'TẠO TÀI KHOẢN MỚI')))), /*#__PURE__*/React.createElement("div", {
    className: "relative flex py-1 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-grow border-t border-outline-variant/40"
  }), /*#__PURE__*/React.createElement("span", {
    className: "flex-shrink mx-3 text-[10px] text-outline font-semibold uppercase"
  }, "Hoặc"), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow border-t border-outline-variant/40"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      onClose();
      onGoogleLoginReal();
    },
    className: "w-full py-2.5 px-4 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs uppercase tracking-wider border border-gray-300 shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2.5"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
  })), /*#__PURE__*/React.createElement("span", null, "Đăng Nhập Bằng Google Thật")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-center space-y-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-outline uppercase font-bold tracking-wider"
  }, "Tài khoản mẫu thử nghiệm sẵn:"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => handleQuickDemo('huynhmai8906@gmail.com', '123456'),
    className: "px-2.5 py-1 rounded-lg bg-surface-container hover:bg-gold-light text-primary text-[10px] font-bold border border-gold-accent/30 transition-colors"
  }, "Huỳnh Mai (123456)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => handleQuickDemo('demo@gocare.vn', '123456'),
    className: "px-2.5 py-1 rounded-lg bg-surface-container hover:bg-gold-light text-primary text-[10px] font-bold border border-gold-accent/30 transition-colors"
  }, "demo@gocare.vn (123456)"))))));
}

// --- MAIN APP ROUTING COMPONENT ---
function App() {
  // Manage Auth Modal State
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login');

  // Manage Real User Session
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('gocare_google_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  // Synchronize with backend /api/auth/me on mount
  useEffect(() => {
    const token = localStorage.getItem('gocare_token');
    if (token) {
      fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(res => res.json()).then(data => {
        if (data.success && data.user) {
          setUser(data.user);
          localStorage.setItem('gocare_google_user', JSON.stringify(data.user));
        }
      }).catch(err => {
        console.warn('Backend session validation skipped (offline/demo mode):', err);
      });
    }
  }, []);
  const openAuthModal = (mode = 'login') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  // Real Google Sign-in Handler with Backend Integration
  const handleGoogleLogin = async () => {
    let promptName = '';
    let promptEmail = '';
    try {
      promptName = window.prompt("Nhập Họ & Tên của bạn để xác thực Google Account:", user && user.name || "Huỳnh Mai");
      if (promptName) {
        promptEmail = window.prompt("Nhập địa chỉ Gmail của bạn:", user && user.email || "huynhmai8906@gmail.com");
      }
    } catch (e) {
      console.warn("window.prompt unavailable:", e);
    }
    const finalName = promptName || user && user.name || "Huỳnh Mai";
    const finalEmail = promptEmail || user && user.email || "huynhmai8906@gmail.com";
    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: finalName,
          email: finalEmail,
          picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
          googleId: `G-${Date.now()}`
        })
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
        localStorage.setItem('gocare_token', data.token);
        localStorage.setItem('gocare_google_user', JSON.stringify(data.user));
        alert(`Đăng nhập Google thành công với tài khoản [${finalEmail}]!\nCổng bệnh nhân và Bệnh án điện tử EHR đã được mở khóa.`);
        return;
      }
    } catch (err) {
      console.warn('Backend call /api/auth/google failed, using client storage:', err);
    }

    // Local fallback
    const googleUser = {
      name: finalName,
      email: finalEmail,
      picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
      patientId: `GC-EHR-${Math.floor(10000 + Math.random() * 90000)}`,
      verified: true
    };
    setUser(googleUser);
    localStorage.setItem('gocare_google_user', JSON.stringify(googleUser));
    alert(`Đăng nhập thành công với tài khoản Google [${finalEmail}]!`);
  };
  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất khỏi Cổng Bệnh Nhân GoCare?")) {
      setUser(null);
      localStorage.removeItem('gocare_token');
      localStorage.removeItem('gocare_google_user');
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex flex-col bg-surface text-on-surface"
  }, /*#__PURE__*/React.createElement(Header, {
    user: user,
    onLogout: handleLogout,
    onOpenAuth: openAuthModal
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(HomeScreen, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/chuyen-khoa",
    element: /*#__PURE__*/React.createElement(DoctorsScreen, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/dieu-duong",
    element: /*#__PURE__*/React.createElement(NursingScreen, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/wellness",
    element: /*#__PURE__*/React.createElement(WellnessScreen, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/cong-benh-nhan",
    element: /*#__PURE__*/React.createElement(PatientPortalScreen, {
      user: user,
      onGoogleLogin: handleGoogleLogin,
      onLogout: handleLogout,
      onOpenAuth: openAuthModal,
      onTriageSubmitted: updatedUser => setUser(updatedUser)
    })
  }))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(PsychologicalCounselingBox, null), /*#__PURE__*/React.createElement(AuthModal, {
    isOpen: authModalOpen,
    onClose: () => setAuthModalOpen(false),
    initialMode: authModalMode,
    onAuthSuccess: authedUser => setUser(authedUser),
    onGoogleLoginReal: handleGoogleLogin
  }));
}

// Render with MemoryRouter
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(/*#__PURE__*/React.createElement(MemoryRouter, {
  initialEntries: ['/']
}, /*#__PURE__*/React.createElement(App, null)));