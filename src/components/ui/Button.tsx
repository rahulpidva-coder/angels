import React from 'react';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'sky' | 'sky-outline';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-lime-500 text-white hover:bg-lime-600 shadow-md hover:shadow-lg',
  secondary:
    'border-2 border-lime-500 text-lime-600 bg-white hover:bg-lime-50 shadow-sm hover:shadow-md',
  sky:
    'bg-sky-600 text-white hover:bg-sky-700 shadow-md shadow-sky-200',
  'sky-outline':
    'border-2 border-sky-500 text-sky-700 bg-white hover:bg-sky-50 shadow-sm',
};

// md/lg inherit font-size from parent to match the existing btn-primary behaviour
// (btn-primary never set an explicit text size, so it inherited 16px from body).
// sm explicitly sets text-sm for compact contexts like Navbar.
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 gap-2',
  lg: 'px-8 py-4 gap-2',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 active:scale-95',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        disabled && 'opacity-70 cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
