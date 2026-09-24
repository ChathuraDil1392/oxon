import React from 'react';
import { FeatureIcon, type FeatureType } from './ItemCard';

export interface PremiumProduct {
    id: string;
    title: string;
    tagline: string;
    price: number;
    imageUrl: string;
    rating: number; // Expects a number from 1 to 5
    features: FeatureType[]; // Expects an array of feature tags
}

interface PremiumProductCardProps {
    product: PremiumProduct;
    onAddToCart?: (id: string) => void;
}

export const PremiumProductCard: React.FC<PremiumProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="w-full max-w-65 select-none overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#0a194f] via-[#0d2a75] to-[#123e9c] p-1 font-sans text-white shadow-xl transition-all duration-300 hover:shadow-2xl">

            {/* Top Media Area with Glow Backdrop */}
            <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1d4ed8]/40 via-[#0a194f]/10 to-transparent p-4">

                {/* Floating Price Tag (Top Right) */}
                <div className="absolute top-0 right-0 rounded-bl-[1.25rem] bg-[#00d2ff] px-5 py-2 text-sm font-black tracking-wider text-[#0a194f] shadow-md z-10">
                    ${product.price}
                </div>

                {/* 
                  Product Focused Image 
                  REMOVED mix-blend-multiply so the image renders in its true colors 
                  and is fully visible on the dark blue canvas grid.
                */}
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 pointer-events-none drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                />
            </div>

            {/* Info Details Section (Lighter Blue Panel Overlay) */}
            <div className="mx-2 mt-1 mb-3 rounded-[1.75rem] bg-gradient-to-b from-[#103a94]/90 to-[#0e2f7d]/90 p-4 backdrop-blur-sm">

                {/* Split Left/Right Data Grid */}
                <div className="grid grid-cols-2 gap-4 border-b border-white/10 pb-4">

                    {/* Left Column: Heading, Description & Star Ratings */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-base font-black uppercase leading-tight tracking-tight text-white">
                                {product.title}
                            </h2>
                            <p className="mt-1.5 text-[10px] leading-relaxed text-slate-300 line-clamp-3">
                                {product.tagline}
                            </p>
                        </div>

                        {/* Stars Row Generator */}
                        <div className="mt-3 flex items-center gap-0.5">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://w3.org"
                                    viewBox="0 0 24 24"
                                    fill={index < product.rating ? '#eab308' : '#475569'}
                                    className="h-3 w-3"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Dynamic Feature Icons Area */}
                    <div className="flex flex-col justify-center items-start border-l border-white/10 pl-4">
                        <div className="flex flex-wrap gap-2 justify-start items-center w-full">
                            {product.features.map((feature, index) => (
                                <FeatureIcon key={index} type={feature} />
                            ))}
                        </div>
                    </div>

                </div>

                {/* Center Anchored Pill Button Action */}
                <div className="mt-3 flex justify-center">
                    <button
                        onClick={() => onAddToCart && onAddToCart(product.id)}
                        className="w-full max-w-[160px] rounded-full bg-white py-2 text-center text-xs font-black uppercase tracking-wider text-[#0c2461] shadow-md transition-all duration-200 hover:bg-[#00d2ff] hover:text-[#0a194f] active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50"
                    >
                        MORE...
                    </button>
                </div>

            </div>
        </div>
    );
};
