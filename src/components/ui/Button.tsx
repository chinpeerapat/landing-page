import React from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  withArrow?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  withArrow = false,
  ...props 
}: ButtonProps) {
  const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${className} inline-flex items-center group`}>
        {content}
      </a>
    );
  }

  return (
    <button {...props} className={`${className} inline-flex items-center group`}>
      {content}
    </button>
  );
}
