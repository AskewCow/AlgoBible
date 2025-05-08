import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-open">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 sm:px-8 py-4 border-b bg-navbarBlue shadow-sm">
        {/* Left: Logo */}
        <div className="font-potta text-dark text-2xl z-10 hidden sm:block">
          ALGO BIBLE
        </div>

        {/* Center: Nav Links */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-6 font-semibold text-base">
          <li>
            <Link to="/" className="text-bluePrimary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/algorithms" className="text-dark hover:text-bluePrimary">
              Algorithms
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-dark hover:text-bluePrimary">
              About
            </Link>
          </li>
          <li>
            <Link to="/donate" className="text-dark hover:text-bluePrimary">
              Donate
            </Link>
          </li>
        </ul>

        {/* Right: Search */}
        <div className="ml-auto relative w-80 hidden lg:block">
          <input
            type="text"
            placeholder="Search algorithms, trees, sorting..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-bluePrimary text-sm font-open bg-white"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
