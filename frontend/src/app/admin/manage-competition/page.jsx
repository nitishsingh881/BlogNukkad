'use client';
import React, { useEffect, useState } from 'react'
import AddCompetition from './AddCompetition';
import { Dialog } from '@headlessui/react';
import { IconPlus } from '@tabler/icons-react';
import toast from 'react-hot-toast';

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
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <img src={'http://localhost:5000/' + competition.image} />
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          {competition.title}
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
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <button onClick={() => deleteCompetition(competition._id)}>Delete</button>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <button>Edit</button>
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
        className="mt-16 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        <IconPlus /> Button
      </button>


      {/* table design */}

      <>
        {/* Component: Underline Table */}
        <div className="w-full overflow-x-auto">
          <table
            className="w-full text-left border-collapse rounded w-overflow-x-auto "
            cellSpacing={0}
          >
            <tbody>
              <tr className="border-b border-slate-300">
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-200 "
                >
                  Cover
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-200 "
                >
                  Topic
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-200 "
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-200 "
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-200 "
                >
                  Start Date
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-200 "
                >
                  End Date
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-200 "
                >
                  Created On
                </th>
              </tr>
              {
                displayCompetitions()
              }
            </tbody>
          </table>
        </div>
        {/* End Underline Table */}
      </>



    </div>
  )
}

export default ManageCompetition;