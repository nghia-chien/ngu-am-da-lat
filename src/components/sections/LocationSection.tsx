import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import './LocationSection.css';

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=11.9653813,108.4415863';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="location-section" aria-label="Vị trí và bản đồ">
      {/* Ticker */}
      <div className="wireframe-about__ticker" aria-hidden="true">
        <div className="wireframe-about__ticker-track">
          <span>ngủ ấm ở đà lạt ......</span>
          <span>ngủ ấm ở đà lạt ......</span>
          <span>ngủ ấm ở đà lạt ......</span>
          <span>ngủ ấm ở đà lạt ......</span>
          <span>ngủ ấm ở đà lạt ......</span>
          <span>ngủ ấm ở đà lạt ......</span>
        </div>
      </div>

      {/* Nội dung chữ & nút CTA */}
      <div className="location-container">
        <div className="location-content">
          <h2 className="location-title">
            Nằm Giữa Không Gian<br />
            Bình Yên Của Đà Lạt
          </h2>

          <p className="location-desc">
            Tọa lạc tại khu vực yên tĩnh, thuận tiện di chuyển tới các điểm tham quan.
            Thức dậy trong tiếng chim hót, đón nắng sớm qua rặng thông và ngắm trọn thung lũng về đêm.
          </p>

          <div className="location-privacy">
            <ShieldCheck size={18} className="location-privacy__icon" />
            <span>
              <strong>Lưu ý:</strong> Địa chỉ chính xác được gửi qua Zalo/Điện thoại khi quý khách chốt lịch.
            </span>
          </div>

          <div className="location-actions">
            <Button
              href={GOOGLE_MAPS_LINK}
              isExternal
              size="md"
            >
              <span>Mở trên Google Maps</span>
              <ExternalLink size={15} />
            </Button>
            <Button href="tel:0911942968" size="md">
              <span>0911 942 968</span>
              <ExternalLink size={15} />
            </Button>
          </div>
        </div>
      </div>

      {/* Bản đồ Google Maps */}
      <div className="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d801.7174844984285!2d108.44158626950339!3d11.965381311233648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU3JzU1LjQiTiAxMDjCsDI2JzMyLjAiRQ!5e1!3m2!1svi!2s!4v1791951955545!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Bản đồ vị trí Ngủ Ấm Ở Đà Lạt"
          className="location-map__iframe"
        />
      </div>

      {/* Overlay - hiển thị trên desktop để tạo hiệu ứng chìm trái, rõ phải */}
      <div className="location-overlay" aria-hidden="true" />

      {/* Marker - hiển thị trên desktop */}
      <div className="location-marker" aria-label="Điểm định vị Ngủ Ấm Ở Đà Lạt">
        <span className="location-marker__pulse" />
        <span className="location-marker__dot" />
        <a
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="location-marker__card"
          title="Mở tọa độ trên Google Maps"
        >
          <span className="location-marker__title">
            <span className="location-marker__badge-icon">📍</span>
            Ngủ Ấm Ở Đà Lạt
          </span>
        </a>
      </div>
    </section>
  );
};

export default LocationSection;