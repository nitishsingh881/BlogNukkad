'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Browse = () => {

    const [competitionList, setCompetitionList] = useState([]);

    const fetchCompetitionData = () => {
        fetch('http://localhost:5000/competition/getall')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setCompetitionList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchCompetitionData();
    }, [])

    const displayCompetition = () => {
        return competitionList.map(comp => (
            <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                 <img src={`${process.env.NEXT_PUBLIC_API_URL}/${comp.image}`} alt="" />
                </div>
                <div className="p-4 md:p-6">
                    <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                        {comp.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                        {comp.topic}
                    </h3>
                    <p className="mt-3 text-gray-500">
                        {comp.description}
                    </p>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                    <button
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                    >
                        {comp.prize}
                    </button>
                    <Link
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                        href={"/competition-details/"+comp._id}
                    >
                        View Details
                    </Link>
                </div>
            </div>
        ))
    }


    return (
        <>
            {/* Card Blog */}
            <div className="max-w-[85rem] mt-6 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayCompetition()}
                </div>
                {/* End Grid */}
            </div>
            {/* End Card Blog */}
        </>

    )
}

export default Browse