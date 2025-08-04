import React from 'react';
import {
  FaCss3, FaFigma, FaHtml5, FaJs, FaReact,
  FaGithub, FaBootstrap, FaGoogle, FaAmazon,
  FaNodeJs, FaDatabase
} from "react-icons/fa";
import {
  SiRedis, SiMongodb, SiPython, SiC, SiExpress,
  SiPostman, SiMysql, SiMongoose
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const skillSet = [
  { icon: <FaHtml5 color="#E34F26" size={50} />, name: 'HTML' },
  { icon: <FaCss3 color="#1572b6" size={50} />, name: 'CSS' },
  { icon: <FaReact color="#61DAFB" size={50} />, name: 'React' },
  { icon: <FaJs color="#f7Df1E" size={50} />, name: 'JavaScript' },
  { icon: <FaFigma color="#F24E1E" size={50} />, name: 'Figma' },
  { icon: <SiMongodb color="#47A248" size={50} />, name: 'MongoDB' },
  { icon: <SiRedis color="#FF4438" size={50} />, name: 'Redis' },
  { icon: <FaBootstrap color="#7952B3" size={50} />, name: 'Bootstrap' },
  { icon: <FaGithub color="#181717" size={50} />, name: 'GitHub' },
  { icon: <SiPython color="#3776AB" size={50} />, name: 'Python' },
  { icon: <DiJava color="#f89820" size={50} />, name: 'Java' },
  { icon: <SiC color="#A8B9CC" size={50} />, name: 'C Programming' },
  { icon: <FaNodeJs color="#68A063" size={50} />, name: 'Node.js' },
  { icon: <SiExpress color="#000000" size={50} />, name: 'Express.js' },
  { icon: <SiPostman color="#FF6C37" size={50} />, name: 'Postman' },
  { icon: <FaDatabase color="#00618A" size={50} />, name: 'Mongo Atlas' },
  { icon: <SiMysql color="#00758F" size={50} />, name: 'MySQL' }
];

const Skills = () => {
  return (
    <div
      id='skills'
      className='min-h-screen bg-white text-gray-900 py-16 px-6 md:px-24 flex flex-col items-center justify-center'
    >
      <h1 className='text-4xl font-bold mb-12 text-center animate-fade-in-down'>💡 My Tech Stack</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-6xl animate-fade-in-up'>
        {skillSet.map((skill, idx) => (
          <div
            key={idx}
            className='group bg-blue-100 hover:bg-blue-200 text-gray-800 rounded-2xl shadow-md hover:shadow-lg p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105'
          >
            <div className='mb-2'>{skill.icon}</div>
            <span className='mt-2 text-sm font-medium tracking-wide group-hover:text-blue-600 transition duration-300'>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
