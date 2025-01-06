import React from 'react';

type GradientTextProps = {
  children: React.ReactNode;
  from?: string;
  via?: string;
  to?: string;
};

export function GradientText({ 
  children, 
  from = "from-indigo-600", 
  via = "via-purple-600", 
  to = "to-pink-500" 
}: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text`}>
      {children}
    </span>
  );
}
