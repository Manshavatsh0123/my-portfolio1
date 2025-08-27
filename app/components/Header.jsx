import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 px-4'>
            <div>
                <Image
                    src={assets.user_image}
                    alt="Mansha Image"
                    width={150}
                    height={150}
                    className="rounded-full shadow-lg mt-9"
                />
            </div>


            <h3 className='flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl Ovo'>
                Hi 👋 I'm <span className="font-bold text-black">Mansha Vatsh</span>
                <Image src={assets.hand_icon} alt="hand icon" className='w-5 sm:w-6' />
            </h3>


            <h1 className='text-2xl sm:text-4xl lg:text-[66px] Ovo font-extrabold leading-snug'>
                MERN Stack Developer
            </h1>


            <p className='max-w-md sm:max-w-2xl mx-auto Ovo text-gray-600 leading-relaxed text-sm sm:text-base'>
                I’m a developer who enjoys building clean, responsive, and easy-to-use web applications.
                Working with <span className="font-semibold">MongoDB, Express.js, React, and Node.js</span>,
                I focus on creating apps that not only work well but also give a smooth experience to users.
                Turning ideas into something real and useful is what keeps me motivated.
            </p>


            <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-3'>
                <a href="#contact" className='px-8 py-2.5 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition text-sm sm:text-base'>
                    Contact Me
                    <Image src={assets.right_arrow_white} alt="Right Arrow" className='w-4' />
                </a>
                <a href="/Mansha_Vatsh.pdf" download className='px-8 py-2.5 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition text-sm sm:text-base'>
                    My Resume
                    <Image src={assets.download_icon} alt="Resume" className='w-4' />
                </a>
            </div>
        </div>


    )
}

export default Header