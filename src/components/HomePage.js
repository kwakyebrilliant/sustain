import React from 'react'
import Navigation from './Navigation'

import bg from '../assets/bg.jpg'

function HomePage() {
  return (
    <div>
        <Navigation />
        

        <div className='w-full h-screen px-20 bg-white flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-4xl md:text-6xl font-bold'>Protect <strong className="font-extrabold text-green-600 sm:block">The Earth</strong></h1>
                <p className='max-w-lg sm:leading-relaxed sm:text-xl'>Store, share, and collaborate on files </p>
                <p className='max-w-lg sm:leading-relaxed sm:text-xl'>with everything running on the blockchain.</p>
                <div className="flex flex-wrap gap-4 mt-8 text-center">
                <a className="group relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-600" href="/">
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
                    Get Started
                </span>
                </a>

                <a data-role="smoothscroll" className="group relative inline-block overflow-hidden border border-green-600 px-8 py-3 focus:outline-none focus:ring" href="#about">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                <span className="relative text-sm font-medium text-green-600 transition-colors group-hover:text-white">
                    Learn More
                </span>
                </a>
                </div>

            </div>
            
            <div className='mx-auto max-w-lg text-center lg:mx-0 lg:text-left'>
                <img className='w-full justify-center' src={bg} alt="/" />
            </div>
           

           
        </div>

        <div className="relative ">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-gray-300"></div>
        </div>
        </div>

    </div>

    </div>
  )
}

export default HomePage