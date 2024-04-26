'use client';
import useAppContext from '@/context/AppContext';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {

    const { loggedIn, currentUser, logout } = useAppContext();

    const displayUserOptions = () => {
        if (loggedIn) {
            return (
                <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
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
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white"
                >
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
            <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
                <nav
                    className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
                    aria-label="Global"
                >
                    <div className="md:col-span-3">
                        {/* Logo */}
                        <Link
                            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                            href="/"
                            aria-label="Preline"
                        >
                            NlogNukkad
                        </Link>
                        {/* End Logo */}
                    </div>
                    {/* Button Group */}
                    <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">

                        {
                            displayUserOptions()
                        }

                        <div className="md:hidden">
                            <button
                                type="button"
                                className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
                                data-hs-collapse="#navbar-collapse-with-animation"
                                aria-controls="navbar-collapse-with-animation"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    className="hs-collapse-open:hidden flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1={3} x2={21} y1={6} y2={6} />
                                    <line x1={3} x2={21} y1={12} y2={12} />
                                    <line x1={3} x2={21} y1={18} y2={18} />
                                </svg>
                                <svg
                                    className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* End Button Group */}
                    {/* Collapse */}
                    <div
                        id="navbar-collapse-with-animation"
                        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
                    >
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
                            <div>
                                <a
                                    className="relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white"
                                    href="#"
                                    aria-current="page"
                                >
                                    Work
                                </a>
                            </div>
                            <div>
                                <a
                                    className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                                    href="#"
                                >
                                    Services
                                </a>
                            </div>
                            <div>
                                <a
                                    className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                                    href="#"
                                >
                                    About
                                </a>
                            </div>
                            <div>
                                <a
                                    className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                                    href="#"
                                >
                                    Careers
                                </a>
                            </div>
                            <div>
                                <a
                                    className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                                    href="#"
                                >
                                    Blog
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End Collapse */}
                </nav>
            </header>
            {/* ========== END HEADER ========== */}
        </>

    )
}

export default Navbar