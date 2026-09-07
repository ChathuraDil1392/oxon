import React from 'react';
import aboutus from '../assets/aboutus.jpg'

const AboutUs: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content Column */}
                <div className="flex flex-col space-y-4 max-w-xl">
                    <span className="text-blue-900 font-bold text-sm tracking-wide uppercase">
                        About us
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        Oxon Maldives Pvt. Ltd
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                        <span className="font-bold text-gray-900 underline underline-offset-2">Oxon Maldives Pvt Ltd</span> is a Maldives-registered technology integrator
                        specializing in smart automation for homes and hospitality spaces. We offer
                        end-to-end solutions from design and supply to installation and support combining
                        reliable hardware, software, and user-focused design. As the <span className="font-bold text-gray-900 underline underline-offset-2">Exclusive Orbita partner</span> and an <span className="font-bold text-gray-900 underline underline-offset-2">Authorized TIS seller</span> in the Maldives, we bring
                        globally trusted automation technologies to local projects, helping property
                        owners enhance comfort, reduce operating costs, and future-proof their spaces.
                    </p>

                    <div className="pt-4">
                        <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium text-sm py-3 px-5 transition-colors duration-200 shadow-sm rounded-xl">
                            Explore More...
                        </button>
                    </div>
                </div>

                {/* Right Image Column */}
                <div className="group w-full h-87.5 md:h-112.5 overflow-hidden rounded-md">
                    <img
                        src={aboutus}
                        alt="Smart home door lock automation"
                        className="w-full h-full object-cover transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
