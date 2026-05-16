import React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, required, className, id, ...props }, ref) => {
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

        <input
          ref={ref}
          id={inputId}
          required={required}
          className={cn(
            'w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-gray-800 outline-none transition',
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

Input.displayName = 'Input';

export default Input;
