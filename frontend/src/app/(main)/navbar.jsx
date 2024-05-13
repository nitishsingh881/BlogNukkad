'use client'
import useAppContext from '@/context/AppContext';
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option); // Call the provided onSelect callback
    setIsOpen(false); // Close the dropdown after selection
  };
  const { loggedIn, currentUser, logout } = useAppContext();

  const displayUserOptions = () => {
    if (loggedIn) {
      return (
        <>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={toggleDropdown}
          >
            <img
              className="inline-block flex-shrink-0 size-[50px] rounded-full"
              src={`${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatar}`}
              alt="Image Description"
            />

          </button>
          {isOpen && (
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul

                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {currentUser.name}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {currentUser.email}
                  </a>
                </li>

                <li>
                  <button onClick={logout}

                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </>


      )
    } else {
      return <>
        <Link
          href="/login"
          className="px-4 py-2 text-sm rounded-full font-bold text-black border-2 border-[#100d0e] bg-[#faf9fd] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#080608]">
          Login
        </Link>


        <Link
          href="/signup"
          button className="px-4 py-2 text-sm rounded-full font-bold text-black border-2 border-[#100d0e] bg-[#faf9fd] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#080608] ml-4">

          Sign up
        </Link>
      </>
    }
  }

  return (
    <div>
      <>
    


      </>
    </div>
  )
}

export default Navbar;