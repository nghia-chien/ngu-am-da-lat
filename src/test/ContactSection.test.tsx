import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContactSection } from '../components/sections/ContactSection';

describe('ContactSection', () => {
  it('renders verified contact channels with phone 0911 942 968', () => {
    render(<ContactSection />);
    const phoneLinks = screen.getAllByRole('link', { name: /Gọi ngay/i });
    expect(phoneLinks[0]).toHaveAttribute('href', 'tel:0911942968');
  });

  it('shows validation errors when submitting empty required fields', () => {
    render(<ContactSection />);
    const submitBtn = screen.getByRole('button', { name: /Gửi yêu cầu/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText('Vui lòng nhập họ và tên của bạn.')).toBeInTheDocument();
    expect(screen.getByText('Vui lòng nhập số điện thoại hoặc Zalo.')).toBeInTheDocument();
  });

  it('shows demo confirmation banner when valid fields are submitted without sending data', () => {
    render(<ContactSection />);
    const nameInput = screen.getByLabelText(/Họ và tên của bạn/i);
    const phoneInput = screen.getByLabelText(/Số điện thoại \/ Zalo/i);
    const submitBtn = screen.getByRole('button', { name: /Gửi yêu cầu/i });

    fireEvent.change(nameInput, { target: { value: 'Khách hàng thử nghiệm' } });
    fireEvent.change(phoneInput, { target: { value: '0911942968' } });
    fireEvent.click(submitBtn);

    expect(screen.getByText('Kiểm tra biểu mẫu thành công!')).toBeInTheDocument();
    expect(
      screen.getByText(/Demo only — Chưa có dữ liệu nào được gửi/i)
    ).toBeInTheDocument();
  });
});
