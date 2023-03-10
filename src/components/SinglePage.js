import React, {useState} from 'react'
import Navigation from './Navigation';
import Footer from './Footer';

import forest from '../assets/forest.jpeg';


function SinglePage() {

    const [showModal, setShowModal] = useState(false);
    return (
      <div>
          <Navigation />

          <div className='w-full pt-10'>
            
          <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                <div className="relative lg:py-16">
                    <div className="relative h-64 sm:h-80 lg:h-full">
                    <img
                        alt="House"
                    src={forest}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                    <span
                    className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
                    ></span>

                    <div className="p-8 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Achimota Forest
                    </h2>

                    <div className='flex flex-row'>
                        <h2 className="text-xl px-2 font-bold sm:text-2xl">
                            0/500 Tonnes
                        </h2>
                        <h2>
                            CO<sub>2</sub>
                        </h2>
                    </div>

                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                        molestiae! Quidem est esse numquam odio deleniti, beatae, magni
                        dolores provident quaerat totam eos, aperiam architecto eius quis
                        quibusdam fugiat dicta.
                    </p>

                    <details className="relative mt-4 group">
                              <summary className="block">
                                  <div>

                                  <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                                      Read More
                                  </span>
                                  </div>
                              </summary>

                              <div className="pb-6 prose max-w-none text-white">
                                <p className="mt-4 text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                                    molestiae! Quidem est esse numquam odio deleniti, beatae, magni
                                    dolores provident quaerat totam eos, aperiam architecto eius quis
                                    quibusdam fugiat dicta.
                                </p>
                              </div>
                              </details>


                            <div className="w-full mt-5 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "25%"}}> 25%</div>
                            </div>


                            <div className='flex mt-5 flex-row justify-between'>
                            <h2 className="px-2 text-lg font-bold">
                                0+ Supported
                            </h2>
                                <h1 className='p-2 rounded-full bg-green-500 text-white'>
                                    12/03/2022
                                </h1>
                            </div>



                            <a
                                href="#nothing"
                                className="mt-8 w-full text-center inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                                onClick={() => setShowModal(true)}
                            >
                                Support
                            </a>

                            {showModal ? (
                                <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-xl font-semibold">
                                            Filter Support
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
                                        <a
                                        className="block w-96 rounded-full border text-center border-blue-500 px-8 py-3 text-sm font-medium text-blue-600"
                                        href="#nothhing"
                                    >
                                        5 ETH
                                    </a>
                                    <a
                                        className="block w-96 rounded-full border text-center border-gray-500 px-8 py-3 text-sm font-medium text-gray-600"
                                        href="#nothhing"
                                    >
                                        10 ETH
                                    </a>

                                    <h2 className='text-xl font-medium'>
                                        Input Manually
                                    </h2>

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
                    </div>
                </div>
                </div>
            </div>
            </section>

            

          </div>


          <Footer />
        </div>
    )

}

export default SinglePage