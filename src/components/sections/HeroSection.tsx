import React, { useState, useEffect, useCallback } from 'react';
import { siteMetadata } from '../../data/siteContent';
import { Phone, ArrowDown, ImageOff, Sparkles, Flame, Sunset, ArrowUpRight } from 'lucide-react';
import './HeroSection.css';

const HERO_SLIDES = [
  { id: 'main', src: siteMetadata.heroImage || '/images/rooms/san-vuon-bep-lua.jpg',
    alt: 'Sân vườn bếp lửa hoàng hôn', tag: { icon: 'sunset', label: 'View đồi & Sân vườn' } },
  { id: 'phong-ngu', src: '/images/rooms/1.jpg',
    alt: 'Phòng ngủ ấm cúng', tag: { icon: 'flame', label: 'Phòng ngủ gỗ mộc' } },
  { id: 'rap-phim', src: '/images/rooms/2.jpg',
    alt: 'Rạp phim Netflix', tag: { icon: 'sparkles', label: 'Rạp phim Netflix' } },
  // { id: 'gian-bep', src: '/images/rooms/khong-gian-bep-an.jpg',
  //   alt: 'Gian bếp gia đình', tag: { icon: 'flame', label: 'Gian bếp gia đình' } },
];

const TAG_ICONS: Record<string, React.ReactNode> = {
  sunset: <Sunset size={14} />,
  flame: <Flame size={14} />,
  sparkles: <Sparkles size={14} />,
};

export const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = HERO_SLIDES[activeIndex];
  const thumbnails = HERO_SLIDES.filter((_, idx) => idx !== activeIndex);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleThumbClick = useCallback((id: string) => {
    const idx = HERO_SLIDES.findIndex((s) => s.id === id);
    if (idx !== -1) {
      setActiveIndex(idx);
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 6000);
    }
  }, []);

  const handleImgError = (id: string) =>
    setImgErrors((prev) => ({ ...prev, [id]: true }));

  return (
    <section id="hero" className="wireframe-hero" aria-label="Giới thiệu Ngủ Ấm Ở Đà Lạt">
      <div className="wireframe-hero__grid">
        {/* ==================== LEFT COLUMN ==================== */}
        <div className="wireframe-hero__left">

          <h1 className="wireframe-hero__title">
<br /><br />

            Về Đà Lạt, <br />
            <span className="wireframe-hero__title-accent">Ngủ Thật Ấm</span> &amp; Bình Yên.
          </h1>

          <div className="wireframe-hero__bottom">
            <p className="wireframe-hero__bottom-desc">
              Không gian tách biệt êm đềm, tiếng thông reo và ánh lửa sưởi ấm đêm se lạnh.
              Nơi bạn tìm thấy sự an nhiên trọn vẹn bên những người thân thương.
            </p>

            <div className="wireframe-hero__mobile-actions">
              <a href="#accommodation" className="wireframe-btn wireframe-btn--dark">
                <span>Khám phá</span>
                <ArrowDown size={15} />
              </a>
              <a href="#contact" className="wireframe-btn wireframe-btn--outline-dark">
                <Phone size={14} />
                <span>Liên hệ</span>
              </a>
            </div>
          </div>
        </div>

        {/* ==================== RIGHT COLUMN - BIG IMAGE ==================== */}
        <div
          className="wireframe-hero__visual"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 👇 Wrapper bo góc 70px + overflow hidden để clip ảnh */}
          <div className="wireframe-hero__visual-inner">
            {HERO_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className={`wireframe-hero__main-img-wrap ${
                  idx === activeIndex ? 'is-active' : ''
                }`}
              >
                {!imgErrors[slide.id] ? (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="wireframe-hero__main-img"
                    onError={() => handleImgError(slide.id)}
                  />
                ) : (
                  <div className="wireframe-hero__fallback">
                    <ImageOff size={44} />
                  </div>
                )}
              </div>
            ))}

            <div className="wireframe-hero__img-overlay" />

            {/* Contact Us - đẩy xuống giữa chiều dọc của ảnh */}
            <a href="#contact" className="wireframe-hero__contact-pill">
              <span>Contact Us</span>
              <ArrowUpRight size={14} />
            </a>

            <div className="wireframe-hero__tag">
              {TAG_ICONS[activeSlide.tag.icon]}
              <span>{activeSlide.tag.label}</span>
            </div>

            <div className="wireframe-hero__indicator-dots">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`wireframe-hero__indicator ${
                    idx === activeIndex ? 'is-active' : ''
                  }`}
                  onClick={() => handleThumbClick(slide.id)}
                  aria-label={`Chuyển đến ${slide.alt}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==================== 3 THUMBNAILS - NẰM GIỮA SECTION, OVERLAP ==================== */}
      <div className="wireframe-hero__thumbnails">
        {thumbnails.map((thumb) => (
          <button
            key={thumb.id}
            type="button"
            className="wireframe-hero__thumb"
            onClick={() => handleThumbClick(thumb.id)}
            aria-label={`Xem ${thumb.alt}`}
          >
            {!imgErrors[thumb.id] ? (
              <img
                src={thumb.src}
                alt={thumb.alt}
                className="wireframe-hero__thumb-img"
                onError={() => handleImgError(thumb.id)}
              />
            ) : (
              <div className="wireframe-hero__thumb-fallback">
                <ImageOff size={22} />
              </div>
            )}
            {/* <span className="wireframe-hero__thumb-label">{thumb.tag.label}</span> */}
          </button>
        ))}
      </div>
    </section>
  );
};