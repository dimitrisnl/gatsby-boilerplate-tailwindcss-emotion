import React from 'react';

const Footer = ({ title }) => (
  <footer className="py-8 mt-12 border">
    <div className="container text-center">
      {title} @ {new Date().getFullYear()}
    </div>
  </footer>
);

export default Footer;
