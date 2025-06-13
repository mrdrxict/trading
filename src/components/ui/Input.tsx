import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = ({
  label,
  error,
  fullWidth = true,
  className = '',
  ...props
}: InputProps) => {
  const id = props.id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`${fullWidth ? 'w-full' : ''} mb-4`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-900 focus:ring-blue-900 block rounded-md sm:text-sm focus:ring-1 ${
          error ? 'border-red-500' : ''
        } ${fullWidth ? 'w-full' : ''} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;