import React from 'react';
import { Link } from 'gatsby';

const Footer = ({ title }) => (
  <nav className="flex items-center justify-between flex-wrap border p-6 mt-12">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">{title}</span>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <Link
          to="contact"
          className="block mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-white"
        >
          Contact
        </Link>
      </div>
      <div>
        <a
          href="#"
          className="block mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-white"
        >
          Gace book
        </a>
      </div>
    </div>
  </nav>
);

export default Footer;
