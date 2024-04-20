'use client';
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

const ViewBlog = () => {

  const [blogData, setBlogData] = useState(null);

  const { id } = useParams();

  const fetchBlogData = () => {
    fetch('http://localhost:5000/blog/getbyid/' + id)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBlogData(data);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  const formatDate = (date) => {
    return new Date(date).getDay() + ', ' + new Date(date).getMonth() + ' '+ new Date(date).getDate() + ', ' + new Date(date).getFullYear();
  }

  const displayBlogs = () => {
    if (blogData !== null)
      return (
        <div>
          <p className='text-center text-slate-500 text-lg'>{new Date(blogData.createdAt).toLocaleDateString()}</p>
          <h1 className='text-center text-slate-300 text-6xl font-bold'>{blogData.title}</h1>
          <hr className='my-10' />
          <div className='grid grid-cols-12'>
            <div className="col-span-3">
              <div className="flex items-center gap-4">
                <img className="w-10 h-10 rounded-full" src={`${process.env.NEXT_PUBLIC_API_URL}/${blogData.user.avatar}`} alt="" />
                <div className="font-medium dark:text-white">
                  <p>{blogData.user.name}</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Joined in {MONTH_NAMES[new Date(blogData.createdAt).getMonth()] + ' ' + new Date(blogData.createdAt).getFullYear() }</div>
                </div>
              </div>
            </div>
            <div className="col-span-9">
              <MDEditor.Markdown source={blogData.content} height="200px" />
            </div>
          </div>
        </div>
      )
    else return <p>Loading...</p>
  }

  return (
    <div className='pt-32 relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      {displayBlogs()}
    </div>
  )
}

export default ViewBlog;