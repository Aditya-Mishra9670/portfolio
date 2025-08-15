import React from 'react';
import { motion } from 'framer-motion';
import MongoDB from '../assets/mongodb.png';
import Express from '../assets/express.png';
import ReactLogo from '../assets/react.png';
import Node from '../assets/nodejs.png';

const skills = [
  { name: 'MongoDB', icon: MongoDB },
  { name: 'Express', icon: Express },
  { name: 'React', icon: ReactLogo },
  { name: 'Node.js', icon: Node },
];

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      <h2 className="text-4xl font-bold mb-8">My Skills</h2>

      {/* Horizontal infinite scroll */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ['0', -skills.length * 150] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        >
          {/* Duplicate the skills for seamless loop */}
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[150px]"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-28 h-28"
              />
              <p className="mt-2 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
