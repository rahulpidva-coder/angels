import React from 'react';
import { cn } from '../../utils/cn';

type BadgeVariant = 'lime' | 'sky' | 'white' | 'yellow';
type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantClasses: Record<BadgeVariant, string> = {
  lime: 'bg-lime-50 text-lime-700 border border-lime-100',
  sky: 'bg-white text-sky-700 border border-sky-100 shadow-sm',
  white: 'bg-white text-lime-700 border border-lime-100 shadow-sm',
  yellow: 'bg-yellow-50 text-yellow-700 border border-yellow-100',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-[11px] gap-1',
  md: 'px-3 py-1 text-xs gap-1.5',
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'lime', size = 'md', className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full font-semibold',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  ),
);

Badge.displayName = 'Badge';

export default Badge;
