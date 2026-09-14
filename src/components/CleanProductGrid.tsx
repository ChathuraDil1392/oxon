import React, { useState } from 'react';
import homelock from '../assets/smlock.png'
import hotellock from '../assets/smhotel.png'
import minibar from '../assets/minibar.png'
import bathlock from '../assets/brlock.png'
import cabinet from '../assets/cabinet.png'
import accessories from '../assets/accesories.png'
import phone from '../assets/phone.png'
import switch1 from '../assets/switch.png'
import dryer from '../assets/dryer.png'
import kettle from '../assets/kettle.png'
import safe from '../assets/safe.png'
import plate from '../assets/plate.png'

interface ProductItem {
    id: string;
    name: string;
    category: 'locks' | 'room' | 'hardware' | 'appliances';
    imageUrl: string;
}

const PRODUCTS: ProductItem[] = [
    { id: 'rfid-locks', name: 'Hotel RFID Locks', category: 'locks', imageUrl: homelock },
    { id: 'room-safe', name: 'Hotel In Room Safe', category: 'hardware', imageUrl: safe },
    { id: 'minibar', name: 'Hotel Minibar', category: 'hardware', imageUrl: minibar },
    { id: 'smart-hotel', name: 'Smart Hotel', category: 'room', imageUrl: hotellock },
    { id: 'bathroom-locks', name: 'Bathroom Locks', category: 'locks', imageUrl: bathlock },
    { id: 'cabinet-locks', name: 'Cabinet Locks', category: 'locks', imageUrl: cabinet },
    { id: 'lock-accessories', name: 'Hotel lock accessories', category: 'locks', imageUrl: accessories },
    { id: 'hotel-phone', name: 'Hotel Phone', category: 'room', imageUrl: phone },
    { id: 'room-switches', name: 'In Room Switches', category: 'room', imageUrl: switch1 },
    { id: 'hairdryers', name: 'Hotel hairdryers', category: 'appliances', imageUrl: dryer },
    { id: 'kettles', name: 'Hotel kettles', category: 'appliances', imageUrl: kettle },
    { id: 'door-plate', name: 'Hotel Door Plate', category: 'room', imageUrl: plate }
];

export default function CleanProductGrid() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredProducts = selectedCategory === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === selectedCategory);

    return (
        <>
            <div className='bg-white'>
                <h2 className="text-3xl font-bold text-center tracking-tight text-slate-900 sm:text-4xl ">
                    What We Have?
                </h2>
                <div className="w-full max-w-7xl mx-auto px-6 py-16 bg-white font-sans">

                    {/* 🏷️ Clean Enterprise Section Header */}
                    <div className="border-b border-slate-100 pb-8 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div></div>
                        {/* Inline Category Filtering */}
                        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl border border-slate-100 self-start md:self-auto">
                            {['all', 'locks', 'room', 'hardware', 'appliances'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 text-xs font-semibold rounded-lg capitalize transition-all ${selectedCategory === cat
                                        ? 'bg-white text-slate-900 shadow-sm border border-blue-700'
                                        : 'text-slate-500 hover:text-blue-900'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 📦 Spacious Line-Art Icon Grid Layout */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-900 hover:shadow-md transition-all duration-200 cursor-pointer"
                            >
                                {/* Image/Icon Frame */}
                                <div className="w-20 h-20 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="max-w-full max-h-full object-contain filter grayscale opacity-80 scale-110 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-50 group-hover:sepia group-hover:hue-rotate-200 group-hover:saturate-200 group-hover:scale-115 transition-all duration-300"
                                        onError={(e) => { (e.target as HTMLImageElement).src = `https://placeholder.co`; }}
                                    />

                                </div>

                                {/* Product Title Label - Centered Text styling */}
                                <span className="mt-5 w-full text-center text-xs font-semibold text-slate-500 group-hover:text-blue-900 tracking-tight transition-colors line-clamp-2 leading-snug">
                                    {product.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
