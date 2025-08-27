import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 py-8 mt-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center">

                <div className="flex items-center space-x-3 mb-4 cursor-pointer">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">M</span>
                    </div>
                    <h1 className="text-lg sm:text-xl font-extrabold text-black tracking-wide">
                        MANSHA
                    </h1>
                </div>

                <hr className="w-full max-w-xs border-gray-300 mb-4" />
                <p className="text-gray-500 text-sm text-center">
                    &copy; {new Date().getFullYear()} Mansha. All rights reserved.
                </p>
            </div>
        </footer>

    )
}

export default Footer