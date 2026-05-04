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
    <nav className='fixed top-0 w-full z-10 p-4 shadow-lg backdrop-blur-md flex items-center justify-between' style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}>
      <div className="left">
        <span className='text-xl font-bold'>PORTFOLIO</span>
      </div>
      <div className="right">
        <ul className='flex justify-between mt-2'>
          <li>
            <a href="#home" className='px-4 py-2 inline-block hover:bg-white hover:bg-opacity-95 rounded hover:text-black transition'>Home</a>
          </li>
          <li>
            <a href="#about" className='px-4 py-2 inline-block hover:bg-white hover:bg-opacity-25 rounded hover:text-black transition'>About</a>
          </li>
          <li>
            <a href="#projects" className='px-4 py-2 inline-block hover:bg-white hover:bg-opacity-25 rounded hover:text-black transition'>Projects</a>
          </li>
          <li>
            <a href="mailto:mishraadityamishra19@outlook.com" className='px-4 py-2 inline-block hover:bg-white hover:bg-opacity-25 rounded hover:text-black transition'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
