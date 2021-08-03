import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import Links from './Links'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
      <nav
        className='flex justify-between items-center h-16 bg-white text-black relative
         shadow-sm font-mono'
        role-='navigation'
      >
        <Link to='/' className='pl-8'>
          KAEN
        </Link>

        <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
        <div className='pr-8 md:block hidden text-center items-center bg-yellow-500'>
          <Links />
        </div>
      </nav>
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </>
  )
}

export default Navbar
