"use client";

import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Urls from '../utils/urls';

const NavLinks = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, error, isLoading } = useUser();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link href={Urls.home}>
                <span className="text-2xl font-bold text-blue-600 cursor-pointer">Logo</span>
              </Link>
            </div>
            <div className="hidden md:flex md:ml-10 md:space-x-8">
              <Link href={Urls.home}>
                <span className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href={Urls.dashboard}>
                <span className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Dashboard
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {isLoading ? (
              <span className="text-gray-800">Loading...</span>
            ) : user ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {user.name}
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link href={Urls.profile}>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Your Profile
                      </span>
                    </Link>
                    <Link href={Urls.settings}>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Settings
                      </span>
                    </Link>
                    <Link href={Urls.logout}>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Sign out
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href={Urls.login}>
                  <span className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                    Login
                  </span>
                </Link>
                <Link href={Urls.register}>
                  <span className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 cursor-pointer">
                    Register
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks