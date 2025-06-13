import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}

const Card = ({ children, className = '', highlighted = false }: CardProps) => {
  return (
    <div
      className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
        highlighted ? 'border-2 border-yellow-500 shadow-xl scale-105' : 'border border-gray-200'
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent = ({ children, className = '' }: CardContentProps) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

export { Card, CardHeader, CardContent, CardFooter };