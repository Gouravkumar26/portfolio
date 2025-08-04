import React from 'react';
import { IoArrowForward } from "react-icons/io5";

const About = () => {
    return (
        <div
            id='About'
            className='bg-blue-200 min-h-screen md:flex items-center md:flex-wrap md:justify-center mx-0 md:mx-20 p-12 flex flex-wrap'
        >
            <div className='flex flex-col items-center gap-9 w-250 flex-wrap'>
                <h1 className='text-black text-3xl md:text-5xl font-bold'>About Me</h1>
                <p className='text-black text-sm md:text-2xl tracking-wide leading-relaxed text-center flex flex-wrap'>
                    I am a Full Stack Developer specializing in React.js, Node.js, and MongoDB, with a strong focus on building scalable and high-performance web applications. I am currently pursuing a B.Tech in Computer Science and Engineering from RTU Kota with a (CGPA=7.0). I have worked as a Full Stack Developer Intern at W3villa Technologies Pvt. Ltd., where I developed projects such as a Chat App, Short URL Generator, Dashboard, and an Apple Website Clone. I have hands-on experience with cloud services like Vercel and database management systems including MongoDB and PostgreSQL. I have solved over 100+ DSA problems on platforms like LeetCode and GeeksforGeeks, and contributed to multiple open-source repositories.
                    <br /><br />
                    I am open to new opportunities and strive for efficiency, scalability, and seamless user experience in every project I work on.
                </p>
            </div>
        </div>
    );
};

export default About;
