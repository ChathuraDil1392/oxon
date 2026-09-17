import React from 'react';
import image_1 from '../assets/1.jpg';
import image_2 from '../assets/2.jpg';
import image_3 from '../assets/4.jpg';
import image_5 from '../assets/5.jpg';
import image_6 from '../assets/6.jpg';
import logoOrbita from '../assets/orbita_small.png';
import { LuFingerprint, LuClipboardList, LuCreditCard, LuBluetooth, LuKey } from 'react-icons/lu';

// Custom type structure for dynamic product features
type FeatureType = 'fingerprint' | 'pin' | 'card' | 'bluetooth' | 'key';

interface MainFeatureProduct {
    imageSrc: string;
    buttonText: string;
}

interface ProductItem {
    id: string;
    title: string;
    model: string;
    imageSrc: string;
    buttonText: string;
    features: FeatureType[]; // Added features list rule to the type contract
}

const mainProduct: MainFeatureProduct = {
    imageSrc: image_3,
    buttonText: "VIEW MORE"
};

const productGridItems: ProductItem[] = [
    {
        id: "1",
        title: "Bluetooth Fingerprint Lock",
        model: "P7021",
        imageSrc: image_1,
        buttonText: "VIEW MORE",
        features: ['fingerprint', 'pin', 'card', 'bluetooth', 'key'] // Example mapping all 5 unlock types
    },
    {
        id: "2",
        title: "Bluetooth / TUYA Smart Lock",
        model: "P7034",
        imageSrc: image_2,
        buttonText: "VIEW MORE",
        features: ['fingerprint', 'pin', 'bluetooth', 'key']
    },
    {
        id: "3",
        title: "Face ID Smart Lock",
        model: "P8031A",
        imageSrc: image_5,
        buttonText: "VIEW MORE",
        features: ['card', 'key']
    },
    {
        id: "4",
        title: "Bluetooth / TUYA Smart Lock",
        model: "P7034",
        imageSrc: image_6,
        buttonText: "VIEW MORE",
        features: ['card', 'key']
    }
];

// Reusable SVG Feature Icon Component
const FeatureIcon: React.FC<{ type: FeatureType }> = ({ type }) => {
    switch (type) {
        case 'fingerprint':
            return (
                <LuFingerprint className="w-6 h-6 border rounded m-1 p-0.5 border-blue-900 text-blue-900 transition-colors" />
            );
        case 'pin':
            return (
                <LuClipboardList className="w-6 h-6 border rounded m-1 p-0.5 border-blue-900 text-blue-900 transition-colors" />
            );
        case 'card':
            return (
                <LuCreditCard className="w-6 h-6 border rounded m-1 p-0.5 border-blue-900 text-blue-900 transition-colors" />
            );
        case 'bluetooth':
            return (
                <LuBluetooth className="w-6 h-6 border rounded m-1 p-0.5 border-blue-900 text-blue-900 transition-colors" />
            );
        case 'key':
            return (
                <LuKey className="w-6 h-6 border rounded m-1 p-0.5 border-blue-900 text-blue-900 transition-colors" title="Mechanical Backup Key" />
            );
        default:
            return null;
    }
};

export const NewArrivals: React.FC = () => {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-1 max-w-7xl mx-auto font-sans mb-2">

            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
                    Our New Products
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-500 sm:mt-4">
                    Orbita has maintain the strong position and served more than 10,000 hotel clients.
                </p>
            </div>

            {/* Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                {/* Left Side: Main Feature Billboard Banner */}
                <div
                    className="lg:col-span-1 relative flex flex-col justify-between overflow-hidden rounded-lg bg-gray-100 p-6 min-h-125 shadow-sm group"
                    style={{
                        backgroundImage: `url(${mainProduct.imageSrc})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Top text branding elements */}
                    <div className="relative z-10">
                        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 block mb-1">
                            NEW ARRIVAL
                        </span>
                    </div>

                    {/* Action button anchored at the bottom */}
                    <div className="mt-auto pt-6 relative z-10">
                        <button className="bg-blue-900 hover:bg-blue-700 text-white font-medium text-xs px-6 py-2.5 rounded tracking-wider shadow transition-colors duration-200">
                            {mainProduct.buttonText}
                        </button>
                    </div>
                </div>

                {/* Right Side: 2x2 Sub-Product Grid Layout */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {productGridItems.map((item) => (
                        <div
                            key={item.id}
                            className="border border-blue-100 rounded-lg p-6 bg-white flex justify-between items-center shadow-xs hover:shadow-md transition-shadow duration-200 min-h-[220px]"
                        >
                            {/* Product Info Column */}
                            <div className="flex flex-col justify-between h-full pr-4 flex-1">
                                <div>
                                    {/* Brand Logo */}
                                    <img
                                        src={logoOrbita}
                                        alt="Orbita Logo"
                                        className="h-10 w-auto object-contain mb-3 block"
                                    />

                                    {/* Model Number */}
                                    <p className="text-sm font-black text-gray-900 mb-1 pl-2">
                                        {item.model}
                                    </p>

                                    {/* Product Title */}
                                    <h4 className="text-xs font-bold text-gray-700 tracking-tight leading-snug max-w-45 pl-2">
                                        {item.title}
                                    </h4>

                                    {/* Horizontal Icon Row Positioned Directly After Title */}
                                    <div className="flex flex-wrap items-center gap-0.5 mt-3 mb-2 pl-1">
                                        {item.features.map((feature, index) => (
                                            <FeatureIcon key={index} type={feature} />
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 pl-2">
                                    <button className="bg-blue-900 hover:bg-blue-700 text-white font-medium text-xs px-5 py-2 rounded tracking-wider transition-colors duration-200">
                                        {item.buttonText}
                                    </button>
                                </div>
                            </div>

                            {/* Product Image Column - Now centered vertically and scaled up larger */}
                            <div className="w-36 flex items-center justify-center shrink-0 self-stretch">
                                <img
                                    src={item.imageSrc}
                                    alt={`${item.title} ${item.model}`}
                                    className="max-w-full max-h-48 object-contain object-center mix-blend-multiply hover:scale-105 transition-transform duration-200 ease-in-out"
                                    loading="lazy"
                                />
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
