import React from 'react';

const Footer = ({ title }) => (
  <footer className="py-4 mt-12 bg-gray-200">
    <div className="container text-center text-sm">
      {title} @ {new Date().getFullYear()}
    </div>
  </footer>
);

export default Footer;
