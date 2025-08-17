import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const opacity = Math.max(1 - scrollPosition / 300, 0.5);

  return (
    <nav className='fixed top-0 w-full z-100 p-4 shadow-lg backdrop-blur-md flex items-center justify-between' style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}>
      <div className="left">
        <span className='text-xl font-bold'>PORTFOLIO</span>
      </div>
      <div className="right">
        <ul className='flex justify-between mt-2'>
          <li className='px-4 py-2 hover:bg-white hover:bg-opacity-95 rounded hover:text-black cursor-pointer'>Home</li>
          <li className='px-4 py-2 hover:bg-white hover:bg-opacity-25 hover:cursor-pointer rounded'>About</li>
          <li className='px-4 py-2 hover:bg-white hover:bg-opacity-25 hover:cursor-pointer rounded'>Projects</li>
          <li className='px-4 py-2 hover:bg-white hover:bg-opacity-25 hover:cursor-pointer rounded'>Contact</li>
        </ul>
      </div>
    </nav>
  )
}
