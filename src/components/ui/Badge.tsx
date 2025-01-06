import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const baseStyles = "px-3 py-1 text-sm font-medium rounded-full";
  const variants = {
    primary: "bg-indigo-100 text-indigo-800",
    secondary: "bg-purple-100 text-purple-800"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </span>
  );
}
