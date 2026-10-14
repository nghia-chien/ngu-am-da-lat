import React, { useState, useEffect } from 'react';
import { siteMetadata } from '../../data/siteContent';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import './SiteHeader.css';

export const SiteHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Floating Pill-shaped Navbar (Bên trái - Có Hotline) */}
      <header
        className={`floating-navbar ${isScrolled ? 'floating-navbar--scrolled' : ''}`}
        role="banner"
      >
        <div className="floating-navbar__inner">
          <a href="#hero" className="floating-navbar__brand" onClick={closeMenu}>
            <img
              src={siteMetadata.logoUrl}
              alt="Ngủ Ấm Ở Đà Lạt Logo"
              className="floating-navbar__logo-img"
              width="45"
              height="45"
            />
          </a>

          <nav className="floating-navbar__nav" aria-label="Điều hướng chính">
            <ul className="floating-navbar__nav-list">
              <li><a href="#hero" className="floating-navbar__nav-link">Trang chủ</a></li>
              <li><a href="#accommodation" className="floating-navbar__nav-link">Không gian lưu trú</a></li>
              <li><a href="#about" className="floating-navbar__nav-link">Thông tin</a></li>
              <li><a href="#contact" className="floating-navbar__nav-link">Bảng giá &amp; Tư vấn</a></li>
            </ul>
          </nav>

          {/* Hotline quay lại navbar bên trái */}
          <a
            href="tel:0911942968"
            className="floating-navbar__phone-quick"
            title="Gọi ngay 0911 942 968"
            aria-label="Hotline 0911 942 968"
          >
            <Phone size={13} />
            <span>0911 942 968</span>
          </a>

          {/* Mobile: Hamburger toggle */}
          <button
            type="button"
            className="floating-navbar__mobile-toggle"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Nút Contact Us tách riêng - Chỉ có nút, không có khối nền */}
      <a
        href="#contact"
        className={`floating-contact-btn ${isScrolled ? 'floating-contact-btn--scrolled' : ''}`}
        aria-label="Liên hệ đặt phòng"
      >
        <span>Contact Us</span>
        <ArrowUpRight size={15} />
      </a>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-pill-menu ${isMobileMenuOpen ? 'mobile-pill-menu--open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-pill-menu__backdrop" onClick={closeMenu} />
        <div className="mobile-pill-menu__drawer">
          <div className="mobile-pill-menu__header">
            <div className="mobile-pill-menu__brand">

              <img
                src={siteMetadata.logoUrl}
                alt="Ngủ Ấm Ở Đà Lạt Logo"
                className="mobile-pill-menu__logo"
                width="32"
                height="32"
              />
              <span className="mobile-pill-menu__name">Ngủ Ấm Ở Đà Lạt</span>
            </div>
            <button
              type="button"
              className="mobile-pill-menu__close"
              aria-label="Đóng menu"
              onClick={closeMenu}
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mobile-pill-menu__nav" aria-label="Điều hướng di động">
            <ul className="mobile-pill-menu__list">
              <li>
                <a href="#hero" className="mobile-pill-menu__link" onClick={closeMenu}>
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#accommodation" className="mobile-pill-menu__link" onClick={closeMenu}>
                  Không gian lưu trú
                </a>
              </li>
              <li>
                <a href="#about" className="mobile-pill-menu__link" onClick={closeMenu}>
                  Thông tin
                </a>
              </li>
              <li>
                <a href="#contact" className="mobile-pill-menu__link" onClick={closeMenu}>
                  Bảng giá &amp; Tư vấn
                </a>
              </li>
            </ul>
          </nav>

          <div className="mobile-pill-menu__footer">
            <a
              href="tel:0911942968"
              className="mobile-pill-menu__call-btn"
              onClick={closeMenu}
            >
              <Phone size={16} />
              <span>Hotline: 0911 942 968</span>
            </a>
            <a
              href="#contact"
              className="mobile-pill-menu__cta-btn"
              onClick={closeMenu}
            >
              <span>Contact Us</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
