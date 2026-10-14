import {
  AccommodationItem,
  GalleryItem,
  AboutFeature,
  ContactChannel,
  NavMenuItem,
} from '../types/content';

export const siteMetadata = {
  brandName: 'Ngủ Ấm Ở Đà Lạt',
  tagline: 'Booking Villa & Homestay — Trải nghiệm lưu trú ấm áp giữa lòng Đà Lạt',
  shortBio:
    'Nơi mang đến cho bạn cảm giác thân thuộc như trở về nhà giữa tiết trời se lạnh của Đà Lạt. Tận hưởng bếp lửa sân vườn bập bùng, góc chiếu phim thư giãn và không gian quây quần trọn vẹn bên người thân.',
  logoUrl: '/images/branding/logo.jpg',
  heroImage: '/images/hero/da-lat-homestay-garden-firepit.jpg',
  heroBadge: 'Không gian nghỉ dưỡng ấm cúng tại Đà Lạt',
  locationSummary: 'Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam',
};

export const navigationLinks: NavMenuItem[] = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Không gian nghỉ dưỡng', href: '#accommodation' },
  { label: 'Hình ảnh thực tế', href: '#gallery' },
  { label: 'Về Ngủ Ấm', href: '#about' },
  { label: 'Vị trí', href: '#location' },
  { label: 'Liên hệ', href: '#contact' },
];

export const accommodationList: AccommodationItem[] = [
  {
    id: 'phong-ngu-am-ap',
    name: 'Phòng Nghỉ Ấm Cúng',
    subtitle: 'Nội thất gỗ mộc & ánh sáng dịu êm',
    description:
      'Căn phòng được thiết kế với chất liệu gỗ tự nhiên ấm áp, chăn nệm êm ái xua tan cái lạnh đặc trưng của Đà Lạt, mang lại giấc ngủ sâu và thư thái.',
    image: '/images/rooms/phong-ngu-am-ap.jpg',
    imageAlt: 'Không gian phòng ngủ ốp gỗ ấm áp với giường nệm êm ái tại Ngủ Ấm Ở Đà Lạt',
    features: ['Giường đệm cao cấp êm ái', 'Ốp tường gỗ tự nhiên ấm áp', 'Thảm họa tiết êm chân', 'Không gian yên tĩnh, riêng tư'],
    note: 'Chi tiết sức chứa & giá lưu trú theo từng thời điểm được tư vấn trực tiếp',
  },
  {
    id: 'phong-chieu-phim-netflix',
    name: 'Phòng Chiếu Phim & Thư Giãn',
    subtitle: 'Màn chiếu sắc nét & ghế lười êm ái',
    description:
      'Góc sinh hoạt riêng tư trang bị màn chiếu lớn kết nối Netflix, đi kèm ghế tròn thư giãn để bạn cùng người thân thưởng thức những bộ phim yêu thích trong ngày mưa Đà Lạt.',
    image: '/images/rooms/phong-chieu-phim-netflix.jpg',
    imageAlt: 'Phòng chiếu phim Netflix với màn chiếu lớn và ghế thư giãn',
    features: ['Màn chiếu phim sắc nét', 'Ghế thư giãn nệm êm', 'Cửa sổ đón sáng tự nhiên', 'Không gian giải trí ấm cúng'],
    note: 'Trang bị sẵn trong không gian lưu trú',
  },
  {
    id: 'khong-gian-bep-an',
    name: 'Gian Bếp & Bàn Ăn Gia Đình',
    subtitle: 'Tiện nghi nấu nướng & quây quần bữa cơm ấm',
    description:
      'Khu vực bếp rộng rãi, sạch sẽ với đầy đủ tủ kệ, tủ lạnh, bồn rửa và bàn ăn tròn lớn, thích hợp cho các buổi tiệc nhỏ hoặc bữa cơm gia đình đầm ấm.',
    image: '/images/rooms/khong-gian-bep-an.jpg',
    imageAlt: 'Gian bếp và bàn ăn gia đình đầy đủ tiện nghi tại Ngủ Ấm',
    features: ['Bàn ăn tròn cho nhóm gia đình', 'Tủ bếp, tủ lạnh tiện lợi', 'Khu vực nấu ăn sạch sẽ, thoáng đãng', 'Bát đĩa & vật dụng cơ bản'],
    note: 'Phù hợp cho gia đình hoặc nhóm bạn tự chuẩn bị bữa ăn ấm cúng',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'san-vuon-hoang-hon',
    title: 'Sân Vườn Hoàng Hôn',
    category: 'exterior',
    image: '/images/gallery/san-vuon-hoang-hon.jpg',
    imageAlt: 'Toàn cảnh sân vườn nhìn từ trên cao lúc hoàng hôn buông xuống',
    description: 'Khu vườn phủ đầy hoa cỏ, chòi gỗ ngói cổ kính và góc ngồi ngắm nhìn phố núi lúc chiều tà.',
  },
  {
    id: 'bep-lua-chill-buoi-toi',
    title: 'Bếp Lửa Sân Vườn Đêm',
    category: 'exterior',
    image: '/images/gallery/bep-lua-chill-buoi-toi.jpg',
    imageAlt: 'Bếp lửa trại sân vườn thắp sáng lung linh cùng ghế gỗ thư giãn',
    description: 'Khoảnh khắc đốt lửa sưởi ấm, nhâm nhi tách trà nóng và trò chuyện dưới trời đêm se lạnh.',
  },
  {
    id: 'choi-go-bbq-da-lat',
    title: 'Chòi Gỗ BBQ Ngoài Trời',
    category: 'exterior',
    image: '/images/gallery/choi-go-bbq-da-lat.jpg',
    imageAlt: 'Chòi gỗ mái ngói với bàn dài BBQ và đèn lồng ấm cúng nhìn ra thung lũng thành phố',
    description: 'Bàn gỗ dài và bếp nướng BBQ, lý tưởng cho những bữa tiệc nướng đầm ấm nhìn về phía phố núi.',
  },
  {
    id: 'phong-ngu-go',
    title: 'Góc Phòng Ngủ Tĩnh Lặng',
    category: 'interior',
    image: '/images/gallery/phong-ngu-go.jpg',
    imageAlt: 'Chi tiết phòng ngủ với tông màu be ấm và tranh tường nghệ thuật',
    description: 'Từng chi tiết được chăm chút tỉ mỉ mang lại cảm giác dễ chịu, an yên như ở nhà.',
  },
  {
    id: 'rap-chieu-phim-mini',
    title: 'Góc Chiếu Phim Riêng Tư',
    category: 'interior',
    image: '/images/gallery/rap-chieu-phim-mini.jpg',
    imageAlt: 'Màn chiếu lớn cùng ghế tròn thư giãn trong không gian ấm áp',
    description: 'Tận hưởng trọn vẹn những thước phim yêu thích ngay trong không gian phòng nghỉ.',
  },
  {
    id: 'bep-am-cung',
    title: 'Khu Bếp Đầy Đủ Tiện Nghi',
    category: 'interior',
    image: '/images/gallery/bep-am-cung.jpg',
    imageAlt: 'Không gian bếp và bàn ăn gia đình thoáng đãng',
    description: 'Nơi chuẩn bị những món ăn nóng hổi trong tiết trời lành lạnh của cao nguyên.',
  },
];

export const aboutFeatures: AboutFeature[] = [
  {
    title: 'Bếp Lửa & Sân Vườn Se Lạnh',
    description:
      'Góc sân cỏ xanh mát với chậu lửa sưởi ấm, ghế nằm thư giãn và chòi gỗ ngắm hoàng hôn đặc trưng của phố núi Đà Lạt.',
  },
  {
    title: 'Không Gian Ấm Áp & Riêng Tư',
    description:
      'Phòng nghỉ với vật liệu gỗ mộc, chăn ấm, ánh đèn vàng dịu nhẹ và màn chiếu phim giải trí mang lại sự thư thái tuyệt đối.',
  },
  {
    title: 'Tiện Nghi Sinh Hoạt Đầy Đủ',
    description:
      'Khu vực bếp gia đình rộng rãi, bàn ăn lớn và góc tiệc nướng BBQ ngoài trời thích hợp cho cặp đôi, gia đình hoặc nhóm bạn thân.',
  },
  {
    title: 'Hỗ Trợ Tận Tình & Thân Thiện',
    description:
      'Đội ngũ chăm sóc luôn sẵn lòng hướng dẫn lịch trình, hỗ trợ thông tin lưu trú và đồng hành trong suốt chuyến đi của bạn.',
  },
];

export const contactChannels: ContactChannel[] = [
  {
    label: 'Hotline / Gọi Trực Tiếp',
    value: '0911 942 968',
    href: 'tel:0911942968',
    actionText: 'Gọi ngay',
    type: 'phone',
  },
  {
    label: 'Zalo Tư Vấn Nhanh',
    value: '0911 942 968',
    href: 'https://zalo.me/0911942968',
    actionText: 'Nhắn Zalo',
    isExternal: true,
    type: 'zalo',
  },
  {
    label: 'Trang Facebook Chính Thức',
    value: 'Ngủ Ấm Ở Đà Lạt - Booking Villa/Home',
    href: 'https://www.facebook.com/profile.php?id=61559001633103',
    actionText: 'Mở Facebook',
    isExternal: true,
    type: 'facebook',
  },
  {
    label: 'Chỉ Đường Google Maps',
    value: 'Đà Lạt, Lâm Đồng, Việt Nam',
    href: 'https://www.google.com/maps/search/+l,+%C4%90%C3%A0+L%E1%BA%A1t,+Vietnam,+66106/@11.928106,108.3977835,17070m/data=!3m2!1e3!4b1?entry=ttu',
    actionText: 'Xem bản đồ',
    isExternal: true,
    type: 'map',
  },
];
