import React from 'react';

import orbita from "../assets/orbita.jpg";
import lsvision from '../assets/lsvision.png';
import gvs from '../assets/gvs.jpg';
import zkt from '../assets/zkt.jpg';
import tis from '../assets/tis.jpg';

interface BrandLogo {
    id: string;
    name: string;
    imageUrl: string;
}

const BrandBanner: React.FC = () => {
    const brands: BrandLogo[] = [
        { id: 'orbita', name: 'Orbita', imageUrl: orbita },
        { id: 'tis', name: 'TIS', imageUrl: tis },
        { id: 'lsvision', name: 'LSVision', imageUrl: lsvision },
        { id: 'gvs', name: 'GVS', imageUrl: gvs },
        { id: 'zkt', name: 'ZKT', imageUrl: zkt },
    ];

    return (
        /* Removed shadow-2xl from this wrapper div */
        <div className="w-full px-6 pt-3 flex items-center justify-center">
            {/* Flex container layout matching the distribution from your screenshot */}
            <div className="max-w-7xl w-full flex flex-wrap items-center justify-center lg:justify-between gap-15 ">
                {brands.map((brand) => (
                    <div
                        key={brand.id}
                        className="flex-1 min-w-50 max-w-60 h-35 rounded-xl  flex items-center justify-center pb-2 transition-all duration-300 hover:-translate-y-0.5 group"
                    >
                        <img
                            src={brand.imageUrl}
                            alt={`${brand.name} logo`}
                            className="max-h-35 w-full object-contain select-none pointer-events-none transition-all duration-300 filter group-hover:grayscale-0 opacity-100 group-hover:opacity-110"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandBanner;
