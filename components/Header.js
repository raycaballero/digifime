'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export const links = [
  {
    title: 'Home',
    url: '#home'
  },
  {
    title: 'Blockchain',
    url: '#blockchain'
  },
  {
    title: 'Features',
    url: '#features'
  },
  {
    title: 'Solutions',
    url: '#solutions'
  },
  {
    title: 'Roadmap',
    url: '#roadmap'
  }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer)
  }

  return (
    <nav
      className={`w-full absolute p-6 z-50 ${
        scrolled ? 'bg-dark-blue text-white' : ''
      }`}
    >
      <div className='container mx-auto flex items-center justify-between'>
        <Image
          src='/images/digifime-logo.svg'
          alt='Digifime Logo'
          width={100}
          height={30}
          priority
        />
        {/* Hamburger menu and mobile drawer */}
        <div className='lg:hidden'>
          <button
            onClick={toggleDrawer}
            className='text-white focus:outline-none'
          >
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
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>

          {showDrawer && (
            <div className='fixed top-0 left-0 w-full h-full bg-dark-blue  flex items-center justify-center'>
              <div className='container relative h-full flex items-center justify-center text-center'>
                <button
                  onClick={toggleDrawer}
                  className='text-white hover:text-gray-300 absolute top-6 right-6 md:right-0'
                >
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
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    ></path>
                  </svg>
                </button>
                <div className='bg-none p-4 rounded-md'>
                  {links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className='block py-2 text-xl hover:text-gray-300'
                    >
                      {link.title}
                    </a>
                  ))}
                  <button className='btn-contained-alt text-xl mt-5'>
                    Book a Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Regular navigation for larger screens */}
        <div className='hidden lg:flex space-x-10 items-center'>
          {links.map((link, i) => (
            <a key={i} href={link.url} className='hover:text-gray-300'>
              {link.title}
            </a>
          ))}
          <button className='btn-contained-alt'>Book a Demo</button>
        </div>
      </div>
    </nav>
  )
}
