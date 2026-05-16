import React from 'react';
import { cn } from '../../utils/cn';

type SectionHeaderAlign = 'center' | 'left';
type SectionHeaderAs = 'h1' | 'h2' | 'h3';
type SectionHeaderSize = 'sm' | 'md' | 'lg';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: SectionHeaderAlign;
  as?: SectionHeaderAs;
  /** sm = text-3xl (non-responsive), md = text-3xl md:text-4xl, lg = text-4xl md:text-5xl */
  size?: SectionHeaderSize;
  /** Extra classes on the wrapper div */
  className?: string;
  /** Extra classes merged onto the title tag — use to override text color or size */
  titleClassName?: string;
}

const titleSizeClasses: Record<SectionHeaderSize, string> = {
  sm: 'text-3xl',
  md: 'text-3xl md:text-4xl',
  lg: 'text-4xl md:text-5xl',
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
  as: Tag = 'h2',
  size = 'md',
  className,
  titleClassName,
}) => {
  const isCentered = align === 'center';

  return (
    <div className={cn(isCentered && 'text-center', className)}>
      <Tag
        className={cn(
          'font-heading font-bold text-gray-800',
          titleSizeClasses[size],
          titleClassName,
        )}
      >
        {title}
      </Tag>

      <div
        className={cn(
          'w-16 h-1 bg-lime-500 mt-3 rounded-full',
          isCentered && 'mx-auto',
        )}
      />

      {subtitle && (
        <p className={cn('text-gray-600 mt-4', isCentered && 'max-w-2xl mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
