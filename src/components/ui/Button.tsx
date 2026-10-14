import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta' | 'warm' | 'forest' | 'lavender' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  showArrow?: boolean;
  bordered?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'cta',
  size = 'md',
  href,
  isExternal,
  showArrow,
  bordered = true,
  className = '',
  children,
  ...props
}) => {
  const isStringContent = typeof children === 'string';
  // Mặc định hiển thị SVG mũi tên nhận diện nếu children là string hoặc showArrow là true
  const shouldShowArrow = showArrow !== undefined ? showArrow : isStringContent;

  const variantClass = variant === 'cta' ? 'cta' : `cta cta--${variant}`;
  const sizeClass = size !== 'md' ? `cta--${size}` : '';
  const borderClass = bordered ? '' : 'cta--no-border';
  const combinedClassName = `${variantClass} ${sizeClass} ${borderClass} ${className}`.trim();

  const content = (
    <>
      {isStringContent ? <span>{children}</span> : children}
      {shouldShowArrow && (
        <svg width="15px" height="10px" viewBox="0 0 13 10" aria-hidden="true">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
};

export default Button;
