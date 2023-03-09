import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';

import forest from '../assets/forest.jpeg';

import { FaMoneyBill } from 'react-icons/fa'


function SinglePage() {
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
                                href="#"
                                className="mt-8 w-full text-center inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                            >
                                Support
                            </a>
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