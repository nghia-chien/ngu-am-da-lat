import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GallerySection } from '../components/sections/GallerySection';

describe('GallerySection', () => {
  it('renders section title and category filters', () => {
    render(<GallerySection />);
    expect(screen.getByRole('heading', { level: 2, name: /Một Chốn Nghỉ Bình Yên/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Tất cả/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Sân vườn/i })).toBeInTheDocument();
  });

  it('filters gallery items when category button is clicked', () => {
    render(<GallerySection />);
    const exteriorBtn = screen.getByRole('button', { name: /^Sân vườn/i });
    fireEvent.click(exteriorBtn);

    expect(screen.getAllByText('Sân Vườn Hoàng Hôn').length).toBeGreaterThan(0);
    expect(screen.queryByText('Góc Phòng Ngủ Tĩnh Lặng')).not.toBeInTheDocument();
  });

  it('opens and closes lightbox modal with close button or Escape key', () => {
    render(<GallerySection />);
    const detailButtons = screen.getAllByRole('button', { name: /Xem ảnh lớn/i });
    fireEvent.click(detailButtons[0]);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Đóng xem ảnh/i })).toBeInTheDocument();

    const closeBtn = screen.getByRole('button', { name: /Đóng xem ảnh/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
