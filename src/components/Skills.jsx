import React from 'react';
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h2 className="text-4xl font-bold mb-12">My Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center transform transition-all duration-300 hover:scale-110 hover:z-10"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-28 h-28 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]"
            />
            <p className="mt-3 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
