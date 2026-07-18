import React from 'react';

interface GridLayoutProps {
  children: React.ReactNode;
  className?: string;
  columns?: 2 | 3 | 4;
}

export function GridLayout({ children, className = '', columns = 3 }: GridLayoutProps) {
  const colsConfig = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className={`grid grid-cols-1 ${colsConfig[columns]} gap-6 ${className}`}>
      {children}
    </div>
  );
}
