import React from 'react';
import './button.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({
  children,
  className,
  ...attrs
}: ButtonProps): JSX.Element => (
  <button className={`button ${className || ''}`} type="button" {...attrs}>
    {children}
  </button>
);

export default Button;
