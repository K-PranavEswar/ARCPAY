import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

/**
 * A modern, reusable button component with variants.
 * Props:
 * - as: Component to render as (e.g., Link, 'a')
 * - variant: 'primary', 'secondary', 'danger'
 * - size: 'sm', 'md', 'lg'
 * - className: Additional classes
 * - ...rest: Other native button props (e.g., onClick, disabled, to)
 */
function Button({
  as: Component = 'button', // Default to 'button', allow overriding with 'as'
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {

  // Base styles
  const base = `
    inline-flex items-center justify-center
    font-semibold leading-tight tracking-wide
    rounded-lg shadow-sm
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-4
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer /* Ensure pointer cursor for links */
  `;

  // Size styles
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  };

  // Variant styles
  const variants = {
    primary: `
      text-white
      bg-gradient-to-r from-cyan-500 to-purple-600
      hover:from-cyan-400 hover:to-purple-500
      focus:ring-cyan-500/50
      shadow-lg shadow-cyan-500/20
      hover:shadow-xl hover:shadow-cyan-500/30
    `,
    secondary: `
      text-white
      bg-gray-700/70 border border-gray-600/80
      hover:bg-gray-700
      focus:ring-gray-600/50
    `,
    danger: `
      text-white
      bg-red-600
      hover:bg-red-700
      focus:ring-red-500/50
      shadow-lg shadow-red-500/20
    `,
  };

  const combinedClasses = [
    base,
    sizes[size],
    variants[variant],
    className
  ].join(' ');

  // Render the component specified by 'as', passing down props
  return (
    <Component className={combinedClasses} {...rest}>
      {children}
    </Component>
  );
}

export default Button;

