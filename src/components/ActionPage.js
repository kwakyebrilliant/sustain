import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';

import forest from '../assets/forest.jpeg';


function ActionPage() {
    return (
      <div>
          <Navigation />


             {/* categories */}
        <div className="flex flex-col bg-white m-auto pt-20">
        <h1 className="flex py-5 lg:mx-20 md:mx-10 mx-5 font-bold text-3xl text-gray-800">
                Categories
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-200 md:ml-20 ml-10 ">

            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-green-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Climate Action Targeting Forest
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Forest
                        </p>

                    </div>

                </div>
            </div>

            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-blue-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Climate Action Targeting Waters
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Maritime
                        </p>

                    </div>

                </div>
            </div>

           
            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-orange-400 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Climate Action Educating People
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Education
                        </p>

                    </div>

                </div>
            </div>


            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-pink-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Climate Action Planting Trees
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Afforestation
                        </p>

                    </div>

                </div>
            </div>


            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-yellow-400 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Climate Action Targeting Air
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Air
                        </p>

                    </div>

                </div>
            </div>


            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-red-700 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Climate Action Targeting Renewables
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Renewables
                        </p>

                    </div>

                </div>
            </div>

            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-400 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Any Category Not Mentioned
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Others
                        </p>

                    </div>

                </div>
            </div>
            
           
           
            
            </div>
        </div>
    </div>


        {/* Recent Actions */}
        <div className='w-full'>

          <h1 className="flex py-5 lg:mx-20 md:mx-10 mx-5 font-bold text-3xl text-gray-800">
                      Recent Actions
          </h1>


          <div className='relative px-20 grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-16'>

          <a href="#singlepage" className="group relative block bg-black">
              <img
                  alt="Developer"
                  src={forest}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-green-500">
                  Save Achimota Forest
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                      ETH 1/ $1,563.92
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                      className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                      <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                      perferendis hic asperiores quibusdam quidem voluptates doloremque
                      reiciendis nostrum harum. Repudiandae?
                      </p>
                  </div>
                  </div>
              </div>
          </a>

          <a href="#singlepage" className="group relative block bg-black">
              <img
                  alt="Developer"
                  src={forest}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-green-500">
                  Save Achimota Forest
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                      ETH 1/ $1,563.92
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                      className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                      <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                      perferendis hic asperiores quibusdam quidem voluptates doloremque
                      reiciendis nostrum harum. Repudiandae?
                      </p>
                  </div>
                  </div>
              </div>
          </a>

          <a href="#singlepage" className="group relative block bg-black">
              <img
                  alt="Developer"
                  src={forest}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-green-500">
                  Save Achimota Forest
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                      ETH 1/ $1,563.92
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                      className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                      <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                      perferendis hic asperiores quibusdam quidem voluptates doloremque
                      reiciendis nostrum harum. Repudiandae?
                      </p>
                  </div>
                  </div>
              </div>
          </a>

          <a href="#singlepage" className="group relative block bg-black">
              <img
                  alt="Developer"
                  src={forest}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-green-500">
                  Save Achimota Forest
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                      ETH 1/ $1,563.92
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                      className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                      <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                      perferendis hic asperiores quibusdam quidem voluptates doloremque
                      reiciendis nostrum harum. Repudiandae?
                      </p>
                  </div>
                  </div>
              </div>
          </a>




          </div>

          </div>


          <Footer />

        </div>
    )

}

export default ActionPage