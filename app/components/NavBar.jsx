import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'




const NavBar = () => {
    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt="Blur Effect" className='w-full' />
            </div>
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">M</span>
                    </div>
                    <h1 className="text-2xl font-extrabold text-black tracking-wide">
                        MANSHA
                    </h1>
                </div>


                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 '>
                    <li><a className='text-black hover:text-gray-700' href="#top">Home</a></li>
                    <li><a className='text-black hover:text-gray-700' href="#about">About</a></li>
                    <li><a className='text-black hover:text-gray-700' href="#skills">Skills</a></li>
                    <li><a className='text-black hover:text-gray-700' href="#experience">Experience</a></li>
                    <li><a className='text-black hover:text-gray-700' href="#projects">Projects</a></li>
                    <li><a className='text-black hover:text-gray-700' href="#contact">Contact</a></li>
                </ul>

                <div>
                    <a href="#contact" className=' hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact <Image src={assets.arrow_icon} className='w-3' alt="Arrow Icon" /></a>
                </div>
            </nav>

        </>
    )
}

export default NavBar