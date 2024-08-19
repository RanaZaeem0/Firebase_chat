import React from 'react';

type ButtonProps = {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({

  className,
  onClick,
  type = 'button',
  children,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none';

  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  const variantStyles = {
    default: 'bg-primary text-primary-foreground border border-transparent hover:bg-primary/90',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary/10',
    ghost: 'bg-transparent text-primary hover:bg-muted/20',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className}text-white bg-black`}
    >
      {children}
    </button>
  );
};

export default Button;
