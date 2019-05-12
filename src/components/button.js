import React from 'react';

const Solid = ({ children, className, rest }) => (
  <button
    className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full ${className ||
      ''}`}
    {...rest}
  >
    {children}
  </button>
);

const Outline = ({ children, className, rest }) => (
  <button
    className={`bg-transparent hover:bg-indigo-700 text-indigo-700 hover:text-white font-bold py-2 px-6 rounded-full ${className ||
      ''}`}
    {...rest}
  >
    {children}
  </button>
);

const Plain = ({ children, className, rest }) => (
  <button
    className={`text-white text-sm hover:underline ${className || ''}`}
    {...rest}
  >
    {children}
  </button>
);

export { Solid, Outline, Plain };
