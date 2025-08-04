import React from 'react';
import Profileimg from "../assets/gouravimg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 space-y-10 md:space-y-0 md:space-x-20 overflow-hidden">
      
      {/* Profile Image Section */}
      <div
        className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-green-500 shadow-lg animate-slide-in-left"
      >
        <img
          src={Profileimg}
          alt="profile img"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-2/3 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">Gourav Kumar</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 font-light mb-8">
          A passionate Full Stack Web Developer creating modern, scalable, and user-friendly web applications.
        </p>

        {/* Resume Button */}
        <a
          href="/gourav resume.pdf"
          download
          className="inline-block text-white py-2 px-6 text-lg font-semibold rounded-full bg-green-600 hover:bg-green-500 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
        >
          Download Resume
        </a>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideInLeft {
            0% { opacity: 0; transform: translateX(-50px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          .animate-fade-in {
            animation: fadeIn 1.2s ease-in-out forwards;
          }

          .animate-slide-in-left {
            animation: slideInLeft 1s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
