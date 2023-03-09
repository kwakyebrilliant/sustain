import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';

import cover from '../assets/cover.jpg';
import forest from '../assets/forest.jpeg';


function HomePage() {
  return (
    <div>
        <Navigation />
        
        {/* first section */}
        <div className='w-full h-screen pt-20 px-20 bg-white flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-4xl md:text-6xl font-bold'>Climate <strong className="font-extrabold text-green-600 sm:block">Information</strong></h1>
                <p className='max-w-lg sm:leading-relaxed sm:text-xl'>Ask for climate information and be informed </p>
                <p className='max-w-lg sm:leading-relaxed sm:text-xl'>about the environment around you.</p>
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

                <a data-role="smoothscroll" className="group relative inline-block overflow-hidden border border-green-600 px-8 py-3 focus:outline-none focus:ring" href="/about">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                <span className="relative text-sm font-medium text-green-600 transition-colors group-hover:text-white">
                    Learn More
                </span>
                </a>
                </div>

            </div>
            
            <div className='mx-auto max-w-lg text-center lg:mx-0 lg:text-left'>
                <img className='w-full justify-center' src={cover} alt="/" />
            </div>
           

           
        </div>

        <div className="relative ">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-gray-300"></div>
        </div>
        </div>

    </div>


    {/* continents */}
        <div className="flex flex-col bg-white m-auto pt-10">
        <h1 className="flex py-5 lg:mx-20 md:mx-10 mx-5 font-bold text-3xl text-gray-800">
                Continents
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-200 md:ml-20 ml-10 ">

            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-green-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Actions in the Black Community
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Africa
                        </p>

                    </div>

                </div>
            </div>

            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-blue-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Actions In The Second-Smallest Continent
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Europe
                        </p>

                    </div>

                </div>
            </div>

           
            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-orange-400 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Actions In The Largest Continent
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Asia
                        </p>

                    </div>

                </div>
            </div>


            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-pink-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Actions In The Fouth-Largest Continent
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            South America
                        </p>

                    </div>

                </div>
            </div>


            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-yellow-400 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Actions In The Third-Largest Continent
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            North America
                        </p>

                    </div>

                </div>
            </div>


            {/* <div className="inline-block px-3">
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
            </div> */}

            {/* <div className="inline-block px-3">
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
            </div> */}
            
           
           
            
            </div>
        </div>
    </div>


        {/* Available Data */}
        <div className='w-full pt-20'>

        <h1 className="flex py-5 lg:mx-20 md:mx-10 mx-5 font-bold text-3xl text-gray-800">
            Available Projects
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
                Achimota Forest
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                    500 Tonnes CO<sub>2</sub>
                </p>

                <p className="text-sm text-white font-medium Capitalize tracking-widest">
                To Offset
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
                Achimota Forest
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                    500 Tonnes CO<sub>2</sub>
                </p>

                <p className="text-sm text-white font-medium Capitalize tracking-widest">
                To Offset
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
                Achimota Forest
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                    500 Tonnes CO<sub>2</sub>
                </p>

                <p className="text-sm text-white font-medium Capitalize tracking-widest">
                To Offset
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
                Achimota Forest
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                    500 Tonnes CO<sub>2</sub>
                </p>

                <p className="text-sm text-white font-medium Capitalize tracking-widest">
                To Offset
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


        {/* Footer */}
        <Footer />
  


    </div>
  )
}

export default HomePage