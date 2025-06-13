import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50';
  
  const variantStyles = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800 focus-visible:ring-blue-500',
    secondary: 'bg-yellow-500 text-blue-900 hover:bg-yellow-400 focus-visible:ring-yellow-500',
    outline: 'border border-blue-900 text-blue-900 hover:bg-blue-50 focus-visible:ring-blue-500',
    ghost: 'text-blue-900 hover:bg-blue-50 focus-visible:ring-blue-500',
  };

  const sizeStyles = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 py-3 text-lg',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;