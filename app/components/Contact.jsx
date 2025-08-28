import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'


const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8f8221cc-093c-4cbc-87d6-f57e1cc13d5a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div
            id="contact"
            className="w-full px-6 sm:px-[12%] py-20 scroll-mt-20 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url("/footer.png")' }}
        >

            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold Ovo text-gray-900 mb-4">
                    Let's Connect!
                </h1>

                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-2 Ovo">
                    I’d love to hear from you — whether it’s a project idea, a collaboration, or just a friendly hello!
                </p>

                <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed Ovo">
                    Welcome to my web development portfolio! Browse through a selection of my projects that showcase creativity, innovation, and functionality. Let’s build something incredible together.
                </p>
            </div>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto mt-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        name="name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 outline-none bg-white text-base sm:text-sm transition"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        name="email"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 outline-none bg-white text-base sm:text-sm transition"
                    />
                </div>

                <textarea
                    placeholder="Your Message"
                    required
                    name="message"
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 outline-none bg-white text-base sm:text-sm transition resize-none"
                ></textarea>

                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 py-3 px-8 bg-gray-800 text-white rounded-full mx-auto hover:bg-gray-700 transition duration-300 text-base sm:text-sm"
                >
                    Send Message
                    <Image
                        src={assets.right_arrow_white}
                        alt="Send Icon"
                        width={20}
                        height={20}
                        className="invert"
                    />
                </button>

                <p className="mt-4 text-center text-gray-500 text-sm">{result}</p>
            </form>
        </div>


    )
}

export default Contact