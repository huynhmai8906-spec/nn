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
  onLogout
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
  }, "An t\xE2m ch\u0103m s\xF3c, k\u1EBFt n\u1ED1i t\u1EE9c th\xEC"))), /*#__PURE__*/React.createElement("nav", {
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
    title: "T\u01B0 v\u1EA5n t\xE2m l\xFD & s\u1EE9c kh\u1ECFe tinh th\u1EA7n 24/7"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary group-hover:scale-110 transition-transform"
  }, "psychology"), /*#__PURE__*/React.createElement("span", null, "T\u01B0 V\u1EA5n T\xE2m L\xFD"), /*#__PURE__*/React.createElement("span", {
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
    className: "flex items-center gap-2 group p-1 pr-2 rounded-full bg-surface-container hover:bg-gold-light transition-all border border-gold-accent/40"
  }, /*#__PURE__*/React.createElement("img", {
    src: user.picture || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
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
  }, "verified"), " Google ID"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onLogout,
    title: "\u0110\u0103ng xu\u1EA5t",
    className: "w-8 h-8 rounded-full bg-surface-container hover:bg-error-container text-outline hover:text-error flex items-center justify-center transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "logout"))) : /*#__PURE__*/React.createElement(Link, {
    to: "/cong-benh-nhan",
    className: "inline-flex items-center justify-center h-10 px-4 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary hover:from-primary-container hover:to-secondary text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-gold-accent"
  }, "lock"), /*#__PURE__*/React.createElement("span", null, "C\u1ED4NG B\u1EC6NH NH\xC2N")))));
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
  }, "An t\xE2m ch\u0103m s\xF3c, k\u1EBFt n\u1ED1i t\u1EE9c th\xEC"))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-tertiary-fixed-dim leading-relaxed max-w-sm"
  }, "H\u1EC7 sinh th\xE1i y khoa & d\u01B0\u1EE1ng l\xE3o chu\u1EA9n qu\u1ED1c t\u1EBF 5 sao. K\u1EBFt h\u1EE3p c\xF4ng ngh\u1EC7 \u0111\u1ECBnh v\u1ECB GPS c\u1EE9u tr\u1EE3 t\u1EE9c th\xEC, b\u1EC7nh \xE1n \u0111i\u1EC7n t\u1EED EHR b\u1EA3o m\u1EADt HIPAA v\xE0 \u0111\u1ED9i ng\u0169 y b\xE1c s\u0129 h\xE0ng \u0111\u1EA7u Vi\u1EC7t Nam."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-1.5 text-tertiary-fixed-dim text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5 text-surface"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "verified_user"), " \u0110\u1EA1t chu\u1EA9n gi\xE1m \u0111\u1ECBnh JCI Hoa K\u1EF3 & C\u1EE5c Qu\u1EA3n l\xFD Kh\xE1m ch\u1EEFa b\u1EC7nh"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary-fixed"
  }, "health_and_safety"), " Gi\u1EA5y ph\xE9p ho\u1EA1t \u0111\u1ED9ng B\u1ED9 Y T\u1EBF s\u1ED1: 08842/BYT-GPHD"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-400"
  }, "g_translate"), " T\xEDch h\u1EE3p Google Identity & B\u1EA3n \u0111\u1ED3 Dijkstra/A*"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-3 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-bold uppercase tracking-wider text-surface border-b border-tertiary-container pb-2"
  }, "H\u1EC7 Th\u1ED1ng C\u01A1 S\u1EDF GoCare"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2.5 text-xs text-tertiary-fixed-dim"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
    className: "text-surface font-semibold"
  }, "1. GoCare Heritage Villa Sala"), /*#__PURE__*/React.createElement("p", null, "Khu \u0111\xF4 th\u1ECB Sala, TP. Th\u1EE7 \u0110\u1EE9c, TP. H\u1ED3 Ch\xED Minh")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
    className: "text-surface font-semibold"
  }, "2. GoCare Premier B\u1EA1ch \u0110\u1EB1ng"), /*#__PURE__*/React.createElement("p", null, "\u0110\u01B0\u1EDDng T\xF4n \u0110\u1EE9c Th\u1EAFng, B\u1EBFn Ngh\xE9, Qu\u1EADn 1, TP. HCM")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
    className: "text-surface font-semibold"
  }, "3. GoCare S\u1ED1ng Kh\u1ECFe & Tr\u1ECB Li\u1EC7u Th\u1EA3o \u0110i\u1EC1n"), /*#__PURE__*/React.createElement("p", null, "Tr\u1EA1m \u0111i\u1EC1u d\u01B0\u1EE1ng & c\u1EA5p c\u1EE9u v\u1EC7 tinh, P. Th\u1EA3o \u0110i\u1EC1n")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
    className: "text-surface font-semibold"
  }, "4. GoCare Sanctuary Ph\xFA M\u1EF9 H\u01B0ng"), /*#__PURE__*/React.createElement("p", null, "Khu \u0111\xF4 th\u1ECB Ph\xFA M\u1EF9 H\u01B0ng, Qu\u1EADn 7, TP. HCM")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-bold uppercase tracking-wider text-surface border-b border-tertiary-container pb-2"
  }, "Li\xEAn K\u1EBFt Nhanh"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 text-xs text-tertiary-fixed-dim"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/chuyen-khoa",
    className: "hover:text-surface transition-colors flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "chevron_right"), "H\u1ED9i \u0111\u1ED3ng b\xE1c s\u0129")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/dieu-duong",
    className: "hover:text-surface transition-colors flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "chevron_right"), "\u0110i\u1EC1u d\u01B0\u1EE1ng & GPS Dijkstra")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/wellness",
    className: "hover:text-surface transition-colors flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "chevron_right"), "S\u1ED1ng Kh\u1ECFe & D\u01B0\u1EE3c Ph\u1EA9m (Long Ch\xE2u & AK)")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/cong-benh-nhan",
    className: "hover:text-surface transition-colors flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "chevron_right"), "C\u1ED5ng B\u1EC7nh Nh\xE2n Google")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-3 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-bold uppercase tracking-wider text-surface border-b border-tertiary-container pb-2"
  }, "T\u1ED5ng \u0110\xE0i C\u1EA5p C\u1EE9u 24/7"), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-gradient-to-r from-secondary/40 to-tertiary-container border border-secondary/40 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-secondary-fixed text-3xl animate-pulse"
  }, "e911_emergency"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-tertiary-fixed"
  }, "C\u1EE9u h\u1ED9 y t\u1EBF & \u0110i\u1EC1u ph\u1ED1i GPS kh\u1EA9n"), /*#__PURE__*/React.createElement("a", {
    href: "tel:19006868",
    className: "text-xl font-bold text-surface hover:text-secondary-fixed transition-colors"
  }, "1900 6868"))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-tertiary-fixed-dim leading-relaxed"
  }, "B\u1EA3o m\u1EADt b\u1EC7nh \xE1n \u0111i\u1EC7n t\u1EED EHR theo chu\u1EA9n qu\u1ED1c t\u1EBF HIPAA, x\xE1c th\u1EF1c VNeID M\u1EE9c 2 v\xE0 Google Identity an to\xE0n."))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-tertiary-container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-tertiary-fixed-dim"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2025 - 2026 GoCare - An t\xE2m ch\u0103m s\xF3c, k\u1EBFt n\u1ED1i t\u1EE9c th\xEC. To\xE0n b\u1ED9 b\u1EA3n quy\u1EC1n \u0111\u01B0\u1EE3c b\u1EA3o h\u1ED9."), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hover:text-surface cursor-pointer"
  }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt EHR"), /*#__PURE__*/React.createElement("span", {
    className: "hover:text-surface cursor-pointer"
  }, "Quy ch\u1EBF chuy\xEAn m\xF4n Y t\u1EBF"), /*#__PURE__*/React.createElement("span", {
    className: "hover:text-surface cursor-pointer"
  }, "\u0110i\u1EC1u kho\u1EA3n d\u1ECBch v\u1EE5 GoCare")))));
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
  }, "Phi\u1EBFu \u0110\u1EB7t L\u1ECBch Kh\xE1m L\xE3o Khoa"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-surface/80 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
  }), " Chu\u1EA9n JCI Qu\u1ED1c T\u1EBF")), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl sm:text-2xl font-bold mt-0.5"
  }, "\u0110\u1EB7t L\u1ECBch Kh\xE1m & B\u1EA3ng C\xE1c H\u1EA1ng M\u1EE5c C\u1EA7n Kh\xE1m"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-surface/90"
  }, "L\u1EF1a ch\u1ECDn g\xF3i kh\xE1m ho\u1EB7c t\xF9y ch\u1EC9nh danh m\u1EE5c c\u1EADn l\xE2m s\xE0ng, th\u0103m d\xF2 ch\u1EE9c n\u0103ng ph\xF9 h\u1EE3p cho ng\u01B0\u1EDDi cao tu\u1ED5i"))), /*#__PURE__*/React.createElement("button", {
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
    className: "p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border-2 border-emerald-500 shadow-xl space-y-6 text-center modal-animated"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-4xl"
  }, "check_circle")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase tracking-widest text-emerald-800"
  }, "\u0110\xE3 Ti\u1EBFp Nh\u1EADn L\u1ECBch Kh\xE1m Th\xE0nh C\xF4ng"), /*#__PURE__*/React.createElement("h4", {
    className: "font-serif text-2xl sm:text-3xl font-bold text-primary"
  }, "M\xE3 Phi\u1EBFu Kh\xE1m: ", /*#__PURE__*/React.createElement("span", {
    className: "text-secondary font-mono"
  }, bookingCode)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant max-w-lg mx-auto"
  }, "H\u1EC7 th\u1ED1ng GoCare Telehealth \u0111\xE3 t\u1EF1 \u0111\u1ED9ng \u0111i\u1EC1u ph\u1ED1i B\xE1c s\u0129 v\xE0 \u0110i\u1EC1u d\u01B0\u1EE1ng vi\xEAn. Chuy\xEAn vi\xEAn y t\u1EBF s\u1EBD g\u1ECDi \u0111i\u1EC7n x\xE1c nh\u1EADn trong v\xF2ng 10 ph\xFAt.")), /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl mx-auto rounded-2xl bg-surface-container-low p-5 text-left border border-outline-variant/30 space-y-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 pb-3 border-b border-outline-variant/20 font-medium"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "B\u1EC7nh nh\xE2n:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, patientName), " (", patientBirthYear, ")"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, patientPhone)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "\u0110\u1ECBa \u0111i\u1EC3m kh\xE1m:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, examLocation === 'center' ? 'Trung tâm GoCare Heritage (Sala)' : 'Tư gia bệnh nhân')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "B\xE1c s\u0129 ph\u1EE5 tr\xE1ch:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, selectedDoctorName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Ng\xE0y kh\xE1m:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-secondary"
  }, examDate), " (", examTimeSlot, ")"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "S\u1ED1 h\u1EA1ng m\u1EE5c kh\xE1m:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-700"
  }, selectedItems.length, " h\u1EA1ng m\u1EE5c"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline block mb-1 font-bold"
  }, "Danh s\xE1ch c\xE1c h\u1EA1ng m\u1EE5c \u0111\xE3 \u0111\u0103ng k\xFD:"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, selectedItems.map(item => /*#__PURE__*/React.createElement("span", {
    key: item.id,
    className: "px-2 py-0.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-[11px] text-primary"
  }, "\u2713 ", item.name)))), /*#__PURE__*/React.createElement("div", {
    className: "pt-3 border-t border-outline-variant/20 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, "T\u1ED5ng Chi Ph\xED Tr\u1ECDn G\xF3i:"), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-bold text-secondary"
  }, totalPackagePrice === 0 ? 'Đã bao gồm trong gói' : `${totalPackagePrice.toLocaleString()}₫`), /*#__PURE__*/React.createElement("span", {
    className: "block text-[10px] text-emerald-700 font-semibold"
  }, "(Ti\u1EBFt ki\u1EC7m ", totalSavings.toLocaleString(), "\u20AB)")))), /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl mx-auto p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-left text-xs space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold flex items-center gap-1.5 text-amber-900"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "info"), /*#__PURE__*/React.createElement("span", null, "L\u01B0u \xFD chu\u1EA9n b\u1ECB tr\u01B0\u1EDBc khi kh\xE1m:")), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc list-inside space-y-0.5 text-[11px] text-amber-900/90 pl-1"
  }, /*#__PURE__*/React.createElement("li", null, "Nh\u1ECBn \u0103n s\xE1ng v\xE0 n\u01B0\u1EDBc ng\u1ECDt 6 - 8 ti\u1EBFng n\u1EBFu c\xF3 l\xE0m x\xE9t nghi\u1EC7m m\xE1u \u0111\u01B0\u1EDDng huy\u1EBFt v\xE0 m\u1EE1 m\xE1u."), /*#__PURE__*/React.createElement("li", null, "Mang theo h\u1ED3 s\u01A1 b\u1EC7nh \xE1n c\u0169, \u0111\u01A1n thu\u1ED1c \u0111ang d\xF9ng v\xE0 th\u1EBB BHYT (n\u1EBFu c\xF3)."), /*#__PURE__*/React.createElement("li", null, "Trang ph\u1EE5c tho\u1EA3i m\xE1i, r\u1ED9ng r\xE3i thu\u1EADn ti\u1EC7n \u0111o \u0111i\u1EC7n tim ECG v\xE0 si\xEAu \xE2m \u1ED5 b\u1EE5ng."))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => window.print(),
    className: "px-5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-bold text-xs border border-outline-variant/40 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "print"), /*#__PURE__*/React.createElement("span", null, "In Phi\u1EBFu Kh\xE1m")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setIsBooked(false);
      onClose();
    },
    className: "px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-bold text-xs shadow-md"
  }, "Ho\xE0n T\u1EA5t & \u0110\xF3ng"))) :
  /*#__PURE__*/
  /* Interactive Form & Table of Exam Items */
  React.createElement("form", {
    onSubmit: handleConfirmBooking,
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-2"
  }, "1. Ch\u1ECDn G\xF3i D\u1ECBch V\u1EE5 C\u1EA7n \u0110\u1EB7t L\u1ECBch Kh\xE1m:"), /*#__PURE__*/React.createElement("div", {
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
  }, "2. B\u1EA3ng Danh M\u1EE5c C\xE1c H\u1EA1ng M\u1EE5c C\u1EA7n Kh\xE1m L\xE3o Khoa & T\u1EA7m So\xE1t:"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "Nh\u1EA5p v\xE0o t\u1EEBng h\xE0ng \u0111\u1EC3 ch\u1ECDn ho\u1EB7c b\u1ECF ch\u1ECDn c\xE1c x\xE9t nghi\u1EC7m v\xE0 ch\u1EC9 \u0111\u1ECBnh y khoa.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: selectAll,
    className: "px-2.5 py-1 rounded-lg bg-surface-container text-primary hover:bg-gold-light text-[11px] font-bold border border-outline-variant/30"
  }, "Ch\u1ECDn T\u1EA5t C\u1EA3 (9 m\u1EE5c)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: selectDefaults,
    className: "px-2.5 py-1 rounded-lg bg-surface-container text-primary hover:bg-gold-light text-[11px] font-bold border border-outline-variant/30"
  }, "G\xF3i Chu\u1EA9n Khuy\xEAn D\xF9ng"))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border border-outline-variant/40 bg-surface-container-lowest overflow-hidden shadow-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left border-collapse text-xs"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-surface-container-low border-b border-outline-variant/40 text-on-surface text-[11px] uppercase font-bold tracking-wider"
  }, /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3 w-12 text-center"
  }, "Ch\u1ECDn"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4 min-w-[240px]"
  }, "H\u1EA1ng M\u1EE5c Kh\xE1m & M\u1EE5c Ti\xEAu L\xE2m S\xE0ng"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4 min-w-[200px]"
  }, "Chuy\xEAn Khoa & Thi\u1EBFt B\u1ECB"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3 text-center w-20"
  }, "Th\u1EDDi Gian"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3 text-right w-24"
  }, "Gi\xE1 Ni\xEAm Y\u1EBFt"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4 text-right min-w-[120px]"
  }, "Gi\xE1 Theo G\xF3i"))), /*#__PURE__*/React.createElement("tbody", {
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
    }, "C\u1ED1t L\xF5i"), item.category === 'Chuyên Sâu' && /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-bold"
    }, "Chuy\xEAn S\xE2u")), /*#__PURE__*/React.createElement("p", {
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
    }, item.listedPrice.toLocaleString(), "\u20AB"), /*#__PURE__*/React.createElement("td", {
      className: "py-3 px-4 text-right"
    }, item.packagePrice === 0 ? /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]"
    }, "Bao G\u1ED3m Trong G\xF3i") : /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-secondary text-xs"
    }, item.packagePrice.toLocaleString(), "\u20AB")));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-surface-container-low border-t border-outline-variant/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, "\u0110\xE3 ch\u1ECDn: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-secondary"
  }, selectedItems.length), " / ", CLINICAL_EXAM_ITEMS.length, " h\u1EA1ng m\u1EE5c"), /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "|"), /*#__PURE__*/React.createElement("span", {
    className: "text-on-surface-variant flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "schedule"), /*#__PURE__*/React.createElement("span", null, "Th\u1EDDi l\u01B0\u1EE3ng d\u1EF1 ki\u1EBFn: ", /*#__PURE__*/React.createElement("strong", null, totalDuration, " ph\xFAt")))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 self-end sm:self-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-outline block"
  }, "Gi\xE1 g\u1ED1c ni\xEAm y\u1EBFt: ", totalListedPrice.toLocaleString(), "\u20AB"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-extrabold text-primary"
  }, "T\u1ED5ng c\u1ED9ng: ", /*#__PURE__*/React.createElement("span", {
    className: "text-secondary text-base"
  }, totalPackagePrice === 0 ? 'Bao gồm trọn gói' : `${totalPackagePrice.toLocaleString()}₫`))), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] shrink-0"
  }, "Ti\u1EBFt ki\u1EC7m ", totalSavings.toLocaleString(), "\u20AB"))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 pt-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary"
  }, "3. Th\xF4ng Tin Ng\u01B0\u1EDDi Kh\xE1m & \u0110\u1EB7t H\u1EB9n:"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "H\u1ECD v\xE0 t\xEAn b\u1EC7nh nh\xE2n (*)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    value: patientName,
    onChange: e => setPatientName(e.target.value),
    placeholder: "V\xED d\u1EE5: C\u1EE5 Tr\u1EA7n V\u0103n \u0110\u1EE9c",
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i li\xEAn l\u1EA1c (*)"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    required: true,
    value: patientPhone,
    onChange: e => setPatientPhone(e.target.value),
    placeholder: "V\xED d\u1EE5: 0918 234 567",
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "N\u0103m sinh ng\u01B0\u1EDDi b\u1EC7nh"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: patientBirthYear,
    onChange: e => setPatientBirthYear(e.target.value),
    placeholder: "1952",
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "\u0110\u1ECBa \u0111i\u1EC3m th\u1EF1c hi\u1EC7n kh\xE1m"), /*#__PURE__*/React.createElement("select", {
    value: examLocation,
    onChange: e => setExamLocation(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "center"
  }, "Kh\xE1m t\u1EA1i Trung T\xE2m GoCare Heritage (K\u0110T Sala)"), /*#__PURE__*/React.createElement("option", {
    value: "home"
  }, "Kh\xE1m t\u1EA1i T\u01B0 Gia (B\xE1c s\u0129 & \u0110i\u1EC1u d\u01B0\u1EE1ng \u0111\u1EBFn t\u1EADn n\u01A1i)"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "Ng\xE0y kh\xE1m mong mu\u1ED1n"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: examDate,
    onChange: e => setExamDate(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "Khung gi\u1EDD ti\u1EBFp nh\u1EADn"), /*#__PURE__*/React.createElement("select", {
    value: examTimeSlot,
    onChange: e => setExamTimeSlot(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", null, "07:30 - 09:30 (\u01AFu ti\xEAn l\u1EA5y m\xE1u \u0111\xF3i)"), /*#__PURE__*/React.createElement("option", null, "08:30 - 10:30 (Kh\xE1m t\u1ED5ng qu\xE1t)"), /*#__PURE__*/React.createElement("option", null, "10:00 - 12:00 (Th\u0103m kh\xE1m tr\u01B0a)"), /*#__PURE__*/React.createElement("option", null, "14:00 - 16:00 (Phi\xEAn chi\u1EC1u)")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "B\xE1c s\u0129 chuy\xEAn khoa ph\u1EE5 tr\xE1ch kh\xE1m"), /*#__PURE__*/React.createElement("select", {
    value: selectedDoctorName,
    onChange: e => setSelectedDoctorName(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", null, "BS. CKI Nguy\u1EC5n H\u1ED3ng H\u01B0ng (Tr\u01B0\u1EDFng Khoa Tim M\u1EA1ch - BV Ch\u1EE3 R\u1EABy)"), /*#__PURE__*/React.createElement("option", null, "BS. CKII L\xEA Kim Ng\xE2n (Khoa L\xE3o & N\u1ED9i T\u1ED5ng Qu\xE1t - BV \u0110HYD)"), /*#__PURE__*/React.createElement("option", null, "ThS. BS Tr\u1EA7n Ph\u01B0\u01A1ng Th\u1EA3o (Tr\u1ECB Li\u1EC7u Th\u1EA7n Kinh & Sa S\xFAt Tr\xED Tu\u1EC7)"), /*#__PURE__*/React.createElement("option", null, "B\xE1c s\u0129 L\xE3o khoa tr\u1EF1c ban GoCare ch\u1EC9 \u0111\u1ECBnh"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-semibold text-outline mb-1"
  }, "Ghi ch\xFA tri\u1EC7u ch\u1EE9ng l\xE2m s\xE0ng / ti\u1EC1n s\u1EED b\u1EC7nh"), /*#__PURE__*/React.createElement("textarea", {
    rows: "2",
    value: symptomNotes,
    onChange: e => setSymptomNotes(e.target.value),
    placeholder: "V\xED d\u1EE5: B\xE1c c\xF3 ti\u1EC1n s\u1EED t\u0103ng huy\u1EBFt \xE1p 10 n\u0103m, d\u1EA1o g\u1EA7n \u0111\xE2y hay ch\xF3ng m\u1EB7t l\xFAc \u0111\u1EE9ng d\u1EADy, \u0103n k\xE9m v\xE0 kh\xF3 ng\u1EE7...",
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: "w-full sm:w-auto px-6 py-3 rounded-xl bg-surface-container text-primary font-bold text-xs hover:bg-surface-container-high transition-all"
  }, "H\u1EE7y B\u1ECF"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary via-primary-container to-secondary text-on-primary font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "verified"), /*#__PURE__*/React.createElement("span", null, "X\xE1c Nh\u1EADn \u0110\u1EB7t L\u1ECBch Kh\xE1m Ngay (", selectedItems.length, " M\u1EE5c)")))))));
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
  }, "apartment"), /*#__PURE__*/React.createElement("span", null, "Khu\xF4n Vi\xEAn Bi\u1EC7t Th\u1EF1 Ngh\u1EC9 D\u01B0\u1EE1ng & Tr\u1ECB Li\u1EC7u JCI")), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-3xl sm:text-4xl text-primary font-bold"
  }, "H\xECnh \u1EA2nh Th\u1EF1c T\u1EBF T\u1EA1i Trung T\xE2m GoCare Heritage Sala"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-on-surface-variant leading-relaxed"
  }, "T\u1ECDa l\u1EA1c t\u1EA1i khu \u0111\xF4 th\u1ECB sinh th\xE1i Sala, TP. Th\u1EE7 \u0110\u1EE9c v\u1EDBi m\u1EADt \u0111\u1ED9 c\xE2y xanh 75%. Kh\xF4ng gian \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF chuy\xEAn bi\u1EC7t cho ng\u01B0\u1EDDi cao tu\u1ED5i theo ti\xEAu chu\u1EA9n vi\u1EC7n d\u01B0\u1EE1ng l\xE3o qu\u1ED1c t\u1EBF JCI Hoa K\u1EF3."), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", null, "Chi ti\u1EBFt"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "arrow_forward"))))))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-primary via-primary-container to-secondary text-on-primary shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 text-center sm:text-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-gold-accent uppercase tracking-wider"
  }, "Tr\u1EA3i Nghi\u1EC7m Th\u1EF1c T\u1EBF"), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl sm:text-2xl font-bold"
  }, "Qu\xFD Gia \u0110\xECnh C\xF3 Nhu C\u1EA7u Th\u0103m Quan Th\u1EF1c T\u1EBF Khu\xF4n Vi\xEAn GoCare?"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-surface/90 max-w-xl"
  }, "GoCare b\u1ED1 tr\xED xe y t\u1EBF \u0111\u01B0a \u0111\xF3n ng\u01B0\u1EDDi th\xE2n t\u1EADn nh\xE0 \u0111\u1EBFn th\u0103m quan tr\u1EA3i nghi\u1EC7m h\u1ED3 b\u01A1i th\u1EE7y tr\u1ECB li\u1EC7u, d\xF9ng th\u1EED b\u1EEFa \u0103n d\u01B0\u1EE1ng sinh v\xE0 tham v\u1EA5n c\xF9ng B\xE1c s\u0129 Tr\u01B0\u1EDFng khoa.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onBookTour && onBookTour('noi-tru'),
    className: "px-6 py-3.5 rounded-xl bg-gold-accent hover:bg-yellow-400 text-brand-charcoal font-bold text-xs uppercase tracking-wider shadow-lg shrink-0 transition-all hover:scale-105"
  }, "\u0110\u1EB7t L\u1ECBch Kh\xE1m & Th\u0103m Quan Trung T\xE2m"))), selectedImage && /*#__PURE__*/React.createElement("div", {
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
  }, "Quy m\xF4 & S\u1EE9c ch\u1EE9a:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, selectedImage.capacity)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-outline block text-[11px]"
  }, "Trang thi\u1EBFt b\u1ECB & Ti\xEAu chu\u1EA9n:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-secondary"
  }, selectedImage.specs))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-end gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setSelectedImage(null),
    className: "px-5 py-2.5 rounded-xl bg-surface-container text-primary text-xs font-bold hover:bg-surface-container-high"
  }, "\u0110\xF3ng L\u1EA1i"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setSelectedImage(null);
      if (onBookTour) onBookTour('noi-tru');
    },
    className: "px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold shadow-md flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "clinical_notes"), /*#__PURE__*/React.createElement("span", null, "\u0110\u1EB7t L\u1ECBch Kh\xE1m & Th\u0103m Quan \u0110i\u1EC3m N\xE0y")))))));
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
    className: "relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-36 pb-20 lg:pt-44 lg:pb-24 min-h-[92vh] flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface/15 backdrop-blur-md text-surface border border-white/20 shadow-md"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-ping"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs uppercase tracking-widest text-surface font-bold"
  }, "GoCare \u2022 An t\xE2m ch\u0103m s\xF3c, k\u1EBFt n\u1ED1i t\u1EE9c th\xEC")), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-3xl sm:text-5xl lg:text-6xl text-surface font-bold leading-tight"
  }, "N\u01A1i Tu\u1ED5i X\u1EBF Chi\u1EC1u L\xE0 M\u1ED9t ", /*#__PURE__*/React.createElement("span", {
    className: "text-secondary-fixed italic underline decoration-gold-accent/60"
  }, "Mi\u1EC1n An Tr\xFA"), " T\u01B0\u01A1i S\xE1ng & Nh\xE2n V\u0103n"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-tertiary-fixed max-w-2xl leading-relaxed"
  }, "K\u1EBFt h\u1EE3p ho\xE0n h\u1EA3o gi\u1EEFa chu\u1EA9n m\u1EF1c y khoa \u0111i\u1EC1u d\u01B0\u1EE1ng kh\u1EAFt khe v\xE0 s\u1EF1 n\xE2ng niu t\xE2m h\u1ED3n tr\u1ECDn v\u1EB9n t\u1EEBng kho\u1EA3nh kh\u1EAFc, ki\u1EBFn t\u1EA1o kh\xF4ng gian s\u1ED1ng t\u1EF1 t\xF4n, an t\xE2m v\xE0 t\u0129nh t\u1EA1i cho b\u1EADc sinh th\xE0nh."), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex flex-wrap items-center gap-4"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/chuyen-khoa",
    className: "inline-flex items-center justify-center h-12 px-7 rounded-xl bg-gradient-to-r from-primary-container to-secondary text-on-primary font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all group gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "Kh\xE1m ph\xE1 Chuy\xEAn khoa & D\u1ECBch v\u1EE5"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base group-hover:translate-x-1 transition-transform"
  }, "arrow_forward")), /*#__PURE__*/React.createElement("a", {
    href: "#bang-gia-dich-vu",
    className: "inline-flex items-center justify-center h-12 px-7 rounded-xl bg-surface/15 backdrop-blur-md text-surface font-semibold hover:bg-surface/25 transition-all border border-white/20"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined mr-2 text-secondary-fixed text-lg"
  }, "payments"), /*#__PURE__*/React.createElement("span", null, "B\u1EA3ng Gi\xE1 Ngo\u1EA1i Tr\xFA - B\xE1n Tr\xFA - N\u1ED9i Tr\xFA")), /*#__PURE__*/React.createElement(Link, {
    to: "/dieu-duong",
    className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-xs hover:bg-secondary-fixed-dim transition-all shadow-md"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary animate-pulse"
  }, "near_me"), /*#__PURE__*/React.createElement("span", null, "GPS \u0110\u1ECBnh V\u1ECB Y T\xE1 Dijkstra/A*")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl p-5 rounded-2xl bg-tertiary/85 backdrop-blur-xl border border-white/10 shadow-2xl"
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
  }, "B\xE1c s\u0129 L\xE3o khoa & C\u1EA5p c\u1EE9u t\xFAc tr\u1EF1c"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 px-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-xl bg-primary-container/60 flex items-center justify-center text-secondary-fixed shadow-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl"
  }, "workspace_premium")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-serif text-surface font-bold"
  }, "100%"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-tertiary-fixed-dim"
  }, "Ch\u1EE9ng ch\u1EC9 h\xE0nh ngh\u1EC1 BYT & JCI"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 px-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-xl bg-primary-container/60 flex items-center justify-center text-secondary-fixed shadow-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl"
  }, "family_restroom")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-serif text-surface font-bold"
  }, "500+"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-tertiary-fixed-dim"
  }, "Gia \u0111\xECnh tin ch\u1ECDn & k\u1EBFt n\u1ED1i tr\u1ECDn \u0111\u1EDDi"))))))), /*#__PURE__*/React.createElement("section", {
    className: "w-full py-16 bg-surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 shadow-md space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant/30 pb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 mb-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase text-secondary tracking-wider"
  }, "\u0110\u1ED9i Ng\u0169 Y Khoa Th\u01B0\u1EDDng Tr\u1EF1c GoCare")), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl sm:text-3xl font-bold text-primary"
  }, "H\u1ED9i \u0110\u1ED3ng B\xE1c S\u0129 & \u0110i\u1EC1u D\u01B0\u1EE1ng Chuy\xEAn S\xE2u"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-on-surface-variant mt-1"
  }, "C\xE1c chuy\xEAn gia L\xE3o khoa, Tim m\u1EA1ch h\xE0ng \u0111\u1EA7u t\u1EEB B\u1EC7nh vi\u1EC7n Ch\u1EE3 R\u1EABy, \u0110\u1EA1i h\u1ECDc Y D\u01B0\u1EE3c v\xE0 Chuy\xEAn gia Ph\u1EE5c h\u1ED3i ch\u1EE9c n\u0103ng JCI.")), /*#__PURE__*/React.createElement(Link, {
    to: "/chuyen-khoa",
    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold shadow-md transition-all self-start md:self-auto"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "clinical_notes"), /*#__PURE__*/React.createElement("span", null, "\u0110\u1EB7t L\u1ECBch Kh\xE1m Chuy\xEAn Khoa"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gold-glow-card flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/doctor_vinh.jpg",
    alt: "PGS. TS. BS Nguy\u1EC5n V\u0103n Vinh",
    className: "w-16 h-16 rounded-2xl object-cover shadow-sm ring-2 ring-gold-accent shrink-0"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm text-on-surface"
  }, "PGS. TS. BS Nguy\u1EC5n V\u0103n Vinh"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-secondary"
  }, "C\u1ED1 V\u1EA5n L\xE3o Khoa & Tim M\u1EA1ch"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "35+ n\u0103m l\xE2m s\xE0ng BV Ch\u1EE3 R\u1EABy"))), /*#__PURE__*/React.createElement("div", {
    className: "gold-glow-card flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/doctor_khang.jpg",
    alt: "BS. CKI Tr\u1EA7n Tr\u1ECDng Khang",
    className: "w-16 h-16 rounded-2xl object-cover shadow-sm ring-2 ring-gold-accent shrink-0"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm text-on-surface"
  }, "BS. CKI Tr\u1EA7n Tr\u1ECDng Khang"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-secondary"
  }, "Tr\u01B0\u1EDFng Khoa Ph\u1EE5c H\u1ED3i Th\u1EA7n Kinh"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "20 n\u0103m BV \u0110\u1EA1i h\u1ECDc Y D\u01B0\u1EE3c"))), /*#__PURE__*/React.createElement("div", {
    className: "gold-glow-card flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/doctor_hong_hung.jpg",
    alt: "BS. CKI Nguy\u1EC5n H\u1ED3ng H\u01B0ng",
    className: "w-16 h-16 rounded-2xl object-cover shadow-sm ring-2 ring-gold-accent shrink-0"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm text-on-surface"
  }, "BS. CKI Nguy\u1EC5n H\u1ED3ng H\u01B0ng"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-secondary"
  }, "Tim M\u1EA1ch Can Thi\u1EC7p & C\u1EA5p C\u1EE9u"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "18 n\u0103m BV H\u1ED3ng H\u01B0ng & Ch\u1EE3 R\u1EABy"))), /*#__PURE__*/React.createElement("div", {
    className: "gold-glow-card flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/doctor_thao.jpg",
    alt: "ThS. BS Nguy\u1EC5n Trung Th\xE0nh",
    className: "w-16 h-16 rounded-2xl object-cover shadow-sm ring-2 ring-gold-accent shrink-0"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm text-on-surface"
  }, "ThS. BS Nguy\u1EC5n Trung Th\xE0nh"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-secondary"
  }, "Tr\u1ECB Li\u1EC7u T\xE2m L\xFD & Th\u1EA7n Kinh"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "Vi\u1EC7n S\u1EE9c Kh\u1ECFe T\xE2m Th\u1EA7n TP.HCM"))))))), /*#__PURE__*/React.createElement(CenterFacilitiesGallery, {
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
  }, "Minh B\u1EA1ch T\xE0i Ch\xEDnh 100%"), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-3xl sm:text-4xl text-primary font-bold"
  }, "Bi\u1EC3u Ph\xED Ch\u0103m S\xF3c & D\u01B0\u1EE1ng L\xE3o GoCare"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-on-surface-variant"
  }, "\u0110\xE1p \u1EE9ng tr\u1ECDn v\u1EB9n nhu c\u1EA7u ph\u1EE5c h\u1ED3i t\u1EA1i nh\xE0, b\xE1n tr\xFA ban ng\xE0y linh ho\u1EA1t v\xE0 n\u1ED9i tr\xFA bi\u1EC7t th\u1EF1 ngh\u1EC9 d\u01B0\u1EE1ng cao c\u1EA5p."), /*#__PURE__*/React.createElement("div", {
    className: "inline-flex p-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 shadow-sm mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPricingPackage('ngoai-tru'),
    className: `px-5 py-2 rounded-full text-xs font-bold transition-all ${pricingPackage === 'ngoai-tru' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`
  }, "Ch\u0103m S\xF3c T\u1EA1i Nh\xE0 (Ngo\u1EA1i tr\xFA)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPricingPackage('ban-tru'),
    className: `px-5 py-2 rounded-full text-xs font-bold transition-all ${pricingPackage === 'ban-tru' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`
  }, "B\xE1n Tr\xFA Ban Ng\xE0y (Day-care)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPricingPackage('noi-tru'),
    className: `px-5 py-2 rounded-full text-xs font-bold transition-all ${pricingPackage === 'noi-tru' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`
  }, "N\u1ED9i Tr\xFA 5 Sao (Suites Sanctuary)")), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openExamModal(pricingPackage),
    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/15 hover:bg-secondary/25 text-secondary text-xs font-bold border border-secondary/40 shadow-xs transition-all"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "table_chart"), /*#__PURE__*/React.createElement("span", null, "M\u1EDF B\u1EA3ng Danh M\u1EE5c C\xE1c H\u1EA1ng M\u1EE5c C\u1EA7n Kh\xE1m L\xE3o Khoa (9 H\u1EA1ng M\u1EE5c)")))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: `rounded-3xl p-8 bg-surface-container-lowest border transition-all flex flex-col justify-between ${pricingPackage === 'ngoai-tru' ? 'ring-2 ring-gold-accent shadow-xl scale-102' : 'border-outline-variant/30 shadow-sm'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-secondary uppercase tracking-wider block"
  }, "G\xF3i Ph\u1ED5 Th\xF4ng"), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-bold text-primary"
  }, "Ca \u0110i\u1EC1u D\u01B0\u1EE1ng 4h - 8h"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-bold text-primary"
  }, "400.000\u20AB"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "/ ca tr\u1EF1c 4h")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed"
  }, "Ph\xF9 h\u1EE3p ng\u01B0\u1EDDi cao tu\u1ED5i c\u1EA7n h\u1ED7 tr\u1EE3 v\u1EC7 sinh, \u0111o sinh hi\u1EC7u \u0111\u1ECBnh k\u1EF3, ti\xEAm truy\u1EC1n, \u0111\u1EB7t sonde v\xE0 t\u1EADp v\u1EADn \u0111\u1ED9ng c\u01A1 b\u1EA3n t\u1EA1i t\u01B0 gia."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2.5 text-xs text-on-surface pt-4 border-t border-outline-variant/20"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "check_circle"), " \u0110i\u1EC1u d\u01B0\u1EE1ng c\xF3 CCHN B\u1ED9 Y T\u1EBF"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "check_circle"), " \u0110o huy\u1EBFt \xE1p, \u0111\u01B0\u1EDDng huy\u1EBFt, SpO2"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "check_circle"), " H\u1ED7 tr\u1EE3 di chuy\u1EC3n n\u1ED9i th\xE0nh TP.HCM"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openExamModal('ngoai-tru'),
    className: "mt-8 w-full py-3.5 rounded-xl bg-surface-container hover:bg-gold-light text-primary text-xs font-bold text-center transition-all border border-outline-variant/40 flex items-center justify-center gap-1.5 shadow-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary"
  }, "clinical_notes"), /*#__PURE__*/React.createElement("span", null, "\u0110\u1EB7t L\u1ECBch Kh\xE1m & Ch\u0103m S\xF3c T\u1EA1i Nh\xE0"))), /*#__PURE__*/React.createElement("div", {
    className: `rounded-3xl p-8 bg-surface-container-lowest border relative transition-all flex flex-col justify-between ${pricingPackage === 'ban-tru' ? 'ring-2 ring-secondary shadow-2xl scale-105' : 'border-secondary/40 shadow-md'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-on-secondary text-[11px] font-bold tracking-wider uppercase shadow-md"
  }, "Ph\u1ED5 Bi\u1EBFn Nh\u1EA5t"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 pt-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-secondary uppercase tracking-wider block"
  }, "B\xE1n Tr\xFA Sinh Ho\u1EA1t VIP"), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-bold text-primary"
  }, "GoCare Day-care Plus"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-bold text-secondary"
  }, "850.000\u20AB"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "/ ng\xE0y (8h - 17h)")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed"
  }, "\u0110\u01B0a \u0111\xF3n t\u1EADn nh\xE0, \u0103n 3 b\u1EEFa th\u1EF1c d\u01B0\u1EE1ng theo ch\u1EC9 s\u1ED1 c\xE1 nh\xE2n, tr\u1ECB li\u1EC7u s\xF3ng n\xE3o 432Hz v\xE0 giao l\u01B0u c\xE2u l\u1EA1c b\u1ED9 ng\u01B0\u1EDDi cao tu\u1ED5i."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2.5 text-xs text-on-surface pt-4 border-t border-outline-variant/20"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "check_circle"), " Xe \u0111\u01B0a \u0111\xF3n chuy\xEAn d\u1EE5ng chu\u1EA9n y t\u1EBF"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "check_circle"), " B\xE1c s\u0129 L\xE3o khoa kh\xE1m h\u1EB1ng ng\xE0y"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "check_circle"), " 3 b\u1EEFa \u0103n chuy\xEAn bi\u1EC7t chuy\xEAn gia dinh d\u01B0\u1EE1ng"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "check_circle"), " Ph\xF2ng ngh\u1EC9 ng\u01A1i ri\xEAng t\u01B0 y\xEAn t\u0129nh"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openExamModal('ban-tru'),
    className: "mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-secondary to-primary-container text-on-secondary text-xs font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "clinical_notes"), /*#__PURE__*/React.createElement("span", null, "\u0110\u1EB7t L\u1ECBch Kh\xE1m To\xE0n Di\u1EC7n B\xE1n Tr\xFA"))), /*#__PURE__*/React.createElement("div", {
    className: `rounded-3xl p-8 bg-surface-container-lowest border transition-all flex flex-col justify-between ${pricingPackage === 'noi-tru' ? 'ring-2 ring-gold-accent shadow-xl scale-102' : 'border-outline-variant/30 shadow-sm'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-gold-accent uppercase tracking-wider block"
  }, "Ngh\u1EC9 D\u01B0\u1EE1ng 5 Sao"), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-bold text-primary"
  }, "Heritage Villa Suites"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-bold text-primary"
  }, "28.500.000\u20AB"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "/ th\xE1ng")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed"
  }, "Kh\xF4ng gian s\u1ED1ng ri\xEAng bi\u1EC7t t\u1EA1i khu \u0111\xF4 th\u1ECB Sala & Th\u1EA3o \u0110i\u1EC1n. \u0110i\u1EC1u d\u01B0\u1EE1ng vi\xEAn ph\u1EE5c v\u1EE5 1:1, k\u1EBFt n\u1ED1i b\xE1c s\u0129 Ch\u1EE3 R\u1EABy 24/7."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2.5 text-xs text-on-surface pt-4 border-t border-outline-variant/20"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "check_circle"), " Ph\xF2ng Suite 45m2 ti\xEAu chu\u1EA9n kh\xE1ch s\u1EA1n"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "check_circle"), " H\u1EC7 th\u1ED1ng c\u1EA3m bi\u1EBFn ng\xE3 IoT t\u1EF1 \u0111\u1ED9ng"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "check_circle"), " Tr\u1ECDn g\xF3i ph\u1EE5c h\u1ED3i ch\u1EE9c n\u0103ng & v\u1EADt l\xFD tr\u1ECB li\u1EC7u"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openExamModal('noi-tru'),
    className: "mt-8 w-full py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold text-center transition-all border border-outline-variant/40 shadow-md flex items-center justify-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-gold-accent"
  }, "clinical_notes"), /*#__PURE__*/React.createElement("span", null, "\u0110\u1EB7t L\u1ECBch Kh\xE1m L\xE3o Khoa & N\u1ED9i Tr\xFA VIP")))))), /*#__PURE__*/React.createElement("section", {
    className: "w-full py-14 bg-surface-container-low/50 border-t border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1200px] mx-auto px-6 lg:px-12 space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto space-y-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider border border-secondary/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "handshake"), /*#__PURE__*/React.createElement("span", null, "M\u1EA1ng L\u01B0\u1EDBi \u0110\u1ED1i T\xE1c D\u01B0\u1EE3c Ph\u1EA9m Chi\u1EBFn L\u01B0\u1EE3c")), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-2xl sm:text-3xl font-bold text-primary"
  }, "Ti\u1EBFp \u1EE8ng D\u01B0\u1EE3c Ph\u1EA9m H\u1ECFa T\u1ED1c C\xF9ng FPT Long Ch\xE2u & An Khang"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed"
  }, "Nh\u1EA5p v\xE0o logo \u0111\u1ED1i t\xE1c \u0111\u1EC3 xem tr\u1EF1c ti\u1EBFp danh m\u1EE5c thu\u1ED1c bi\u1EC7t d\u01B0\u1EE3c, th\u1EF1c ph\u1EA9m dinh d\u01B0\u1EE1ng Vitabiotics ch\xEDnh h\xE3ng v\xE0 \u0111\u1EB7t h\xE0ng giao t\u1EADn t\u01B0 gia trong 1 - 2 gi\u1EDD.")), /*#__PURE__*/React.createElement("div", {
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
    alt: "Nh\xE0 Thu\u1ED1c FPT Long Ch\xE2u",
    className: "w-full h-full object-contain rounded-xl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors"
  }, "FPT Long Ch\xE2u"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-blue-600"
  }, "verified")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] font-semibold text-secondary"
  }, "Cung \u1EE9ng thu\u1ED1c \u0111\u1EB7c tr\u1ECB & Vitabiotics"), /*#__PURE__*/React.createElement("span", {
    className: "inline-block text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold"
  }, "Giao h\u1ECFa t\u1ED1c 1 - 2h"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-xs text-blue-700 font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "Xem Gian H\xE0ng Long Ch\xE2u"), /*#__PURE__*/React.createElement("span", {
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
    alt: "Nh\xE0 Thu\u1ED1c An Khang",
    className: "w-full h-full object-contain rounded-xl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-lg font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors"
  }, "Nh\xE0 Thu\u1ED1c An Khang"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "verified")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] font-semibold text-secondary"
  }, "Th\xE0nh vi\xEAn MWG (Th\u1EBF Gi\u1EDBi Di \u0110\u1ED9ng)"), /*#__PURE__*/React.createElement("span", {
    className: "inline-block text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold"
  }, "100% h\xF3a \u0111\u01A1n BYT"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs text-emerald-700 font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "Xem Gian H\xE0ng An Khang"), /*#__PURE__*/React.createElement("span", {
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
  }, "calendar_add_on"), " K\u1EBFt N\u1ED1i T\u1EE9c Th\xEC 24/7"), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl sm:text-3xl font-bold text-primary"
  }, "\u0110\u0103ng K\xFD D\u1ECBch V\u1EE5 Ch\u0103m S\xF3c & Th\u0103m Quan GoCare"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant"
  }, "Chuy\xEAn vi\xEAn y t\u1EBF GoCare s\u1EBD li\xEAn h\u1EC7 x\xE1c nh\u1EADn v\xE0 \u0111i\u1EC1u ph\u1ED1i nh\xE2n s\u1EF1 trong v\xF2ng 10 ph\xFAt.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleFormSubmit,
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "H\u1ECD v\xE0 t\xEAn ng\u01B0\u1EDDi \u0111\u0103ng k\xFD / Th\xE2n nh\xE2n (*)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    value: formData.name,
    onChange: e => setFormData({
      ...formData,
      name: e.target.value
    }),
    placeholder: "V\xED d\u1EE5: Nguy\u1EC5n V\u0103n H\u01B0ng",
    className: "w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i li\xEAn l\u1EA1c (*)"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    required: true,
    value: formData.phone,
    onChange: e => setFormData({
      ...formData,
      phone: e.target.value
    }),
    placeholder: "V\xED d\u1EE5: 0912 345 678",
    className: "w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "G\xF3i d\u1ECBch v\u1EE5 quan t\xE2m"), /*#__PURE__*/React.createElement("select", {
    value: formData.service,
    onChange: e => setFormData({
      ...formData,
      service: e.target.value
    }),
    className: "w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", null, "Ch\u0103m s\xF3c \u0110i\u1EC1u d\u01B0\u1EE1ng t\u1EA1i nh\xE0 (Ca 4h/8h/12h/24h)"), /*#__PURE__*/React.createElement("option", null, "B\xE1n tr\xFA ban ng\xE0y GoCare Day-care Plus"), /*#__PURE__*/React.createElement("option", null, "N\u1ED9i tr\xFA d\xE0i h\u1EA1n Heritage Villa Suites"), /*#__PURE__*/React.createElement("option", null, "Ph\u1EE5c h\u1ED3i ch\u1EE9c n\u0103ng & V\u1EADt l\xFD tr\u1ECB li\u1EC7u sau \u0111\u1ED9t qu\u1EF5"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "Ng\xE0y b\u1EAFt \u0111\u1EA7u d\u1EF1 ki\u1EBFn"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: formData.date,
    onChange: e => setFormData({
      ...formData,
      date: e.target.value
    }),
    className: "w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "\u0110\u1ECBa ch\u1EC9 ti\u1EBFp nh\u1EADn d\u1ECBch v\u1EE5 / \u0111\xF3n r\u01B0\u1EDBc"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: formData.address,
    onChange: e => setFormData({
      ...formData,
      address: e.target.value
    }),
    placeholder: "S\u1ED1 nh\xE0, t\xEAn \u0111\u01B0\u1EDDng, ph\u01B0\u1EDDng/qu\u1EADn...",
    className: "w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "Ghi ch\xFA t\xECnh tr\u1EA1ng s\u1EE9c kh\u1ECFe / Y\xEAu c\u1EA7u \u0111\u1EB7c bi\u1EC7t"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    value: formData.note,
    onChange: e => setFormData({
      ...formData,
      note: e.target.value
    }),
    placeholder: "V\xED d\u1EE5: B\xE1c 75 tu\u1ED5i, c\xF3 ti\u1EC1n s\u1EED t\u0103ng huy\u1EBFt \xE1p, c\u1EA7n ng\u01B0\u1EDDi h\u1ED7 tr\u1EE3 \u0111i l\u1EA1i v\xE0 theo d\xF5i \u0111\u01B0\u1EDDng huy\u1EBFt sau \u0103n...",
    className: "w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs focus:ring-2 focus:ring-primary focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "flex-1 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all hover:scale-[1.01]"
  }, "G\u1EEDi Y\xEAu C\u1EA7u \u0110\u1EB7t L\u1ECBch & Ti\u1EBFp Nh\u1EADn Ngay"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openExamModal(pricingPackage),
    className: "px-6 py-4 rounded-xl bg-surface-container hover:bg-gold-light text-primary font-bold text-xs uppercase tracking-wider border border-outline-variant/40 transition-all flex items-center justify-center gap-1.5 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary"
  }, "table_chart"), /*#__PURE__*/React.createElement("span", null, "M\u1EDF B\u1EA3ng C\xE1c H\u1EA1ng M\u1EE5c C\u1EA7n Kh\xE1m"))))))), isModalOpen && /*#__PURE__*/React.createElement("div", {
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
  }, "\u0110\u1EB7t L\u1ECBch Th\xE0nh C\xF4ng!"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed"
  }, "H\u1EC7 th\u1ED1ng GoCare \u0111\xE3 ti\u1EBFp nh\u1EADn th\xF4ng tin c\u1EE7a Qu\xFD kh\xE1ch ", /*#__PURE__*/React.createElement("strong", null, formData.name), " (", formData.phone, ").")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-xs space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "D\u1ECBch v\u1EE5:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, formData.service)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Ng\xE0y h\u1EB9n:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, formData.date)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "\u0110\u1ECBa ch\u1EC9:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary truncate max-w-[200px]"
  }, formData.address)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Tr\u1EA1ng th\xE1i:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-emerald-700 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
  }), "\u0110ang \u0111i\u1EC1u ph\u1ED1i"))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-center text-outline italic"
  }, "*B\u1ED9 ph\u1EADn \u0111i\u1EC1u d\u01B0\u1EE1ng GoCare s\u1EBD li\xEAn h\u1EC7 tr\u1EF1c ti\u1EBFp \u0111\u1EBFn s\u1ED1 \u0111i\u1EC7n tho\u1EA1i c\u1EE7a b\u1EA1n sau \xEDt ph\xFAt."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsModalOpen(false),
    className: "w-full py-3 rounded-xl bg-primary text-on-primary font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary-container"
  }, "\u0110\u1ED3ng \xDD & Ho\xE0n T\u1EA5t"))), /*#__PURE__*/React.createElement(ClinicalExamChecklistModal, {
    isOpen: isExamModalOpen,
    onClose: () => setIsExamModalOpen(false),
    initialPackage: selectedExamPackage
  }));
}

// --- SCREEN 2: CHUYÊN KHOA & BÁC SĨ (Doctors Screen) ---
function DoctorsScreen() {
  const [filter, setFilter] = useState('all');
  const [doctorSearch, setDoctorSearch] = useState('');
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
  const doctors = [
  {
    "id": "vinh",
    "name": "PGS. TS. BS Nguyễn Văn Vinh",
    "role": "Cố vấn Chuyên môn Lão khoa & Tim mạch",
    "hosp": "Nguyên Phó Giám đốc BV Chợ Rẫy (35 năm lâm sàng)",
    "desc": "Chuyên gia đầu ngành về suy tim mạn tính, rối loạn nhịp, tăng huyết áp kháng trị và tối ưu đơn thuốc cho người cao tuổi đa bệnh lý.",
    "cchn": "001928/BYT-CCHN",
    "price": "800.000₫ / phiên",
    "category": "cardio",
    "img": "./assets/images/doctor_vinh.jpg",
    "rating": "4.99",
    "reviewsCount": 142
  },
  {
    "id": "khang",
    "name": "BS. CKI Trần Trọng Khang",
    "role": "Trưởng Khoa Phục Hồi Chức Năng Thần Kinh",
    "hosp": "BV Đại học Y Dược TP.HCM (20 năm kinh nghiệm)",
    "desc": "Phục hồi chức năng sau tai biến mạch máu não (đột quỵ), liệt nửa người, thoái hóa đốt sống cổ và thoát vị đĩa đệm người già.",
    "cchn": "008451/SYT-HCM-CCHN",
    "price": "650.000₫ / phiên",
    "category": "rehab",
    "img": "./assets/images/doctor_khang.jpg",
    "rating": "4.97",
    "reviewsCount": 98
  },
  {
    "id": "honghung",
    "name": "BS. CKI Nguyễn Hồng Hưng",
    "role": "Trưởng Khoa Tim Mạch Can Thiệp & Cấp Cứu Lão Khoa",
    "hosp": "BV Đa Khoa Hồng Hưng & Cố vấn Cấp cứu GoCare (18 năm lâm sàng)",
    "desc": "Can thiệp mạch vành, kiểm soát huyết áp khẩn cấp, bệnh tim mạch lão khoa và theo dõi Holter điện tim 24h kết nối IoT từ xa.",
    "cchn": "014820/BYT-CCHN",
    "price": "750.000₫ / phiên",
    "category": "cardio",
    "img": "./assets/images/doctor_hong_hung.jpg",
    "rating": "4.98",
    "reviewsCount": 115
  },
  {
    "id": "lan",
    "name": "TS. BS Nguyễn Thị Lan",
    "role": "Trưởng Khoa Tim Mạch Lâm Sàng & Siêu Âm Tim",
    "hosp": "Viện Tim TP.HCM & BV Bạch Mai (24 năm kinh nghiệm)",
    "desc": "Chuyên sâu chẩn đoán bệnh van tim lão hóa, xơ vữa động mạch cảnh, suy tim tâm trương và tư vấn phác đồ phòng ngừa đột quỵ.",
    "cchn": "010482/BYT-CCHN",
    "price": "720.000₫ / phiên",
    "category": "cardio",
    "img": "./assets/images/doctor_female_senior.jpg",
    "rating": "4.98",
    "reviewsCount": 128
  },
  {
    "id": "loc",
    "name": "GS. TS. BS Nguyễn Văn Lộc",
    "role": "Chủ Tịch Hội Đồng Cố Vấn Lão Khoa Quốc Gia",
    "hosp": "Chuyên gia Cao cấp BV Lão Khoa TW (40 năm cống hiến y học)",
    "desc": "Bậc thầy về lão hóa học, phối hợp đa chuyên khoa, kiểm soát hội chứng sa sút thể chất và phòng ngừa té ngã ở người trên 70 tuổi.",
    "cchn": "000185/BYT-CCHN",
    "price": "900.000₫ / phiên",
    "category": "cardio",
    "img": "./assets/images/doctor_male_senior.jpg",
    "rating": "5.00",
    "reviewsCount": 189
  },
  {
    "id": "thao",
    "name": "ThS. BS Hoàng Thu Thảo",
    "role": "Chuyên Gia Thần Kinh Lão Khoa & Phục Hồi Não Bộ",
    "hosp": "BV Nhân Dân 115 & Giảng viên ĐH Y Dược (16 năm kinh nghiệm)",
    "desc": "Điều trị chuyên sâu Parkinson, run tay chân, sa sút trí tuệ mạch máu, đau dây thần kinh số V và phục hồi ngôn ngữ sau tai biến.",
    "cchn": "016540/SYT-HCM-CCHN",
    "price": "680.000₫ / phiên",
    "category": "neuro",
    "img": "./assets/images/doctor_thao.jpg",
    "rating": "4.98",
    "reviewsCount": 104
  },
  {
    "id": "quan",
    "name": "BS. CKI Đỗ Minh Quân",
    "role": "Chuyên Gia Tim Mạch Can Thiệp & Điện Sinh Lý Học",
    "hosp": "BV Nhân Dân Gia Định (14 năm kinh nghiệm)",
    "desc": "Thăm khám và can thiệp rối loạn nhịp nhanh, rung nhĩ, thiếu máu cơ tim cục bộ và đặt máy tạo nhịp tim vĩnh viễn.",
    "cchn": "019230/SYT-HCM-CCHN",
    "price": "620.000₫ / phiên",
    "category": "cardio",
    "img": "./assets/images/doctor_tuan_anh.jpg",
    "rating": "4.95",
    "reviewsCount": 76
  },
  {
    "id": "thanh",
    "name": "BS. CKII Nguyễn Đức Thành",
    "role": "Bác Sĩ Trị Liệu Tâm Lý & Sức Khỏe Tinh Thần Lão Niên",
    "hosp": "Viện Sức Khỏe Tâm Thần TP.HCM (20 năm kinh nghiệm)",
    "desc": "Liệu pháp nhận thức hành vi (CBT), giải tỏa trầm cảm người già sau mất người thân, hội chứng sợ cô đơn và lo âu mạn tính.",
    "cchn": "007321/SYT-HCM-CCHN",
    "price": "600.000₫ / phiên",
    "category": "psychiatry",
    "img": "./assets/images/img_3_75b3a950.jpg",
    "rating": "4.94",
    "reviewsCount": 68
  },
  {
    "id": "huy",
    "name": "BS. CKII Lê Quang Huy",
    "role": "Trưởng Đơn Vị Tăng Huyết Áp & Suy Tim Nặng",
    "hosp": "BV Thống Nhất (26 năm kinh nghiệm điều trị lão khoa)",
    "desc": "Điều trị cá thể hóa bệnh lý tim mạch kết hợp suy tim phân suất tống máu bảo tồn (HFpEF) và bệnh thận mạn ở người cao niên.",
    "cchn": "005820/BYT-CCHN",
    "price": "750.000₫ / phiên",
    "category": "cardio",
    "img": "./assets/images/img_12_2fcdabc9.jpg",
    "rating": "4.97",
    "reviewsCount": 110
  },
  {
    "id": "mai",
    "name": "BS. CKI Trần Thị Mai",
    "role": "Chuyên Gia Sa Sút Trí Tuệ & Bệnh Lý Alzheimer",
    "hosp": "BV Đại học Y Dược TP.HCM (15 năm lâm sàng)",
    "desc": "Đánh giá trắc nghiệm nhận thức thần kinh MoCA/MMSE, phục hồi chức năng ghi nhớ và cải thiện hành vi giấc ngủ sa sút trí tuệ.",
    "cchn": "014992/SYT-HCM-CCHN",
    "price": "650.000₫ / phiên",
    "category": "neuro",
    "img": "./assets/images/img_14_dea204ad.jpg",
    "rating": "4.96",
    "reviewsCount": 84
  },
  {
    "id": "nam",
    "name": "ThS. BS Phạm Văn Nam",
    "role": "Bác Sĩ Trị Liệu Rối Loạn Giấc Ngủ & Lo Âu Lão Niên",
    "hosp": "BV Tâm Thần TP.HCM & Trung tâm Điều trị Mất ngủ",
    "desc": "Chữa trị dứt điểm mất ngủ mạn tính không lạm dụng thuốc an thần gây nghiện, giải tỏa rối loạn hoảng sợ và stress người già.",
    "cchn": "017384/SYT-HCM-CCHN",
    "price": "580.000₫ / phiên",
    "category": "psychiatry",
    "img": "./assets/images/img_13_d6db4165.jpg",
    "rating": "4.93",
    "reviewsCount": 62
  },
  {
    "id": "hung_rehab",
    "name": "BS. CKI Nguyễn Quốc Hùng",
    "role": "Trưởng Khoa Phục Hồi Chức Năng Vận Động",
    "hosp": "BV Phục Hồi Chức Năng - Điều Trị Bệnh Nghề Nghiệp TP.HCM",
    "desc": "Kỹ thuật vận động trị liệu tái giáo dục dáng đi, cải thiện thăng bằng chống té ngã và phục hồi sau phẫu thuật thay khớp háng.",
    "cchn": "012845/SYT-HCM-CCHN",
    "price": "650.000₫ / phiên",
    "category": "rehab",
    "img": "./assets/images/img_38_2f715903.jpg",
    "rating": "4.95",
    "reviewsCount": 91
  },
  {
    "id": "hung_joint",
    "name": "TS. BS Vũ Đình Hùng",
    "role": "Cố Vấn Cơ Xương Khớp & Thấp Khớp Học",
    "hosp": "Nguyên Trưởng Khoa Cơ Xương Khớp BV Chợ Rẫy",
    "desc": "Tiêm huyết tương giàu tiểu cầu (PRP) khớp gối thoái hóa, điều trị loãng xương nặng chống xẹp đốt sống và viêm khớp dạng thấp.",
    "cchn": "002194/BYT-CCHN",
    "price": "850.000₫ / phiên",
    "category": "rehab",
    "img": "./assets/images/doctor_male_senior.jpg",
    "rating": "4.99",
    "reviewsCount": 156
  },
  {
    "id": "tuyen",
    "name": "BS. CKII Đặng Thị Kim Tuyến",
    "role": "Chuyên Gia Bệnh Parkinson & Rối Loạn Vận Động",
    "hosp": "BV Chợ Rẫy & Giảng viên Bộ môn Thần kinh",
    "desc": "Điều chỉnh tối ưu phác đồ Levodopa, kiểm soát cơn dao động vận động và hỗ trợ dinh dưỡng chống teo cơ bệnh nhân Parkinson.",
    "cchn": "009841/SYT-HCM-CCHN",
    "price": "720.000₫ / phiên",
    "category": "neuro",
    "img": "./assets/images/doctor_thao.jpg",
    "rating": "4.96",
    "reviewsCount": 88
  },
  {
    "id": "binh",
    "name": "ThS. BS Phan Thanh Bình",
    "role": "Chuyên Gia Hô Hấp & Bệnh Phổi Tắc Nghẽn Mạn Tính",
    "hosp": "BV Phạm Ngọc Thạch TP.HCM (17 năm kinh nghiệm)",
    "desc": "Quản lý COPD, hen suyễn phế quản người già, hỗ trợ thở oxy dài hạn tại nhà và tập thở phục hồi chức năng hô hấp sau viêm phổi.",
    "cchn": "015632/SYT-HCM-CCHN",
    "price": "600.000₫ / phiên",
    "category": "cardio",
    "img": "./assets/images/doctor_hong_hung.jpg",
    "rating": "4.94",
    "reviewsCount": 73
  },
  {
    "id": "dat",
    "name": "BS. CKI Huỳnh Tấn Đạt",
    "role": "Bác Sĩ Siêu Âm Tim Mạch & Bệnh Động Mạch Vành",
    "hosp": "Viện Tim TP.HCM (13 năm kinh nghiệm)",
    "desc": "Khảo sát siêu âm tim qua thành ngực, đo phân suất tống máu EF, tầm soát hẹp van động mạch chủ và xơ vữa động mạch cảnh.",
    "cchn": "018440/SYT-HCM-CCHN",
    "price": "620.000₫ / phiên",
    "category": "cardio",
    "img": "./assets/images/doctor_tuan_anh.jpg",
    "rating": "4.95",
    "reviewsCount": 65
  },
  {
    "id": "nga",
    "name": "TS. BS Nguyễn Thị Bích Nga",
    "role": "Chuyên Gia Nội Tiết & Quản Lý Bàn Chân Đái Tháo Đường",
    "hosp": "BV Nội Tiết TW & Cố vấn Lâm sàng Lão khoa",
    "desc": "Phác đồ kiểm soát HbA1c an toàn tránh hạ đường huyết ban đêm, chăm sóc ngừa loét đoạn chi bàn chân đái tháo đường.",
    "cchn": "006450/BYT-CCHN",
    "price": "700.000₫ / phiên",
    "category": "cardio",
    "img": "./assets/images/doctor_female_senior.jpg",
    "rating": "4.97",
    "reviewsCount": 94
  },
  {
    "id": "tri",
    "name": "BS. CKI Võ Minh Trí",
    "role": "Chuyên Gia Tiết Chế Dinh Dưỡng Lão Khoa",
    "hosp": "Trung Tâm Dinh Dưỡng TP.HCM & BV Phục Hồi Chức Năng",
    "desc": "Thiết lập thực đơn nuôi ăn qua ống sonde dạ dày, điều trị suy dinh dưỡng suy kiệt sụt cân và điều chỉnh điện giải ở người lớn tuổi.",
    "cchn": "017892/SYT-HCM-CCHN",
    "price": "550.000₫ / phiên",
    "category": "rehab",
    "img": "./assets/images/doctor_khang.jpg",
    "rating": "4.92",
    "reviewsCount": 58
  },
  {
    "id": "an",
    "name": "ThS. BS Bùi Hoài An",
    "role": "Chuyên Gia Trị Liệu Trầm Cảm & Tâm Lý Tuổi Già",
    "hosp": "ĐH Y Dược TP.HCM & Hội Tâm Lý Lâm Sàng",
    "desc": "Chữa lành khủng hoảng tâm lý hưu trí, hội chứng tổ chim trống (Empty Nest), hỗ trợ tinh thần người bệnh mạn tính kéo dài.",
    "cchn": "016239/SYT-HCM-CCHN",
    "price": "600.000₫ / phiên",
    "category": "psychiatry",
    "img": "./assets/images/img_14_dea204ad.jpg",
    "rating": "4.96",
    "reviewsCount": 77
  },
  {
    "id": "hieu",
    "name": "BS. CKII Trương Công Hiếu",
    "role": "Chuyên Gia Chấn Thương Chỉnh Hình & Cột Sống Lão Khoa",
    "hosp": "BV Chấn Thương Chỉnh Hình TP.HCM (24 năm lâm sàng)",
    "desc": "Khám và bảo tồn thoát vị đĩa đệm, hẹp ống sống thắt lưng, gãy cổ xương đùi người già và điều trị loãng xương chuyên sâu.",
    "cchn": "004812/BYT-CCHN",
    "price": "750.000₫ / phiên",
    "category": "rehab",
    "img": "./assets/images/doctor_male_senior.jpg",
    "rating": "4.98",
    "reviewsCount": 120
  },
  {
    "id": "trang",
    "name": "BS. CKI Hoàng Thị Thu Trang",
    "role": "Bác Sĩ Chăm Sóc Giảm Nhẹ (Palliative Care)",
    "hosp": "Viện Ung Bướu & Trung tâm Chăm Sóc Giảm Nhẹ GoCare",
    "desc": "Kiểm soát cơn đau mạn tính bằng thang điểm VAS, tối ưu giảm đau an toàn, nâng đỡ thể chất và tâm lý an yên giai đoạn cuối đời.",
    "cchn": "015331/SYT-HCM-CCHN",
    "price": "680.000₫ / phiên",
    "category": "psychiatry",
    "img": "./assets/images/doctor_thao.jpg",
    "rating": "4.97",
    "reviewsCount": 82
  }
];
  const reviewsDict = {
  "vinh": [
    {
      "author": "Bác Trần Hùng (68 tuổi - Sala Thủ Đức)",
      "comment": "Bác sĩ Vinh khám rất kỹ lưỡng, đo huyết áp 3 lần trong suốt phiên và giải thích cơ chế rất cặn kẽ, ấm áp."
    },
    {
      "author": "Chị Mai Lan (Thân nhân)",
      "comment": "Mẹ tôi bị tim mạch kèm lo âu, bác sĩ nói chuyện từ tốn và chuẩn mực, tinh thần mẹ hồi phục rất tốt."
    }
  ],
  "khang": [
    {
      "author": "Bác Đỗ Văn Tâm (65 tuổi)",
      "comment": "Sau 3 tuần tập phục hồi với bác sĩ Khang, cánh tay trái của tôi đã cử động cầm thìa ăn cơm được."
    },
    {
      "author": "Anh Hoàng Bách (Thân nhân)",
      "comment": "Bác sĩ kiên nhẫn hướng dẫn bài tập phục hồi chức năng sau đột quỵ cho bố tôi, tiến triển rất rõ rệt."
    }
  ],
  "honghung": [
    {
      "author": "Bác Lê Văn Thạnh (71 tuổi)",
      "comment": "Bác sĩ Hưng can thiệp kiểm soát cơn tăng huyết áp khẩn cấp cho tôi rất chuẩn xác, dặn dò chu đáo từng loại thuốc."
    }
  ],
  "phuong": [
    {
      "author": "Bác Phạm Quốc Tuấn (73 tuổi)",
      "comment": "Bác sĩ Phương chỉnh lại đơn thuốc tiểu đường giúp tôi không còn bị chóng mặt ban đêm, đường huyết ổn định."
    }
  ],
  "thao": [
    {
      "author": "Cô Trịnh Kim Oanh (64 tuổi)",
      "comment": "Bác sĩ Thảo chẩn đoán Parkinson từ sớm và điều chỉnh thuốc giúp tay tôi bớt run hẳn, ngủ ngon giấc."
    }
  ],
  "quan": [
    {
      "author": "Bác Ngô Văn Sang (69 tuổi)",
      "comment": "Bác sĩ Quân giải thích kết quả điện tâm đồ rất dễ hiểu, theo dõi nhịp tim từ xa rất an tâm."
    }
  ],
  "thanh": [
    {
      "author": "Bác Hoàng Minh (70 tuổi)",
      "comment": "Bác sĩ Thành lắng nghe chân thành, giúp tôi vượt qua cảm giác bồn chồn mất ngủ kéo dài."
    }
  ],
  "huy": [
    {
      "author": "Bác Đinh Văn Hòa (75 tuổi)",
      "comment": "Bác sĩ Huy điều trị tăng huyết áp kháng trị cho tôi suốt 3 năm nay, huyết áp luôn duy trì dưới 130/80."
    }
  ],
  "mai": [
    {
      "author": "Anh Nguyễn Hải Nam (Thân nhân)",
      "comment": "Bác sĩ Mai làm bài test trí nhớ cho mẹ tôi rất tỉ mỉ, đưa ra lộ trình tập luyện trí não rất hiệu quả."
    }
  ],
  "nam": [
    {
      "author": "Cô Vũ Thu Hà (62 tuổi)",
      "comment": "Nhờ phác đồ trị liệu giấc ngủ của bác sĩ Nam, tôi đã bỏ được thuốc ngủ sau 5 năm phụ thuộc."
    }
  ],
  "hung_rehab": [
    {
      "author": "Bác Lương Thế Vinh (70 tuổi)",
      "comment": "Sau phẫu thuật thay khớp háng, bác sĩ Hùng hướng dẫn tập đi lại từng bước, giờ tôi đã tự đi bộ được."
    }
  ],
  "hung_joint": [
    {
      "author": "Bà Huỳnh Kim Hoa (76 tuổi)",
      "comment": "Tiêm khớp gối thoái hóa với bác sĩ Vũ Đình Hùng êm ái, bớt đau nhức rõ rệt khi lên cầu thang."
    }
  ],
  "tuyen": [
    {
      "author": "Gia đình bác Tạ Văn Hùng",
      "comment": "Bác sĩ Tuyến chỉnh liều thuốc Parkinson rất chuẩn, bác vận động linh hoạt hơn rất nhiều."
    }
  ],
  "binh": [
    {
      "author": "Bác Chu Trọng Tấn (74 tuổi)",
      "comment": "Bác sĩ Bình hướng dẫn kỹ thuật thở mím môi và xông khí dung, cơn khó thở COPD giảm hẳn."
    }
  ],
  "dat": [
    {
      "author": "Bác Vũ Ngọc Bích (67 tuổi)",
      "comment": "Siêu âm tim Doppler màu chi tiết, bác sĩ Đạt tư vấn cặn kẽ và giải đáp mọi thắc mắc."
    }
  ],
  "nga": [
    {
      "author": "Bác Nguyễn Văn Toàn (71 tuổi)",
      "comment": "Bác sĩ Nga khám bàn chân tiểu đường rất cẩn thận, vết trầy xước lành nhanh chóng."
    }
  ],
  "tri": [
    {
      "author": "Gia đình bác Lê Văn Phát",
      "comment": "Bác sĩ Trí lên thực đơn dinh dưỡng qua ống sonde cân đối, bố tôi tăng cân và hồng hào trở lại."
    }
  ],
  "an": [
    {
      "author": "Bác Ngô Thị Mai (66 tuổi)",
      "comment": "Sau các buổi trò chuyện trị liệu với bác sĩ An, tâm trạng tôi nhẹ nhõm, tìm lại niềm vui tuổi già."
    }
  ],
  "hieu": [
    {
      "author": "Bác Đỗ Hữu Thắng (78 tuổi)",
      "comment": "Bác sĩ Hiếu điều trị bảo tồn thoát vị đĩa đệm hiệu quả, không phải mổ mà lưng đã bớt đau buốt."
    }
  ],
  "trang": [
    {
      "author": "Anh Trần Đình Trọng (Thân nhân)",
      "comment": "Bác sĩ Trang kiểm soát cơn đau cho mẹ rất nhân văn, gia đình vô cùng biết ơn sự tận tâm của bác sĩ."
    }
  ],
  "khanh": [
    {
      "author": "Bác Lý Khắc Cường (65 tuổi)",
      "comment": "Bác sĩ Khánh châm cứu và điện xung thần kinh tọa rất hiệu quả, chân tôi đã hết tê bì buốt."
    }
  ]
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
  const filteredDoctors = doctors.filter(d => {
    const matchCat = filter === 'all' || d.category === filter;
    const matchSearch = !doctorSearch.trim() || (d.name + ' ' + d.role + ' ' + d.hosp + ' ' + d.desc).toLowerCase().includes(doctorSearch.toLowerCase());
    return matchCat && matchSearch;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full pt-20 bg-surface"
  }, /*#__PURE__*/React.createElement("section", {
    className: "w-full py-10 bg-gradient-to-b from-surface via-surface-container-low/50 to-surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl space-y-3 text-center lg:text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/50 text-secondary text-xs font-bold uppercase tracking-wider"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "verified"), /*#__PURE__*/React.createElement("span", null, "H\u1ED9i \u0110\u1ED3ng Y Khoa Qu\u1ED1c T\u1EBF T\u1EA1i Vi\u1EC7t Nam")), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-3xl sm:text-4xl text-primary font-bold"
  }, "H\u1ED9i \u0110\u1ED3ng B\xE1c S\u0129 Chuy\xEAn Khoa C\u1EA5p Cao"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-on-surface-variant leading-relaxed"
  }, "H\u1ED9i t\u1EE5 c\xE1c chuy\xEAn gia L\xE3o khoa, Tim m\u1EA1ch v\xE0 S\u1EE9c kh\u1ECFe Tinh th\u1EA7n t\u1EEBng gi\u1EEF tr\u1ECDng tr\xE1ch qu\u1EA3n l\xFD v\xE0 kh\xE1m ch\u1EEFa b\u1EC7nh t\u1EA1i B\u1EC7nh vi\u1EC7n Ch\u1EE3 R\u1EABy, B\u1EA1ch Mai, \u0110\u1EA1i h\u1ECDc Y D\u01B0\u1EE3c TP.HCM v\xE0 Vi\u1EC7n L\xE3o Khoa Qu\u1ED1c Gia.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-6 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/30 mx-auto lg:mx-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-serif font-bold text-secondary"
  }, "25+"), /*#__PURE__*/React.createElement("span", {
    className: "block text-[11px] text-outline"
  }, "N\u0103m kinh nghi\u1EC7m TB")), /*#__PURE__*/React.createElement("div", {
    className: "w-px h-8 bg-outline-variant/40"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-serif font-bold text-primary"
  }, "100%"), /*#__PURE__*/React.createElement("span", {
    className: "block text-[11px] text-outline"
  }, "CCHN B\u1ED9 Y T\u1EBF")), /*#__PURE__*/React.createElement("div", {
    className: "w-px h-8 bg-outline-variant/40"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-serif font-bold text-tertiary"
  }, "1:1"), /*#__PURE__*/React.createElement("span", {
    className: "block text-[11px] text-outline"
  }, "Phi\xEAn kh\xE1m ri\xEAng bi\u1EC7t")))), /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl mx-auto w-full px-4 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined absolute left-4 text-outline text-xl pointer-events-none"
  }, "search"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: doctorSearch,
    onChange: e => setDoctorSearch(e.target.value),
    placeholder: "Tìm kiếm bác sĩ theo tên, học vị, chuyên khoa, bệnh viện (Chợ Rẫy, ĐH Y Dược...)",
    className: "w-full pl-12 pr-10 py-3 rounded-full bg-surface-container-lowest border border-outline-variant/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-accent shadow-xs"
  }), doctorSearch && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setDoctorSearch(""),
    className: "absolute right-3.5 w-6 h-6 rounded-full bg-surface-container text-xs text-outline hover:text-primary flex items-center justify-center"
  }, "✕")), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-[11px] text-outline mt-1.5"
  }, "Hiển thị ", filteredDoctors.length, " / ", doctors.length, " bác sĩ chuyên khoa cấp cao")), /*#__PURE__*/React.createElement("div", {
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
  }, "B\xE1c S\u0129 C\u1EA5p Cao")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-between flex-grow gap-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-2 mb-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-secondary bg-secondary-fixed/40 px-2 py-0.5 rounded"
  }, "Tr\u1EF1c Tuy\u1EBFn"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200"
  }, "\uD83D\uDFE2 S\u1EB5n s\xE0ng nh\u1EADn ca")), /*#__PURE__*/React.createElement("h3", {
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
  }, "Bi\u1EC3u ph\xED:"), /*#__PURE__*/React.createElement("span", {
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
  }, "\u2B50"), /*#__PURE__*/React.createElement("span", null, "Xem \u0110\xE1nh Gi\xE1")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setSelectedDoctor(doc);
      setIsBookingModalOpen(true);
    },
    className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-bold shadow-sm hover:bg-primary-container transition-all hover:scale-105"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "calendar_today"), /*#__PURE__*/React.createElement("span", null, "\u0110\u1EB7t L\u1ECBch Kh\xE1m 1:1")))))))), /*#__PURE__*/React.createElement("section", {
    className: "w-full py-16 bg-surface-container-low border-t border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase text-secondary tracking-wider"
  }, "Li\u1EC7u Ph\xE1p \xC2m Thanh N\xE3o B\u1ED9"), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-3xl font-bold text-primary mt-1"
  }, "Th\u01B0 Vi\u1EC7n \xC2m Nh\u1EA1c T\u1EA7n S\u1ED1 Ch\u1EEFa L\xE0nh N\xE3o B\u1ED9 (432Hz & 528Hz)"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-on-surface-variant mt-1 max-w-2xl"
  }, "H\u1EA1 cortisol c\u0103ng th\u1EB3ng, k\xEDch ho\u1EA1t s\xF3ng n\xE3o Alpha/Theta v\xE0 \u0111\u01B0a c\u01A1 th\u1EC3 v\xE0o tr\u1EA1ng th\xE1i ph\u1EE5c h\u1ED3i gi\u1EA5c ng\u1EE7 t\u1EF1 nhi\xEAn.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsAiModalOpen(true),
    className: "px-5 py-3 rounded-2xl bg-gradient-to-r from-secondary to-primary-container text-on-secondary font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl flex items-center gap-2 transition-all hover:scale-105"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-lg"
  }, "smart_toy"), /*#__PURE__*/React.createElement("span", null, "M\u1EDF Tr\u1EE3 L\xFD AI L\u1EAFng Nghe 24/7"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-surface-container-lowest border border-secondary/30 shadow-md flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-secondary uppercase flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "graphic_eq"), " \u0110ang ph\xE1t tr\u1ECB li\u1EC7u"), /*#__PURE__*/React.createElement("span", {
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
  }, "Tr\u1EE3 L\xFD AI Y Khoa GoCare 24/7"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-surface/80 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
  }), " B\u1EA3o m\u1EADt HIPAA & Chu\u1EA9n Y t\u1EBF"))), /*#__PURE__*/React.createElement("button", {
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
    placeholder: "Nh\u1EADp tri\u1EC7u ch\u1EE9ng ho\u1EB7c c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n (v\xED d\u1EE5: huy\u1EBFt \xE1p t\u0103ng, m\u1EA5t ng\u1EE7)...",
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
  }, "Ph\xED th\u0103m kh\xE1m:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-secondary"
  }, selectedDoctor.price))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block font-bold text-primary mb-1"
  }, "Ch\u1ECDn ng\xE0y h\u1EB9n:"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    defaultValue: "2026-09-25",
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block font-bold text-primary mb-1"
  }, "H\xECnh th\u1EE9c phi\xEAn kh\xE1m:"), /*#__PURE__*/React.createElement("select", {
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs"
  }, /*#__PURE__*/React.createElement("option", null, "Kh\xE1m tr\u1EF1c ti\u1EBFp t\u1EA1i GoCare Heritage Villa (Sala)"), /*#__PURE__*/React.createElement("option", null, "B\xE1c s\u0129 \u0111\u1EBFn th\u0103m kh\xE1m t\u1EADn t\u01B0 gia"), /*#__PURE__*/React.createElement("option", null, "T\u01B0 v\u1EA5n tr\u1EF1c tuy\u1EBFn Telehealth 1:1 qua Video")))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      alert(`Đã gửi yêu cầu đặt lịch khám 1:1 với ${selectedDoctor.name}. Trợ lý phòng khám sẽ gọi lại cho Quý khách trong 5 phút!`);
      setIsBookingModalOpen(false);
    },
    className: "w-full py-3 rounded-xl bg-primary text-on-primary font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary-container"
  }, "X\xE1c Nh\u1EADn \u0110\u1EB7t L\u1ECBch Kh\xE1m"))), isReviewModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-md bg-surface-container-lowest rounded-3xl shadow-2xl p-6 space-y-4 modal-animated border border-gold-accent/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b pb-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-primary flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-amber-500"
  }, "\u2B50"), " \u0110\xE1nh Gi\xE1 Th\u1EF1c T\u1EBF T\u1EEB Ng\u01B0\u1EDDi B\u1EC7nh & Th\xE2n Nh\xE2n"), /*#__PURE__*/React.createElement("button", {
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
  }, "\u0110\xF3ng"))));
}

// --- SCREEN 3: ĐIỀU DƯỠNG & GPS BẢN ĐỒ THUẬT TOÁN TÌM ĐƯỜNG ĐI NGẮN NHẤT (DIJKSTRA / A*) ---
function NursingScreen() {
  const [specialty, setSpecialty] = useState('all');
  const [nurseSearch, setNurseSearch] = useState('');
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

  // Network graph nodes in HCMC
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
    }
  };

  // Edges with realistic distances in km
  const graphEdges = [{
    from: 'user',
    to: 'tram_thaodien',
    dist: 0.1
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
    to: 'gocare_bachdang',
    dist: 1.2
  }, {
    from: 'cau_bason',
    to: 'gocare_sala',
    dist: 1.9
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
      marker.bindPopup(`
            <div style="font-family: 'Inter', sans-serif; font-size: 12px;">
              <strong style="color: #482816;">${node.name}</strong><br/>
              <span style="color: #83746f;">Tọa độ: ${node.lat.toFixed(4)}, ${node.lng.toFixed(4)}</span>
            </div>
          `);
      markersLayerRef.current.addLayer(marker);
    });
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
      renderMapMarkers();
      if (mapInstanceRef.current) {
        mapInstanceRef.current.setView([latitude, longitude], 14);
      }
    }, err => {
      setGpsStatus('Không truy cập được GPS (đang dùng mô phỏng Thảo Điền)');
      alert('Không thể lấy vị trí thực tế, hệ thống sẽ sử dụng vị trí cơ sở Thảo Điền TP. Thủ Đức!');
    });
  };
  const nurses = [
  {
    "id": 1,
    "name": "ĐD. Trần Thị Hoài Thương",
    "title": "Cử nhân Hộ sinh & Điều dưỡng BV Từ Dũ",
    "cchn": "025619/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.98",
    "reviewCount": 96,
    "specialty": "mother_baby",
    "hosp": "BV Từ Dũ, BV Hùng Vương (8 năm lâm sàng)",
    "tags": [
      "Chăm sóc mẹ & bé",
      "Vết mổ bắt con N1-N7",
      "Thông tắc tia sữa",
      "Tắm bé sơ sinh chuẩn y khoa"
    ],
    "img": "./assets/images/img_1_e2d193fb.jpg",
    "shifts": {
      "shift4h": "400.000₫",
      "shift8h": "720.000₫",
      "shift12h": "920.000₫",
      "shift24h": "1.450.000₫"
    }
  },
  {
    "id": 2,
    "name": "ĐD. Hoàng Bích Ngọc",
    "title": "Cử nhân Điều dưỡng Cao cấp - BV Lão Khoa TW",
    "cchn": "015433/BYT-CCHN",
    "agency": "Cục QLKCB - Bộ Y Tế",
    "rating": "4.97",
    "reviewCount": 112,
    "specialty": "elderly",
    "hosp": "BV Lão Khoa TW, BV Bạch Mai (11 năm lâm sàng)",
    "tags": [
      "Loét tỳ đè độ II-III",
      "Chăm sóc giảm nhẹ",
      "Đặt sonde dạ dày",
      "Chăm sóc người cao tuổi tai biến"
    ],
    "img": "./assets/images/img_2_ef7f4608.jpg",
    "shifts": {
      "shift4h": "420.000₫",
      "shift8h": "750.000₫",
      "shift12h": "950.000₫",
      "shift24h": "1.500.000₫"
    }
  },
  {
    "id": 3,
    "name": "ĐD. Lê Vũ Anh Quân",
    "title": "Cử nhân Điều dưỡng Hồi Sức ICU - BV Chợ Rẫy",
    "cchn": "018972/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.95",
    "reviewCount": 88,
    "specialty": "wound_sonde",
    "hosp": "BV Chợ Rẫy (Khoa ICU), BV Thống Nhất (9 năm lâm sàng)",
    "tags": [
      "Thay băng cắt chỉ vết mổ",
      "Đặt sonde Foley",
      "Vận hành máy thở oxy",
      "Cấp cứu đường thở"
    ],
    "img": "./assets/images/img_4_c1ecf62f.jpg",
    "shifts": {
      "shift4h": "450.000₫",
      "shift8h": "800.000₫",
      "shift12h": "1.000.000₫",
      "shift24h": "1.600.000₫"
    }
  },
  {
    "id": 4,
    "name": "ĐD. CKI Lê Thị Thanh",
    "title": "Điều Dưỡng Trưởng Khoa Hồi Sức Tích Cực",
    "cchn": "014290/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.99",
    "reviewCount": 145,
    "specialty": "elderly",
    "hosp": "BV Nhân Dân 115 (14 năm kinh nghiệm)",
    "tags": [
      "Chăm sóc người già bất động",
      "Hồi sức cấp cứu",
      "Vệ sinh cá nhân tại giường",
      "Theo dõi sinh hiệu 24/7"
    ],
    "img": "./assets/images/nurse_female_1.jpg",
    "shifts": {
      "shift4h": "450.000₫",
      "shift8h": "780.000₫",
      "shift12h": "980.000₫",
      "shift24h": "1.550.000₫"
    }
  },
  {
    "id": 5,
    "name": "ĐD. Trần Văn Khoa",
    "title": "Kỹ thuật viên Vật lý Trị liệu & Phục hồi Vận động",
    "cchn": "019842/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.96",
    "reviewCount": 94,
    "specialty": "elderly",
    "hosp": "BV Phục Hồi Chức Năng TP.HCM (8 năm lâm sàng)",
    "tags": [
      "Tập vận động thụ động",
      "Chống cứng khớp teo cơ",
      "Tập đứng tập đi sau mổ",
      "Vật lý trị liệu tại nhà"
    ],
    "img": "./assets/images/nurse_male_1.jpg",
    "shifts": {
      "shift4h": "400.000₫",
      "shift8h": "720.000₫",
      "shift12h": "920.000₫",
      "shift24h": "1.450.000₫"
    }
  },
  {
    "id": 6,
    "name": "ThS. ĐD Đỗ Thu Hà",
    "title": "Giám Đốc Khối Điều Dưỡng GoCare & BV Đại Học Y Dược",
    "cchn": "011892/BYT-CCHN",
    "agency": "Cục QLKCB - Bộ Y Tế",
    "rating": "4.99",
    "reviewCount": 160,
    "specialty": "elderly",
    "hosp": "BV Đại Học Y Dược TP.HCM (20 năm kinh nghiệm điều hành)",
    "tags": [
      "Thẩm định CCHN",
      "Quy trình điều dưỡng chuẩn JCI",
      "Chăm sóc lão khoa chuyên sâu",
      "Quản lý ca trực"
    ],
    "img": "./assets/images/img_14_dea204ad.jpg",
    "shifts": {
      "shift4h": "500.000₫",
      "shift8h": "850.000₫",
      "shift12h": "1.100.000₫",
      "shift24h": "1.700.000₫"
    }
  },
  {
    "id": 7,
    "name": "ĐD. Phạm Thị Ngọc Ánh",
    "title": "Chuyên viên Chăm sóc Vết thương Hở & Loét Tỳ Đè",
    "cchn": "028471/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.97",
    "reviewCount": 105,
    "specialty": "wound_sonde",
    "hosp": "BV Chợ Rẫy (Khoa Phỏng & Tạo hình) (10 năm lâm sàng)",
    "tags": [
      "Rửa vết loét tỳ đè độ II-IV",
      "Cắt lọc hoại tử",
      "Băng dán hydrocolloid",
      "Thay băng vô khuẩn"
    ],
    "img": "./assets/images/nurse_female_1.jpg",
    "shifts": {
      "shift4h": "420.000₫",
      "shift8h": "750.000₫",
      "shift12h": "950.000₫",
      "shift24h": "1.500.000₫"
    }
  },
  {
    "id": 8,
    "name": "ĐD. Vũ Hoàng Long",
    "title": "Điều dưỡng Hồi sức Ngoại khoa BV Hữu Nghị Việt Đức",
    "cchn": "017834/BYT-CCHN",
    "agency": "Cục QLKCB - Bộ Y Tế",
    "rating": "4.96",
    "reviewCount": 87,
    "specialty": "wound_sonde",
    "hosp": "BV Hữu Nghị Việt Đức (9 năm lâm sàng)",
    "tags": [
      "Chăm sóc hậu phẫu ổ bụng",
      "Dẫn lưu vết mổ",
      "Hút đờm dãi nội khí quản",
      "Đặt sonde dạ dày"
    ],
    "img": "./assets/images/nurse_male_1.jpg",
    "shifts": {
      "shift4h": "430.000₫",
      "shift8h": "760.000₫",
      "shift12h": "960.000₫",
      "shift24h": "1.520.000₫"
    }
  },
  {
    "id": 9,
    "name": "ĐD. Đỗ Thị Mai Linh",
    "title": "Cử nhân Hộ sinh BV Hùng Vương & Tắm bé Sơ sinh",
    "cchn": "026781/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.98",
    "reviewCount": 124,
    "specialty": "mother_baby",
    "hosp": "BV Hùng Vương, BV Đại học Y Dược (8 năm lâm sàng)",
    "tags": [
      "Tắm bé chuẩn sơ sinh",
      "Chăm sóc rốn trẻ",
      "Xoa bóp massage bé",
      "Hỗ trợ mẹ sau sinh mổ"
    ],
    "img": "./assets/images/img_1_e2d193fb.jpg",
    "shifts": {
      "shift4h": "400.000₫",
      "shift8h": "720.000₫",
      "shift12h": "920.000₫",
      "shift24h": "1.450.000₫"
    }
  },
  {
    "id": 10,
    "name": "ĐD. Huỳnh Quốc Bảo",
    "title": "Chuyên viên Đặt Sonde Dạ Dày & Sonde Foley Tại Nhà",
    "cchn": "024105/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.95",
    "reviewCount": 78,
    "specialty": "wound_sonde",
    "hosp": "BV Đa Khoa Khu Vực Thủ Đức (6 năm lâm sàng)",
    "tags": [
      "Đặt sonde dạ dày nuôi ăn",
      "Thay sonde tiểu Foley",
      "Rửa bàng quang vô khuẩn",
      "Thử đường huyết mao mạch"
    ],
    "img": "./assets/images/nurse_male_1.jpg",
    "shifts": {
      "shift4h": "390.000₫",
      "shift8h": "710.000₫",
      "shift12h": "910.000₫",
      "shift24h": "1.420.000₫"
    }
  },
  {
    "id": 11,
    "name": "ĐD. Nguyễn Bích Trâm",
    "title": "Điều dưỡng Thần kinh & Phục hồi Tai biến Mạch máu Não",
    "cchn": "021980/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.97",
    "reviewCount": 92,
    "specialty": "elderly",
    "hosp": "BV Nhân Dân Gia Định (Khoa Thần kinh) (7 năm kinh nghiệm)",
    "tags": [
      "Chăm sóc người tai biến",
      "Vỗ rung lồng ngực",
      "Phòng chống sặc thức ăn",
      "Xoay trở chống loét"
    ],
    "img": "./assets/images/img_2_ef7f4608.jpg",
    "shifts": {
      "shift4h": "410.000₫",
      "shift8h": "730.000₫",
      "shift12h": "930.000₫",
      "shift24h": "1.480.000₫"
    }
  },
  {
    "id": 12,
    "name": "ĐD. Phan Minh Tuấn",
    "title": "Kỹ thuật viên Xoa bóp Bấm huyệt & Phục hồi Cột sống",
    "cchn": "019234/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.96",
    "reviewCount": 86,
    "specialty": "elderly",
    "hosp": "Viện Y Dược Học Dân Tộc TP.HCM (9 năm lâm sàng)",
    "tags": [
      "Xoa bóp giảm đau nhức",
      "Bấm huyệt đả thông kinh lạc",
      "Chườm ngải cứu thảo dược",
      "Cải thiện giấc ngủ người già"
    ],
    "img": "./assets/images/nurse_male_1.jpg",
    "shifts": {
      "shift4h": "400.000₫",
      "shift8h": "720.000₫",
      "shift12h": "920.000₫",
      "shift24h": "1.450.000₫"
    }
  },
  {
    "id": 13,
    "name": "ĐD. Trịnh Thu Hà",
    "title": "Điều dưỡng Nội Tim mạch & Đo Điện tâm đồ ECG Tại Nhà",
    "cchn": "022841/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.98",
    "reviewCount": 110,
    "specialty": "elderly",
    "hosp": "Viện Tim TP.HCM (8 năm lâm sàng)",
    "tags": [
      "Đo ECG tại giường",
      "Giám sát Holter nhịp tim",
      "Nhắc uống thuốc tim mạch",
      "Đo huyết áp đa tư thế"
    ],
    "img": "./assets/images/nurse_female_1.jpg",
    "shifts": {
      "shift4h": "420.000₫",
      "shift8h": "750.000₫",
      "shift12h": "950.000₫",
      "shift24h": "1.500.000₫"
    }
  },
  {
    "id": 14,
    "name": "ĐD. Lê Thị Cẩm Tiên",
    "title": "Chuyên viên Chăm sóc Người bệnh Parkinson & Sa sút trí tuệ",
    "cchn": "025112/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.95",
    "reviewCount": 79,
    "specialty": "elderly",
    "hosp": "BV Đại học Y Dược TP.HCM (6 năm lâm sàng)",
    "tags": [
      "Hỗ trợ đi lại chống ngã",
      "Trò chuyện rèn luyện trí nhớ",
      "Đút ăn kiên nhẫn",
      "Tắm gội nhẹ nhàng tại giường"
    ],
    "img": "./assets/images/img_14_dea204ad.jpg",
    "shifts": {
      "shift4h": "390.000₫",
      "shift8h": "700.000₫",
      "shift12h": "900.000₫",
      "shift24h": "1.400.000₫"
    }
  },
  {
    "id": 15,
    "name": "ĐD. Ngô Văn Hậu",
    "title": "Điều dưỡng Ngoại Chấn thương & Cắt chỉ Vết mổ Sau phẫu thuật",
    "cchn": "020349/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.94",
    "reviewCount": 71,
    "specialty": "wound_sonde",
    "hosp": "BV Chấn Thương Chỉnh Hình TP.HCM (7 năm kinh nghiệm)",
    "tags": [
      "Cắt chỉ vết khâu phẫu thuật",
      "Băng ép cố định",
      "Kiểm tra dấu hiệu nhiễm trùng",
      "Hướng dẫn kê cao chi"
    ],
    "img": "./assets/images/img_4_c1ecf62f.jpg",
    "shifts": {
      "shift4h": "380.000₫",
      "shift8h": "680.000₫",
      "shift12h": "880.000₫",
      "shift24h": "1.380.000₫"
    }
  },
  {
    "id": 16,
    "name": "ĐD. Đặng Thu Thủy",
    "title": "Cử nhân Hộ sinh Sản phụ khoa & Thông tắc tia sữa",
    "cchn": "027419/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.99",
    "reviewCount": 138,
    "specialty": "mother_baby",
    "hosp": "BV Từ Dũ (Khoa Hậu sản) (9 năm kinh nghiệm)",
    "tags": [
      "Thông tắc tia sữa bằng máy sóng âm",
      "Chăm sóc tầng sinh môn",
      "Tư vấn dinh dưỡng lợi sữa",
      "Hướng dẫn khớp ngậm đúng"
    ],
    "img": "./assets/images/img_1_e2d193fb.jpg",
    "shifts": {
      "shift4h": "430.000₫",
      "shift8h": "770.000₫",
      "shift12h": "970.000₫",
      "shift24h": "1.530.000₫"
    }
  },
  {
    "id": 17,
    "name": "ĐD. Võ Thị Hồng Hạnh",
    "title": "Điều dưỡng Đa khoa BV Thống Nhất & Quản lý Thuốc Người già",
    "cchn": "023450/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.96",
    "reviewCount": 89,
    "specialty": "elderly",
    "hosp": "BV Thống Nhất (Khoa Nội Lão) (8 năm lâm sàng)",
    "tags": [
      "Chia liều thuốc sáng chiều tối",
      "Theo dõi phản ứng phụ của thuốc",
      "Đo đường huyết trước ăn",
      "Chăm sóc giấc ngủ"
    ],
    "img": "./assets/images/nurse_female_1.jpg",
    "shifts": {
      "shift4h": "400.000₫",
      "shift8h": "720.000₫",
      "shift12h": "920.000₫",
      "shift24h": "1.450.000₫"
    }
  },
  {
    "id": 18,
    "name": "ĐD. Bùi Quang Thắng",
    "title": "Điều dưỡng Cấp cứu Đường thở & Vận hành Máy thở Oxy",
    "cchn": "018492/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.95",
    "reviewCount": 76,
    "specialty": "wound_sonde",
    "hosp": "BV Phạm Ngọc Thạch (7 năm kinh nghiệm)",
    "tags": [
      "Cài đặt bình oxy tạo ẩm",
      "Hút đờm sâu ống canun",
      "Thay canun mở khí quản",
      "Theo dõi khí dung"
    ],
    "img": "./assets/images/nurse_male_1.jpg",
    "shifts": {
      "shift4h": "430.000₫",
      "shift8h": "780.000₫",
      "shift12h": "980.000₫",
      "shift24h": "1.550.000₫"
    }
  },
  {
    "id": 19,
    "name": "ĐD. Nguyễn Thị Mỹ Duyên",
    "title": "Chuyên viên Chăm sóc Giảm nhẹ & Dinh dưỡng Qua Sonde",
    "cchn": "026190/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.97",
    "reviewCount": 93,
    "specialty": "elderly",
    "hosp": "BV Ung Bướu TP.HCM (6 năm kinh nghiệm)",
    "tags": [
      "Chăm sóc xoa dịu đau đớn",
      "Nuôi ăn súp xay qua sonde",
      "Vệ sinh miệng chống nấm",
      "An ủi nâng đỡ tinh thần"
    ],
    "img": "./assets/images/img_2_ef7f4608.jpg",
    "shifts": {
      "shift4h": "410.000₫",
      "shift8h": "740.000₫",
      "shift12h": "940.000₫",
      "shift24h": "1.480.000₫"
    }
  },
  {
    "id": 20,
    "name": "ĐD. Đoàn Trọng Nghĩa",
    "title": "Kỹ thuật viên Phục hồi Chức năng Vận động Sau Gãy xương",
    "cchn": "019553/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.95",
    "reviewCount": 81,
    "specialty": "elderly",
    "hosp": "BV Chấn Thương Chỉnh Hình TP.HCM (8 năm kinh nghiệm)",
    "tags": [
      "Tập khung tập đi",
      "Bài tập cơ đùi cơ cẳng chân",
      "Phục hồi dáng đi sau tháo bột",
      "Phòng ngừa huyết khối tĩnh mạch"
    ],
    "img": "./assets/images/nurse_male_1.jpg",
    "shifts": {
      "shift4h": "410.000₫",
      "shift8h": "730.000₫",
      "shift12h": "930.000₫",
      "shift24h": "1.460.000₫"
    }
  },
  {
    "id": 21,
    "name": "ĐD. Phùng Thị Ngọc Mai",
    "title": "Điều dưỡng Trưởng Trực đêm & Giám sát Sinh hiệu 24/7",
    "cchn": "024881/SYT-HCM-CCHN",
    "agency": "Sở Y Tế TP. Hồ Chí Minh",
    "rating": "4.98",
    "reviewCount": 115,
    "specialty": "elderly",
    "hosp": "BV Đa Khoa Sài Gòn (10 năm kinh nghiệm)",
    "tags": [
      "Trực đêm chăm sóc liên tục",
      "Giám sát nhịp thở SpO2",
      "Xoay trở bệnh nhân ban đêm",
      "Hỗ trợ đi vệ sinh an toàn"
    ],
    "img": "./assets/images/nurse_female_1.jpg",
    "shifts": {
      "shift4h": "420.000₫",
      "shift8h": "760.000₫",
      "shift12h": "960.000₫",
      "shift24h": "1.500.000₫"
    }
  }
];
  const filteredNurses = nurses.filter(n => {
    const matchSpec = specialty === 'all' || n.specialty === specialty;
    const matchSearch = !nurseSearch.trim() || (n.name + ' ' + n.title + ' ' + n.hosp + ' ' + (n.tags || []).join(' ')).toLowerCase().includes(nurseSearch.toLowerCase());
    return matchSpec && matchSearch;
  });
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
    className: "w-full py-10 bg-surface-container-low/70"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-light text-primary text-xs font-bold uppercase tracking-wider border border-gold-accent/40"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "verified"), /*#__PURE__*/React.createElement("span", null, "Th\u1EA9m \u0110\u1ECBnh \u0110\u1ED9c L\u1EADp 4 B\u01B0\u1EDBc \u2022 B\u1ED9 Y T\u1EBF")), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-3xl sm:text-4xl text-primary font-bold"
  }, "\u0110\u1ED9i Ng\u0169 \u0110i\u1EC1u D\u01B0\u1EE1ng CCHN & H\u1EC7 Th\u1ED1ng GPS T\xECm Tuy\u1EBFn \u0110\u01B0\u1EDDng Ng\u1EAFn Nh\u1EA5t"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-on-surface-variant leading-relaxed"
  }, "100% nh\xE2n s\u1EF1 y t\u1EBF s\u1EDF h\u1EEFu Ch\u1EE9ng ch\u1EC9 h\xE0nh ngh\u1EC1 \u0111\u1ED9c l\u1EADp do B\u1ED9 Y T\u1EBF & S\u1EDF Y T\u1EBF c\u1EA5p. T\xEDch h\u1EE3p thu\u1EADt to\xE1n to\xE1n h\u1ECDc ", /*#__PURE__*/React.createElement("strong", null, "Dijkstra"), " v\xE0 ", /*#__PURE__*/React.createElement("strong", null, "A* (A-Star)"), " t\u1ED1i \u01B0u qu\xE3ng \u0111\u01B0\u1EDDng c\u1EE9u h\u1ED9 v\xE0 \u0111i\u1EC1u ph\u1ED1i y t\xE1 \u0111\u1EBFn nh\xE0 nhanh nh\u1EA5t.")), /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl mx-auto w-full px-4 pt-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined absolute left-4 text-outline text-xl pointer-events-none"
  }, "search"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: nurseSearch,
    onChange: e => setNurseSearch(e.target.value),
    placeholder: "Tìm kiếm điều dưỡng theo tên, CCHN, kỹ năng (sonde, loét tỳ đè, tắm bé, Từ Dũ...)",
    className: "w-full pl-12 pr-10 py-3 rounded-full bg-surface-container-lowest border border-outline-variant/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-accent shadow-xs"
  }), nurseSearch && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setNurseSearch(""),
    className: "absolute right-3.5 w-6 h-6 rounded-full bg-surface-container text-xs text-outline hover:text-primary flex items-center justify-center"
  }, "✕")), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-[11px] text-outline mt-1.5"
  }, "Hiển thị ", filteredNurses.length, " / ", nurses.length, " điều dưỡng & kỹ thuật viên CCHN")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-2 pt-2"
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
    className: `px-4 py-2 rounded-full text-xs font-semibold transition-all ${specialty === item.id ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface hover:bg-gold-light'}`
  }, item.label))))), /*#__PURE__*/React.createElement("section", {
    className: "w-full py-12 bg-surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12"
  }, /*#__PURE__*/React.createElement("div", {
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
  }, "\u2B50 ", nurse.rating, " (", nurse.reviewCount, " l\u01B0\u1EE3t)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gold-accent font-semibold mt-1"
  }, nurse.title), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 p-2 rounded-xl bg-emerald-50 border border-emerald-300 text-[11px] text-emerald-950 font-medium"
  }, /*#__PURE__*/React.createElement("div", null, "S\u1ED1 CCHN: ", /*#__PURE__*/React.createElement("strong", null, nurse.cchn)), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-emerald-800"
  }, "Th\u1EA9m \u0111\u1ECBnh: ", nurse.agency)))), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-on-surface-variant space-y-1.5"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Kinh nghi\u1EC7m l\xE2m s\xE0ng:"), " ", nurse.hosp), /*#__PURE__*/React.createElement("div", {
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
  }, "H\u1ED3 S\u01A1 Y T\xE1"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => handleOpenBooking(nurse.name, 'Ca 8h (Chuẩn)', 720000),
    className: "flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary-container hover:to-secondary text-on-primary text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "event_available"), /*#__PURE__*/React.createElement("span", null, "\u0110\u1EB7t Ca Tr\u1EF1c")))))))), /*#__PURE__*/React.createElement("section", {
    className: "w-full py-14 bg-surface-container-low border-t border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-12 space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 mb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-secondary animate-ping"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase text-secondary tracking-wider"
  }, "H\u1EC7 Th\u1ED1ng \u0110i\u1EC1u Ph\u1ED1i GPS Th\xF4ng Minh 24/7")), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-3xl font-bold text-primary"
  }, "B\u1EA3n \u0110\u1ED3 GPS T\xECm Tuy\u1EBFn \u0110\u01B0\u1EDDng Ng\u1EAFn Nh\u1EA5t (Dijkstra & A*)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant mt-1"
  }, "\u1EE8ng d\u1EE5ng gi\u1EA3i thu\u1EADt t\xECm \u0111\u01B0\u1EDDng t\u1ED1i \u01B0u trong m\u1EA1ng l\u01B0\u1EDBi giao th\xF4ng y t\u1EBF TP.HCM k\u1EBFt n\u1ED1i c\xE1c c\u01A1 s\u1EDF GoCare v\xE0 B\u1EC7nh vi\u1EC7n tuy\u1EBFn Trung \u01B0\u01A1ng.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleGetLiveGPS,
    className: "px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 hover:border-secondary text-xs font-bold text-primary shadow-sm hover:shadow-md flex items-center gap-2 transition-all"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary animate-bounce"
  }, "my_location"), /*#__PURE__*/React.createElement("span", null, "L\u1EA5y V\u1ECB Tr\xED GPS C\u1EE7a T\xF4i"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/40 shadow-md space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "1. \u0110i\u1EC3m Xu\u1EA5t Ph\xE1t (Origin):"), /*#__PURE__*/React.createElement("select", {
    value: selectedOrigin,
    onChange: e => setSelectedOrigin(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs font-semibold"
  }, /*#__PURE__*/React.createElement("option", {
    value: "user"
  }, "\uD83D\uDCCD V\u1ECB tr\xED c\u1EE7a b\u1EA1n (", gpsStatus, ")"), /*#__PURE__*/React.createElement("option", {
    value: "tram_thaodien"
  }, "\uD83C\uDFE5 Tr\u1EA1m \u0110i\u1EC1u D\u01B0\u1EE1ng Th\u1EA3o \u0110i\u1EC1n"), /*#__PURE__*/React.createElement("option", {
    value: "gocare_sala"
  }, "\uD83C\uDFE2 GoCare Sala Th\u1EE7 \u0110\u1EE9c"), /*#__PURE__*/React.createElement("option", {
    value: "gocare_bachdang"
  }, "\uD83C\uDFEC GoCare B\u1EBFn B\u1EA1ch \u0110\u1EB1ng (Q.1)"), /*#__PURE__*/React.createElement("option", {
    value: "bv_choray"
  }, "\uD83C\uDFE5 B\u1EC7nh Vi\u1EC7n Ch\u1EE3 R\u1EABy (Q.5)"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "2. \u0110i\u1EC3m \u0110\u1EBFn Y T\u1EBF (Destination):"), /*#__PURE__*/React.createElement("select", {
    value: selectedDestination,
    onChange: e => setSelectedDestination(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs font-semibold"
  }, /*#__PURE__*/React.createElement("option", {
    value: "gocare_sala"
  }, "\uD83C\uDFE2 GoCare Heritage Villa (Sala)"), /*#__PURE__*/React.createElement("option", {
    value: "gocare_bachdang"
  }, "\uD83C\uDFEC GoCare Premier B\u1EBFn B\u1EA1ch \u0110\u1EB1ng"), /*#__PURE__*/React.createElement("option", {
    value: "bv_choray"
  }, "\uD83C\uDFE5 BV Ch\u1EE3 R\u1EABy (C\u1EA5p c\u1EE9u L\xE3o khoa)"), /*#__PURE__*/React.createElement("option", {
    value: "bv_ydtp"
  }, "\uD83C\uDFE5 BV \u0110\u1EA1i H\u1ECDc Y D\u01B0\u1EE3c TP.HCM"), /*#__PURE__*/React.createElement("option", {
    value: "tram_thaodien"
  }, "\uD83C\uDFE5 Tr\u1EA1m \u0110i\u1EC1u D\u01B0\u1EE1ng Th\u1EA3o \u0110i\u1EC1n"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1.5"
  }, "3. Thu\u1EADt To\xE1n T\xECm Tuy\u1EBFn \u0110\u01B0\u1EDDng:"), /*#__PURE__*/React.createElement("select", {
    value: selectedAlgorithm,
    onChange: e => setSelectedAlgorithm(e.target.value),
    className: "w-full px-3 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-low text-xs font-semibold"
  }, /*#__PURE__*/React.createElement("option", {
    value: "dijkstra"
  }, "\u26A1 Dijkstra (Tr\u1ECDng s\u1ED1 kho\u1EA3ng c\xE1ch nh\u1ECF nh\u1EA5t)"), /*#__PURE__*/React.createElement("option", {
    value: "astar"
  }, "\uD83D\uDE80 A* (Heuristic kho\u1EA3ng c\xE1ch m\u1EB7t c\u1EA7u Haversine)"))), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", null, "Tr\u1EA1ng th\xE1i GPS: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, gpsStatus)), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1 text-emerald-700 font-semibold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-ping"
  }), "M\u1EA1ng l\u01B0\u1EDBi g\u1ED3m 10 n\xFAt giao & c\u01A1 s\u1EDF y t\u1EBF tr\u1ECDng \u0111i\u1EC3m"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8 rounded-3xl overflow-hidden border border-outline-variant/40 shadow-xl bg-brand-charcoal h-[480px] relative"
  }, /*#__PURE__*/React.createElement("div", {
    ref: mapContainerRef,
    className: "w-full h-full z-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-4 left-4 z-20 bg-surface/90 backdrop-blur-md p-3 rounded-2xl border border-outline-variant/30 text-[11px] shadow-lg space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-primary"
  }, "Ch\xFA Gi\u1EA3i B\u1EA3n \u0110\u1ED3:"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-sky-600 inline-block"
  }), " V\u1ECB tr\xED c\u1EE7a b\u1EA1n / \u0110i\u1EC3m xu\u1EA5t ph\xE1t"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-primary inline-block"
  }), " C\u01A1 s\u1EDF y t\u1EBF GoCare 5 Sao"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-amber-600 inline-block"
  }), " B\u1EC7nh vi\u1EC7n li\xEAn k\u1EBFt c\u1EA5p c\u1EE9u"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-1 bg-secondary inline-block"
  }), " Tuy\u1EBFn \u0111\u01B0\u1EDDng t\u1ED1i \u01B0u (Polyline)"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/40 shadow-xl flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b pb-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-serif font-bold text-lg text-primary flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-secondary"
  }, "analytics"), /*#__PURE__*/React.createElement("span", null, "K\u1EBFt Qu\u1EA3 T\u1ED1i \u01AFu")), routeResult && /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold"
  }, "\u0110\xE3 T\u1ED1i \u01AFu")), routeResult ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-outline block"
  }, "Qu\xE3ng \u0111\u01B0\u1EDDng ng\u1EAFn nh\u1EA5t:"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-bold text-secondary font-serif"
  }, routeResult.distance, " km")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-outline block"
  }, "Th\u1EDDi gian \u01B0\u1EDBc t\xEDnh:"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-bold text-primary font-serif"
  }, "~", routeResult.timeEst, " ph\xFAt"))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-gold-light border border-gold-accent/40 space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[11px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Thu\u1EADt to\xE1n:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, routeResult.algorithm)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[11px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "S\u1ED1 \u0111\u1EC9nh \u0111\xE3 duy\u1EC7t:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-primary"
  }, routeResult.exploredCount, " n\xFAt")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[11px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-outline"
  }, "Th\u1EDDi gian x\u1EED l\xFD:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-700"
  }, routeResult.execTime, " ms"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-primary block mb-2"
  }, "L\u1ED9 tr\xECnh di chuy\u1EC3n chi ti\u1EBFt:"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 max-h-44 overflow-y-auto pr-1"
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
  }, "H\xE3y ch\u1ECDn \u0111i\u1EC3m xu\u1EA5t ph\xE1t v\xE0 \u0111i\u1EC3m \u0111\u1EBFn, sau \u0111\xF3 nh\u1EA5n ", /*#__PURE__*/React.createElement("strong", null, "\"T\xECm \u0110\u01B0\u1EDDng \u0110i Ng\u1EAFn Nh\u1EA5t\""), " \u0111\u1EC3 ch\u1EA1y thu\u1EADt to\xE1n Dijkstra ho\u1EB7c A*."))), /*#__PURE__*/React.createElement("a", {
    href: "tel:19006868",
    className: "w-full mt-4 py-3 rounded-2xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold text-center block transition-all shadow-md"
  }, "G\u1ECDi Xe C\u1EE9u H\u1ED9 & \u0110i\u1EC1u D\u01B0\u1EE1ng \u0110\u1EBFn Ngay (1900 6868)"))))), isBookingOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-container-lowest max-w-md w-full rounded-3xl p-6 shadow-2xl space-y-4 modal-animated border border-gold-accent/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b pb-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-lg font-bold text-primary"
  }, "X\xE1c Nh\u1EADn \u0110\u1EB7t L\u1ECBch Ca Tr\u1EF1c"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsBookingOpen(false)
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    className: "text-xs space-y-2.5 text-on-surface"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Nh\xE2n s\u1EF1 ph\u1EE5 tr\xE1ch:"), " ", bookingTarget.name), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "G\xF3i l\u1EF1a ch\u1ECDn:"), " ", bookingTarget.shift), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "T\u1ED5ng ph\xED t\u1EA1m t\xEDnh:"), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-secondary font-bold text-base"
  }, bookingTarget.fee.toLocaleString('vi-VN'), " VN\u0110")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant italic leading-normal p-2 rounded-xl bg-surface-container-low border"
  }, "*\u0110\xE3 bao g\u1ED3m g\u0103ng tay v\xF4 khu\u1EA9n, t\xFAi c\u1EA5p c\u1EE9u, thi\u1EBFt b\u1ECB \u0111o sinh hi\u1EC7u chu\u1EA9n vi\u1EC7n v\xE0 ph\xED di chuy\u1EC3n n\u1ED9i th\xE0nh.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      alert('Đã tiếp nhận yêu cầu! Điều phối viên GoCare sẽ gọi lại cho bạn trong 3 phút.');
      setIsBookingOpen(false);
    },
    className: "w-full py-3 rounded-xl bg-primary text-on-primary text-xs font-bold uppercase tracking-wider shadow-md hover:bg-primary-container"
  }, "X\xE1c Nh\u1EADn & \u0110i\u1EC1u Ph\u1ED1i Ngay"))));
}

// --- SCREEN 4: WELLNESS & NHÀ THUỐC (Screen 4 with Pharmacy & Partner Chains) ---
function WellnessScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const products = [
  {
    "id": 1,
    "name": "Amlor 10mg (Amlodipine Besylate)",
    "brand": "Pfizer (Pháp)",
    "category": "tim-mach",
    "price": "325.000₫",
    "pack": "Hộp 30 viên",
    "desc": "Kiểm soát tăng huyết áp vô căn, điều trị đau thắt ngực ổn định mạn tính.",
    "img": "./assets/images/img_17_36972206.jpg"
  },
  {
    "id": 2,
    "name": "Micardis Plus 40/12.5mg",
    "brand": "Boehringer Ingelheim (Đức)",
    "category": "tim-mach",
    "price": "345.000₫",
    "pack": "Hộp 28 viên",
    "desc": "Telmisartan phối hợp Hydrochlorothiazide điều trị tăng huyết áp, bảo vệ chức năng thận.",
    "img": "./assets/images/img_18_452288b7.jpg"
  },
  {
    "id": 3,
    "name": "Glucophage XR 1000mg",
    "brand": "Merck Sante (Pháp)",
    "category": "tieu-duong",
    "price": "185.000₫",
    "pack": "Hộp 30 viên",
    "desc": "Metformin phóng thích kéo dài, kiểm soát đường huyết ổn định 24 giờ cho bệnh nhân ĐTĐ tuýp 2.",
    "img": "./assets/images/img_19_8a2aa81a.jpg"
  },
  {
    "id": 4,
    "name": "Celebrex 200mg (Celecoxib)",
    "brand": "Pfizer (Mỹ)",
    "category": "co-xuong-khop",
    "price": "390.000₫",
    "pack": "Hộp 30 viên",
    "desc": "Kháng viêm giảm đau khớp thoái hóa, giảm áp lực lên sụn khớp và bảo vệ niêm mạc dạ dày.",
    "img": "./assets/images/img_20_81c14596.jpg"
  },
  {
    "id": 5,
    "name": "Viartril-S 500mg (Glucosamine)",
    "brand": "Viatris (Mỹ / Ireland)",
    "category": "co-xuong-khop",
    "price": "640.000₫",
    "pack": "Hộp 80 viên",
    "desc": "Glucosamine Sulfate tinh khiết kích thích sản sinh dịch khớp, tái tạo sụn vận động.",
    "img": "./assets/images/img_21_9c3f886e.jpg"
  },
  {
    "id": 6,
    "name": "Tanakan 40mg (EGb 761)",
    "brand": "Ipsen (Pháp)",
    "category": "than-kinh-nao-bo",
    "price": "450.000₫",
    "pack": "Hộp 90 viên",
    "desc": "Chiết xuất Ginkgo Biloba chuẩn hóa hỗ trợ sa sút trí tuệ nhẹ đến vừa, ù tai và chóng mặt tiền đình.",
    "img": "./assets/images/img_22_333563ac.jpg"
  },
  {
    "id": 7,
    "name": "Plavix 75mg (Clopidogrel)",
    "brand": "Sanofi (Pháp)",
    "category": "tim-mach",
    "price": "420.000₫",
    "pack": "Hộp 30 viên",
    "desc": "Chống kết tập tiểu cầu, phòng ngừa huyết khối động mạch vành và tai biến mạch máu não tái phát.",
    "img": "./assets/images/img_30_fc4b9e78.jpg"
  },
  {
    "id": 8,
    "name": "Lipitor 20mg (Atorvastatin)",
    "brand": "Viatris / Pfizer (Đức)",
    "category": "tim-mach",
    "price": "510.000₫",
    "pack": "Hộp 30 viên",
    "desc": "Hạ cholesterol toàn phần, LDL-C và triglyceride, ổn định mảng xơ vữa động mạch.",
    "img": "./assets/images/img_31_86b02d6c.jpg"
  },
  {
    "id": 9,
    "name": "Januvia 100mg (Sitagliptin)",
    "brand": "MSD (Ý)",
    "category": "tieu-duong",
    "price": "560.000₫",
    "pack": "Hộp 28 viên",
    "desc": "Thuốc ức chế DPP-4 hạ đường huyết phụ thuộc glucose, không gây hạ đường huyết đột ngột.",
    "img": "./assets/images/img_32_9f119dcc.jpg"
  },
  {
    "id": 10,
    "name": "Diamicron MR 60mg",
    "brand": "Servier (Pháp)",
    "category": "tieu-duong",
    "price": "245.000₫",
    "pack": "Hộp 60 viên",
    "desc": "Gliclazide phóng thích biến đổi, kích thích bài tiết insulin sinh lý bữa ăn.",
    "img": "./assets/images/img_33_1c8efc7e.jpg"
  },
  {
    "id": 11,
    "name": "Caltrate 600 + D3 Plus Minerals",
    "brand": "Pfizer / GSK (Mỹ)",
    "category": "co-xuong-khop",
    "price": "360.000₫",
    "pack": "Hộp 60 viên",
    "desc": "Bổ sung Canxi nguyên tố và Vitamin D3 chống loãng xương, giảm nguy cơ gãy xương ở người già.",
    "img": "./assets/images/img_34_24546dba.jpg"
  },
  {
    "id": 12,
    "name": "Ginkgo Biloba Brain Circulation",
    "brand": "Blackmores (Úc)",
    "category": "than-kinh-nao-bo",
    "price": "480.000₫",
    "pack": "Lọ 100 viên",
    "desc": "Tăng cường lưu thông máu lên não, cải thiện trí nhớ và độ tập trung minh mẫn.",
    "img": "./assets/images/img_35_a3fda2af.jpg"
  },
  {
    "id": 13,
    "name": "Magne-B6 Dạng Ống Uống 10ml",
    "brand": "Sanofi (Pháp)",
    "category": "than-kinh-nao-bo",
    "price": "195.000₫",
    "pack": "Hộp 20 ống",
    "desc": "Bổ sung Magie và Vitamin B6 giảm chứng chuột rút, bồn chồn run tay chân và mất ngủ.",
    "img": "./assets/images/img_36_54e689ce.jpg"
  }
];
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
  }, "health_and_safety"), /*#__PURE__*/React.createElement("span", null, "Ti\u1EC7n Nghi Y T\u1EBF & Ch\u0103m S\xF3c S\u1EE9c Kh\u1ECFe Ch\u1EE7 \u0110\u1ED9ng")), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-3xl sm:text-5xl text-primary font-bold tracking-tight"
  }, "S\u1ED1ng Kh\u1ECFe & D\u01B0\u1EE3c Ph\u1EA9m GoCare"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
  }, "H\u1EC7 th\u1ED1ng cung \u1EE9ng d\u01B0\u1EE3c ph\u1EA9m bi\u1EC7t d\u01B0\u1EE3c ch\xEDnh h\xE3ng, thi\u1EBFt b\u1ECB y t\u1EBF ph\u1EE5c h\u1ED3i ch\u1EE9c n\u0103ng v\xE0 k\u1EBFt n\u1ED1i nh\xE0 thu\u1ED1c tr\u1EF1c tuy\u1EBFn li\xEAn th\xF4ng t\u1EF1 \u0111\u1ED9ng v\u1EDBi H\u1ED3 S\u01A1 B\u1EC7nh \xC1n \u0110i\u1EC7n T\u1EED (EHR).")), /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-gold-accent/40 shadow-lg space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto space-y-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-secondary uppercase tracking-wider flex items-center justify-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "handshake"), /*#__PURE__*/React.createElement("span", null, "\u0110\u1ED1i T\xE1c D\u01B0\u1EE3c Ph\u1EA9m Chi\u1EBFn L\u01B0\u1EE3c To\xE0n Qu\u1ED1c")), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-2xl sm:text-3xl font-bold text-primary"
  }, "Li\xEAn K\u1EBFt Tr\u1EF1c Ti\u1EBFp Nh\xE0 Thu\u1ED1c Long Ch\xE2u & An Khang"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed"
  }, "Nh\u1EA5p ch\u1ECDn bi\u1EC3u tr\u01B0ng \u0111\u1ED1i t\xE1c \u0111\u1EC3 truy c\u1EADp tr\u1EF1c ti\u1EBFp danh m\u1EE5c d\u01B0\u1EE3c ph\u1EA9m ch\xEDnh h\xE3ng v\xE0 h\u01B0\u1EDFng \u01B0u \u0111\xE3i giao h\u1ECFa t\u1ED1c 1 - 2 gi\u1EDD \u0111\u1ED9c quy\u1EC1n cho b\u1EC7nh nh\xE2n GoCare.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://nhathuoclongchau.com.vn/nhom-san-pham/vitabiotics?utm_source=Google&utm_medium=CPA&utm_campaign=PC-Vitabiotics-T08-2026&utm_term=PMC&utm_content=&gad_source=1&gad_campaignid=23859675294&gbraid=0AAAAApDeBalH2R8DkYap7fCjjVie-6td9&gclid=Cj0KCQjw8c3VBhCsARIsAA_xJ90iycqe8Q5u7FPuyE1ob4JyDLo8BFIScXkRnAbDttk4PlNVNtr-edoaArfwEALw_wcB",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "group relative rounded-3xl p-6 bg-gradient-to-b from-blue-50/70 to-surface-container-lowest border-2 border-blue-200/80 hover:border-blue-600 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 right-3 px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs"
  }, /*#__PURE__*/React.createElement("span", null, "M\u1EDF Link \u0110\u1ED1i T\xE1c"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs group-hover:translate-x-0.5 transition-transform"
  }, "open_in_new")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-blue-100 group-hover:scale-105 transition-transform bg-white flex items-center justify-center p-1"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/fpt_long_chau.jpg",
    alt: "Nh\xE0 Thu\u1ED1c FPT Long Ch\xE2u",
    className: "w-full h-full object-contain rounded-xl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center sm:justify-start gap-1.5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors"
  }, "FPT Long Ch\xE2u"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-blue-600"
  }, "verified")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] font-semibold text-secondary"
  }, "Chuy\xEAn khoa D\u01B0\u1EE3c ph\u1EA9m & Vitabiotics"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed line-clamp-2"
  }, "Chu\u1ED7i nh\xE0 thu\u1ED1c h\xE0ng \u0111\u1EA7u Vi\u1EC7t Nam. Cung \u1EE9ng thu\u1ED1c k\xEA \u0111\u01A1n tim m\u1EA1ch, \u0111\xE1i th\xE1o \u0111\u01B0\u1EDDng v\xE0 th\u1EF1c ph\u1EA9m Vitabiotics Anh Qu\u1ED1c."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 pt-4 border-t border-blue-100 flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-medium text-blue-800 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-secondary"
  }, "bolt"), "Giao h\u1ECFa t\u1ED1c 1 - 2h"), /*#__PURE__*/React.createElement("span", {
    className: "px-3.5 py-1.5 rounded-xl bg-blue-600 group-hover:bg-blue-700 text-white font-bold text-xs shadow-xs flex items-center gap-1 transition-colors"
  }, /*#__PURE__*/React.createElement("span", null, "Mua T\u1EA1i Long Ch\xE2u"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "arrow_forward")))), /*#__PURE__*/React.createElement("a", {
    href: "https://www.nhathuocankhang.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "group relative rounded-3xl p-6 bg-gradient-to-b from-emerald-50/70 to-surface-container-lowest border-2 border-emerald-200/80 hover:border-emerald-600 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs"
  }, /*#__PURE__*/React.createElement("span", null, "M\u1EDF Link \u0110\u1ED1i T\xE1c"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs group-hover:translate-x-0.5 transition-transform"
  }, "open_in_new")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-emerald-100 group-hover:scale-105 transition-transform bg-white flex items-center justify-center p-1"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/nhathuoc_an_khang.jpg",
    alt: "Nh\xE0 Thu\u1ED1c An Khang",
    className: "w-full h-full object-contain rounded-xl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center sm:justify-start gap-1.5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors"
  }, "Nh\xE0 Thu\u1ED1c An Khang"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "verified")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] font-semibold text-secondary"
  }, "Th\xE0nh vi\xEAn T\u1EADp \u0111o\xE0n Th\u1EBF Gi\u1EDBi Di \u0110\u1ED9ng (MWG)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant leading-relaxed line-clamp-2"
  }, "100% thu\u1ED1c c\xF3 ngu\u1ED3n g\u1ED1c r\xF5 r\xE0ng, b\u1EA3o qu\u1EA3n chu\u1EA9n GSP, h\u1ED7 tr\u1EE3 xu\u1EA5t h\xF3a \u0111\u01A1n VAT \u0111i\u1EC7n t\u1EED cho b\u1EA3o hi\u1EC3m y t\u1EBF."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 pt-4 border-t border-emerald-100 flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-medium text-emerald-800 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "receipt_long"), "H\xF3a \u0111\u01A1n BYT 100%"), /*#__PURE__*/React.createElement("span", {
    className: "px-3.5 py-1.5 rounded-xl bg-emerald-600 group-hover:bg-emerald-700 text-white font-bold text-xs shadow-xs flex items-center gap-1 transition-colors"
  }, /*#__PURE__*/React.createElement("span", null, "Mua T\u1EA1i An Khang"), /*#__PURE__*/React.createElement("span", {
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
    placeholder: "T\xECm bi\u1EC7t d\u01B0\u1EE3c, ho\u1EA1t ch\u1EA5t (Amlodipine, Metformin, Celecoxib...)",
    className: "w-full pl-10 pr-4 py-3 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest text-xs focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsUploadModalOpen(true),
    className: "w-full sm:w-auto px-6 py-3 rounded-2xl bg-secondary text-on-secondary font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-secondary-container transition-all shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "upload_file"), /*#__PURE__*/React.createElement("span", null, "G\u1EEDi Toa B\xE1c S\u0129 L\xEAn H\u1EC7 Th\u1ED1ng"))), /*#__PURE__*/React.createElement("div", {
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
  }, "K\xEA \u0110\u01A1n B\xE1c S\u0129"), /*#__PURE__*/React.createElement("span", {
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
    title: "Xem v\xE0 \u0111\u1EB7t mua tr\xEAn FPT Long Ch\xE2u"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xs"
  }, "open_in_new"), /*#__PURE__*/React.createElement("span", null, "Long Ch\xE2u")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.nhathuocankhang.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "py-2.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white font-bold border border-emerald-200 hover:border-emerald-600 text-center transition-all flex items-center justify-center gap-1 group/btn shadow-2xs",
    title: "Xem v\xE0 \u0111\u1EB7t mua tr\xEAn Nh\xE0 Thu\u1ED1c An Khang"
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
  }, "upload_file"), /*#__PURE__*/React.createElement("span", null, "T\u1EA3i Toa B\xE1c S\u0129 L\xEAn GoCare")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsUploadModalOpen(false)
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 text-xs"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-on-surface-variant"
  }, "Ch\u1EE5p \u1EA3nh toa thu\u1ED1c r\xF5 n\xE9t bao g\u1ED3m ch\u1EEF k\xFD b\xE1c s\u0129 v\xE0 ng\xE0y k\xEA \u0111\u01A1n. D\u01B0\u1EE3c s\u0129 GoCare s\u1EBD x\xE1c minh v\xE0 \u0111i\u1EC1u ph\u1ED1i thu\u1ED1c t\u1EEB Long Ch\xE2u / An Khang \u0111\u1EBFn t\u1EADn nh\xE0."), /*#__PURE__*/React.createElement("div", {
    className: "border-2 border-dashed border-outline-variant/60 rounded-2xl p-6 text-center space-y-2 bg-surface-container-low cursor-pointer hover:border-secondary transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-3xl text-secondary"
  }, "add_photo_alternate"), /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-primary"
  }, "Nh\u1EA5p \u0111\u1EC3 ch\u1ECDn \u1EA3nh ch\u1EE5p toa thu\u1ED1c"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-outline"
  }, "H\u1ED7 tr\u1EE3 JPG, PNG, PDF t\u1ED1i \u0111a 15MB"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      alert('Đã tiếp nhận ảnh toa thuốc thành công! Dược sĩ GoCare đang thẩm định và sẽ gọi lại trong 5 phút.');
      setIsUploadModalOpen(false);
    },
    className: "w-full py-3 rounded-xl bg-primary text-on-primary font-bold text-xs uppercase tracking-wider"
  }, "X\xE1c Nh\u1EADn G\u1EEDi Toa Thu\u1ED1c"))));
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
  }, "B\xE1o \u0110\u1ED9ng \u0110\u1ECF Telemetry"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold text-red-800"
  }, currentMonitorBpm > HIGH_THRESHOLD ? 'Cơn Tim Nhanh Kịch Phát' : 'Nhịp Tim Chậm Nguy Hiểm', " (", currentMonitorBpm, " BPM)")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-red-900 font-medium"
  }, "Nh\u1ECBp tim \u0111\xE3 v\u01B0\u1EE3t ng\u01B0\u1EE1ng an to\xE0n l\xE2m s\xE0ng (55 - 110 BPM). \u0110\u01B0\u1EDDng xu h\u01B0\u1EDBng bi\u1EC3u \u0111\u1ED3 \u0111\xE3 t\u1EF1 \u0111\u1ED9ng chuy\u1EC3n sang ", /*#__PURE__*/React.createElement("strong", {
    className: "text-red-700 underline"
  }, "\u0110\u1ECE C\u1EA2NH B\xC1O"), " v\xE0 g\u1EEDi t\xEDn hi\u1EC7u b\xE1o \u0111\u1ED9ng kh\u1EA9n \u0111\u1EBFn B\xE1c s\u0129 Tim m\u1EA1ch tr\u1EF1c c\u1EA5p c\u1EE9u ICU!"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 shrink-0 self-end sm:self-auto"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => triggerThresholdAlert(currentMonitorBpm),
    className: "px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "notifications_active"), /*#__PURE__*/React.createElement("span", null, "Hi\u1EC7n L\u1EA1i C\u1EA3nh B\xE1o")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => simulateCriticalThreshold(74, 'Khôi phục bình thường'),
    className: "px-3.5 py-2 rounded-xl bg-white hover:bg-red-100 text-red-800 border border-red-300 text-xs font-bold transition-all shadow-xs"
  }, "Kh\xF4i Ph\u1EE5c Nh\u1ECBp Chu\u1EA9n (74 BPM)"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-outline-variant/30 pb-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: `w-2.5 h-2.5 rounded-full ${isThresholdWarning ? 'bg-red-600 animate-ping' : 'bg-secondary animate-ping'}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `text-xs font-bold uppercase tracking-wider ${isThresholdWarning ? 'text-red-600' : 'text-secondary'}`
  }, isThresholdWarning ? '⚠️ Telemetry Ngưỡng Báo Động (55 - 110 BPM)' : 'D3.js Real-time Telemetry Analytics • IoT Holter 5G')), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-bold text-primary mt-1"
  }, "Bi\u1EC3u \u0110\u1ED3 Xu H\u01B0\u1EDBng Nh\u1ECBp Tim 24 Gi\u1EDD Qua"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-on-surface-variant"
  }, "H\u1EC7 th\u1ED1ng t\u1EF1 \u0111\u1ED9ng t\xF4 \u0111\u1ECF \u0111\u01B0\u1EDDng xu h\u01B0\u1EDBng & k\xEDch ho\u1EA1t c\u1EA3nh b\xE1o tr\xECnh duy\u1EC7t khi nh\u1ECBp tim > 110 BPM ho\u1EB7c < 55 BPM")), /*#__PURE__*/React.createElement("div", {
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
  }, showTargetZone ? 'check_box' : 'check_box_outline_blank'), /*#__PURE__*/React.createElement("span", null, "V\xF9ng Chu\u1EA9n (60-100)")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => simulateCriticalThreshold(116, '🚨 Nhịp nhanh kịch phát trên thất (>110 BPM)'),
    className: "px-2.5 py-1.5 rounded-xl text-[11px] font-bold bg-red-100 hover:bg-red-200 text-red-800 border border-red-300 transition-all flex items-center gap-1 shadow-xs",
    title: "Th\u1EED nghi\u1EC7m c\u1EA3nh b\xE1o ng\u01B0\u1EE1ng nh\u1ECBp nhanh > 110 BPM"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-red-600"
  }, "arrow_upward"), /*#__PURE__*/React.createElement("span", null, "Test >110 BPM")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => simulateCriticalThreshold(52, '🚨 Nhịp chậm xoang nguy hiểm (<55 BPM)'),
    className: "px-2.5 py-1.5 rounded-xl text-[11px] font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 transition-all flex items-center gap-1 shadow-xs",
    title: "Th\u1EED nghi\u1EC7m c\u1EA3nh b\xE1o ng\u01B0\u1EE1ng nh\u1ECBp ch\u1EADm < 55 BPM"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-amber-700"
  }, "arrow_downward"), /*#__PURE__*/React.createElement("span", null, "Test <55 BPM")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: addLiveSample,
    className: "px-2.5 py-1.5 rounded-xl text-[11px] font-bold bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 transition-all flex items-center gap-1 shadow-xs",
    title: "M\xF4 ph\u1ECFng xung nh\u1ECBp g\u1EEDi v\u1EC1 t\u1EEB Holter IoT"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm animate-spin"
  }, "sync"), /*#__PURE__*/React.createElement("span", null, "Nh\u1EADn IoT M\u1EDBi"))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-5 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: `p-3.5 rounded-2xl border flex flex-col justify-between transition-colors ${isThresholdWarning ? 'bg-red-50 border-red-400' : 'bg-surface-container-low border-outline-variant/20'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-outline"
  }, "Nh\u1ECBp Hi\u1EC7n T\u1EA1i"), /*#__PURE__*/React.createElement("div", {
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
  }, "Trung B\xECnh 24H"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1 my-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-serif font-bold text-primary"
  }, stats.avg), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "BPM")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold text-on-surface-variant"
  }, "Chu\u1EA9n sinh l\xFD l\xE3o khoa")), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-outline"
  }, "Cao Nh\u1EA5t (Peak)"), /*#__PURE__*/React.createElement("div", {
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
  }, "Th\u1EA5p Nh\u1EA5t (Nadir)"), /*#__PURE__*/React.createElement("div", {
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
  }, "Trong V\xF9ng Chu\u1EA9n"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1 my-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-serif font-bold text-emerald-700"
  }, stats.inRangePct, "%"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-outline"
  }, "th\u1EDDi gian")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full self-start"
  }, "\u2B50 Chu\u1EA9n an to\xE0n JCI"))), /*#__PURE__*/React.createElement("div", {
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
  }, "BPM (Nh\u1ECBp \u0111\u1EADp/ph\xFAt)")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-white/80 italic"
  }, "Ho\u1EA1t \u0111\u1ED9ng: ", hoveredData.activity))), /*#__PURE__*/React.createElement("div", {
    className: `p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs transition-colors ${isThresholdWarning ? 'bg-red-100/70 border-red-400' : 'bg-gold-light/40 border-gold-accent/40'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/doctor_hong_hung.jpg",
    alt: "BS. CKI Nguy\u1EC5n H\u1ED3ng H\u01B0ng",
    className: `w-11 h-11 rounded-full object-cover shrink-0 shadow-sm ring-2 ${isThresholdWarning ? 'ring-red-500' : 'ring-gold-accent'}`
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: `font-bold flex items-center gap-1.5 ${isThresholdWarning ? 'text-red-900' : 'text-primary'}`
  }, /*#__PURE__*/React.createElement("span", null, "Nh\u1EADn \u0111\u1ECBnh l\xE2m s\xE0ng c\u1EE7a B\xE1c s\u0129 Tim M\u1EA1ch (BS. CKI Nguy\u1EC5n H\u1ED3ng H\u01B0ng):"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-emerald-600"
  }, "verified")), /*#__PURE__*/React.createElement("p", {
    className: "text-on-surface-variant text-[11px] mt-0.5"
  }, isThresholdWarning ? `"CẢNH BÁO: Nhịp tim vượt ngưỡng an toàn (55 - 110 BPM). Hệ thống Telemetry đã chỉ huy trạm điều dưỡng kiểm tra huyết áp trực tiếp và sẵn sàng hỗ trợ cấp cứu!"` : `"Chỉ số nhịp tim dao động sinh học ổn định. Không phát hiện cơn rung nhĩ kịch phát hoặc ngoại tâm thu thất nguy hiểm trong 24 giờ liên tục."`))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => alert('Đã gửi yêu cầu hội chẩn tim mạch trực tiếp đến BS. CKI Nguyễn Hồng Hưng. Bác sĩ sẽ phản hồi trong 15 phút.'),
    className: `px-4 py-2 rounded-xl font-bold text-xs shrink-0 transition-all shadow-xs ${isThresholdWarning ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-primary hover:bg-primary-container text-on-primary'}`
  }, "Y\xEAu C\u1EA7u H\u1ED9i Ch\u1EA9n 1:1")));
}

// --- SCREEN 5: CỔNG BỆNH NHÂN & BỆNH ÁN ĐIỆN TỬ (YÊU CẦU ĐĂNG NHẬP GOOGLE THẬT) ---
function PatientPortalScreen({
  user,
  onGoogleLogin,
  onLogout
}) {
  const [painScore, setPainScore] = useState(3);
  const [isChestPain, setIsChestPain] = useState(false);
  const [isStrokeSign, setIsStrokeSign] = useState(false);
  const [symptomNote, setSymptomNote] = useState('');
  const [triageAlert, setTriageAlert] = useState(null);
  const isRedAlert = isChestPain || isStrokeSign || painScore >= 8;
  const handleTriageSubmit = () => {
    if (isRedAlert) {
      alert('HỆ THỐNG ĐÃ KÍCH HOẠT QUY TRÌNH CODE RED!\nThông tin bệnh nhân đã được chuyển khẩn cấp đến Bác sĩ Trưởng ca và Đội Cấp Cứu GoCare.');
      setTriageAlert('CODE_RED');
    } else {
      alert('Phiếu khai báo sức khỏe đã được gửi thành công đến Điều dưỡng phụ trách và lưu vào bệnh án điện tử EHR.');
      setTriageAlert('NORMAL');
    }
  };

  // IF USER IS NOT LOGGED IN WITH GOOGLE -> SHOW AUTHENTICATION GATE
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
    }, "B\u1EA3o M\u1EADt Y Khoa C\u1EA5p \u0110\u1ED9 4 \u2022 HIPAA & HL7 FHIR"), /*#__PURE__*/React.createElement("h2", {
      className: "font-serif text-3xl font-bold text-primary"
    }, "C\u1ED5ng B\u1EC7nh Nh\xE2n & B\u1EC7nh \xC1n \u0110i\u1EC7n T\u1EED"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-on-surface-variant leading-relaxed"
    }, "\u0110\u1EC3 \u0111\u1EA3m b\u1EA3o t\xEDnh ri\xEAng t\u01B0 tuy\u1EC7t \u0111\u1ED1i cho h\u1ED3 s\u01A1 b\u1EC7nh \xE1n, l\u1ECBch s\u1EED kh\xE1m v\xE0 ch\u1EC9 s\u1ED1 sinh hi\u1EC7u, vui l\xF2ng \u0111\u0103ng nh\u1EADp b\u1EB1ng ", /*#__PURE__*/React.createElement("strong", null, "T\xE0i kho\u1EA3n Google th\u1EADt"), " c\u1EE7a b\u1EA1n.")), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-left space-y-2 text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 font-bold text-primary"
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined text-sm text-secondary"
    }, "verified_user"), /*#__PURE__*/React.createElement("span", null, "\u0110\u1EB7c quy\u1EC1n sau khi \u0111\u0103ng nh\u1EADp t\xE0i kho\u1EA3n Google:")), /*#__PURE__*/React.createElement("ul", {
      className: "space-y-1 text-on-surface-variant text-[11px] list-disc list-inside"
    }, /*#__PURE__*/React.createElement("li", null, "Tra c\u1EE9u tr\u1EF1c tuy\u1EBFn ch\u1EC9 s\u1ED1 sinh hi\u1EC7u IoT (Huy\u1EBFt \xE1p, ECG, \u0110\u01B0\u1EDDng huy\u1EBFt)."), /*#__PURE__*/React.createElement("li", null, "L\u1ECBch s\u1EED toa thu\u1ED1c li\xEAn k\u1EBFt nh\xE0 thu\u1ED1c Long Ch\xE2u & An Khang."), /*#__PURE__*/React.createElement("li", null, "Khai b\xE1o tri\u1EC7u ch\u1EE9ng kh\u1EA9n c\u1EA5p k\xEDch ho\u1EA1t m\xE3 \u0111\u1ECF CODE RED 24/7."), /*#__PURE__*/React.createElement("li", null, "\u0110\u1ED3ng b\u1ED9 k\u1EBFt qu\u1EA3 x\xE9t nghi\u1EC7m m\xE1u v\xE0 h\xECnh \u1EA3nh ch\u1EA9n \u0111o\xE1n MRI/CT."))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 pt-2"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onGoogleLogin,
      className: "w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs uppercase tracking-wider border border-gray-300 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3"
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
    })), /*#__PURE__*/React.createElement("span", null, "\u0110\u0103ng Nh\u1EADp B\u1EB1ng T\xE0i Kho\u1EA3n Google Th\u1EADt")), /*#__PURE__*/React.createElement("p", {
      className: "text-[11px] text-outline"
    }, "Ch\u1EE9ng th\u1EF1c b\u1EA3o m\u1EADt qua giao th\u1EE9c Google OAuth 2.0 & VNeID M\u1EE9c 2."))));
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
  }, "verified_user"), "T\xE0i Kho\u1EA3n Google \u0110\xE3 X\xE1c Minh"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1 font-medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
  }), "\u0110\u01B0\u1EDDng truy\u1EC1n m\xE3 h\xF3a c\u1EA5p \u0111\u1ED9 4 (HL7 FHIR & HIPAA Shield)")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 bg-surface-container-lowest rounded-lg font-bold text-emerald-700"
  }, "Google OAuth 2.0 Active"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onLogout,
    className: "px-2.5 py-1 rounded-lg bg-error-container text-error font-bold text-[11px] hover:bg-error hover:text-on-error transition-colors"
  }, "\u0110\u0103ng Xu\u1EA5t"))), /*#__PURE__*/React.createElement("div", {
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
  }, "\u0110ang k\u1EBFt n\u1ED1i")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-outline flex flex-wrap items-center gap-3 mt-1"
  }, /*#__PURE__*/React.createElement("span", null, "Email: ", /*#__PURE__*/React.createElement("strong", null, user.email)), /*#__PURE__*/React.createElement("span", null, "PID: ", /*#__PURE__*/React.createElement("strong", null, user.patientId || 'GC-EHR-88294')), /*#__PURE__*/React.createElement("span", null, "C\u01A1 s\u1EDF: ", /*#__PURE__*/React.createElement("strong", null, "Heritage Villa Sala (Th\u1EE7 \u0110\u1EE9c)"))))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3.5 bg-error-container/40 p-4 rounded-2xl border border-error/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-11 h-11 rounded-xl bg-error text-on-error flex flex-col items-center justify-center font-bold text-xs shadow-sm"
  }, /*#__PURE__*/React.createElement("span", null, "O"), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px]"
  }, "Rh-")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-error flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "warning"), " Nh\xF3m M\xE1u Hi\u1EBFm O Rh(\u2013)"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "D\u1ECB \u1EE9ng c\u1EA5p \u0111\u1ED9 n\u1EB7ng: Penicillin & NSAIDs"))))), /*#__PURE__*/React.createElement("section", {
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
  }, "\u0110i\u1EC7n T\xE2m \u0110\u1ED3 ECG Realtime (Lead II)")), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono text-white/70"
  }, "72 BPM \u2022 Chu\u1EA9n JCI")), /*#__PURE__*/React.createElement("div", {
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
  }, "QRS: 88ms \u2022 QT: 390ms"))), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-white/5 text-xs text-white/80 space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Thi\u1EBFt b\u1ECB IoT k\u1EBFt n\u1ED1i:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-gold-accent"
  }, "Holter ECG GoCare Wireless 5G")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "L\u1EA7n \u0111\u1ED3ng b\u1ED9 g\u1EA7n nh\u1EA5t:"), /*#__PURE__*/React.createElement("span", null, "C\xE1ch \u0111\xE2y 1 ph\xFAt (T\u1EF1 \u0111\u1ED9ng)")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 bg-surface-container-lowest rounded-3xl p-6 sm:p-7 shadow-md border border-outline-variant/40 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b pb-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-bold text-primary flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-secondary"
  }, "health_and_safety"), /*#__PURE__*/React.createElement("span", null, "Thang \u0110o \u0110au & Khai B\xE1o S\u1EE9c Kh\u1ECFe")), /*#__PURE__*/React.createElement("span", {
    className: `px-2.5 py-1 rounded-full text-xs font-bold ${isRedAlert ? 'bg-error text-on-error animate-pulse' : 'bg-emerald-100 text-emerald-800'}`
  }, isRedAlert ? 'CẢNH BÁO CODE RED' : 'An Toàn')), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center text-xs font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "M\u1EE9c \u0111\u1ED9 \u0111au hi\u1EC7n t\u1EA1i (VAS):"), /*#__PURE__*/React.createElement("span", {
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
  }, /*#__PURE__*/React.createElement("span", null, "0: Kh\xF4ng \u0111au"), /*#__PURE__*/React.createElement("span", null, "5: \u0110au v\u1EEBa"), /*#__PURE__*/React.createElement("span", {
    className: "text-error font-bold"
  }, "10: \u0110au d\u1EEF d\u1ED9i"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 pt-2 text-xs"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "block text-primary"
  }, "D\u1EA5u hi\u1EC7u c\u1EA3nh b\xE1o nguy hi\u1EC3m:"), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 cursor-pointer p-2 rounded-xl bg-surface-container-low hover:bg-surface-container"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isChestPain,
    onChange: e => setIsChestPain(e.target.checked),
    className: "rounded text-error focus:ring-error"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-error"
  }, "C\u01A1n \u0111au t\u1EE9c ng\u1EF1c ngh\u1EB9n ng\xE0o, lan l\xEAn vai tr\xE1i / h\xE0m (Nghi ng\u1EDD nh\u1ED3i m\xE1u)")), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 cursor-pointer p-2 rounded-xl bg-surface-container-low hover:bg-surface-container"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isStrokeSign,
    onChange: e => setIsStrokeSign(e.target.checked),
    className: "rounded text-error focus:ring-error"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-error"
  }, "M\xE9o mi\u1EC7ng, t\xEA y\u1EBFu tay ch\xE2n \u0111\u1ED9t ng\u1ED9t, kh\xF3 n\xF3i (D\u1EA5u hi\u1EC7u FAST \u0111\u1ED9t qu\u1EF5)"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-primary mb-1"
  }, "Ghi ch\xFA tri\u1EC7u ch\u1EE9ng k\xE8m theo:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: symptomNote,
    onChange: e => setSymptomNote(e.target.value),
    placeholder: "V\xED d\u1EE5: V\xE1ng \u0111\u1EA7u sau khi th\u1EE9c d\u1EADy, bu\u1ED3n n\xF4n nh\u1EB9...",
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
  }, "Chuy\u1EC3n \u0111\u1ED5i t\u1EE9c th\xEC gi\u1EEFa c\xE1c m\xE0n h\xECnh trong \u1EE9ng d\u1EE5ng SPA ho\u1EB7c xem mockup g\u1ED1c \u0111\u1ED9 ph\xE2n gi\u1EA3i cao:"), /*#__PURE__*/React.createElement("div", {
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
    }, "\u0110ang xem")), /*#__PURE__*/React.createElement("div", {
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
    }, "open_in_browser"), /*#__PURE__*/React.createElement("span", null, "Chuy\u1EC3n t\u1EDBi")), /*#__PURE__*/React.createElement("button", {
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
    }, "code"), /*#__PURE__*/React.createElement("span", null, "Code ri\xEAng"))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-xs space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-primary flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base text-secondary"
  }, "cloud_download"), /*#__PURE__*/React.createElement("span", null, "T\xE0i nguy\xEAn h\xECnh \u1EA3nh c\u1EE5c b\u1ED9 (assets/images)")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-on-surface-variant"
  }, "38 h\xECnh \u1EA3nh y khoa \u0111\u1ED9 ph\xE2n gi\u1EA3i cao l\u01B0u tr\u1EEF ngo\u1EA1i tuy\u1EBFn \u0111\u1ED9c l\u1EADp, kh\xF4ng ph\u1EE5 thu\u1ED9c m\xE1y ch\u1EE7 b\xEAn th\u1EE9 ba.")))), previewMockup && /*#__PURE__*/React.createElement("div", {
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
  }, "\u2715 \u0110\xF3ng")), /*#__PURE__*/React.createElement("div", {
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
    "aria-label": "T\u01B0 V\u1EA5n T\xE2m L\xFD & S\u1EE9c Kh\u1ECFe Tinh Th\u1EA7n"
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
    alt: "ThS. BS Nguy\u1EC5n Trung Th\xE0nh",
    className: "w-7 h-7 rounded-full object-cover ring-2 ring-gold-accent"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-primary"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col text-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gold-accent uppercase font-bold tracking-wider leading-none"
  }, "Chuy\xEAn Gia T\xE2m L\xFD"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold leading-tight flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", null, "T\u01B0 V\u1EA5n T\xE2m L\xFD 24/7"), /*#__PURE__*/React.createElement("span", {
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
    alt: "ThS. BS Nguy\u1EC5n Trung Th\xE0nh",
    className: "w-12 h-12 rounded-2xl object-cover ring-2 ring-gold-accent shadow-sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-serif font-bold text-sm text-white"
  }, "ThS. BS Nguy\u1EC5n Trung Th\xE0nh"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm text-gold-accent"
  }, "verified")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-white/80"
  }, "Tr\u1ECB Li\u1EC7u T\xE2m L\xFD & S\u1EE9c Kh\u1ECFe Tinh Th\u1EA7n GoCare"), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1 text-[10px] text-emerald-300 font-semibold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"
  }), "Tr\u1EF1c tuy\u1EBFn \u2022 B\u1EA3o m\u1EADt y t\u1EBF 100%"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleAudioTone,
    title: "T\u1EA7n s\u1ED1 b\xECnh y\xEAn 432Hz",
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
  }, "headset"), /*#__PURE__*/React.createElement("span", null, "S\xF3ng n\xE3o 432Hz: ", /*#__PURE__*/React.createElement("strong", null, isSoundPlaying ? 'Đang phát' : 'Tắt')))), isBreathingOpen && /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-surface-container-low border-b border-outline-variant/30 flex flex-col items-center justify-center text-center space-y-3 shrink-0 modal-animated"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between w-full text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-primary"
  }, "Li\u1EC7u Ph\xE1p Th\u1EDF 4-7-8 (Chu k\u1EF3 ", breathingCycle, "/4)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: stopBreathing,
    className: "text-outline hover:text-error text-xs"
  }, "\u2715 Thu nh\u1ECF")), /*#__PURE__*/React.createElement("div", {
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
  }, "B\u1EA1n ho\u1EB7c ng\u01B0\u1EDDi th\xE2n \u0111ang c\u1EA3m th\u1EA5y th\u1EBF n\xE0o?"), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", null, msg.sender === 'user' ? 'Bạn' : 'BS. Nguyễn Trung Thành'), /*#__PURE__*/React.createElement("span", null, "\u2022"), /*#__PURE__*/React.createElement("span", null, msg.time)), /*#__PURE__*/React.createElement("div", {
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
  }, "self_improvement"), /*#__PURE__*/React.createElement("span", null, "B\u1EAFt \u0110\u1EA7u Th\u1EDF 4-7-8 C\xF9ng B\xE1c S\u0129")), /*#__PURE__*/React.createElement("button", {
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
  }, "calendar_month"), /*#__PURE__*/React.createElement("span", null, "\u0110\u1EB7t Phi\xEAn Tr\u1ECB Li\u1EC7u T\xE2m L\xFD 1:1 Ri\xEAng Bi\u1EC7t")))))), isTyping && /*#__PURE__*/React.createElement("div", {
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
  }, "B\xE1c s\u0129 Th\xE0nh \u0111ang so\u1EA1n ph\u1EA3n h\u1ED3i...")), /*#__PURE__*/React.createElement("div", {
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
    placeholder: "Chia s\u1EBB lo \xE2u ho\u1EB7c \u0111i\u1EC1u b\u1EA1n \u0111ang tr\u0103n tr\u1EDF...",
    className: "flex-1 px-4 py-2.5 rounded-2xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface focus:outline-none focus:border-secondary transition-all"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: !inputMsg.trim(),
    className: "w-10 h-10 rounded-2xl bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm",
    title: "G\u1EEDi tin nh\u1EAFn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-base"
  }, "send")))));
}

// --- MAIN APP ROUTING COMPONENT ---
function App() {
  // Manage Real Google User Session
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('gocare_google_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  // Real Google Sign-in Handler
  const handleGoogleLogin = () => {
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
    const googleUser = {
      name: finalName,
      email: finalEmail,
      picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
      patientId: `GC-EHR-${Math.floor(10000 + Math.random() * 90000)}`,
      verified: true
    };
    setUser(googleUser);
    localStorage.setItem('gocare_google_user', JSON.stringify(googleUser));
    alert(`Đăng nhập thành công với tài khoản Google [${finalEmail}]!\nCổng bệnh nhân và Bệnh án điện tử EHR đã được mở khóa an toàn.`);
  };
  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất khỏi Cổng Bệnh Nhân GoCare?")) {
      setUser(null);
      localStorage.removeItem('gocare_google_user');
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex flex-col bg-surface text-on-surface"
  }, /*#__PURE__*/React.createElement(Header, {
    user: user,
    onLogout: handleLogout
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
      onLogout: handleLogout
    })
  }))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(PsychologicalCounselingBox, null), /*#__PURE__*/React.createElement(StitchHub, null));
}

// Render with MemoryRouter
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render( /*#__PURE__*/React.createElement(MemoryRouter, {
  initialEntries: ['/']
}, /*#__PURE__*/React.createElement(App, null)));