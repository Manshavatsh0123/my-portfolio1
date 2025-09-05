import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div id="projects" className="w-full px-[12%] py-16 scroll-mt-15 mb-10">

            <h1
                className="text-center text-3xl md:text-5xl font-bold Ovo text-gray-900 mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
            >
                My Portfolio
            </h1>


            <p
                className="text-center mx-auto max-w-2xl text-gray-600 text-base sm:text-lg mt-3 mb-8 Ovo"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                A showcase of my latest projects, blending creativity with clean development.
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                {workData.map((project, index) => (
                    <div
                        key={index}
                        className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-500"
                        data-aos="zoom-in"
                        data-aos-delay={100 * (index + 1)}
                    >

                        <div className="w-full h-64 md:h-72 lg:h-80">
                            <Image
                                src={project.bgImage}
                                alt={project.title}
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>


                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>


                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 bg-white/90 backdrop-blur-md rounded-xl px-5 py-4 flex items-center justify-between shadow-md group-hover:bottom-7 transition-all duration-500">
                            <div>
                                <h2 className="font-semibold text-gray-800 text-lg">
                                    {project.title}
                                </h2>
                                <p className="text-sm text-gray-600">{project.description}</p>
                            </div>

                            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full hover:bg-gray-800 transition">
                                <Image
                                    src={assets.send_icon}
                                    alt="Send Icon"
                                    width={20}
                                    height={20}
                                    className="invert"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="flex justify-center mt-2">
                <a
                    href="/work"
                    className="inline-flex items-center justify-center text-gray-700 text-sm font-medium px-5 py-2.5 border border-gray-400 rounded-full hover:text-white hover:bg-gray-800 transition-all duration-300 group"
                >
                    View All Projects
                    <Image
                        src={assets.right_arrow_bold}
                        alt="Arrow Right"
                        width={16}
                        height={16}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </a>
            </div>
        </div>

    )
}

export default Work