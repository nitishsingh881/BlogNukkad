'use client';
import React, { useEffect, useState } from 'react'
import AddCompetition from './AddCompetition';
import { Dialog } from '@headlessui/react';
import { IconPlus } from '@tabler/icons-react';
import toast from 'react-hot-toast';
import Link from 'next/link';

const ManageCompetition = () => {

  let [isOpen, setIsOpen] = useState(false);
  const [competitionList, setCompetitionList] = useState([]);


  const fetchCompetitionData = () => {
    fetch('http://localhost:5000/competition/getall')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCompetitionList(data);
      })
      .catch(err => console.log(err));

  }

  useEffect(() => {
    fetchCompetitionData();
  }, [])

  const deleteCompetition = (id) => {
    fetch('http://localhost:5000/competition/delete/' + id, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.status === 200) {
          fetchCompetitionData();
          toast.success('Competition deleted successfully');
        }
      })
      .catch(err => {
        console.log(err);
        toast.error('Competition not deleted');
      });
  }

  const displayCompetitions = () => {
    return competitionList.map((competition, index) => (
      <tr className="border-b  border-slate-200">
          <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <img style={{height: 80}} src={'http://localhost:5000/' + competition.image} />
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          {competition.topic}
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          {competition.description}
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          {competition.prize}
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          {new Date(competition.startDate).toLocaleDateString()}
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          {new Date(competition.endDate).toLocaleDateString()}
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          {new Date(competition.createdAt).toLocaleDateString()}
        </td>
      
      
        <td className="p-3 px-5 flex justify-end">
            
              <button
                type="button"
                onClick={() => deleteCompetition(competition._id)}
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
              <Link href={'/admin/view-competition/'+competition._id}>  <button
              
              type="button"
              className="mr-3 text-sm bg-blue-500 mx-3 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button></Link>
            </td>

      </tr>
    ))
  }


  return (
    <div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>


          <AddCompetition close={() => setIsOpen(false)} />

          {/* <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button> */}
        </Dialog.Panel>
      </Dialog>

      <button
        type="button"
        onClick={e => setIsOpen(true)}
        className="mt-16 py-3 mx-2 mb-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        <IconPlus /> Add Competition
      </button>


      {/* table design */}



      <>
  {/* component */}
  <div className="text-gray-900 bg-gray-200">
   
    <div className="px-3 py-4 flex justify-center">
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3 px-5">Cover</th>
            <th className="text-left p-3 px-5">Topic</th>
            <th className="text-left p-3 px-5">Description</th>
            <th className="text-left p-3 px-5">Price</th>
            <th className="text-left p-3 px-5">Start Date</th>
            <th className="text-left p-3 px-5">End Date</th>
            <th className="text-left p-3 px-5">Created On</th>
            <th />
          </tr>
          </thead>
          <tbody>
          
            {displayCompetitions()}
          
      
          </tbody>
    
      </table>
    </div>
  </div>
</>



    </div>
  )
}

export default ManageCompetition;