import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Dropdown = styled.div`
  ${tw`w-full flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto`}
`;

const NavLinks = () => (
  <a
    href="https://github.com/dimitrisnl/gatsby-boilerplate"
    target="_blank"
    rel="noopener noreferrer"
    className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white"
  >
    Github
  </a>
);

const Header = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleVisibility = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <nav className=" bg-blue-900">
      <div className="container flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link to="/">{title}</Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
            onClick={handleVisibility}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{title}</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <Dropdown className={`${isOpen ? 'block' : 'hidden'} `}>
          <NavLinks />
        </Dropdown>
      </div>
    </nav>
  );
};

export default Header;
