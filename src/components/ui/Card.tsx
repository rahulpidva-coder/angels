import React from 'react';
import { cn } from '../../utils/cn';

type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: CardPadding;
  hover?: boolean;
  flat?: boolean;
}

const paddingClasses: Record<CardPadding, string> = {
  none: '',
  sm: 'p-5',
  md: 'p-7',
  lg: 'p-8',
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ padding = 'md', hover = false, flat = false, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-white rounded-3xl border border-gray-100 transition-all duration-300',
        !flat && 'shadow-lg',
        hover && 'hover:shadow-xl hover:-translate-y-1',
        paddingClasses[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);

Card.displayName = 'Card';

export default Card;
