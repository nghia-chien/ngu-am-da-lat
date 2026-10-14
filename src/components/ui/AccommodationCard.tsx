import React, { useState } from 'react';
import { AccommodationItem } from '../../types/content';
import { ArrowUpRight, PhoneCall, Check, Sparkles, ImageOff } from 'lucide-react';
import { Button } from './Button';
import './AccommodationCard.css';

interface AccommodationCardProps {
  item: AccommodationItem;
  variant?: 'staggered' | 'detailed';
  heightLevel?: 'tall' | 'medium' | 'short';
}

export const AccommodationCard: React.FC<AccommodationCardProps> = ({
  item,
  variant = 'detailed',
  heightLevel = 'tall',
}) => {
  const [imgError, setImgError] = useState(false);

  if (variant === 'staggered') {
    return (
      <a
        href="#contact"
        className={`deepseek-stagger-card deepseek-stagger-card--${heightLevel}`}
        id={`card-${item.id}`}
        title={`Xem chi tiết ${item.name}`}
      >
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

        {/* Gradient Overlay */}
        <div className="deepseek-stagger-card__overlay" />

        {/* Floating Bottom Pill matching DeepSeek mockup */}
        <div className="deepseek-stagger-card__pill">
          <div className="deepseek-stagger-card__pill-info">
            <span className="deepseek-stagger-card__title">{item.name}</span>
            {/* <span className="deepseek-stagger-card__sub">{item.subtitle}</span> */}
          </div>
          <div className="deepseek-stagger-card__circle-btn" aria-hidden="true">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </a>
    );
  }

  // Detailed standard card (used in tests or detailed views)
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
