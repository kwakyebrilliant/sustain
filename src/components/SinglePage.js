import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';

import forest from '../assets/forest.jpeg';

import { FaCashRegister, FaMoneyBill } from 'react-icons/fa'


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
                        Save Achimota Forest
                    </h2>

                    <div className='flex flex-row'>
                        <FaMoneyBill className='lg:w-[24px] lg:h-[25px] my-1' /> 
                        <h2 className="text-xl px-2 font-bold sm:text-2xl">
                            0/15563.00
                        </h2>
                    </div>

                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                        molestiae! Quidem est esse numquam odio deleniti, beatae, magni
                        dolores provident quaerat totam eos, aperiam architecto eius quis
                        quibusdam fugiat dicta.
                    </p>

                    <a
                        href="#"
                        className="mt-8 inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                    >
                        Get in Touch
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