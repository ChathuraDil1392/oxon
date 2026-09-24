import React from 'react';
import fingerprint from '../assets/fingerprint.png'
import finger_2 from '../assets/finger_2.jpg'
import finger_3 from '../assets/finger_3.png'

const ProductGrid: React.FC = () => {
    return (
        // Force any inherited shadows or border overlays to hide
        // Added pt-0 to explicitly remove top padding
        <section className="relative z-50 w-full bg-white pt-0 pb-10 px-6 md:px-12 lg:px-24 shadow-none! mt-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
                        We are Providing <span className='text-blue-500'>End to End Solutions</span>
                    </h2>

                    <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-500 sm:mt-4">
                        Orbita has maintain the strong position and served more than 10,000 hotel clients.
                    </p>
                </div>

                {/* Fixed Bento Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-137.5">

                    {/* Left Column - Large Feature Card (Strict height on mobile, fills grid on desktop) */}
                    <div className="relative group overflow-hidden rounded-md h-87.5 lg:h-full w-full bg-gray-900">
                        <img
                            src={fingerprint}
                            alt="Smart Solutions"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Dark Overlay for Text Visibility */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                        {/* Text Content Container */}
                        <div className="absolute bottom-0 right-0 p-8 text-right text-white space-y-1 z-10">
                            <h3 className="text-xl font-bold uppercase tracking-wide">
                                Smart Solutions
                            </h3>
                            <p className="text-xs text-gray-200 font-normal">
                                Don't Miss The Opportunity
                            </p>
                            <div className="pt-2">
                                <a href="#" className="text-xs font-semibold underline underline-offset-4 hover:text-gray-300 transition-colors">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Two Split Stacked Cards with locked equal heights */}
                    <div className="flex flex-col md:grid md:grid-rows-2 gap-6 h-auto lg:h-full">

                        {/* Top Right Card */}
                        <div className="relative group overflow-hidden rounded-md h-50 md:h-65.5 lg:h-full w-full bg-gray-900">
                            <img
                                src={finger_3}
                                alt="Innovation Meets Elegance"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute inset-y-0 left-0 p-8 flex flex-col justify-center text-white space-y-1 z-10">
                                <h3 className="text-lg font-bold tracking-tight">
                                    Innovation Meets Elegance
                                </h3>
                                <p className="text-xs text-gray-200 font-normal">
                                    Don't Miss The Opportunity
                                </p>
                                <div className="pt-2">
                                    <a href="#" className="text-xs font-semibold underline underline-offset-4 hover:text-gray-300 transition-colors">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Right Card */}
                        <div className="relative group overflow-hidden rounded-md h-50 md:h-65.5 lg:h-full w-full bg-[#f4f4f5]">
                            <img
                                src={finger_2}
                                alt="Hospitality and Home"
                                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-y-0 left-0 p-8 flex flex-col justify-center text-gray-900 space-y-1 z-10">
                                <h3 className="text-lg font-bold uppercase tracking-wide">
                                    Hospitality And Home
                                </h3>
                                <p className="text-xs text-gray-500 font-medium">
                                    Don't Miss The Opportunity
                                </p>
                                <div className="pt-2">
                                    <a href="#" className="text-xs font-bold underline underline-offset-4 hover:text-gray-700 transition-colors">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
