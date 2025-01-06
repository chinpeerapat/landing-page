import React from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  size?: 'medium' | 'large';
  href?: string;
  withArrow?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  href, 
  withArrow = false,
  ...props 
}: ButtonProps) {
  const baseStyles = "font-medium rounded-full transition-all duration-300 flex items-center justify-center";
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25",
    outline: "bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50"
  };
  const sizes = {
    medium: "px-5 py-2 text-sm",
    large: "px-7 py-3 text-base"
  };

  const className = `${baseStyles} ${variants[variant]} ${sizes[size]}`;

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${className} inline-flex group`}>
        {content}
      </a>
    );
  }

  return (
    <button {...props} className={`${className} inline-flex group`}>
      {content}
    </button>
  );
}
