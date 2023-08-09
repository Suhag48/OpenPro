import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

import { useState } from 'react'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  
  return (
    <header className='w-full md:w-[70%] md:mx-auto h-[90px] py-6 md:flex md:justify-between md:items-center px-4'>
        <div className='flex justify-between'>
            <div>
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div onClick={handleClick} className='text-white cursor-pointer md:hidden'>
                {
                    click ? <FaTimes size={25} /> : <FaBars size={25} />
                }
            </div>
        </div>
        
        <div className={`flex items-center flex-col md:flex-row gap-10 md:bg-transparent bg-gray-800 py-20 md:py-0 z-10 relative top-8 md:top-0 rounded-md  ${click ? 'visible' : 'invisible md:visible'} `}> 
            <Link to='/signin'>
                <button className='text-[#5d5dff] text-xl font-normal'>Sign in</button>
            </Link>

            <Link to='/signup'>
                <button className='text-[#d9e3ea] text-xl font-normal bg-[#5d5dff] px-6 py-2 rounded w-full md:w-auto'>Sign up</button>
            </Link>
        </div>
    </header>
  )
}

export default Navbar