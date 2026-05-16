import React from 'react';
import { cn } from '../../utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, required, rows = 4, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-gray-700"
          >
            {label}
            {required && <span className="ml-0.5 text-rose-500">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          required={required}
          className={cn(
            'w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-gray-800 outline-none transition resize-none',
            'placeholder:text-gray-400',
            error
              ? 'border-rose-300 focus:border-rose-400 focus:ring-4 focus:ring-rose-100'
              : 'border-gray-200 focus:border-lime-400 focus:ring-4 focus:ring-lime-100',
            className,
          )}
          {...props}
        />

        {error && (
          <p className="text-xs text-rose-500">{error}</p>
        )}

        {hint && !error && (
          <p className="text-xs text-gray-400">{hint}</p>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
