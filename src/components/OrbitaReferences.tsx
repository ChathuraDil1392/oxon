import React, { useState, useEffect } from 'react';
import reference from "../assets/reference.jpg";
import reference_1 from "../assets/references_1.jpg";
import reference_2 from "../assets/references_2.webp";
import reference_3 from "../assets/references_3.jpg";
import reference_4 from "../assets/references_4.webp";
import reference_5 from "../assets/references_5.jpg";
import reference_6 from "../assets/references_6.jpg";

import {
    FiHome,
    FiBriefcase,
    FiBookOpen,
    FiActivity,
    FiShield,
    FiKey,
    FiCpu
} from 'react-icons/fi';

interface ReferenceTab {
    id: number;
    icon: React.ReactNode;
    imageUrl: string;
    altText: string;
}

const OrbitaReferences: React.FC = () => {
    const tabs: ReferenceTab[] = [
        {
            id: 0,
            icon: <FiHome className="w-4 h-4" />,
            imageUrl: reference,
            altText: "Home security system visualization"
        },
        {
            id: 1,
            icon: <FiBriefcase className="w-4 h-4" />,
            imageUrl: reference_1,
            altText: "Corporate office building access points"
        },
        {
            id: 2,
            icon: <FiBookOpen className="w-4 h-4" />,
            imageUrl: reference_2,
            altText: "School and institutional lock infrastructure"
        },
        {
            id: 3,
            icon: <FiActivity className="w-4 h-4" />,
            imageUrl: reference_3,
            altText: "Industrial network dashboard"
        },
        {
            id: 4,
            icon: <FiShield className="w-4 h-4" />,
            imageUrl: reference_4,
            altText: "Advanced security protocols grid"
        },
        {
            id: 5,
            icon: <FiKey className="w-4 h-4" />,
            imageUrl: reference_5,
            altText: "Smart door electronic locking mechanics"
        },
        {
            id: 6,
            icon: <FiCpu className="w-4 h-4" />,
            imageUrl: reference_6,
            altText: "Hardware automation integration map"
        }
    ];

    const [activeTab, setActiveTab] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
        }, 3000); // Increased slightly to 3s to give room for the calm transition duration

        return () => clearInterval(interval);
    }, [activeTab, tabs.length]);

    return (
        <section className="w-full bg-[#fafafa] py-16 px-6 md:px-12 lg:px-24 overflow-hidden relative">

            {/* Far-Right Decorative Concentric Circles */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-100 h-100 rounded-full border border-gray-200/60 pointer-events-none hidden xl:block">
                <div className="absolute inset-8 rounded-full border border-gray-200/50" />
                <div className="absolute inset-16 rounded-full border border-gray-200/40" />
                <div className="absolute inset-24 rounded-full border border-gray-200/30" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content Column */}
                <div className="flex flex-col space-y-5 max-w-xl">
                    <span className="text-blue-900 font-bold text-sm tracking-wide">
                        Our ORBITA'S References
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                        Securing every place that matters
                    </h2>

                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-normal">
                        Your safety is our priority. From homes and offices to schools and industries,
                        our advanced lock systems are built to protect what's most valuable to you.
                        Smart technology, reliable design, and seamless access — all in one secure solution.
                    </p>

                    <div className="pt-2">
                        <button className=" rounded-lg bg-blue-950 hover:bg-blue-900 text-white font-medium text-sm py-3 px-8 transition-colors duration-200 shadow-sm">
                            Explore More
                        </button>
                    </div>
                </div>

                {/* Right Graphic/Image Column with Locked Dimensions */}
                <div className="relative w-full h-80 sm:h-100 rounded-lg overflow-hidden shadow-sm flex flex-col justify-between bg-black">

                    {/* Image Stack Layer - Renders all images for a perfect cross-fade */}
                    <div className="absolute inset-0 w-full h-full pb-12">
                        {tabs.map((tab) => (
                            <img
                                key={tab.id}
                                src={tab.imageUrl}
                                alt={tab.altText}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-900 ease-in-out ${activeTab === tab.id ? 'opacity-100 z-0' : 'opacity-20 -z-10'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Floating White Navigation/Icon Bar at the bottom */}
                    <div className="w-full mt-auto bg-blue-950 p-3 flex justify-center z-10 rou">
                        <div className="w-[85%] bg-blue-950 rounded-sm py-1 px-6 flex items-center justify-between text-gray-400 shadow-md">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`transition-all p-1.5 rounded-md duration-500 ease-in-out cursor-pointer focus:outline-none ${activeTab === tab.id
                                        ? 'text-blue-900 bg-blue-50 scale-110 font-bold'
                                        : 'hover:text-gray-100 text-gray-400'
                                        }`}
                                    aria-label={`View tab ${tab.id + 1}`}
                                >
                                    {tab.icon}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default OrbitaReferences;
