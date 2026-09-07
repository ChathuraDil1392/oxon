import React from 'react';
import tis from '../assets/tis.jpg';
import orbita from '../assets/orbita.png';
import gvs from '../assets/gvs.jpg';
import lsvision from '../assets/lsvision.png';
import zkt from '../assets/zkt.jpg';

interface GridItem {
    id: string;
    title: string;
    image: string;
    sizeClass: string;
    link?: string;
}

const DashboardGrid: React.FC = () => {
    const items: GridItem[] = [
        {
            id: 'smart-solutions',
            title: 'Automation Solutions',
            image: tis,
            sizeClass: 'md:col-span-4 md:row-span-1',
        },
        {
            id: 'projects',
            title: 'Smart Home & Hotel Solutions',
            image: orbita,
            sizeClass: 'md:col-span-4 md:row-span-2',
        },
        {
            id: 'events',
            title: 'Building Automation',
            image: gvs,
            sizeClass: 'md:col-span-4 md:row-span-1',
        },
        {
            id: 'where-to-buy',
            title: 'Surveillance & Monitoring',
            image: lsvision,
            sizeClass: 'md:col-span-4 md:row-span-1',
        },
        {
            id: 'partner',
            title: 'Access Control',
            image: zkt,
            sizeClass: 'md:col-span-4 md:row-span-1',
        },
    ];

    return (
        <div className="w-full min-h-screen py-16 px-6 bg-gray-50/50 flex flex-col items-center justify-start">

            {/* Tuned Header Section */}
            <div className="text-center mb-12 flex flex-col items-center">
                <h1 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tight">
                    Our Brands
                </h1>
                <div className="h-1 w-30 bg-blue-900 mt-4 rounded-full" />
            </div>

            {/* 12-column responsive grid system */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl w-full auto-rows-45">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`relative group overflow-hidden bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${item.sizeClass}`}
                    >
                        {/* Brand Logo Container - Tuned to contain so logos aren't clipped */}
                        <div
                            className="absolute inset-0 bg-contain bg-center bg-no-repeat scale-90 transition-transform duration-500 group-hover:scale-100"
                            style={{ backgroundImage: `url(${item.image})` }}
                        />

                        {/* Title Overlay: Shifts smoothly upward and transitions from transparent to dark gray on hover */}
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-white via-white/10 to-transparent pt-10 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-gray-800 text-sm font-bold tracking-wide text-center uppercase transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                {item.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardGrid;
