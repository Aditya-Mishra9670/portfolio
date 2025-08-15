import React from 'react';
import { motion } from 'framer-motion';

// ✅ Import platform logos
import Leetcode from '../assets/leetcode.png';
import Codechef from '../assets/codechef.png';
import HackerRank from '../assets/hackerrank.png';

const platforms = [
  { name: 'LeetCode', icon: Leetcode, progress: 75, link: 'https://leetcode.com/eng_aditya2005' },
//   { name: 'Codeforces', icon: Codeforces, progress: 60, link: 'https://codeforces.com/profile/yourusername' },
  { name: 'CodeChef', icon: Codechef, progress: 80, link: 'https://www.codechef.com/users/eng_aditya2005' },
  { name: 'HackerRank', icon: HackerRank, progress: 90, link: 'https://www.hackerrank.com/Adityamishra2005' },
];

export default function DsaPlatforms() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h2 className="text-4xl font-bold mb-10">My DSA Platforms Progress</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {platforms.map((platform, index) => (
          <motion.a
            key={platform.name}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={platform.icon} alt={platform.name} className="w-20 h-20 mb-4" />
            <p className="text-xl font-semibold mb-3">{platform.name}</p>

            {/* Progress bar */}
            <div className="w-full bg-gray-700 rounded-full h-4">
              <motion.div
                className="bg-green-500 h-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${platform.progress}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <span className="mt-2">{platform.progress}%</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
