import React from 'react';

interface StatItem {
    value: string;
    label: string;
}

const CompanyStats: React.FC = () => {
    const stats: StatItem[] = [
        { value: '67k', label: 'Generate Sales' },
        { value: '45%', label: 'Grew Revenue' },
        { value: '100%', label: 'Quality Guarantee' },
        { value: '4k+', label: 'Worldwide Clients' },
    ];

    return (
        <div className="w-full bg-blue-500 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center text-center space-y-1 border-2 border-white p-3 rounded-md">
                        {/* Dark Blue Bold Metric Value */}
                        <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            {stat.value}
                        </span>
                        {/* Gray Clean Description Subtitle */}
                        <p className="text-xs md:text-sm font-medium text-white tracking-wide">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyStats;
