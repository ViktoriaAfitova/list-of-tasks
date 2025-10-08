import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`px-3 py-3 sm:px-4 sm:py-3.5 rounded-lg bg-white border-2 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:border-slate-800 transition-all duration-150 font-medium ${className}`}
      {...props}
    />
  );
};
