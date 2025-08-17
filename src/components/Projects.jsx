import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Aditya-Mishra9670/repos')
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4">
      <h2 className="text-4xl font-bold mb-12">My GitHub Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            className="group relative bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-[0_0_25px_rgba(0,255,255,0.7)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                {repo.name}
              </h3>
              <p className="text-gray-400 mb-4">
                {repo.description || 'No description available.'}
              </p>
            </div>
            <div className="mt-auto flex gap-4">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition shadow-md"
              >
                GitHub
              </a>
              {repo.homepage && repo.homepage.trim() !== '' && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-500 transition shadow-md"
                >
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
