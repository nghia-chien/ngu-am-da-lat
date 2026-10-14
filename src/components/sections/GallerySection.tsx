import React, { useState, useEffect, useCallback } from 'react';
import { galleryItems } from '../../data/siteContent';
import { GalleryItem } from '../../types/content';
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import './GallerySection.css';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'exterior' | 'interior'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  // Tối đa 4 item thì giữ lưới tĩnh, nhiều hơn thì chạy marquee
  const isLooping = filteredItems.length > 4;

  const handleImageError = (id: string) => {
    setBrokenImages((prev) => ({ ...prev, [id]: true }));
  };

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedItemIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  }, [selectedItemIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  }, [selectedItemIndex, filteredItems.length]);

  useEffect(() => {
    if (selectedItemIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedItemIndex, closeLightbox, showNext, showPrev]);

  const currentItem: GalleryItem | null =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  // Chia danh sách làm 2 hàng xen kẽ so le cho desktop
  const half = Math.ceil(filteredItems.length / 2);
  const row1Items = filteredItems.slice(0, half);
  const row2Items = filteredItems.slice(half);

  // Nhân bản để tạo vòng lặp vô tận
  const loopRow1 = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const loopRow2 = [...row2Items, ...row2Items, ...row2Items, ...row2Items];

  // Component CTA — chỉ còn 1 nút "Giữ chỗ ngay"
  const renderCtaButtons = (itemTitle: string) => (
    <a
      href="#contact"
      className="wireframe-gallery__pill-cta wireframe-gallery__pill-cta--primary"
      title={`Đặt phòng ngay cho ${itemTitle}`}
    >
      <span>Giữ chỗ ngay</span>
    </a>
  );

  return (
    <section id="gallery" className="wireframe-gallery" aria-label="Thư viện hình ảnh thực tế">
      {/* 1. Tiêu đề lớn ở chính giữa */}
      <div className="wireframe-gallery__header">
        <h2 className="wireframe-gallery__title">
          Một Chốn Nghỉ Bình Yên,<br />
          Ấm Áp Từng Khoảnh Khắc.
        </h2>
      </div>

      {/* 2. Nội dung */}
      <div className="wireframe-gallery__body">
        {/* === PHIÊN BẢN DESKTOP (>= 768px) === */}
        <div className="wireframe-gallery__desktop-view">
          {isLooping ? (
            <div className="wireframe-gallery__loop-container">
              {/* Hàng 1: [Ảnh] xen kẽ [Text + CTA] */}
              <div className="wireframe-gallery__marquee-track wireframe-gallery__marquee-track--top">
                {loopRow1.map((item, idx) => {
                  const originalIndex = filteredItems.findIndex((it) => it.id === item.id);
                  return (
                    <React.Fragment key={`row1-${item.id}-${idx}`}>
                      {/* ẢNH */}
                      <div className="wireframe-gallery__col-media">
                        <div
                          className="wireframe-gallery__img-box"
                          onClick={() => openLightbox(originalIndex)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Xem ảnh lớn: ${item.title}`}
                        >
                          {!brokenImages[item.id] ? (
                            <img
                              src={item.image}
                              alt={item.imageAlt}
                              className="wireframe-gallery__img"
                              loading="lazy"
                              onError={() => handleImageError(item.id)}
                            />
                          ) : (
                            <div className="wireframe-gallery__fallback">
                              <ImageOff size={28} />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* TEXT + CTA */}
                      <div className="wireframe-gallery__col-text">
                        <h3 className="wireframe-gallery__item-title">{item.title}</h3>
                        <p className="wireframe-gallery__item-desc">{item.description}</p>
                        {renderCtaButtons(item.title)}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Hàng 2: [Text + CTA] xen kẽ [Ảnh] */}
              <div className="wireframe-gallery__marquee-track wireframe-gallery__marquee-track--bottom">
                {loopRow2.map((item, idx) => {
                  const originalIndex = filteredItems.findIndex((it) => it.id === item.id);
                  return (
                    <React.Fragment key={`row2-${item.id}-${idx}`}>
                      {/* TEXT + CTA */}
                      <div className="wireframe-gallery__col-text">
                        <h3 className="wireframe-gallery__item-title">{item.title}</h3>
                        <p className="wireframe-gallery__item-desc">{item.description}</p>
                        {renderCtaButtons(item.title)}
                      </div>

                      {/* ẢNH */}
                      <div className="wireframe-gallery__col-media">
                        <div
                          className="wireframe-gallery__img-box"
                          onClick={() => openLightbox(originalIndex)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Xem ảnh lớn: ${item.title}`}
                        >
                          {!brokenImages[item.id] ? (
                            <img
                              src={item.image}
                              alt={item.imageAlt}
                              className="wireframe-gallery__img"
                              loading="lazy"
                              onError={() => handleImageError(item.id)}
                            />
                          ) : (
                            <div className="wireframe-gallery__fallback">
                              <ImageOff size={28} />
                            </div>
                          )}
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="wireframe-gallery__static-container">
              <div className="wireframe-gallery__static-grid">
                {filteredItems.map((item, index) => (
                  <div key={item.id} className="wireframe-gallery__static-card">
                    {/* ẢNH */}
                    <div
                      className="wireframe-gallery__img-box"
                      onClick={() => openLightbox(index)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Xem ảnh lớn: ${item.title}`}
                    >
                      {!brokenImages[item.id] ? (
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="wireframe-gallery__img"
                          loading="lazy"
                          onError={() => handleImageError(item.id)}
                        />
                      ) : (
                        <div className="wireframe-gallery__fallback">
                          <ImageOff size={28} />
                        </div>
                      )}
                    </div>

                    {/* TEXT + CTA */}
                    <div className="wireframe-gallery__static-text">
                      <h3 className="wireframe-gallery__item-title">{item.title}</h3>
                      <p className="wireframe-gallery__item-desc">{item.description}</p>
                      {renderCtaButtons(item.title)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* === PHIÊN BẢN MOBILE (< 768px) === */}
        <div className="wireframe-gallery__mobile-view">
          <div className="wireframe-gallery__mobile-stack">
            {filteredItems.map((item, index) => (
              <article key={`mobile-${item.id}`} className="wireframe-gallery__mobile-card">
                {/* ẢNH TRÊN */}
                <div
                  className="wireframe-gallery__img-box wireframe-gallery__img-box--mobile"
                  onClick={() => openLightbox(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Xem ảnh lớn: ${item.title}`}
                >
                  {!brokenImages[item.id] ? (
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="wireframe-gallery__img"
                      loading="lazy"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <div className="wireframe-gallery__fallback">
                      <ImageOff size={28} />
                    </div>
                  )}
                </div>

                {/* MÔ TẢ + CTA */}
                <div className="wireframe-gallery__mobile-desc-box">
                  <h3 className="wireframe-gallery__item-title">{item.title}</h3>
                  <p className="wireframe-gallery__item-desc">{item.description}</p>
                  {renderCtaButtons(item.title)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* 3. THANH PHÂN LOẠI */}
      <div className="wireframe-gallery__filter-wrap">
        <div className="wireframe-gallery__filter-bar" role="tablist" aria-label="Lọc hình ảnh">
          <button
            type="button"
            className={`wireframe-gallery__filter-pill ${
              activeCategory === 'all' ? 'wireframe-gallery__filter-pill--active' : ''
            }`}
            onClick={() => setActiveCategory('all')}
          >
            Tất cả ({galleryItems.length})
          </button>
          <button
            type="button"
            className={`wireframe-gallery__filter-pill ${
              activeCategory === 'exterior' ? 'wireframe-gallery__filter-pill--active' : ''
            }`}
            onClick={() => setActiveCategory('exterior')}
          >
            Sân vườn ({galleryItems.filter((i) => i.category === 'exterior').length})
          </button>
          <button
            type="button"
            className={`wireframe-gallery__filter-pill ${
              activeCategory === 'interior' ? 'wireframe-gallery__filter-pill--active' : ''
            }`}
            onClick={() => setActiveCategory('interior')}
          >
            Phòng nghỉ ({galleryItems.filter((i) => i.category === 'interior').length})
          </button>
        </div>
      </div>

      {/* 4. LIGHTBOX MODAL */}
      {currentItem && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Chi tiết ảnh ${currentItem.title}`}
        >
          <div className="gallery-lightbox__backdrop" onClick={closeLightbox} />

          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={closeLightbox}
            aria-label="Đóng xem ảnh"
          >
            <X size={28} />
          </button>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={showPrev}
            aria-label="Ảnh trước đó"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={showNext}
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight size={36} />
          </button>

          <div className="gallery-lightbox__dialog">
            <div className="gallery-lightbox__image-wrap">
              <img
                src={currentItem.image}
                alt={currentItem.imageAlt}
                className="gallery-lightbox__image"
              />
            </div>
            <div className="gallery-lightbox__info">
              <div className="gallery-lightbox__title-row">
                <h3 className="gallery-lightbox__title">{currentItem.title}</h3>
                <span className="gallery-lightbox__counter">
                  {(selectedItemIndex ?? 0) + 1} / {filteredItems.length}
                </span>
              </div>
              <p className="gallery-lightbox__description">{currentItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;