import React, { useState } from 'react';

export const OrbitaBanner: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'hotel' | 'residential'>('hotel');

    return (
        <div className="w-full max-w-7xl mx-auto p-4 md:p-6">
            <div className="relative overflow-hidden bg-neutral-900 text-white rounded-3xl border border-neutral-800 shadow-2xl min-h-[420px] flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">

                {/* Glow Effects Background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

                {/* Left Content Side */}
                <div className="flex-1 flex flex-col items-start text-left z-10 max-w-xl">
                    {/* Badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        Exclusive Dealership
                    </span>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
                        Uncompromising Security. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                            Smart Access Redefined.
                        </span>
                    </h2>

                    {/* Subtext */}
                    <p className="text-neutral-400 text-sm sm:text-base mb-8 leading-relaxed max-w-lg">
                        Experience premium access control systems by Orbita. From luxury hotel automation to advanced keyless residential deadbolts, enjoy complete security right at your fingertips.
                    </p>

                    {/* CTA Buttons Block */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <button className="px-6 py-3 rounded-full font-semibold text-sm bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/10 hover:shadow-amber-400/20 active:scale-98">
                            Explore Collection
                        </button>
                        <button className="px-5 py-3 rounded-full font-medium text-sm text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 bg-neutral-800/30 transition-all">
                            Verify Dealership
                        </button>
                    </div>
                </div>

                {/* Right Feature Side (Interactive Display Box) */}
                <div className="flex-1 w-full md:max-w-md bg-neutral-950/50 border border-neutral-800/80 rounded-2xl p-6 relative z-10 shadow-inner group">
                    <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/40" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/40" />
                            <div className="w-3 h-3 rounded-full bg-green-500/40" />
                        </div>
                        {/* View Toggles */}
                        <div className="bg-neutral-900 p-0.5 rounded-lg border border-neutral-800 flex">
                            <button
                                onClick={() => setActiveTab('hotel')}
                                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${activeTab === 'hotel' ? 'bg-amber-400 text-neutral-950 shadow' : 'text-neutral-400 hover:text-neutral-200'}`}
                            >
                                Hospitality
                            </button>
                            <button
                                onClick={() => setActiveTab('residential')}
                                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${activeTab === 'residential' ? 'bg-amber-400 text-neutral-950 shadow' : 'text-neutral-400 hover:text-neutral-200'}`}
                            >
                                Residential
                            </button>
                        </div>
                    </div>

                    {/* Simulated Lock Showcase Card */}
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/60 flex items-center justify-center group-hover:border-neutral-700 transition-colors">

                        {/* Conditional Graphics Content Based on Tab selection */}
                        {activeTab === 'hotel' ? (
                            <div className="text-center p-4 flex flex-col items-center">
                                {/* Simulated lock ring */}
                                <div className="w-16 h-16 rounded-full border-4 border-amber-400/80 bg-neutral-950 flex items-center justify-center mb-2 shadow-lg shadow-amber-400/10">
                                    <div className="w-8 h-8 rounded bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                                        <span className="text-[10px] text-amber-400 font-mono">RFID</span>
                                    </div>
                                </div>
                                <p className="text-xs font-semibold text-neutral-200">Orbita Classic RFID Locking System</p>
                                <p className="text-[11px] text-neutral-500 mt-0.5">Operates via encrypted high-frequency keycards</p>
                            </div>
                        ) : (
                            <div className="text-center p-4 flex flex-col items-center">
                                {/* Simulated fingerprint pad */}
                                <div className="w-16 h-16 rounded-full border-4 border-cyan-500/60 bg-neutral-950 flex items-center justify-center mb-2 shadow-lg shadow-cyan-500/10 animate-pulse">
                                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center" />
                                </div>
                                <p className="text-xs font-semibold text-neutral-200">Orbita Biometric Touch Series</p>
                                <p className="text-[11px] text-neutral-500 mt-0.5">Smartphone app sync & 3D biometric reading</p>
                            </div>
                        )}
                    </div>

                    {/* Product Specifications Footer */}
                    <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                        <div className="bg-neutral-900/60 border border-neutral-800/60 p-2.5 rounded-lg">
                            <div className="text-neutral-500 mb-0.5">Certifications</div>
                            <div className="font-medium text-neutral-300">BHMA / CE / FCC</div>
                        </div>
                        <div className="bg-neutral-900/60 border border-neutral-800/60 p-2.5 rounded-lg">
                            <div className="text-neutral-500 mb-0.5">Warranty Policy</div>
                            <div className="font-medium text-amber-400">5-Year Exclusive</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
