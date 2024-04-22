"use client"
import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  )

  const useForm = useFormik({
    initialValues: currentUser,
    onSubmit: async (data) => {
      console.log(data);
      const res = await fetch(url + "/user/update/" + currentUser._id, {
        method: "PUT",
        body: JSON.stringify(data),
        header: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      const userdata = (await res.json()).result;
      console.log(userdata);
      setCurrentUser(userdata);
      sessionStorage.setItem("user", JSON.stringify(userdata));
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
        useForm.values.cover = file.name;
      }
    });
  };

  const deleteAccount = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:5000/user/delete/' + id, { method: 'DELETE' })
    console.log(res.status);
    if (res.status) {
      toast.success("Deleted Successfully")

    }
  }


  return (
    <>

      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              {" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">22</p>{" "}
                <p className="text-gray-400">Friends</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">10</p>{" "}
                <p className="text-gray-400">Photos</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">89</p>{" "}
                <p className="text-gray-400">Comments</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative">
              {" "}
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img src={currentUser.avatar && `${'http://localhost:5000'}/${currentUser.avatar}`} alt="" />

              </div>{" "}


            </div>{" "}
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {" "}
                Connect
              </button>{" "}
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {" "}
                Message
              </button>{" "}
            </div>
          </div>{" "}
          <div className="mt-20 text-center border-b pb-12">
            {" "}
            <label
              htmlFor=" Cover "
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Edit
            </label>
            <input
              type="file"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block mx-auto mb-3 p-2.5"
              onChange={uploadFile}
              placeholder=""
            />
            <h1 className="text-4xl font-medium text-gray-700">
              {currentUser.name}
            </h1>{" "}
            <p className="font-light text-gray-600 mt-3"></p>{" "}
            <p className="mt-8 text-gray-500">
              {currentUser.email}
            </p>{" "}
            <p className="mt-2 text-gray-500">University of Computer Science</p>
            <button type="button" className='bg-red-600 text-white px-4 py-1 rounded mt-3' onClick={() => deleteAccount(currentUser._id)}>Delete Account</button>
          </div>{" "}
          <div className="mt-12 flex flex-col justify-center">
            {" "}
            <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
              records all of his own music, giving it a warm, intimate feel with a
              solid groove structure. An artist of considerable range.
            </p>{" "}
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              {" "}
              Show more
            </button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Profile