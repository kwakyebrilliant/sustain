import React from 'react'
import PartialNavbar from "../Partials/PartialNavbar";
import Sidebar from '../Partials/Sidebar';

import { FaBook, FaMoneyBill } from 'react-icons/fa'
import { ArrowSmRightIcon } from '@heroicons/react/outline';

import { Link } from 'react-router-dom';

function Summary() {
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


              <div className='grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-12 sm:pb-12 text-black'>
            
            <div className="relative hover:shadow-lg block bg-white p-8 overflow-hidden border border-gray-100 rounded-lg">
                    <span
                        className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="justify-between sm:flex">
                        <div>
                        <h5 className="text-2xl font-bold text-gray-900">
                            Actions
                        </h5>
                        </div>

                        <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <FaBook className='w-16 h-16 p-4 object-cover bg-green-600 shadow-2xl text-white rounded-lg' />
                        </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <p className="text-sm text-gray-500">
                            Every booking you have made on the platform. A 
                            booking is a consultation to further your interest in a property or rescind.
                        </p>
                    </div>

                    <dl className="flex mt-6">
                        <div className="flex flex-col-reverse">
                            <Link to="/FaqPage">
                        <dt className="text-sm font-medium flex text-green-600">Continue <ArrowSmRightIcon className='w-5 ml-2' /></dt>
                            </Link>
                        <dd className="text-xs text-gray-500">Continue onFAQ's</dd>
                        </div>

                    </dl>
                    </div>

                    <div className="relative hover:shadow-lg block bg-white p-8 overflow-hidden border border-gray-100 rounded-lg">
                    <span
                        className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="justify-between sm:flex">
                        <div>
                        <h5 className="text-2xl font-bold text-gray-900">
                        Supports
                        </h5>
                        </div>

                        <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <FaMoneyBill className='w-16 h-16 p-4 object-cover bg-green-600 shadow-2xl text-white rounded-lg' />
                        </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <p className="text-sm text-gray-500">
                            Every property you have on this platform. This could be
                            any property of that sort either on lease, rent or acquired fully.
                        </p>
                    </div>

                    <dl className="flex mt-6">
                        <div className="flex flex-col-reverse">
                            <Link to="/FaqPage">
                        <dt className="text-sm font-medium flex text-green-600">Continue <ArrowSmRightIcon className='w-5 ml-2' /></dt>
                            </Link>
                        <dd className="text-xs text-gray-500">Continue onFAQ's</dd>
                        </div>

                    </dl>
                    </div>

                    

                    
            </div>  

          </div>
        </div>
      </>
    </div>
  )
}

export default Summary