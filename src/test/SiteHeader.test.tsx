import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SiteHeader } from '../components/layout/SiteHeader';

describe('SiteHeader', () => {
  it('renders brand name and logo', () => {
    render(<SiteHeader />);
    expect(screen.getAllByText('Ngủ Ấm Ở Đà Lạt')[0]).toBeInTheDocument();
    expect(screen.getAllByAltText('Ngủ Ấm Ở Đà Lạt Logo')[0]).toBeInTheDocument();
  });

  it('renders primary phone hotline action', () => {
    render(<SiteHeader />);
    const callBtns = screen.getAllByRole('link', { name: /0911 942 968/i });
    expect(callBtns.length).toBeGreaterThan(0);
    expect(callBtns[0]).toHaveAttribute('href', 'tel:0911942968');
  });

  it('toggles mobile drawer menu when toggle button is clicked', () => {
    render(<SiteHeader />);
    const toggleBtn = screen.getByRole('button', { name: /Mở menu điều hướng/i });
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
  });
});
