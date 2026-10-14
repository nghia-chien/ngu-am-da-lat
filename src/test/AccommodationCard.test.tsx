import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AccommodationCard } from '../components/ui/AccommodationCard';
import { AccommodationItem } from '../types/content';

const sampleItem: AccommodationItem = {
  id: 'phong-test',
  name: 'Phòng Nghỉ Mẫu',
  subtitle: 'Tiện nghi ấm áp',
  description: 'Mô tả phòng nghỉ được duyệt bởi khách hàng.',
  image: '/images/rooms/phong-ngu-am-ap.jpg',
  imageAlt: 'Hình ảnh phòng mẫu',
  features: ['Giường đệm êm ái', 'Không gian yên tĩnh'],
  note: 'Chi tiết giá theo từng thời điểm',
};

describe('AccommodationCard', () => {
  it('renders name, subtitle, description, and features correctly', () => {
    render(<AccommodationCard item={sampleItem} />);

    expect(screen.getByRole('heading', { level: 3, name: 'Phòng Nghỉ Mẫu' })).toBeInTheDocument();
    expect(screen.getByText('Tiện nghi ấm áp')).toBeInTheDocument();
    expect(screen.getByText('Mô tả phòng nghỉ được duyệt bởi khách hàng.')).toBeInTheDocument();
    expect(screen.getByText('Giường đệm êm ái')).toBeInTheDocument();
    expect(screen.getByText('Không gian yên tĩnh')).toBeInTheDocument();
  });

  it('renders advisory note when present', () => {
    render(<AccommodationCard item={sampleItem} />);
    expect(screen.getByText(/Chi tiết giá theo từng thời điểm/i)).toBeInTheDocument();
  });

  it('has a contact link pointing to contact section', () => {
    render(<AccommodationCard item={sampleItem} />);
    const link = screen.getByRole('link', { name: /Liên hệ tư vấn phòng/i });
    expect(link).toHaveAttribute('href', '#contact');
  });
});
