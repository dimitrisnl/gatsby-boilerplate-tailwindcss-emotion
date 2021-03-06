import React from 'react';
import { Link } from 'gatsby';

const Alert = ({ title, body }) => {
  return (
    <div
      className={`p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full inline-flex`}
      role="alert"
    >
      {title && (
        <span
          className={`flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3`}
        >
          {title}
        </span>
      )}
      <span className="font-semibold mr-2 text-left flex-auto">{body}</span>
      <svg
        className="fill-current opacity-75 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
      </svg>
    </div>
  );
};

const AlertWithLink = ({ href, ...rest }) => (
  <Link to={href}>
    <Alert {...rest} />
  </Link>
);

const AlertWithExternalLink = ({ href, ...rest }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    <Alert {...rest} />
  </a>
);

export { Alert, AlertWithLink, AlertWithExternalLink };
