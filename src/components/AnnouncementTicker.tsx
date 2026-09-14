import React from 'react';

interface TickerItemProps {
    text: string;
}

// Single ticker entry component to cleanly repeat text + icon pairs
const TickerItem: React.FC<TickerItemProps> = ({ text }) => {
    return (
        <div className="flex items-center space-x-8 shrink-0">
            <span className="text-white text-xs font-semibold tracking-wider whitespace-nowrap">
                {text}
            </span>
            {/* Truck emoji/icon mimicking the tiny orange image icon */}
            <span className="text-sm select-none" role="img" aria-label="shipping truck">
                🚚
            </span>
        </div>
    );
};

export const AnnouncementTicker: React.FC = () => {
    const tickerText = "Free Shipping On Orders Over $100";

    // Create an array to map over to ensure enough content fills screens without breaking the loop
    const instances = Array(6).fill(tickerText);

    return (
        <div className="w-full bg-blue-900 py-2 overflow-hidden select-none">
            {/* Outer Flex container acting as the track */}
            <div className="flex w-max">

                {/* First running set */}
                <div className="flex space-x-8 animate-marquee pr-8">
                    {instances.map((text, idx) => (
                        <TickerItem key={`set1-${idx}`} text={text} />
                    ))}
                </div>

                {/* Identical duplicated second set to create a seamless infinite loop seamless loop */}
                <div className="flex space-x-8 animate-marquee pr-8" aria-hidden="true">
                    {instances.map((text, idx) => (
                        <TickerItem key={`set2-${idx}`} text={text} />
                    ))}
                </div>

            </div>
        </div>
    );
};
