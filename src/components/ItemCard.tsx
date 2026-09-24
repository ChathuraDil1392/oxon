import React from 'react';
import { LuFingerprint, LuClipboardList, LuCreditCard, LuBluetooth, LuKey } from 'react-icons/lu';

export type FeatureType = 'fingerprint' | 'pin' | 'card' | 'bluetooth' | 'key';

export interface Product {
    id: string;
    brand: string;
    brandImageUrl?: string; // Added optional property for the brand logo image path
    title: string;
    title_2: string;
    price: number;
    imageUrl: string;
    isBestSeller?: boolean;
    features: FeatureType[];
}

export interface ProductCardProps {
    product: Product;
    onBuyNow?: (id: string) => void;
}

export const FeatureIcon: React.FC<{ type: FeatureType }> = ({ type }) => {
    switch (type) {
        case 'fingerprint':
            return (
                <LuFingerprint className="w-5 h-5 border rounded m-1 p-0.5 border-blue-900 text-blue-900 transition-colors" />
            );
        case 'pin':
            return (
                <LuClipboardList className="w-5 h-5 border rounded m-1 p-0.5 border-blue-900 text-blue-900 transition-colors" />
            );
        case 'card':
            return (
                <LuCreditCard className="w-5 h-5 border rounded m-1 p-0.5 border-blue-900 text-blue-900 transition-colors" />
            );
        case 'bluetooth':
            return (
                <LuBluetooth className="w-5 h-5 border rounded m-1 p-0.5 border-blue-900 text-blue-900 transition-colors" />
            );
        case 'key':
            return (
                <LuKey className="w-5 h-5 border rounded m-1 p-0.5 border-blue-900 text-blue-900 transition-colors" title="Mechanical Backup Key" />
            );
        default:
            return null;
    }
};

export const ItemCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="w-full max-w-65 m-5 bg-white border border-slate-100 rounded-2xl p-1 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">

            {/* Top Media Area */}
            <div className="relative w-full aspect-square bg-blue-50 rounded-xl p-4 flex items-center justify-center group overflow-hidden">

                {/* Relocated Badge Indicator */}
                {product.isBestSeller && (
                    <span className="absolute top-3 right-3 bg-blue-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm z-10 select-none">
                        Best Seller
                    </span>
                )}

                {/* Centered Isolated Image */}
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                />
            </div>

            {/* Product Information Details Layer */}
            <div className="mt-2 flex flex-col grow ml-1 mr-1">
                <div className="flex flex-wrap items-center gap-0.5 mt-3 mb-2 pl-1">
                    {product.features.map((feature, index) => (
                        <FeatureIcon key={index} type={feature} />
                    ))}
                </div>

                {/* Brand Image Replacement */}
                <div className="h-8 w-auto flex items-center justify-start overflow-hidden">
                    {product.brandImageUrl ? (
                        <img
                            src={product.brandImageUrl}
                            alt={product.brand}
                            className="h-full object-contain rounded-4xl"
                        />
                    ) : (
                        // Fallback to text styled identically to your original design if no image is passed
                        <span className="text-blue-500 font-normal text-sm tracking-wide">
                            {product.brand}
                        </span>
                    )}
                </div>

                <h3 className="text-slate-800 px-2 font-extrabold text-base leading-tight tracking-tight min-h-6 line-clamp-2">
                    {product.title}
                </h3>
                <h2 className="text-slate-800 px-2 font-bold text-base leading-tight tracking-tight min-h-6 line-clamp-2">
                    {product.title_2}
                </h2>
            </div>
        </div>
    );
};
