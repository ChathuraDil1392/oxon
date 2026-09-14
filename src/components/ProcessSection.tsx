import React from 'react';

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

const ProcessSection: React.FC = () => {
    const steps: ProcessStep[] = [
        {
            number: '01.',
            title: 'Client Requirement Clarification',
            description: 'Every project starts with a detailed discussion. We take time to understand your specific needs, objectives, and operational environment, ensuring our approach aligns perfectly with your vision.',
        },
        {
            number: '02.',
            title: 'Site Survey and Technical Assessment',
            description: 'Our experts visit your site to perform a thorough technical survey, evaluating every detail and collecting accurate data for informed decision-making.',
        },
        {
            number: '03.',
            title: 'Design and Calculation',
            description: 'Based on the survey results, we design the most efficient and cost-effective solution, performing detailed calculations to ensure optimal performance.',
        },
        {
            number: '04.',
            title: 'BOQ Preparation and Cost Agreement',
            description: 'We prepare a transparent Bill of Quantities (BOQ) and a fair cost proposal. Once mutually agreed, this serves as the foundation for smooth project execution.',
        },
        {
            number: '05.',
            title: 'Supply and Professional Installation',
            description: 'We manage procurement, supply, and installation with precision. Our skilled engineers ensure all systems are installed correctly, safely, and on time.',
        },
        {
            number: '06.',
            title: 'After-Sales Service and Maintenance',
            description: 'Our relationship continues well beyond installation. We provide ongoing maintenance, quick-response technical support, and system health checks to guarantee long-term reliability.',
        },
    ];

    return (
        <section className="w-full bg-slate-100 py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        How Our Process Works?
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        At Oxon, we follow a simple yet thorough process to ensure every project is executed with precision and care, from understanding your needs to providing lasting support.
                    </p>
                </div>

                {/* Process Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-white border border-gray-100 rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-700 ease-in-out flex flex-col justify-between overflow-hidden group hover:bg-blue-900 hover:shadow-[0_8px_30px_rgba(30,58,138,0.3)]"
                        >
                            {/* Background Decorative Dotted Pattern — hidden on hover to keep the blue background clean */}
                            <div className="absolute top-0 left-0 w-24 h-24 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [bg-size:12px_12px] group-hover:opacity-0 transition-opacity duration-700" />

                            {/* Added transition-colors to the wrapper */}
                            <div className="space-y-4 pr-12 transition-colors duration-300">
                                {/* Changed to group-hover:text-white */}
                                <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-white transition-colors duration-300">
                                    {step.title}
                                </h3>
                                {/* Changed to group-hover:text-white/90 for excellent readability on blue */}
                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-normal group-hover:text-white/90 transition-colors duration-300">
                                    {step.description}
                                </p>
                            </div>

                            {/* Top-Right Red Number Badge */}
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-bl-lg shadow-sm">
                                {step.number}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProcessSection;
