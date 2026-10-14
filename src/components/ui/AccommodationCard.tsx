import React, { useState } from 'react';
import { AccommodationItem } from '../../types/content';
import { ArrowUpRight, PhoneCall, Check, Sparkles, ImageOff } from 'lucide-react';
import { Button } from './Button';
import './AccommodationCard.css';

interface AccommodationCardProps {
  item: AccommodationItem;
  variant?: 'staggered' | 'detailed';
  heightLevel?: 'tall' | 'medium' | 'short';
  index?: number;
}

export const AccommodationCard: React.FC<AccommodationCardProps> = ({
  item,
  variant = 'detailed',
  heightLevel = 'tall',
  index = 0,
}) => {
  const [imgError, setImgError] = useState(false);

  // Nhãn danh mục đánh số theo thứ tự giúp định vị không gian
  const categoryLabels = ['01 • Không Gian Ngủ', '02 • Rạp Phim Thư Giãn', '03 • Bếp Ăn Gia Đình'];
  const categoryBadge = categoryLabels[index % categoryLabels.length] || `0${index + 1} • Phòng Nghỉ`;

  // Số lượng đặc điểm hiển thị phù hợp với độ cao của từng card (600px / 500px / 400px)
  const featureLimit = heightLevel === 'tall' ? 3 : heightLevel === 'medium' ? 2 : 2;

  if (variant === 'staggered') {
    return (
      <article
        className={`deepseek-stagger-card deepseek-stagger-card--${heightLevel}`}
        id={`card-${item.id}`}
      >
        {/* Link overlay cho phép bấm vào bất cứ đâu trên card */}
        <a
          href="#contact"
          className="deepseek-stagger-card__link-overlay"
          aria-label={`Xem chi tiết và giữ chỗ ${item.name}`}
        />

        {/* Ảnh nền không gian */}
        {!imgError ? (
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            className="deepseek-stagger-card__img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="deepseek-stagger-card__fallback">
            <ImageOff size={28} />
          </div>
        )}

        {/* Lớp gradient overlay tăng tương phản cho chữ */}
        <div className="deepseek-stagger-card__overlay" />



        {/* Vùng nội dung phong phú ở nửa dưới card */}
        <div className="deepseek-stagger-card__content">
          <div className="deepseek-stagger-card__header">
            <h3 className="deepseek-stagger-card__title">{item.name}</h3>
            <p className="deepseek-stagger-card__sub">{item.subtitle}</p>
          </div>

          {/* Mô tả chi tiết cho card 600px và 500px để không bị trống */}

          {/* Tag đặc điểm tiện ích */}
          {item.features && item.features.length > 0 && (
            <div className="deepseek-stagger-card__features">
              {item.features.slice(0, featureLimit).map((feat, fIdx) => (
                <span key={fIdx} className="deepseek-stagger-card__feature-chip">
                  {feat}
                </span>
              ))}
            </div>
          )}

          {/* Nút hành động CTA chuyển đổi trực quan */}
          <div className="deepseek-stagger-card__footer">
            <div className="deepseek-stagger-card__cta-btn">
              <span>Đặt phòng giữ chỗ</span>
              <div className="deepseek-stagger-card__cta-icon-wrap" aria-hidden="true">
                <ArrowUpRight size={15} />
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Detailed standard card (được dùng trong tests hoặc trang chi tiết)
  return (
    <article className="accommodation-card" id={`card-${item.id}`}>
      <div className="accommodation-card__image-wrap">
        {!imgError ? (
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            className="accommodation-card__image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="accommodation-card__image-fallback">
            <ImageOff size={32} />
            <span>Hình ảnh đang được cập nhật</span>
          </div>
        )}
        <div className="accommodation-card__badge">
          <Sparkles size={14} />
          <span>Trải nghiệm thực tế</span>
        </div>
      </div>

      <div className="accommodation-card__content">
        <div className="accommodation-card__header">
          <h3 className="accommodation-card__title">{item.name}</h3>
          <p className="accommodation-card__subtitle">{item.subtitle}</p>
        </div>

        <p className="accommodation-card__description">{item.description}</p>

        <div className="accommodation-card__features">
          <h4 className="accommodation-card__features-title">Điểm nổi bật:</h4>
          <ul className="accommodation-card__feature-list">
            {item.features.map((feature, idx) => (
              <li key={idx} className="accommodation-card__feature-item">
                <Check size={16} className="accommodation-card__feature-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {item.note && (
          <div className="accommodation-card__note">
            <span className="accommodation-card__note-label">Lưu ý:</span> {item.note}
          </div>
        )}

        <div className="accommodation-card__footer">
          <Button href="#contact" variant="primary" size="md" className="accommodation-card__btn">
            <PhoneCall size={16} />
            <span>Liên hệ tư vấn phòng</span>
          </Button>
        </div>
      </div>
    </article>
  );
};
