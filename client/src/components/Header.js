import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-baseline justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
            <span className="mx-auto text-xl font-black leading-none text-gray-1000 select-none">Saanjh<span className="text-indigo-600">.</span></span>
          </Link>
          <nav className={`flex flex-wrap items-center ml-20 mb-5 text-base md:mb-0 md:pl-10 md:ml-10 md:border-l md:border-gray-200 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <Link to="/profile" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Profile</Link>
            <Link to="/form" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Form</Link>
            <Link to="/chatbot" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Chatbot</Link>
          </nav>
        </div>
        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <Link to="/login" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
            Sign in
          </Link>
          <Link to="/signup" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
            Sign up
          </Link>
        </div>
        <button
          className="text-gray-900 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Header;