import { useState } from 'react';
import carousel_1 from "../assets/smart2.jpg"
import carousel_2 from "../assets/smart3.jpg"
import carousel_3 from "../assets/smart1.jpg"
import carousel_4 from "../assets/slide0.webp"

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const SLIDES_DATA: CarouselSlide[] = [
  {
    id: 1,
    image: carousel_1,
    title: 'OXON SMART HOTEL SYSTEM',
    description: "Experience seamless hotel automation with Oxon's Smart Hotel System — designed to enhance guest comfort, security, and convenience. Our smart door locks ensure effortless entry management and a modern, contactless experience for every guest.",
    ctaText: 'Shop Now',
    ctaLink: '/shop'
  },
  {
    id: 2,
    image: carousel_2,
    title: 'ADVANCED ENERGY CONTROL',
    description: 'Optimize energy efficiency and operations across your properties with intelligent climate controls, automated lighting schedules, and cloud-managed smart switches.',
    ctaText: 'Learn More',
    ctaLink: '/energy'
  },
  {
    id: 3,
    image: carousel_3,
    title: 'SMART HOME AUTOMATION',
    description: 'Optimize energy efficiency and operations across your properties with intelligent climate controls, automated lighting schedules, and cloud-managed smart switches.',
    ctaText: 'Learn More',
    ctaLink: '/automation'
  },
  {
    id: 4,
    image: carousel_4,
    title: 'SMART HOME AUTOMATION',
    description: 'Optimize energy efficiency and operations across your properties with intelligent climate controls, automated lighting schedules, and cloud-managed smart switches.',
    ctaText: 'Learn More',
    ctaLink: '/automation'
  }
];

const Carousel = () => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? SLIDES_DATA.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (): void => {
    const isLastSlide = currentIndex === SLIDES_DATA.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-125 md:h-150 lg:h-162.5 overflow-hidden group select-none">

      {/* 1. Background Images Container with Slide Transitions */}
      <div
        className="w-full h-full flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SLIDES_DATA.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full shrink-0 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark overlay screen to make white text pop */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* 2. Absolute Content Overlay (Fixed relative to current visible frame layout) */}
      <div className="absolute inset-y-0 left-0 w-full max-w-xl md:max-w-2xl px-6 md:px-16 flex flex-col justify-center text-white pointer-events-none z-10">

        {/* Dynamic Title Text Layer */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide uppercase leading-tight drop-shadow-md select-text transition-all duration-500">
          {SLIDES_DATA[currentIndex].title}
        </h1>

        {/* Dynamic Paragraph Description Layer */}
        <p className="mt-4 text-sm md:text-base text-gray-100 font-normal leading-relaxed max-w-lg tracking-wide drop-shadow-sm select-text transition-all duration-500 delay-70">
          {SLIDES_DATA[currentIndex].description}
        </p>

        {/* Interactive CTA Link Anchor */}
        <div className="mt-8 pointer-events-auto">
          <a
            href={SLIDES_DATA[currentIndex].ctaLink}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 text-xs md:text-sm font-semibold py-2 px-4 rounded-lg shadow-md transition-all transform hover:scale-[1.01] tracking-wide "
          >
            {SLIDES_DATA[currentIndex].ctaText}
          </a>
        </div>
      </div>

      {/* 3. Navigation Arrow Assets */}
      {/* Left Chevron */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-4 text-white/50 hover:text-white p-2 rounded-full cursor-pointer transition-colors z-20"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Right Chevron */}
      <button
        onClick={nextSlide}
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-4 text-white/50 hover:text-white p-2 rounded-full cursor-pointer transition-colors z-20"
        aria-label="Next Slide"
      >
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

    </div>
  );
};

export default Carousel;
