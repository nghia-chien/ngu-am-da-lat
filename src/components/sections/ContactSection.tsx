import React, { useState } from 'react';
import { contactChannels } from '../../data/siteContent';
import {
  Phone,
  MessageCircle,
  Share2,
  AlertCircle,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Flame,
} from 'lucide-react';
import { Button } from '../ui/Button';
import './ContactSection.css';

interface DemoFormData {
  name: string;
  phone: string;
  dates: string;
  guests: string;
  notes: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    phone: '',
    dates: '',
    guests: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof DemoFormData, string>>>({});
  const [isDemoSubmitted, setIsDemoSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof DemoFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const errors: Partial<Record<keyof DemoFormData, string>> = {};

    if (!formData.name.trim()) {
      errors.name = 'Vui lòng nhập họ và tên của bạn.';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Vui lòng nhập số điện thoại hoặc Zalo.';
    } else if (!/^[0-9+() -]{9,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Số điện thoại không đúng định dạng.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsDemoSubmitted(true);
    }
  };

  const handleResetDemo = () => {
    setIsDemoSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      dates: '',
      guests: '',
      notes: '',
    });
    setFormErrors({});
  };

  return (
    <section id="contact" className="contact-section" aria-label="Liên hệ và đặt phòng">
      <div className="contact-container">
        {/* Header phần liên hệ */}
        <div className="contact-header">
          
          <h2 className="contact-title">
            Gặp Nhau Ở Ngủ Ấm
          </h2>
          <p className="contact-subtitle">
            Chỉ cần một cuộc gọi hay tin nhắn, chúng mình luôn sẵn sàng đồng hành, tư vấn căn phòng
            phù hợp và chuẩn bị chu đáo cho chuyến đi Đà Lạt thảnh thơi của bạn.
          </p>
        </div>

        <div className="contact-layout">
          {/* Cột trái: Thông tin kênh liên hệ trực tiếp & cam kết đón tiếp */}
          <div className="contact-left">
            <div className="contact-card contact-card--channels">
              <div className="contact-card__header">
                <span className="contact-card__tag">Liên hệ trực tiếp</span>
                <h3 className="contact-card__title">Giữ Phòng Nhanh Chóng</h3>
                <p className="contact-card__text">
                  Để kiểm tra lịch phòng trống và nhận giá ưu đãi tốt nhất, bạn có thể gọi trực tiếp hoặc nhắn Zalo cho Ngủ Ấm bất cứ lúc nào:
                </p>
              </div>

              <div className="contact-channels-list">
                {contactChannels.map((channel, idx) => {
                  let IconComponent = Phone;
                  if (channel.type === 'zalo') IconComponent = MessageCircle;
                  if (channel.type === 'facebook') IconComponent = Share2;

                  return (
                    <div key={idx} className="contact-channel-item">
                      <div className="contact-channel-item__icon-box">
                        <IconComponent size={18} />
                      </div>
                      <div className="contact-channel-item__content">
                        <span className="contact-channel-item__label">{channel.label}</span>
                        <strong className="contact-channel-item__val">{channel.value}</strong>
                      </div>
                      <Button
                        href={channel.href}
                        isExternal={channel.isExternal}
                        size="sm"
                        className="contact-channel-item__btn"
                      >
                        {channel.actionText}
                      </Button>
                    </div>
                  );
                })}
              </div>

              {/* Thông tin hỗ trợ & bảo đảm */}
              <div className="contact-perks">
                <div className="contact-perk-item">
                  <Clock size={16} className="contact-perk-item__icon" />
                  <div className="contact-perk-item__text">
                    <strong>Giờ hỗ trợ:</strong> 07:00 – 22:30 hàng ngày (kể cả Thứ 7, Chủ Nhật &amp; ngày lễ).
                  </div>
                </div>

                <div className="contact-perk-item">
                  <Flame size={16} className="contact-perk-item__icon" />
                  <div className="contact-perk-item__text">
                    <strong>Đốt lửa &amp; BBQ:</strong> Hỗ trợ chuẩn bị bếp nướng sân vườn, lò sưởi ấm cúng khi nhận phòng.
                  </div>
                </div>

                <div className="contact-perk-item">
                  <HeartHandshake size={16} className="contact-perk-item__icon" />
                  <div className="contact-perk-item__text">
                    <strong>Đón tiếp tận tâm:</strong> Hướng dẫn đường đi chi tiết và hỗ trợ chu đáo khi bạn tới Đà Lạt.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Form đăng ký thông tin tư vấn */}
          <div className="contact-right">
            <div className="contact-card contact-card--form">
              <div className="contact-card__header">
                <span className="contact-card__tag">Yêu cầu tư vấn</span>
                <h3 className="contact-card__title">Gửi Yêu Cầu Giữ Chỗ</h3>
                <p className="contact-card__text">
                  Để lại thông tin dự kiến, chúng mình sẽ chủ động liên hệ lại xác nhận tình trạng phòng và hỗ trợ bạn.
                </p>
              </div>

              {!isDemoSubmitted ? (
                <form className="contact-form" onSubmit={handleDemoSubmit} noValidate>
                  <div className="contact-form__field">
                    <label htmlFor="name" className="contact-form__label">
                      Họ và tên của bạn <span className="contact-form__req">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ví dụ: Nguyễn Minh Tuấn"
                      className={`contact-form__input ${
                        formErrors.name ? 'contact-form__input--error' : ''
                      }`}
                    />
                    {formErrors.name && (
                      <span className="contact-form__error">
                        <AlertCircle size={14} /> {formErrors.name}
                      </span>
                    )}
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="phone" className="contact-form__label">
                        Số điện thoại / Zalo <span className="contact-form__req">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0911 xxx xxx"
                        className={`contact-form__input ${
                          formErrors.phone ? 'contact-form__input--error' : ''
                        }`}
                      />
                      {formErrors.phone && (
                        <span className="contact-form__error">
                          <AlertCircle size={14} /> {formErrors.phone}
                        </span>
                      )}
                    </div>

                    <div className="contact-form__field">
                      <label htmlFor="guests" className="contact-form__label">
                        Số lượng khách dự kiến
                      </label>
                      <div className="contact-form__select-wrap">
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="contact-form__select"
                        >
                          <option value="">Chọn số lượng khách</option>
                          <option value="1-2">1 – 2 người (Cặp đôi/bạn thân)</option>
                          <option value="3-5">3 – 5 người (Gia đình nhỏ)</option>
                          <option value="6-10">6 – 10 người (Nhóm bạn)</option>
                          <option value="10+">Trên 10 người (Thuê nguyên căn)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="dates" className="contact-form__label">
                      Ngày dự kiến lưu trú
                    </label>
                    <input
                      type="text"
                      id="dates"
                      name="dates"
                      value={formData.dates}
                      onChange={handleInputChange}
                      placeholder="Ví dụ: Cuối tuần này / 20/10 – 22/10"
                      className="contact-form__input"
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="notes" className="contact-form__label">
                      Ghi chú thêm (Yêu cầu BBQ, đốt lửa trại...)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Ví dụ: Muốn chuẩn bị bếp nướng BBQ sân vườn..."
                      className="contact-form__textarea"
                    />
                  </div>

                  <div className="contact-form__notice">
                    <AlertCircle size={16} className="contact-form__notice-icon" />
                    <span>
                      <strong>Lưu ý:</strong> Đây là giao diện xem thử. Để được xác nhận giữ chỗ ngay lập tức, quý khách có thể bấm gọi Hotline hoặc nhắn tin Zalo trực tiếp.
                    </span>
                  </div>

                  <div className="contact-form__action">
                    <Button type="submit" size="md" className="contact-form__submit-btn">
                      Gửi yêu cầu giữ chỗ
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="contact-result" role="status">
                  <div className="contact-result__icon-wrap">
                    <CheckCircle2 size={38} />
                  </div>
                  <h4 className="contact-result__title">
                    Kiểm tra biểu mẫu thành công!
                  </h4>
                  <div className="contact-result__badge">
                    Demo only — Chưa có dữ liệu nào được gửi
                  </div>
                  <p className="contact-result__desc">
                    Thông tin bạn vừa nhập: <strong>{formData.name}</strong> ({formData.phone}
                    {formData.guests ? ` — ${formData.guests} khách` : ''}).
                    Để hoàn tất việc đặt phòng cho kỳ nghỉ sắp tới, xin mời bạn liên hệ trực tiếp với chúng mình qua số hotline:
                  </p>
                  <div className="contact-result__actions">
                    <Button href="tel:0911942968" size="md">
                      Gọi ngay 0911 942 968
                    </Button>
                    <Button type="button" onClick={handleResetDemo} size="md">
                      Thử lại biểu mẫu
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
