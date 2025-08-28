import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiReact } from 'react-icons/si'

const page = () => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20 bg-gray-50'>
      <h1 className="text-center text-3xl sm:text-4xl font-bold Ovo text-gray-900 mb-4">My Work</h1>
      <p className="text-center mx-auto max-w-2xl text-gray-600 text-base sm:text-lg mt-3 mb-6 Ovo">
        A showcase of my recent projects and contributions.
      </p>
      <p className="text-center mx-auto max-w-2xl text-gray-500 text-sm sm:text-base leading-relaxed Ovo">
        Explore a selection of my recent work, highlighting my skills and dedication to quality.
      </p>

      <div className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto mt-10">


        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mr-5">
            <SiNodedotjs className="w-7 h-7 text-green-500" />
          </div>
          <div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold Ovo">WanderNest</h2>
            <span className="text-gray-500 text-sm sm:text-base">Node.js , Express , EJS Templates</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
          Travel booking web app.{"\n\n"}
          <strong>Features:</strong>{"\n"}
          • Property/stay listings with details.{"\n"}
          • Booking functionality.{"\n"}
          • User authentication and profile management.{"\n"}
          • Easy and efficient navigation.{"\n"}
          • Tech Stack: Node.js , Express , EJS Templates.
        </p>
      </div>

      <div className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto mt-10">


        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mr-5">
            <SiNextdotjs className="w-7 h-7 text-black" />
          </div>
          <div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold Ovo">next-rental-app</h2>
            <span className="text-gray-500 text-sm sm:text-base">Next.js (JavaScript, Tailwind CSS)</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
          Rental property platform.{"\n\n"}
          <strong>Features:</strong>{"\n"}
          • Browse & filter rental properties.{"\n"}
          • Property detail pages.{"\n"}
          • Responsive, user-friendly layout.{"\n"}
          • Tech Stack: Next.js , JavaScript , Tailwind CSS.
        </p>

      </div>

      <div className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto mt-10">


        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mr-5">
            <SiReact className="w-7 h-7 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold Ovo">QuickStay</h2>
            <span className="text-gray-500 text-sm sm:text-base">React.js (JavaScript, Tailwind CSS)</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
          Stay/room booking application.{"\n\n"}
          <strong>Features:</strong>{"\n"}
          • User login & authentication.{"\n"}
          • Property listings & bookings.{"\n"}
          • Smooth React-based frontend.{"\n"}
          • Tech Stack: React.js, JavaScript, Tailwind CSS.
        </p>

      </div>

      <div className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto mt-10">


        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mr-5">
            <SiReact className="w-7 h-7 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold Ovo">UberGo</h2>
            <span className="text-gray-500 text-sm sm:text-base">MERN Stack(React.js frontend, Express.js backend, MongoDB)</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
          Cab booking app inspired by Uber.{"\n\n"}
          <strong>Features:</strong>{"\n"}
          • Real-time ride updates (Socket.io).{"\n"}
          • Fare calculation system.{"\n"}
          • Ride confirmation flow.{"\n"}
          • Tech Stack: React.js, Express , Socket.io , MongoDB , Axios.
        </p>

      </div>

      <div className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto mt-10">


        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mr-5">
            <SiReact className="w-7 h-7 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold Ovo">ReactCart</h2>
            <span className="text-gray-500 text-sm sm:text-base">React.js</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
          Shopping cart system.{"\n\n"}
          <strong>Features:</strong>{"\n"}
          • Product listing and details.{"\n"}
          • Shopping cart functionality.{"\n"}
          • Tech Stack: React.js, JavaScript, Tailwind CSS.
        </p>

      </div>

      <div className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto mt-10">


        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mr-5">
            <SiJavascript className="w-7 h-7 text-yellow-400" />
          </div>
          <div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold Ovo">E-Commerce</h2>
            <span className="text-gray-500 text-sm sm:text-base">HTML, CSS, JavaScript</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
          Basic e-commerce site.{"\n\n"}
          <strong>Features:</strong>{"\n"}
          • Product listing and details.{"\n"}
          • Shopping cart functionality.{"\n"}
          • Tech Stack: HTML, CSS, JavaScript.
        </p>
      </div>

      <div className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto mt-10">


        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mr-5">
            <SiJavascript className="w-7 h-7 text-yellow-400" />
          </div>
          <div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold Ovo">90s-Melody-Hub</h2>
            <span className="text-gray-500 text-sm sm:text-base">HTML, CSS, JavaScript</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
          Front-end clone of Spotify.{"\n\n"}
          <strong>Features:</strong>{"\n"}
          • Play and browse songs.{"\n"}
          • Play and browse songs.{"\n"}
          • 90s-inspired UI design.{"\n"}
          • Tech Stack: HTML, CSS, JavaScript.
        </p>
      </div>

      <div className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto mt-10">

        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mr-5">
            <SiJavascript className="w-7 h-7 text-yellow-400" />
          </div>
          <div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold Ovo">
              Clone
            </h2>
            <span className="text-gray-500 text-sm sm:text-base">HTML, CSS, JavaScript</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
          Front-end clone of Spotify.{"\n\n"}
          <strong>Features:</strong>{"\n"}
          • Music player interface.{"\n"}
          • Playlist and song list layout.{"\n"}
          • Tech Stack: HTML, CSS, JavaScript.
        </p>


      </div>

      <div className="flex justify-center mt-10">
        <a
          href="/"
          className="px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition text-base font-medium"
        >
          Back to Home Page
          <Image src={assets.arrow_icon} alt="Home" className="w-5" />
        </a>
      </div>


    </div>
  )
}

export default page