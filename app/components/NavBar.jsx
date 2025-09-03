import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { SiGithub, SiLeetcode, SiLinkedin } from 'react-icons/si';




const NavBar = () => {
    const [isScroll, setIsScroll] = useState(false);
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
    }, [])
    return (
        <>
            <div className="fixed top-0 right-0 w-full -z-10 translate-y-[-75%]">
                <Image
                    src={assets.header_bg_color}
                    alt="Blur Effect"
                    className="w-full object-cover"
                />
            </div>

            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll
                    ? "bg-white/80 backdrop-blur-lg shadow-md"
                    : "bg-transparent"
                    }`}
            >
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-lg font-bold">M</span>
                    </div>
                    <h1 className="text-2xl font-extrabold text-black tracking-wide">
                        MANSHA
                    </h1>
                </div>

                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-10 rounded-full px-10 py-2 transition-all duration-300 ${isScroll ? "bg-transparent" : "bg-white/70 shadow-sm backdrop-blur-md"
                        }`}
                >
                    <li>
                        <a
                            className="text-gray-800 hover:text-black Ovo transition-colors"
                            href="#top"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-gray-800 hover:text-black Ovo transition-colors"
                            href="#about"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-gray-800 hover:text-black Ovo transition-colors"
                            href="#skills"
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-gray-800 hover:text-black Ovo transition-colors"
                            href="#projects"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-gray-800 hover:text-black Ovo transition-colors"
                            href="#experience"
                        >
                            Experience
                        </a>
                    </li>
                </ul>


                <div className="flex items-center gap-5">
                    <a
                        href="https://www.linkedin.com/in/mansha-vatsh88/"
                        target="_blank"
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <SiLinkedin className="w-7 h-7 text-[#0A66C2]" />
                    </a>

                    <a
                        href="https://github.com/Manshavatsh0123?tab=repositories"
                        target="_blank"
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <SiGithub className="w-7 h-7 text-black" />
                    </a>

                    <a
                        href="https://leetcode.com/u/Mansha_vatsh9/"
                        target="_blank"
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <SiLeetcode className="w-7 h-7 text-black" />
                    </a>

                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-2 px-8 py-2.5 border border-gray-400 rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
                    >
                        Contact
                        <Image
                            src={assets.arrow_icon}
                            className="w-3"
                            alt="Arrow Icon"
                        />
                    </a>

                    <button onClick={openSideMenu} className="block md:hidden">
                        <Image
                            src={assets.menu_black}
                            className="w-7"
                            alt="Menu Icon"
                        />
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