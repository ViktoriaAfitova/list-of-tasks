import type { HTMLAttributes, ReactNode } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={`rounded-lg bg-white border border-slate-200 p-4 sm:p-5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
