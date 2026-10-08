import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import carousel_1 from "../assets/smart2.jpg";
import carousel_2 from "../assets/smart3.jpg";
import carousel_3 from "../assets/smart1.jpg";
import carousel_4 from "../assets/slide0.webp";

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
    description:
      "Experience seamless hotel automation with Oxon's Smart Hotel System — designed to enhance guest comfort, security, and convenience. Our smart door locks ensure effortless entry management and a modern, contactless experience for every guest.",
    ctaText: 'Shop Now',
    ctaLink: '/shop'
  },
  {
    id: 2,
    image: carousel_2,
    title: 'ADVANCED ENERGY CONTROL',
    description:
      'Optimize energy efficiency and operations across your properties with intelligent climate controls, automated lighting schedules, and cloud-managed smart switches.',
    ctaText: 'Learn More',
    ctaLink: '/energy'
  },
  {
    id: 3,
    image: carousel_3,
    title: 'SMART HOME AUTOMATION',
    description:
      'Optimize energy efficiency and operations across your properties with intelligent climate controls, automated lighting schedules, and cloud-managed smart switches.',
    ctaText: 'Learn More',
    ctaLink: '/automation'
  },
  {
    id: 4,
    image: carousel_4,
    title: 'SMART HOME AUTOMATION',
    description:
      'Optimize energy efficiency and operations across your properties with intelligent climate controls, automated lighting schedules, and cloud-managed smart switches.',
    ctaText: 'Learn More',
    ctaLink: '/automation'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    const isFirstSlide = currentIndex === 0;

    setCurrentIndex(
      isFirstSlide
        ? SLIDES_DATA.length - 1
        : currentIndex - 1
    );
  };

  const nextSlide = (): void => {
    const isLastSlide = currentIndex === SLIDES_DATA.length - 1;

    setCurrentIndex(
      isLastSlide
        ? 0
        : currentIndex + 1
    );
  };

  return (
    <div className="relative w-full h-125 md:h-150 lg:h-162.5 overflow-hidden group select-none">

      <AnimatePresence mode="wait" initial={true}>

        <motion.div
          key={SLIDES_DATA[currentIndex].id}
          className="absolute inset-0 w-full h-full"
          initial={{
            opacity: 0,

          }}
          animate={{
            opacity: 1,

          }}
          exit={{
            opacity: 0,

          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >

          {/* Background Image */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${SLIDES_DATA[currentIndex].image})`
            }}
            initial={{

              opacity: 0
            }}
            animate={{

              opacity: 1
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >

            {/* Image Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.15
              }}
            />

          </motion.div>


          {/* Content */}
          <div className="absolute ml-15 top-1/2 -translate-y-1/2 left-0 w-full max-w-xl p-5 md:p-5 flex flex-col justify-center bg-blue-950/40 text-white z-10 py-8 rounded-lg">

            {/* Title */}
            <motion.h1
              className="text-xl md:text-2xl font-bold tracking-wide uppercase leading-tight drop-shadow-md"
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.65,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {SLIDES_DATA[currentIndex].title}
            </motion.h1>


            {/* Description */}
            <motion.p
              className="mt-4 text-xs md:text-md font-normal leading-relaxed max-w-lg tracking-wide drop-shadow-sm"
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.65,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {SLIDES_DATA[currentIndex].description}
            </motion.p>


            {/* Button */}
            <motion.div
              className="mt-8 pointer-events-auto"
              initial={{
                opacity: 0,
                y: 25
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <a
                href={SLIDES_DATA[currentIndex].ctaLink}
                className="inline-block bg-white hover:bg-gray-100 text-blue-900 text-xs md:text-sm font-semibold py-2 px-4 rounded-lg shadow-md transition-all transform hover:scale-[1.01] tracking-wide"
              >
                {SLIDES_DATA[currentIndex].ctaText}
              </a>
            </motion.div>

          </div>

        </motion.div>

      </AnimatePresence>


      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-4 text-white/50 hover:text-white p-2 rounded-full cursor-pointer transition-colors z-20"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>


      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-4 text-white/50 hover:text-white p-2 rounded-full cursor-pointer transition-colors z-20"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

    </div>
  );
};

export default Carousel;