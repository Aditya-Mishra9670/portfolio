import React from 'react';
import { motion } from 'framer-motion';

// ✅ Import platform logos
import Leetcode from '../assets/leetcode.png';
import Codechef from '../assets/codechef.png';
import HackerRank from '../assets/hackerrank.png';

const platforms = [
  { name: 'LeetCode', icon: Leetcode, progress: 75, link: 'https://leetcode.com/eng_aditya2005' },
  { name: 'CodeChef', icon: Codechef, progress: 80, link: 'https://www.codechef.com/users/eng_aditya2005' },
  { name: 'HackerRank', icon: HackerRank, progress: 90, link: 'https://www.hackerrank.com/Adityamishra2005' },
];

export default function DsaPlatforms() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h2 className="text-4xl font-bold mb-12">My DSA Platforms Progress</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {platforms.map((platform, index) => (
          <motion.a
            key={platform.name}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-900 rounded-2xl p-6 flex flex-col items-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-[0_0_25px_rgba(0,255,255,0.7)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={platform.icon}
              alt={platform.name}
              className="w-20 h-20 mb-4 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]"
            />
            <p className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition">
              {platform.name}
            </p>

            {/* Progress bar */}
            <div className="w-full bg-gray-700 rounded-full h-4">
              <motion.div
                className="bg-emerald-500 h-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${platform.progress}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <span className="mt-2 text-cyan-300 font-medium">{platform.progress}%</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
