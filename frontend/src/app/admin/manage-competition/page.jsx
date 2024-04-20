'use client';
import React, { useState } from 'react'
import AddCompetition from './AddCompetition';
import { Dialog } from '@headlessui/react';
import { IconPlus } from '@tabler/icons-react';

const ManageCompetition = () => {

  let [isOpen, setIsOpen] = useState(false)

  const 

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
                  Title
                </th>
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
                  Category
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
                  Tags
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-200 "
                >
                  Content
                </th>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Ayub Salas
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Designer
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Carroll Group
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Member
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  salas_a
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Agnes Sherman
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Developer
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Apple
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Admin
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  shermanagnes
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Jemma Cummings
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Senior Designer
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  20goto10
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Member
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  jemmaC
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Jimi Cardenas
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Copywriter
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Wind-UI
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Owner
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  cardenasji
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Mateusz Tucker
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Project Manager
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Tailwindui
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Member
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                  mt
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* End Underline Table */}
      </>



    </div>
  )
}

export default ManageCompetition;