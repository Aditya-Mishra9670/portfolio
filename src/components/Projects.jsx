import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Replace with your GitHub username
    fetch('https://api.github.com/users/Aditya-Mishra9670/repos')
      .then((res) => res.json())
      .then((data) => {
        // Sort by last updated
        const sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h2 className="text-4xl font-bold mb-8">My GitHub Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{repo.name}</h3>
              <p className="text-gray-400 mb-4">{repo.description || 'No description available.'}</p>
            </div>
            <div className="mt-auto flex gap-4">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                GitHub
              </a>
              {repo.homepage && repo.homepage.trim() !== '' && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
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
