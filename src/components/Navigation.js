import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FaCloudversify } from 'react-icons/fa'

export default function Navigation() {
    const [nav, setNav] = useState(false)
    
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)
    return (

        <div className='w-screen h-[70px] z-10 bg-zinc-900 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <FaCloudversify className=' text-green-600 lg:w-[35px] lg:h-[35px]' />
          <h1 className='text-3xl font-bold text-white mr-4 sm:text-4xl'>SUSTAIN.</h1>
          <ul className='hidden text-white md:flex'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/action">Actions</Link></li>
          <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
         
            <a
            className="text-center cursor-pointer items-center px-8 py-2 mx-2 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring"
            type="submit"
            href='/summary'
            >
            <span className="text-sm font-medium">
            Get Started
            </span>
            </a>
    
       
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5 text-white' /> : <XIcon className='w-5 text-white' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'><Link to="/" onClick={handleClose}>Home</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link to="/action" onClick={handleClose}>Actions</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link to="/about" onClick={handleClose}>About</Link></li>

        <div className='my-4'>
        
            <a
            className="text-center cursor-pointer items-center px-8 py-2 mx-2 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring"
            type="submit"
            href='/summary'
            >
            <span className="text-sm font-medium">
            Get Started
            </span>
            </a>
        </div>
      </ul>
    </div>
    );
}
