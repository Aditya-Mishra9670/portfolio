import React from 'react'
import Leetcode from '../assets/leetcode.png'
import MongoDB from '../assets/leetcode.png'
import Express from '../assets/leetcode.png'
import ReactLogo from '../assets/leetcode.png'
import Node from '../assets/leetcode.png'

export default function Skills() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-bold mb-8'>My Skills</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
        <div className='flex flex-col items-center'>
          <img src={MongoDB} alt='MongoDB' className='w-20 h-20' />
          <p className='mt-2'>MongoDB</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={Express} alt='Express' className='w-20 h-20' />
          <p className='mt-2'>Express</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={ReactLogo} alt='React' className='w-20 h-20' />
          <p className='mt-2'>React</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={Node} alt='Node.js' className='w-20 h-20' />
          <p className='mt-2'>Node.js</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={Leetcode} alt='Leetcode' className='w-20 h-20' />
          <p className='mt-2'>Leetcode</p>
        </div>
      </div>
    </div>
  )
}
