import React, { useState } from 'react';
import { PhoneCall, ImageOff } from 'lucide-react';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="wireframe-about" aria-label="Về Ngủ Ấm Ở Đà Lạt">
      {/* 1. Thanh Ticker Bar chạy vô tận trên cùng theo đúng mockup */}
      <div className="wireframe-about__ticker" aria-hidden="true">
        <div className="wireframe-about__ticker-track">
          <span>ngủ ấm ở đà lạt ......</span>
          <span>ngủ ấm ở đà lạt ......</span>
          <span>ngủ ấm ở đà lạt ......</span>
          <span>ngủ ấm ở đà lạt ......</span>
          <span>ngủ ấm ở đà lạt ......</span>
          <span>ngủ ấm ở đà lạt ......</span>
          <span>ngủ ấm ở đà lạt ......</span>
          <span>ngủ ấm ở đà lạt ......</span>
        </div>
      </div>

      {/* 2. Nội dung chính 2 cột */}
      <div className="wireframe-about__main">
        <div className="wireframe-about__container">
          <div className="wireframe-about__grid">
            {/* Cột Trái: Tiêu đề, đoạn văn thụt lề, và cụm kích thích CTA */}
            <div className="wireframe-about__content">
              <h2 className="wireframe-about__title">
                Một Chốn Nghỉ Bình Yên,<br />
                Ấm Áp Từng Khoảnh Khắc.
              </h2>

              <div className="wireframe-about__body">
                <p className="wireframe-about__paragraph">
                  Đà Lạt đẹp nhất khi chiều buông với làn sương mờ và cái lạnh se sắt. &ldquo;Ngủ Ấm Ở Đà Lạt&rdquo;
                  ra đời để mang lại một không gian lưu trú chân thành — nơi bạn có thể gác lại những bộn bề phố thị
                  để sưởi ấm tâm hồn.
                </p>

                <p className="wireframe-about__paragraph">
                  Từ ánh lửa bập bùng giữa khu vườn xanh ngát, chiếc chăn len mềm mại trong phòng ngủ gỗ mộc, đến
                  bữa cơm quây quần ấm nóng trong gian bếp — mọi chi tiết đều được chăm chút để bạn có một kỳ nghỉ
                  thật dễ chịu và đáng nhớ bên những người thân thương.
                </p>

                {/* Cụm kích thích CTA nổi bật & thôi thúc hành động */}
                <div className="wireframe-about__cta-group">
                  <div className="wireframe-about__actions">
                    {/* Primary CTA: Pill tím phong cách mockup với hiệu ứng thu hút */}
                    <a
                      href="#contact"
                      className="wireframe-about__pill-btn wireframe-about__pill-btn--primary"
                      title="Đặt phòng ngay để nhận ưu đãi kỳ nghỉ ấm"
                    >
                      
                      <span className="wireframe-about__pill-text">Đặt phòng giữ chỗ ngay</span>
                    </a>

                    {/* Secondary CTA: Hotline kết nối trực tiếp */}
                    <a
                      href="tel:0911942968"
                      className="wireframe-about__pill-btn wireframe-about__pill-btn--secondary"
                      title="Gọi ngay để tư vấn phòng trống"
                    >
                      <PhoneCall size={15} />
                      <span>0911 942 968</span>
                    </a>
                  </div>

                  {/* Dòng kích thích chuyển đổi / an tâm giữ chỗ */}
                  
                </div>
              </div>
            </div>

            {/* Cột Phải: Ảnh chụp thực tế 1.jpg bo tròn góc lớn đúng mockup */}
            <div className="wireframe-about__visual">
              <div className="wireframe-about__img-card">
                {!imgError ? (
                  <img
                    src="/images/location/1.jpg"
                    alt="Ngôi nhà gỗ ấm cúng tại Ngủ Ấm Ở Đà Lạt trong ánh hoàng hôn"
                    className="wireframe-about__img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="wireframe-about__fallback">
                    <ImageOff size={40} />
                    <span>Hình ảnh đang được tải...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

