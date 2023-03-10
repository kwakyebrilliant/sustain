import React from 'react'
import PartialNavbar from "../Partials/PartialNavbar";
import Sidebar from '../Partials/Sidebar';

function Support() {
  return (
    <div className='text-black'>
      <>
        <div className='flex flex-auto'>
          <Sidebar />
          <div className='grow'>
            <PartialNavbar />

            <div className='m-5'>
            
            <header className="rounded-2xl inset-x-0 bottom-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div className="sm:justify-between sm:items-center sm:flex">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Welcome Back, Brilliant!
                    </h1>

                    <p className="mt-1.5 text-sm text-gray-900">
                    Check your statistics on SUSTAIN 🎉
                    </p>
                </div>

                
                </div>
            </div>
            </header>
            </div>

            <div className='p-8'>
            <table className="w-full">
            <thead>
                <tr>
                    <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">Title</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">Description</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">Amount Supported</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Title</span>
                        P0001
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Description</span>
                        123 Wallaby Avenue, Park Road
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Amount Supported</span>
                        <span className="rounded py-1 px-3 text-xl font-bold">0 ETH</span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                        <a className="text-green-600 hover:text-blue-600 pl-6" >View Details</a>
                    </td>
                </tr>
                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Title</span>
                        Squary
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Description</span>
                        Schweden
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Amount Supported</span>
                        <span className="rounded py-1 px-3 text-xl font-bold">1 ETH</span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                        <a href="/#" className="text-green-600 hover:text-blue-600 pl-6">View Details</a>
                    </td>
                </tr>
                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Title</span>
                ghome
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Description</span>
                        Switzerland
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Amount Supported</span>
                        <span className="rounded py-1 px-3 text-xl font-bold">2 ETH</span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                        <a href="/#" className="text-green-600 hover:text-blue-600 pl-6">View Details</a>
                    </td>
                </tr>
                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Title</span>
                ghome
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Description</span>
                        Switzerland
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Amount Supported</span>
                        <span className="rounded py-1 px-3 text-xl font-bold">2 ETH</span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                        <a href="/#" className="text-green-600 hover:text-blue-600 pl-6">View Details</a>
                    </td>
                </tr>
               
            </tbody>
        </table>
        </div>


          </div>
        </div>
      </>
    </div>
  )
}

export default Support