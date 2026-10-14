import React from 'react';
import { accommodationList } from '../../data/siteContent';
import { AccommodationCard } from '../ui/AccommodationCard';
import { Button } from '../ui/Button';
import './AccommodationSection.css';

export const AccommodationSection: React.FC = () => {
  const heightLevels: ('tall' | 'medium' | 'short')[] = ['tall', 'medium', 'short'];

  return (
    <section id="accommodation" className="wireframe-accommodation" aria-label="Không gian lưu trú">
      <div className="wireframe-accommodation__container">
        {/* Header Section: Tiêu đề ở giữa, nút hành động bên phải đặt thấp hơn */}
        <div className="wireframe-accommodation__header">
          <div className="wireframe-accommodation__header-center">
            <h2 className="wireframe-accommodation__title">Trải Nghiệm Nghỉ Dưỡng Ấm Áp</h2>
          </div>

          <div className="wireframe-accommodation__header-right">
            <Button href="#gallery" size="sm">
              Xem tất cả ảnh
            </Button>
          </div>
        </div>

        {/* 3 Thẻ Cards: Desktop xếp so le chân (Items End), Mobile xếp dọc 1 cột */}
        <div className="wireframe-accommodation__cards-container">
          {accommodationList.map((item, idx) => (
            <AccommodationCard
              key={item.id}
              item={item}
              variant="staggered"
              heightLevel={heightLevels[idx % heightLevels.length]}
              index={idx}
            />
          ))}
        </div>

        {/* Mobile CTA Button below cards matching wireframe */}
        <div className="wireframe-accommodation__mobile-btn-wrap">
          <Button href="#gallery" size="md">
            Xem tất cả ảnh
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
