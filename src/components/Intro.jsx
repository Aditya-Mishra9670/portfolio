import React from 'react'
import image from '../assets/image.png'

export default function Intro() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-transparent'>
      <div className="left w-1/2 text-center">
        <h1 className='text-4xl font-bold'>Hello, I'm <span className='text-blue-500'>Aditya Mishra</span></h1>
        <p className='text-xl mt-4'>Aspiring SDE/SDE intern</p>
        <button className='bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-400'>Hire Me</button>
      </div>
      <div className="right w-1/2 flex justify-center items-center">
        <img src={image} alt='Aditya Mishra' className='w-full h-full' />
      </div>
    </div>
  )
}