import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: Option[];
  error?: string;
  onChange?: (value: string) => void;
}

const Select = ({
  label,
  options,
  error,
  onChange,
  className = '',
  ...props
}: SelectProps) => {
  const id = props.id || label?.toLowerCase().replace(/\s+/g, '-');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="w-full mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        className={`px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-900 focus:ring-blue-900 block w-full rounded-md sm:text-sm focus:ring-1 ${
          error ? 'border-red-500' : ''
        } ${className}`}
        onChange={handleChange}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;