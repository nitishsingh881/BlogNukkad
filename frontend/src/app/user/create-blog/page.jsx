'use client'
import MDEditor from '@uiw/react-md-editor';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const CreateBlog = () => {

  const [value, setValue] = React.useState("**Hello world!!!**");
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const blogForm = useFormik({
    initialValues: {
      title: '',
      category: '',
      cover: '',
      description: '',
      tags: '',
      content: ''
    },
    onSubmit: (values) => {
      values.content = value;
      console.log(values);

      fetch('http://localhost:5000/blog/add', {
        method: 'POST',
        body : JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json',
          'x-auth-token' : currentUser.token
        }
      })
      .then((response) => {
          console.log(response.status);
          if(response.status === 200){
            toast.success('Blog Added')
          }else{
            toast.error('some error occured')
          }
        }).catch((err) => {
          console.log(err);
          toast.error('some error occured')
      });

    }
  })

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        blogForm.values.cover = file.name;
      }
    });
  };

  return (
    <div>
      <div className="bg-white border-4 rounded-lg shadow relative m-5">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h1 className="text-xl font-semibold"> Create Blog  </h1>
          <button
            type="button"
            className="text-red-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <form onSubmit={blogForm.handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="product-name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={blogForm.handleChange}
                  value={blogForm.values.title}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor=" Cover "
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Cover
                </label>
                <input
                  type="file"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  onChange={uploadFile}
                  placeholder=""
                />
              </div>
              <div className="col-span-2 sm:col-span-3">
                <label
                  htmlFor="Category"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  onChange={blogForm.handleChange}
                  value={blogForm.values.category}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Tags
                </label>
                <input
                  type="text"
                  name="tags"
                  onChange={blogForm.handleChange}
                  value={blogForm.values.tags}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor=" Description"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  onChange={blogForm.handleChange}
                  value={blogForm.values.description}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                ></textarea>
              </div>


              <div className="col-span-full">
                <label
                  htmlFor="product-details"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Content
                </label>
                <div className="container">
                  <MDEditor
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div>
            </div>
        <div className="p-6 border-t border-gray-200 rounded-b">
          <button
            className="text-white bg-cyan-600 hover:bg-cyan-300 focus:ring-4 focus:ring-cyan-8900 font-medium rounded-lg text-sm px-10 py-3 text-center"
            type="submit"
          >
            Save Blog
          </button>
        </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateBlog;