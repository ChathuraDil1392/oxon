import lock from '../assets/loackq.png'

export default function OrbitaExclusiveBanner() {
    return (
        <div className="w-full flex justify-center items-center py-12 bg-white font-sans overflow-hidden">
            {/* 5/6 Width Container (w-10/12) */}
            <div
                className="w-10/12 max-w-full relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(30,58,138,0.25)] border border-slate-800 bg-linear-to-r from-slate-950 via-slate-900 to-blue-950/80 group transition-all duration-500 hover:border-blue-500/40"
            >

                {/* ==========================================
            BACKGROUND GRAPHICS & LIGHT EFFECTS
           ========================================== */}
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size:[24px_24px] pointer-events-none"></div>

                {/* Circular Ambient Glow Behind Lock */}
                <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-blue-600/10 blur-[80px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>
                <div className="absolute right-1/3 -bottom-40 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none"></div>

                {/* Abstract Architectural Diagonal Background Beam */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-linear-to-l from-blue-900/10 to-transparent skew-x-12 transform origin-top pointer-events-none"></div>

                {/* ==========================================
            BANNER CONTENT LAYOUT
           ========================================== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative z-10 px-8 py-12 sm:px-12 lg:py-16 gap-8">

                    {/* Left Column: Text Content & Highlights (7/12 columns) */}
                    <div className="lg:col-span-7 space-y-6 text-left">

                        {/* Exclusive Dealer Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linear-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.05)] animate-pulse">
                            {/* Star Badge SVG */}
                            <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs font-black tracking-widest text-amber-400 uppercase font-mono">
                                We are the Official Exclusive Dealer
                            </span>
                        </div>

                        {/* Main Headline Grouping */}
                        <div className="space-y-2">
                            <h2 className="text-sm font-bold tracking-[0.3em] text-slate-400 uppercase">
                                Premium Security Solutions
                            </h2>
                            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none">
                                Elevate Your Entry With{' '}
                                <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-[0_2px_10px_rgba(56,189,248,0.15)] font-bold tracking-wide uppercase">
                                    ORBITA SMART SOLUTIONS
                                </span>
                            </h1>
                        </div>

                        {/* Core Value Statement Accent Paragraph */}
                        <p className="text-base text-slate-300 max-w-lg font-medium leading-relaxed">
                            Experience the pinnacle of hospitality and residential access control. Empowered by commercial-grade biometric scanning, active app intercom verification, and heavy-duty structural engineering.
                        </p>

                        {/* Highlight Metric Grid */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 max-w-md">
                            <div>
                                <div className="text-2xl font-black text-white font-mono">100%</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Authentic Stock</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-cyan-400 font-mono">24/7</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Priority Support</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-amber-400 font-mono">Certified</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Installations</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Lock Hardware Mockup Representation (5/12 columns) */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end relative items-center py-6">

                        {/* Outer Hexagonal Shield Graphics backdrop */}
                        <div className="absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-12 w-64 h-64 bg-slate-900/40 rounded-full border border-slate-800 flex items-center justify-center pointer-events-none group-hover:scale-105 transition-transform duration-700">
                            <div className="w-48 h-48 bg-slate-950/60 rounded-full border border-blue-900/30 flex items-center justify-center">
                                <div className="w-32 h-32 bg-blue-950/20 rounded-full border border-cyan-500/10 animate-spin [animation-duration:20s]"></div>
                            </div>
                        </div>

                        {/* Smart Lock Physical Chassis Mockup Render */}
                        <div className="relative z-10 transition-transform duration-500">
                            <img src={lock} alt="lock" />
                        </div>

                        {/* Secondary Accent Card: Authenticity Verification Tag Floating */}
                        <div className="absolute -bottom-2 right-4 lg:right-24 bg-slate-900/90 border border-slate-800 p-3 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 max-w-45">
                            <div className="p-2 bg-blue-600/10 rounded-lg text-blue-400 border border-blue-900/30">
                                {/* Verified Shield SVG */}
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider">Verification</p>
                                <p className="text-xs font-bold text-white whitespace-nowrap">Authorized Agent</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
