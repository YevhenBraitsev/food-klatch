'use client';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { ButtonSize, ButtonVariant } from '../lib/definitions';
const buttonStyle = 'text-white rounded';

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  disabled,
  children,
  onButtonClick,
}: PropsWithChildren<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>) {
  const buttonVariant = variant === 'primary' ? 'bg-primary' : 'bg-secondary';
  const buttonSizes = {
    sm: 'px-2 py-1',
    md: 'px-3 py-2',
    lg: 'px-4 py-3',
  };
  const buttonSize = buttonSizes[size];
  const buttonDisabled = disabled && 'opacity-50 pointer-events-none ';
  const handleClick = () => {
    if (disabled) {
      onButtonClick;
    }
  };

  return (
    <button
      className={`${className} ${buttonVariant} ${buttonSize} ${buttonDisabled} ${buttonStyle}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
