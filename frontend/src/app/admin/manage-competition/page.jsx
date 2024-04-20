'use client';
import React, { useState } from 'react'
import AddCompetition from './AddCompetition';
import { Dialog } from '@headlessui/react';
import { IconPlus } from '@tabler/icons-react';

const ManageCompetition = () => {

  let [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>


          <AddCompetition close = {() => setIsOpen(false)} />

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

      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
  <thead className="bg-gray-50">
    <tr>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Title
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Category
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Status
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Tags
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Description
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Content
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src="https://i.pravatar.cc/150?img=1"
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
            <div className="text-sm text-gray-500">jane.cooper@example.com</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          Regional Paradigm Technician
        </div>
        <div className="text-sm text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        Admin
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        jane.cooper@example.com
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
        <a href="#" className="ml-2 text-red-600 hover:text-red-900">
          Delete
        </a>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src="https://i.pravatar.cc/150?img=1"
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
            <div className="text-sm text-gray-500">jane.cooper@example.com</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          Regional Paradigm Technician
        </div>
        <div className="text-sm text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        Admin
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        jane.cooper@example.com
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
        <a href="#" className="ml-2 text-red-600 hover:text-red-900">
          Delete
        </a>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src="https://i.pravatar.cc/150?img=1"
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
            <div className="text-sm text-gray-500">jane.cooper@example.com</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          Regional Paradigm Technician
        </div>
        <div className="text-sm text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        Admin
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        jane.cooper@example.com
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
        <a href="#" className="ml-2 text-red-600 hover:text-red-900">
          Delete
        </a>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src="https://i.pravatar.cc/150?img=1"
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
            <div className="text-sm text-gray-500">jane.cooper@example.com</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          Regional Paradigm Technician
        </div>
        <div className="text-sm text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        Admin
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        jane.cooper@example.com
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
        <a href="#" className="ml-2 text-red-600 hover:text-red-900">
          Delete
        </a>
      </td>
    </tr>
    {/* More rows... */}
  </tbody>
</table>



    </div>
  )
}

export default ManageCompetition;