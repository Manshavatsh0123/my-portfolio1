'use client'
import React from 'react'
import { BsFillHandIndexFill } from 'react-icons/bs'
import { FaJava } from 'react-icons/fa';
import { SiBootstrap, SiExpress, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiGreensock, SiFramer } from 'react-icons/si'
import Tilt from 'react-parallax-tilt';

const skills = [
    {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />
    },
    {
        name: "React.js",
        icon: <SiReact className="text-cyan-400" />
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black" />
    },
    {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-500" />
    },
    {
        name: "Express.js",
        icon: <SiExpress className="text-gray-500" />
    },
    {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-400" />
    },
    {
        name: "SQL",
        icon: <SiMysql className="text-blue-500" />
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />
    },
    {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-purple-500" />
    },
    {
        name: "GSAP",
        icon: <SiGreensock className="text-green-600" />
    },
    {
        name: "Framer Motion",
        icon: <SiFramer className="text-pink-500" />
    },
    {
        name: "Java",
        icon: <FaJava className="text-red-500" />
    },
];



const Skills = () => {
    return (
        <div id='skills' className="scroll-mt-22 pt-10 pb-20 bg-gray-50">
            <h1
                className="text-center text-3xl md:text-5xl font-bold text-gray-900 Ovo"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
            >
                My Tech Stack
            </h1>

            <p
                className="text-center mt-4 text-gray-500 max-w-xl mx-auto text-sm md:text-base"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                Tools and technologies I use to build modern, scalable, and user-friendly web applications.
            </p>


            <div className="flex flex-wrap justify-center gap-6 mt-10 px-6">
                {skills.map((skill, index) => (
                    <Tilt
                        key={skill.name}
                        scale={1.05}
                        transitionSpeed={400}
                        data-aos={
                            index % 3 === 0 ? "zoom-in" : index % 3 === 1 ? "flip-up" : "fade-up"
                        }
                        data-aos-delay={200 + index * 100}
                        data-aos-duration="800"
                    >
                        <div className="bg-white border border-gray-200 w-32 sm:w-36 h-40 sm:h-44 rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:border-black hover:scale-105 transition-all duration-300">
                            <div className="text-4xl sm:text-5xl mb-2 text-black">
                                {skill.icon}
                            </div>
                            <p className="text-gray-800 font-semibold text-sm sm:text-base tracking-wide text-center">
                                {skill.name}
                            </p>
                        </div>
                    </Tilt>
                ))}
            </div>


        </div>

    )
}

export default Skills