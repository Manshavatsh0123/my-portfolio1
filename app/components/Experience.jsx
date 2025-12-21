import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { SiReact } from 'react-icons/si'

const Experience = () => {
  return (
    <div id="experience" className="w-full px-[12%] py-16 scroll-mt-20 bg-gray-50">

      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-wide Ovo">
          My Experience
        </h1>

        <p className="mt-4 text-gray-600 sm:text-lg max-w-3xl mx-auto leading-relaxed">
          I’ve worked on real-world projects and internships, building websites and applications that solve problems and make life easier.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* ReserveOcean Internship */}
        <div className="bg-white backdrop-blur-md p-8 px-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center shadow-md mr-5">
              <SiReact className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold Ovo">
                Frontend Developer (Intern)
              </h2>
              <span className="text-gray-500 text-sm sm:text-base">
                Sep 2025 – Present
              </span>
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
            {`Currently working as a Frontend Intern at ReserveOcean Ltd., a UK-based product company building modern technology solutions for the hospitality industry.\n
• Improved the UI of the company’s main product website to enhance clarity, usability, and overall user experience.\n
• Built clean, reusable, and scalable frontend components for key pages such as Home, Services, About, and List Your Restaurant.\n
• Ensured 100% responsive design across all devices.\n
• Collaborated with design and backend teams.\n
• Tech Stack: React.js, Next.js, Tailwind CSS, Git.`}
          </p>

          <a
            href="https://reserveocean-main-product-repo.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-gray-500 text-gray-700 hover:bg-gray-100 transition-all mt-5"
          >
            <span>View Live Project</span>
            <Image src={assets.right_arrow_bold} alt="View" className="w-4 h-4" />
          </a>
        </div>


        <div className="bg-white backdrop-blur-md p-8 px-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center shadow-md mr-5">
              <SiReact className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold Ovo">
                MERN Stack Developer (Intern)
              </h2>
              <span className="text-gray-500 text-sm sm:text-base">
                March 2025 – August 2025
              </span>
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
            {`Completed a 6-month internship at Concrete Software Solutions Pvt. Ltd., working on the Let Us Nudge platform.\n
• Fixed and improved the UI of the restaurant page, making tables and layouts more user-friendly.\n
• Created the “Participating Restaurants” page, showcasing different types of restaurants like family-owned and popular restaurant chains.\n
• Improved the UI of the About/Team page, making it clean, readable, and visually appealing.\n
• Integrated APIs and optimized performance.\n
• Tech Stack: React.js, Next.js, Tailwind CSS, Git.`}
          </p>

          <a
            href="/Letter of Exp_Mansha.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-gray-500 text-gray-700 hover:bg-gray-100 transition-all mt-5"
          >
            <span>Download Experience Letter</span>
            <Image src={assets.download_icon} alt="Download" className="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>

  )
}

export default Experience