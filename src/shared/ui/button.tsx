import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-slate-800 hover:bg-slate-900 text-white shadow-sm hover:shadow',
  secondary:
    'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-300',
  ghost: 'bg-transparent text-slate-600 hover:bg-slate-100',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-xs sm:text-sm',
  md: 'px-4 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base',
  lg: 'px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg',
};

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`rounded-lg font-semibold uppercase tracking-wide transition-all duration-150 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
