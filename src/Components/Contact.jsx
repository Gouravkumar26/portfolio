import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="Contact" className="flex flex-col md:flex-row justify-around items-center bg-gray-100 text-[#1f2937] rounded-4xl px-8 py-12 gap-8 mt-16">
            {/* Heading Section */}
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-3 animate-fade-in-down">Contact</h1>
                <p className="text-lg md:text-2xl font-light animate-fade-in-up">Feel free to reach out!</p>
            </div>

            {/* Contact Links */}
            <ul className="space-y-6 text-base md:text-xl">
                <li className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 bg-white text-[#1f2937] px-4 py-2 rounded-3xl shadow-lg">
                    <MdOutlineEmail size={24} />
                    <a href="mailto:jangid26122004@gmail.com" className="font-semibold">Email</a>
                </li>
                <li className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 bg-white text-[#1f2937] px-4 py-2 rounded-3xl shadow-lg">
                    <CiLinkedin size={24} />
                    <a href="https://www.linkedin.com/in/gourav-kumar-4a778b294" target="_blank" rel="noopener noreferrer" className="font-semibold">LinkedIn</a>
                </li>
                <li className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 bg-white text-[#1f2937] px-4 py-2 rounded-3xl shadow-lg">
                    <FaGithub size={24} />
                    <a href="https://github.com/Gouravkumar26" target="_blank" rel="noopener noreferrer" className="font-semibold">GitHub</a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
