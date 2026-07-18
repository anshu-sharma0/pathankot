import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 cursor-pointer overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
