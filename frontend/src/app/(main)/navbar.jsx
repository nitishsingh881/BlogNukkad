'use client'
import useAppContext from '@/context/AppContext';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {

  const { loggedIn, currentUser } = useAppContext();

  const displayUserOptions = () => {
    if (loggedIn) {
      return (
        <div className="flex-shrink-0 group block">
          <div className="flex items-center">
            <img
              className="inline-block flex-shrink-0 size-[50px] rounded-full"
              src={`${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatar}`}
              alt="Image Description"
            />
            <div className="ms-3">
              <h3 className="font-semibold text-gray-800">
                {currentUser.name}
              </h3>
              <p className="text-sm font-medium text-gray-400">
                {currentUser.email}
              </p>
            </div>
          </div>
        </div>

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
        <nav id="header" className="fixed w-full z-30 top-0  bg-blue-500 text-black">
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

      </>
    </div>
  )
}

export default Navbar;