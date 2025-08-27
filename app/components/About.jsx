import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 mb-20'>
            <h4 className='text-center mb-2 text-lg Ovo'>Introduction</h4>
            <h2 className='text-center text-5xl Ovo'>About Me</h2>

            <div className='flex flex-col md:flex-row gap-10 mt-10 w-full items-start'>

                <div className='md:w-1/3 w-full flex justify-center'>
                    <Image
                        src={assets.user_image}
                        alt='Mansha Image'
                        className='w-56 sm:w-64 rounded-2xl shadow-md'
                    />
                </div>


                <div className='md:w-2/3 w-full'>
                    <p className="mb-4 max-w-2xl Ovo leading-relaxed text-gray-700">
                        Hi, I’m <span className="font-semibold text-gray-900">Mansha Vatsh</span>, a student at
                        <span className="font-semibold text-gray-900"> Gautam Buddha University</span> with a strong
                        passion for building impactful digital solutions.

                        I’ve explored the <span className="font-semibold">MERN stack</span> and created projects like
                        <span className="italic"> Wanderlust</span>, <span className="italic">QuickStay</span>, and
                        <span className="italic"> UberGo</span>, each designed to solve real-world problems through
                        technology.

                        During my internship at
                        <span className="font-semibold text-gray-900"> Concrete Software Solutions Pvt. Ltd.</span>,
                        I worked on the <span className="font-semibold">Let Us Nudge</span> website — a smart platform
                        that helps restaurants maximize seating, reduce wait times, and create smoother dining experiences.

                        This experience gave me the chance to apply my skills to a live project, collaborate with
                        professionals, and see how technology can directly improve people’s everyday lives.
                    </p>



                    <ul className='flex flex-wrap gap-6 justify-start'>
                        {infoList.map(({ icon, title, description }, index) => (
                            <li
                                key={index}
                                className='w-44 border border-gray-300 rounded-lg p-4 cursor-pointer 
                       hover:shadow-md hover:-translate-y-1 transition-all bg-white'
                            >
                                <Image src={icon} alt={title} className='w-6 mb-3' />
                                <h3 className='font-semibold text-gray-800 text-sm'>{title}</h3>
                                <p className='text-gray-600 text-xs mt-1'>{description}</p>
                            </li>
                        ))}
                    </ul>


                    <h4 className='mt-8 font-semibold text-lg'>Tools I use</h4>
                    <ul className='flex gap-4 flex-wrap'>
                        {toolsData.map((tool, index) => (
                            <li
                                key={index}
                                className='w-16 h-16 flex items-center justify-center border border-gray-300 
                       rounded-lg cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all bg-white'
                            >
                                <Image src={tool} alt={`Tool ${index + 1}`} className='w-8 h-8 object-contain' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default About