import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/image.png';

export default function Intro() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-16 relative overflow-hidden">
      
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left z-10"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hello, I'm{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
            Aditya Mishra
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mt-6 text-gray-300">
           Aspiring <span className="text-emerald-400">Software Development Engineer</span> <br />
          Passionate about <span className="text-cyan-300">Web Development</span>, 
          <span className="text-emerald-300"> Problem Solving</span>, and 
          <span className="text-cyan-300"> Scalable Systems</span>.
        </p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-600 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.8)] hover:bg-cyan-500 transition transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="mailto:mishraadityamishra19@outlook.com"
            className="px-6 py-3 bg-emerald-600 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(16,255,140,0.8)] hover:bg-emerald-500 transition transform hover:scale-105"
          >
            Hire Me
          </a>
        </motion.div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 z-10"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={image}
          alt="Aditya Mishra"
          className="w-72 md:w-[400px] rounded-full shadow-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] transition duration-500"
        />
      </motion.div>

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse"></div>
    </div>
  );
}
