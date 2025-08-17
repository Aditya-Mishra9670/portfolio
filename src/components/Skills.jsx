import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiMysql,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { MdStorage, MdOutlineDeveloperMode } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";

const skillCategories = {
  "MERN Stack": [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
  ],
  "Programming Languages": [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ],
  "Frontend & Styling": [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
  ],
  Databases: [{ name: "SQL / MySQL", icon: <SiMysql /> }],
  "Developer Tools": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "VS Code", icon: <BiLogoVisualStudio /> },
  ],
  "CS Fundamentals": [
    { name: "Data Structures & Algorithms", icon: <MdOutlineDeveloperMode /> },
    { name: "OOPs", icon: <GiNetworkBars /> },
    { name: "DBMS", icon: <MdStorage /> },
    { name: "Operating Systems", icon: <GiNetworkBars /> },
  ],
};

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-16">
      <h2 className="text-4xl font-bold mb-12">My Skills</h2>

      <div className="flex flex-col gap-16 w-full max-w-6xl">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center transform transition-all duration-300 hover:scale-110 hover:z-10"
                >
                  <div className="text-6xl sm:text-7xl text-cyan-300 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
                    {skill.icon}
                  </div>
                  <p className="mt-3 text-base sm:text-lg font-semibold text-center group-hover:text-cyan-300 transition">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
