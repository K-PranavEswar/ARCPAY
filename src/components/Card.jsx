import React from 'react';

// Main Card component
function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`} // Removed border, adjusted bg, shadow
      {...props}
    >
      {children}
    </div>
  );
}

// Optional Title component - now an arrow function
const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`p-4 border-b border-gray-700 ${className}`} // Simplified padding
      {...props}
    >
      <h3 className="text-xl font-semibold text-white">{children}</h3>
    </div>
  );
};

// Optional Body component - now an arrow function
const CardBody = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}> {/* Simplified padding */}
      {children}
    </div>
  );
};

// Optional Footer component - now an arrow function
const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`p-4 bg-gray-800 border-t border-gray-700 ${className}`} // Simplified padding, kept bg for distinction
      {...props}
    >
      {children}
    </div>
  );
};

// Attach sub-components to the main Card component
Card.Title = CardTitle;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;

