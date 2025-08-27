import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'




const NavBar = () => {
    const[isScroll,setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openSideMenu = () => {
        sideMenuRef.current.classList.remove('translate-x-full');
    }
    const closeSideMenu = () => {
        sideMenuRef.current.classList.add('translate-x-full');
    }
    useEffect(() => {
     window.addEventListener('scroll', () => {
         if (window.scrollY > 50) {
                setIsScroll(true);
         } else {
             setIsScroll(false);
         }
     });
    },[])
    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt="Blur Effect" className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white/70 backdrop-blur-lg shadow-sm' : ''}`}>
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">M</span>
                    </div>
                    <h1 className="text-2xl font-extrabold text-black tracking-wide">
                        MANSHA
                    </h1>
                </div>


                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScroll ? '' : 'bg-white/70 shadow-sm backdrop-blur-lg'}`}>
                    <li><a className="text-black hover:text-gray-700 Ovo" href="#top">Home</a></li>
                    <li><a className="text-black hover:text-gray-700 Ovo" href="#about">About</a></li>
                    <li><a className="text-black hover:text-gray-700 Ovo" href="#skills">Skills</a></li>
                    <li><a className="text-black hover:text-gray-700 Ovo" href="#experience">Experience</a></li>
                    <li><a className="text-black hover:text-gray-700 Ovo" href="#projects">Projects</a></li>
                    <li><a className="text-black hover:text-gray-700 Ovo" href="#contact">Contact</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                   <button>
                     <Image src={assets.moon_icon} className='w-6 ' alt="Moon Icon" />
                   </button>

                    <a href="#contact" className=' hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 Ovo'>Contact <Image src={assets.arrow_icon} className='w-3' alt="Arrow Icon" /></a>

                    <button onClick={openSideMenu} className='block md:hidden'>
                        <Image src={assets.menu_black} className='w-6' alt="Menu Icon" />
                    </button>
                </div>

                {/*-----Mobile Menu-----*/}

                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-6 py-24 px-8 fixed top-0 right-0 w-64 h-screen z-50 
                    bg-gradient-to-b from-white via-rose-50 to-rose-100 shadow-2xl 
                    transform translate-x-full transition-transform duration-500 ease-in-out">


                    <button onClick={closeSideMenu} className="absolute top-5 right-5 text-gray-600 hover:text-black text-2xl font-bold">
                        ✕
                    </button>

                    <li>
                        <a className="block px-4 py-3 rounded-xl text-lg  text-gray-800 Ovo" href="#top" onClick={closeSideMenu}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="block px-4 py-3 rounded-xl text-lg  text-gray-800 Ovo" href="#about" onClick={closeSideMenu}>
                            About
                        </a>
                    </li>
                    <li>
                        <a className="block px-4 py-3 rounded-xl text-lg  text-gray-800 Ovo" href="#skills" onClick={closeSideMenu}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a className="block px-4 py-3 rounded-xl text-lg  text-gray-800 Ovo" href="#experience" onClick={closeSideMenu}>
                            Experience
                        </a>
                    </li>
                    <li>
                        <a className="block px-4 py-3 rounded-xl text-lg  text-gray-800 Ovo" href="#projects" onClick={closeSideMenu}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="block px-4 py-3 rounded-xl text-lg  text-gray-800 Ovo" href="#contact" onClick={closeSideMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default NavBar