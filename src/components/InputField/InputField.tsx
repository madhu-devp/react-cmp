import React, { useState } from 'react';
import './InputField.css';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  type?: 'text' | 'password';
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  clearable?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  value = '',
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  type = 'text',
  variant = 'outlined',
  size = 'md',
  clearable = false
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClear = () => {
    if (onChange) {
      onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`input-wrapper ${variant} ${size} ${disabled ? 'disabled' : ''}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`input-field ${invalid ? 'invalid' : ''}`}
          aria-invalid={invalid}
          aria-label={label}
        />
        {loading && <span className="loader" />}
        {clearable && value && !disabled && (
          <button onClick={handleClear} className="icon-button" aria-label="Clear input">×</button>
        )}
        {type === 'password' && !disabled && (
          <button onClick={togglePassword} className="icon-button" aria-label="Toggle password">
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
      {!invalid && helperText && <div className="helper-text">{helperText}</div>}
      {invalid && errorMessage && <div className="error-text">{errorMessage}</div>}
    </div>
  );
};
