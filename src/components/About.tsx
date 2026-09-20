import worker_1 from "../assets/worker_1.png"
import oxon from '../assets/oxon.webp'
import tech_2 from '../assets/tech_2.avif'
import home from '../assets/home.png'
import oxon_logo from '../assets/oxon_logo_small.jpg'
import orbita from '../assets/orbita.jpg'
import tis from '../assets/tis.jpg'
import lsvision from '../assets/lsvision.png'
import zkt from '../assets/zkt.jpg'
import gvs from '../assets/gvs.jpg'
import { useState } from "react";

interface TimelineYear {
    year: number;
    title: string;
    image: string;
}

interface StrategyItem {
    id: string;
    tag: string;
    title: string;
    // 3D placeholder graphic using Lucide icons for structure, 
    // you can swap these for custom 3D PNG/SVG assets.
    icon: React.ReactNode;
    isActive?: boolean;
}

interface BrandLogo {
    name: string;
    image: string;
}

const stats = [
    { value: '10k+', label: 'Completed Projects' },
    { value: '15k', label: 'Satisfied Customers' },
    { value: '10k+', label: 'Years Of Mastery' },
    { value: '45+', label: 'Worldwide Honors' },
];

const teamAvatars = [
    tech_2,
    worker_1,
    oxon,]


const About = () => {
    const timelineData: TimelineYear[] = [
        { year: 2000, title: 'Establishment & Foundation', image: oxon_logo },
        { year: 2005, title: 'Expanding Our Horizons', image: oxon_logo },
        { year: 2010, title: 'Going Global Innovation', image: oxon_logo },
        { year: 2018, title: 'Orbita Exclusive Seller for Maldives', image: oxon_logo },
        { year: 2023, title: 'The AI and Pixel Era', image: oxon_logo },
        { year: 2026, title: 'Associated With ZKT', image: oxon_logo },
    ];

    const strategies: StrategyItem[] = [
        {
            id: 'resolution',
            tag: 'RESOLUTION',
            title: 'Our Experts Deliver All Solutions',
            isActive: true, // Highlights the first item in red by default as shown in the image
            icon: (
                <svg className="w-24 h-24 text-neutral-800 drop-shadow-xl" viewBox="0 0 24 24" fill="currentColor">
                    {/* 3D Tetrahedron/Pyramid representation */}
                    <path d="M12 2L2 18h20L12 2zm0 4.5L18.5 16.5h-13L12 6.5z" opacity="0.8" />
                    <path d="M12 2v14.5L2 18 12 2z" fill="black" opacity="0.2" />
                </svg>
            ),
        },
        {
            id: 'reputable',
            tag: 'REPUTABLE',
            title: 'Develop, Engross & Fulfill Service',
            icon: (
                <svg className="w-20 h-20 text-neutral-900 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                    {/* Isometric 3D Cube representation */}
                    <path d="M12 2.2L3.5 7v10l8.5 4.8 8.5-4.8V7L12 2.2zM5.5 8.1L12 4.4l6.5 3.7-6.5 3.7-6.5-3.7zm13 7.8l-5.5 3.1v-6.2l5.5-3.1v6.2z" />
                </svg>
            ),
        },
        {
            id: 'assistance',
            tag: 'ASSISTANCE',
            title: '24/7 Instantaneous Customer Service',
            icon: (
                <svg className="w-20 h-20 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    {/* Organic 3D bean/curved tube representation */}
                    <path d="M7 17c-2-2-3-4.5-3-7a8 8 0 0 1 16 0c0 2.5-1 5-3 7" />
                </svg>
            ),
        },
        {
            id: 'reach',
            tag: 'REACH',
            title: 'Conveniently Reachable Globally',
            icon: (
                <svg className="w-20 h-20 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    {/* Spiral/Abstract line strand representation */}
                    <path d="M12 3c-3 2-5 5-3 8s6 1 5 4-5 4-4 6" />
                </svg>
            ),
        },
    ];

    const brands: BrandLogo[] = [
        {
            name: 'Orbita',
            image: orbita,
        },
        {
            name: 'TIS',
            image: tis
        },
        {
            name: 'LSVision',
            image: lsvision
        },

        {
            name: 'GVS',
            image: gvs
        },
        {
            name: 'ZKT',
            image: zkt
        },

    ];

    const [activeIdx, setActiveIdx] = useState<number>(5);
    return (
        <>
            <section className="bg-blue-950 text-white py-20 px-6 md:px-16 font-sans">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column */}
                    <div className="lg:col-span-6 space-y-10">
                        {/* Header Tag */}
                        <div className="flex items-center space-x-1">
                            <p className="text-amber-400 uppercase tracking-widest text-lg font-semibold mb-4">
                                About Oxon Tech
                            </p>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight max-w-xl">
                            Your Vision Our Expertise Your Success Get Noticed Generate{' '}
                            <span className="text-blue-400">Leads Dominate.</span>
                        </h2>

                        {/* Large Feature Image Block */}
                        <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-neutral-900 group">
                            <img
                                src={tech_2}
                                alt="Team collaboration"
                                className="w-full h-full object-cover grayscale-0 opacity-80 group-hover:grayscale transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-6 space-y-12 lg:pt-16">
                        {/* Top Row Smaller Images */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Tech Blog Card 1 */}
                            <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-neutral-900">
                                <div className="absolute top-4 left-4 z-10 flex space-x-2">
                                    <span className="bg-black/60 backdrop-blur-md text-[10px] px-3 py-1 rounded-full text-white font-medium">Tech Blog</span>
                                    <span className="bg-black/60 backdrop-blur-md text-[10px] px-3 py-1 rounded-full text-gray-300">Trends</span>
                                </div>
                                <img
                                    src={worker_1}
                                    alt="Professional woman"
                                    className="w-full h-full object-cover grayscale-0 hover:grayscale"
                                />
                            </div>

                            {/* Tech Blog Card 2 */}
                            <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-neutral-900">
                                <div className="absolute top-4 left-4 z-10 flex space-x-2">
                                    <span className="bg-black/60 backdrop-blur-md text-[10px] px-3 py-1 rounded-full text-white font-medium">Tech Blog</span>
                                    <span className="bg-black/60 backdrop-blur-md text-[10px] px-3 py-1 rounded-full text-gray-300">Trends</span>
                                </div>
                                <img
                                    src={oxon}
                                    alt="Office workspace"
                                    className="w-full h-full object-cover grayscale-0 hover:grayscale"
                                />
                            </div>
                        </div>

                        {/* Paragraph Description */}
                        <p className="text-white/90 text-sm leading-relaxed max-w-xl">
                            Tempor commodo ullamcorper a lacus. Amet commodo nulla facilisi nullam. Molestie
                            nunc non blandit massa enim nec. Felis bibendum ut tristique et egestas quis ipsum
                            suspendisse ultrices. Eros in cursus turpis massa tincidunt dui.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 border-t border-blue-600 pt-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="text-3xl font-bold tracking-tight">{stat.value}</div>
                                    <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Video CTA Row */}
                        <div className="flex items-center space-x-6 pt-4">
                            <div className="flex -space-x-3">
                                {teamAvatars.map((url, idx) => (
                                    <img
                                        key={idx}
                                        className="w-10 h-10 rounded-full border-2 border-[#121212] object-cover"
                                        src={url}
                                        alt="Team member"
                                    />
                                ))}
                            </div>
                            <button className="flex items-center space-x-3 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 group-hover:bg-white group-hover:border-white transition-colors duration-300">
                                    <svg
                                        className="w-4 h-4 text-white group-hover:text-black fill-current translate-x-px transition-colors duration-300"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="text-xs uppercase tracking-widest font-bold group-hover:text-gray-300 transition-colors">
                                    Watch Intro
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-slate-900 text-white py-20 px-6 md:px-16 font-sans overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Side Content & Timeline Layout */}
                    <div className="lg:col-span-6 space-y-8">
                        <div className="flex items-center space-x-2">
                            <p className="text-amber-400 uppercase tracking-widest text-lg font-semibold mb-4">Our Story</p>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight max-w-xl">
                            Your Gateway To <span className="text-blue-400">Online Excellence</span> Dream Big In Pixels.
                        </h2>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            Lectus Vestibulum Mattis Ullamcorper Velit Sed Ullamcorper. Ac Ut Consequat Semper
                            Viverra Nam. Morbi Tristique Senectus Et Netus Et Malesuada Fames. Diam Maecenas
                            Ultricies Mi Eget.
                        </p>

                        <button className="bg-blue-900 text-white px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-blue-950 transition-colors duration-300 shadow-lg shadow-red-900/20 cursor-pointer">
                            Know More
                        </button>

                        {/* Interactive Timeline Core */}
                        <div className="pt-10 space-y-6 max-w-xl">
                            {/* Dynamic Thumbnail Preview Card */}
                            <div className="flex items-center space-x-4 pl-2 h-16">
                                <img
                                    src={timelineData[activeIdx].image}
                                    alt={timelineData[activeIdx].title}
                                    className="w-14 h-14 object-cover rounded-xl border border-neutral-700 transition-all duration-300 scale-95"
                                />
                                <div className="space-y-0.5">
                                    <div className="text-xs font-bold text-gray-400">Timeline Node Details</div>
                                    <div className="text-sm font-semibold text-white">{timelineData[activeIdx].title}</div>
                                </div>
                            </div>

                            {/* Horizontal Timeline Track */}
                            <div className="relative pt-4">
                                {/* Background Line */}
                                <div className="absolute top-6 left-0 right-0 h-0.5 bg-neutral-800"></div>

                                {/* Active Fill Line */}
                                <div
                                    className="absolute top-6 left-0 h-0.5 bg-blue-400 transition-all duration-500 ease-out"
                                    style={{ width: `${(activeIdx / (timelineData.length - 1)) * 100}%` }}
                                ></div>

                                {/* Milestones nodes */}
                                <div className="relative flex justify-between items-center">
                                    {timelineData.map((item, idx) => {
                                        const isActive = idx === activeIdx;
                                        return (
                                            <div
                                                key={item.year}
                                                className="flex flex-col items-center cursor-pointer group"
                                                onClick={() => setActiveIdx(idx)}
                                            >
                                                {/* Interactive Circle Indicator */}
                                                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#1c1c1c] z-10 transition-transform duration-300 group-hover:scale-110">
                                                    <div className={`rounded-full transition-all duration-300 ${isActive
                                                        ? 'w-4 h-4 bg-blue-600 ring-4 ring-blue-600/20'
                                                        : 'w-2.5 h-2.5 bg-neutral-600 group-hover:bg-gray-400'
                                                        }`} />
                                                </div>

                                                {/* Timeline Year text label */}
                                                <span className={`text-xs font-bold mt-4 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                                                    }`}>
                                                    {item.year}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Visual Collage Block */}
                    <div className="lg:col-span-6 relative flex justify-center items-center">
                        <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl w-full max-w-xl aspect-4/3">
                            <img
                                src={home}
                                alt="Design iteration environment"
                                className="w-full h-full object-cover scale-100 opacity-90"
                            />

                            {/* Spinning Floating Circular Badge */}
                            <div className="absolute bottom-12 left-12 group cursor-pointer z-20">
                                <div className="relative w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-2xl border border-neutral-800">
                                    {/* SVG Text Wrapper */}
                                    <svg className="absolute w-full h-full animate-[spin_12s_linear_infinite] p-1.5" viewBox="0 0 100 100">
                                        <defs>
                                            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                        </defs>
                                        <text className="fill-white text-[8px] font-bold uppercase tracking-[2px]">
                                            <textPath href="#circlePath" startOffset="0%">
                                                Get In Touch • Get In Touch •
                                            </textPath>
                                        </text>
                                    </svg>

                                    {/* Center Core Arrow Directional Graphic */}
                                    <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                        <svg className="w-4 h-4 text-white transform -rotate-45" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-[#121212] text-white py-24 px-6 md:px-16 font-sans">
                <div className="max-w-7xl mx-auto space-y-16 flex flex-col items-center">

                    {/* Section Header */}
                    <div className="text-center space-y-4">
                        <div className="flex items-center justify-center space-x-2">
                            <p className="text-amber-400 uppercase tracking-widest text-lg font-semibold mb-4">Our Portfolio</p>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Thoughtful Digital <span className="text-blue-400">Strategies</span>
                        </h2>
                    </div>

                    {/* Strategy Capsule Cards Grid */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
                        {strategies.map((item) => (
                            <div
                                key={item.id}
                                className={`relative rounded-[7rem] p-4 aspect-1/1.5 flex flex-col items-center justify-between text-center transition-all duration-300 group cursor-pointer ${item.isActive
                                    ? 'bg-blue-900 text-white shadow-xl shadow-red-950/20'
                                    : 'bg-white text-black hover:bg-blue-900 hover:text-white hover:shadow-xl hover:scale-[1.02]'
                                    }`}
                            >
                                {/* Graphic container */}
                                <div className="h-1/2 flex items-center justify-center pt-6">
                                    <div className={`transition-transform duration-500 group-hover:rotate-6 ${item.isActive ? 'brightness-0 invert' : 'group-hover:brightness-0 group-hover:invert'
                                        }`}>
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Text Description Stack */}
                                <div className="space-y-3 px-2 pb-4">
                                    <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${item.isActive ? 'text-white/80' : 'text-neutral-500 group-hover:text-white/80'
                                        }`}>
                                        {item.tag}
                                    </span>

                                    <h3 className="text-lg font-bold leading-snug tracking-tight px-1">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Action Link Arrow Icon */}
                                <div className="pb-6">
                                    <svg
                                        className={`w-5 h-5 transform transition-transform duration-300 ${item.isActive
                                            ? 'text-white translate-x-0 translate-y-0'
                                            : 'text-neutral-800 rotate-45 group-hover:rotate-0 group-hover:text-white'
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="bg-[#1c1c1c] text-white py-20 px-6 md:px-16 font-sans">
                <div className="max-w-7xl mx-auto space-y-14 flex flex-col items-center">

                    {/* Top Minimalistic Header Indicator */}
                    <div className="text-center space-y-3">
                        <div className="flex items-center justify-center space-x-2">
                            <p className="text-amber-400 uppercase tracking-widest text-lg font-semibold mb-4">Collaborative Brands</p>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Worldwide Digital <span className="text-blue-400">Brand</span> Associates
                        </h2>
                    </div>

                    {/* Modular Grid System for Logos */}
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-neutral-800/60 rounded-2xl overflow-hidden">
                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-5 m-0.5 bg-white min-h-10 group hover:scale-95 transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"

                            >
                                <img className=" transition-opacity duration-300 filter " src={brand.image} alt="logos" />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default About;