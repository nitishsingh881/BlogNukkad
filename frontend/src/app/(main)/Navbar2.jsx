'use client';
import useAppContext from '@/context/AppContext';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {

    const { loggedIn, currentUser, logout } = useAppContext();

    const displayUserOptions = () => {
        if (loggedIn) {
            return (
                <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-0">
                    <img
                        className="inline-block flex-shrink-0 size-[50px] rounded-full"
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatar}`}
                        alt={currentUser.name}
                    />
                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                        <Link
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                            href="/user/profile"
                        >
                            Profile
                        </Link>
                        <Link
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                            href="/user/create-blog"
                        >
                            Add New Blog
                        </Link>
                        <button
                            className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )
        } else {
            return <>
                <Link
                    href="/login"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
                    Login
                    
                </Link>
                

                <Link
                    href="/signup"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white"
                >
                    Sign up
                </Link>
            </>
        }
    }

    return (
        <>
            {/* ========== HEADER ========== */}
            <nav id="header" className="fixed w-full z-30 top-0  bg-blue-400 text-black">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
              <a
                className="toggleColour text text-blue-00 no-underline hover:no-underline font-bold text-2xl lg:text-3xl"
                href="#"
              >
                {/*Icon from: http://www.potlabicons.com/ */}

                BLOG NUKKAD
              </a>
            </div>
            <div className="flex ml-auto lg:order-1">

              {
                displayUserOptions()
              }
              <button className="lg:hidden ml-7">
                <svg
                  className="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex lg:ml-12 lg:space-x-4 max-lg:space-y-2 max-lg:block max-lg:w-full">
              <li className="max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-4 max-lg:rounded">
                <a
                  href="/"
                  className="lg:hover:text-[#fcf8fa] text-[#05080a] max-lg:text-white block font-semibold text-[25px]"
                >
                  Home
                </a>
              </li>
             
              <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
                <a
                  href="/browse-blog"
                  className="lg:hover:text-[#f8fafb] text-black block font-semibold text-[25px]"
                >
                  Blog
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
                <a
                  href="/browse-competition"
                  className="lg:hover:text-[#f6f9fc] text-black block font-semibold text-[25px]"
                >
                  Competition
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
                <a
                  href="/about"
                  className="lg:hover:text-[#f8fafc] text-black block font-semibold text-[25px]"
                >
                  About
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
                <a
                  href="/contact"
                  className="lg:hover:text-[#f6fafd] text-black block font-semibold text-[25px]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>


          <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
            {/* ========== END HEADER ========== */}
        </>

    )
}

export default Navbar