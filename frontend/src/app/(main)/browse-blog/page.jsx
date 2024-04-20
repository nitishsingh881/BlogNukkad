'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const BrowseBlog = () => {

    const [blogList, setBlogList] = useState([]);

    const fetchBlogData = () => {
        fetch('http://localhost:5000/blog/getall')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBlogList(data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchBlogData();
    }, []);

    const sliceString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.slice(0, maxLength) + '...';
        } else {
            return str;
        }
    }

    const displayBlogs = () => {
        if (blogList.length === 0) {
            return <h1>No Blogs Available</h1>
        } else {
            return blogList.map(blog => (
                <Link
                    className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40"
                    href={'/view-blog/' + blog._id}
                >
                    <div className="aspect-w-16 aspect-h-11">
                        <img
                            className="w-full object-cover rounded-xl"
                            src={`${process.env.NEXT_PUBLIC_API_URL}/${blog.cover}`}
                            alt={blog.title}
                        />
                    </div>
                    <div className="my-6">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                            {blog.title}
                        </h3>
                        <p className="mt-5 text-gray-600 dark:text-neutral-400">
                                {sliceString(blog.description, 90)}
                        </p>
                    </div>
                    <div className="mt-auto flex items-center gap-x-3">
                        <img
                            className="size-8 rounded-full"
                            src={`${process.env.NEXT_PUBLIC_API_URL}/${blog.user.avatar}`}
                            alt={blog.user.name}
                        />
                        <div>
                            <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                                By {blog.user.name}
                            </h5>
                        </div>
                    </div>
                </Link>
            ))
        }
    }

    return (
        <div>
            <>
                {/* Card Blog */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* Title */}
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                            The Blog
                        </h2>
                        <p className="mt-1 text-gray-600 dark:text-neutral-400">
                            See how game-changing companies are making the most of every engagement
                            with Preline.
                        </p>
                    </div>
                    {/* End Title */}
                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayBlogs()}
                    </div>
                    {/* End Grid */}
                    {/* Card */}
                    <div className="mt-12 text-center">
                        <a
                            className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800"
                            href="#"
                        >
                            Read more
                            <svg
                                className="flex-shrink-0 size-4"
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
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </a>
                    </div>
                    {/* End Card */}
                </div>
                {/* End Card Blog */}
            </>

        </div>
    )
}

export default BrowseBlog