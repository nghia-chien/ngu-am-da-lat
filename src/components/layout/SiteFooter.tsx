import React from 'react';
import { navigationLinks, siteMetadata } from '../../data/siteContent';
import { Phone, MapPin, Sparkles, Heart } from 'lucide-react';
import './SiteFooter.css';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__container">
        {/* Brand Column */}
        <div className="site-footer__brand-col">
          <div className="site-footer__brand">
            <img
              src={siteMetadata.logoUrl}
              alt="Ngủ Ấm Ở Đà Lạt Logo"
              className="site-footer__logo"
              width="48"
              height="48"
            />
            <div>
              <span className="site-footer__brand-title">{siteMetadata.brandName}</span>
              <span className="site-footer__brand-sub">Booking Villa — Home</span>
            </div>
          </div>
          <p className="site-footer__bio">{siteMetadata.shortBio}</p>
          <div className="site-footer__badge">
            <Sparkles size={14} />
            <span>Chốn nghỉ ngơi ấm áp giữa lòng phố hoa</span>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="site-footer__nav-col">
          <h4 className="site-footer__heading">Điều Hướng Nhanh</h4>
          <ul className="site-footer__links">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="site-footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="site-footer__contact-col">
          <h4 className="site-footer__heading">Thông Tin Liên Hệ</h4>
          <ul className="site-footer__contact-list">
            <li>
              <a href="tel:0911942968" className="site-footer__contact-item">
                <Phone size={16} className="site-footer__contact-icon" />
                <span>Hotline: 0911 942 968</span>
              </a>
            </li>
            <li>
              <a
                href="https://zalo.me/0911942968"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__contact-item"
              >
                <span className="site-footer__zalo-icon">Z</span>
                <span>Zalo tư vấn: 0911 942 968</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61559001633103"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__contact-item"
              >
                <span className="site-footer__fb-icon">f</span>
                <span>Facebook: Ngủ Ấm Ở Đà Lạt</span>
              </a>
            </li>
            <li>
              <div className="site-footer__contact-item">
                <MapPin size={16} className="site-footer__contact-icon" />
                <span>{siteMetadata.locationSummary}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-container">
          <p className="site-footer__copyright">
            &copy; {currentYear} {siteMetadata.brandName}. Bản quyền thuộc về thương hiệu.
          </p>
          <p className="site-footer__note">
            <span>Phiên bản giao diện demo duyệt trước cho khách hàng</span>
            <span className="site-footer__dot">•</span>
            <span>Được thiết kế với <Heart size={12} className="heart-icon" /> dành cho Đà Lạt</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
