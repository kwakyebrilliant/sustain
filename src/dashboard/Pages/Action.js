import React, {useState} from 'react'
import PartialNavbar from "../Partials/PartialNavbar";
import Sidebar from '../Partials/Sidebar';

function Action() {
  const [showModal, setShowModal] = useState(false);
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
            <a onClick={() => setShowModal(true)} data-role="smoothscroll" className="group relative inline-block overflow-hidden border border-green-600 px-8 py-3 focus:outline-none focus:ring" href="#nothing">
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                <span className="relative text-sm font-medium text-green-600 transition-colors group-hover:text-white">
                    Upload Action
                </span>
                </a>
            </div>

            {showModal ? (
                                <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-full my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-xl font-semibold">
                                            Upload Action
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                            </span>
                                        </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative space-y-4 p-6 flex-auto">
                                       
                                        <p className='text-md font-medium'>
                                        Title
                                         </p>

                                    <div>
                                        <label className="sr-only" for="title">Title</label>
                                        <input
                                        className="w-full rounded-lg border-gray-200 shadow-md p-3 text-sm"
                                        placeholder="eg. Enter title"
                                        type="text"
                                        id="title"
                                        />
                                    </div>

                                    <p className='text-md font-medium'>
                                        Country
                                         </p>

                                    <div>
                                        <label className="sr-only" for="country">Country</label>
                                        <input
                                        className="w-full rounded-lg border-gray-200 shadow-md p-3 text-sm"
                                        placeholder="eg. Enter country"
                                        type="text"
                                        id="country"
                                        />
                                    </div>

                                    <p className='text-md font-medium'>
                                        Description
                                    </p>

                                    <div>
                                        <label className="sr-only" for="description">Description</label>
                                        <textarea
                                        className="w-full rounded-lg border-gray-200 shadow-md p-3 text-sm"
                                        placeholder="eg. give every other details"
                                        rows="5"
                                        id="description"
                                      ></textarea>
                                    </div>

                                    <p className='text-md font-medium'>
                                        Target Amount
                                    </p>

                                    <div>
                                        <label className="sr-only" for="amount">Amount</label>
                                        <input
                                        className="w-full rounded-lg border-gray-200 shadow-md p-3 text-sm"
                                        placeholder="eg. 15 ETH"
                                        type="number"
                                        id="amount"
                                        />
                                    </div>

                                    <a className="group w-full relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-600" href="/">
                                        <span className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
                                            <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                            </svg>
                                        </span>

                                        <span className="text-sm font-medium transition-all group-hover:ml-4">
                                            Submit
                                        </span>
                                        </a>

                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}


            <div className='p-4'>
            <table className="w-full">
            <thead>
                <tr>
                    <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">Title</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">Description</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">Target</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">Country</th>
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
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Target</span>
                        <span className="rounded py-1 px-3 text-xl font-bold">0 ETH</span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                        <a className="text-green-600 hover:text-blue-600 pl-6" >Ghana</a>
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
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Target</span>
                        <span className="rounded py-1 px-3 text-xl font-bold">1 ETH</span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                        <a href="/#" className="text-green-600 hover:text-blue-600 pl-6">Ghana</a>
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
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Target</span>
                        <span className="rounded py-1 px-3 text-xl font-bold">2 ETH</span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                        <a href="/#" className="text-green-600 hover:text-blue-600 pl-6">Ghana</a>
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
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Target</span>
                        <span className="rounded py-1 px-3 text-xl font-bold">2 ETH</span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                        <a href="/#" className="text-green-600 hover:text-blue-600 pl-6">Ghana</a>
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

export default Action