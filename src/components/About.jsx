import React from 'react';

const achievements = [
  'Secured All India Rank (AIR) 7662 in GATE Computer Science',
  'Strong foundation in Data Structures & Algorithms (C++)',
  'Solved multiple problems on CodeChef & LeetCode',
  'Built an AI-integrated healthcare web application during a hackathon',
  'Developed a Virtual Notepad using OpenCV',
  'Implemented Geocoding project using Python (Geopy)',
  'Experience with Selenium automation (LinkedIn automation project)',
  'Participated in a 3-day hackathon at Samsung Innovation Campus with team recognition',
  'College Ambassador at GeeksforGeeks',
  'Certified in C++, SQL, MySQL, Problem Solving & DSA (HackerRank)',
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Education</h3>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold mb-2">Khwaja Moinuddin Chishti Language University Lucknow, UP</h4>
            <p className="text-gray-300 mb-2">Bachelor of Technology in Computer Science and Engineering; CGPA: 8.7 (2023 – 2027)</p>
            <p className="text-gray-400">
              <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks.
            </p>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Technical Skills</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg font-bold mb-3 text-emerald-400">Languages</h4>
              <p className="text-gray-300">JavaScript (ES6+), C++, C, SQL, HTML5, CSS3</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg font-bold mb-3 text-emerald-400">Frontend</h4>
              <p className="text-gray-300">React.js, Redux Toolkit, Context API, Tailwind CSS, Bootstrap, Responsive Design</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg font-bold mb-3 text-emerald-400">Backend</h4>
              <p className="text-gray-300">Node.js, Express.js, RESTful APIs, JWT (JSON Web Tokens), Mongoose, Authentication</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg font-bold mb-3 text-emerald-400">Databases</h4>
              <p className="text-gray-300">MongoDB, MySQL</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg sm:col-span-2">
              <h4 className="text-lg font-bold mb-3 text-emerald-400">Tools & Platforms</h4>
              <p className="text-gray-300">Git, GitHub, VS Code, Postman, Vercel, Render, Linux</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Projects</h3>
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold mb-2">Social Media App (BeSocial) | MERN Stack, Redux, JWT | GitHub Nov 2024</h4>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                <li>Architected a scalable Full-Stack social media platform using MongoDB, Express, React, and Node.js.</li>
                <li>Implemented secure Authentication & Authorization using JWT tokens and Bcrypt for password hashing, ensuring data privacy.</li>
                <li>Integrated Redux Toolkit for global state management and Multer for handling seamless image uploads.</li>
                <li>Designed and optimized RESTful APIs to handle CRUD operations for user posts, comments, and follower logic.</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold mb-2">URL Shortener | Node.js, MongoDB, Analytics | Live Link | GitHub Aug 2024</h4>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                <li>Developed a high-performance backend service to shorten URLs and track usage analytics using Node.js and Express.js.</li>
                <li>Engineered a MongoDB schema to store click counts and timestamps, visualizing traffic data for users.</li>
                <li>Deployed the application on Vercel, ensuring 99.9% uptime and successfully handling concurrent redirect requests.</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold mb-2">News App | React.js, API Integration | GitHub Nov 2024</h4>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                <li>Built a real-time news aggregator using React.js, fetching dynamic content from external APIs (NewsAPI.org).</li>
                <li>Utilized Context API for efficient state management, allowing users to filter news by categories (Tech, Business, Sports).</li>
                <li>Implemented Lazy Loading and Infinite Scroll to improve frontend performance and reduce initial load time.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Experience</h3>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold mb-2">Samsung Innovation Campus | Trainee & Coordinator | Mar 2024 – Jun 2024 | Lucknow, UP</h4>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              <li>Completed rigorous training in Data Structures and Algorithms (DSA) using C++, strengthening problem-solving skills.</li>
              <li>Led a team of 4 to develop a healthcare prototype during the program Hackathon, facilitating better patient-doctor interaction.</li>
              <li>Coordinated event logistics and managed team workflows, demonstrating strong leadership and communication skills.</li>
            </ul>
          </div>
        </div>

        {/* Achievements & Coding Profiles */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Achievements & Coding Profiles</h3>
          <div className="space-y-4">
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <p className="text-gray-300"><strong>GATE CS 2026:</strong> Secured an All India Rank (AIR) of 7,662 among 211,020 candidates.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <p className="text-gray-300"><strong>Data Structures:</strong> Solved 850+ problems combined on LeetCode and GeeksForGeeks.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <p className="text-gray-300"><strong>GeeksForGeeks:</strong> Achieved a max rating of 1745, ranking in the top percentile of competitive programmers.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <p className="text-gray-300"><strong>Certifications:</strong> MERN Full Stack Web Development (Udemy), C++ Certification (CodingGame).</p>
            </div>
          </div>
        </div>

        {/* LinkedIn Post */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-gray-400 mb-3">GATE exam result LinkedIn post:</p>
          <a
            href="https://www.linkedin.com/posts/aditya-mishra-546914288_gate-cs-result-share-7443302522452271104-l49q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-500"
          >
            View LinkedIn result post
          </a>
        </div>
      </div>
    </section>
  );
}
