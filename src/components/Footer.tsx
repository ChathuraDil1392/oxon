
import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

import footer from '../assets/White logo copy.png';
import mbl from '../assets/mbl.jpg';
import mib from '../assets/mib.png';

// Animation variants
const footerItem: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Social Icons
const SocialIcons: React.FC = () => (
  <motion.div
    className='flex items-center gap-3 mt-6'
    variants={footerItem}
  >
    <span className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-black font-sans cursor-pointer text-white overflow-hidden'>
      <img
        src={mbl}
        alt='mbl'
        className='w-full h-full object-cover'
      />
    </span>

    <span className='w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] font-black font-sans cursor-pointer text-white overflow-hidden'>
      <img
        src={mib}
        alt='mib'
        className='w-full h-full object-cover'
      />
    </span>
  </motion.div>
);

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <footer className='w-full bg-[#000b2f] text-blue-950 py-8 md:px-12 font-sans border-t-4 border-blue-500 z-30'>

      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>

        {/* LEFT COLUMN */}
        <motion.div
          className='lg:col-span-3 flex flex-col justify-between h-full'
          variants={footerItem}
          initial='hidden'
          whileInView='visible'
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          <div>

            {/* Logo */}
            <div className='font-bold text-4xl leading-none select-none tracking-tighter ml-6 mb-10'>
              <img
                className='w-50 h-30 object-contain'
                src={footer}
                alt='Logo'
              />
            </div>

            {/* Description */}
            <p className='text-xs font-medium text-white leading-relaxed max-w-xs'>
              Oxon Maldives Pvt Ltd &mdash; Smart Automation for Homes &amp;
              Hospitality. Exclusive Orbita Partner in the Maldives.
            </p>
          </div>

          <hr className='border-gray-900 my-6 w-4/5 block lg:hidden' />

          {/* Divider */}
          <div className='w-44 h-px bg-gray-900 mt-8' />

          <SocialIcons />
        </motion.div>


        {/* MIDDLE LINKS */}
        <motion.div
          className='lg:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-8 pt-4'
          variants={footerItem}
          initial='hidden'
          whileInView='visible'
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: 0.15,
          }}
        >

          {/* Popular Categories */}
          <div>
            <h3 className='text-sm font-medium text-white tracking-wide mb-5 underline underline-offset-8'>
              Popular Categories
            </h3>

            <ul className='space-y-4 text-xs text-white'>
              <li>
                <a
                  href='#'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Smart Home Solutions
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Hospitality Smart Solutions
                </a>
              </li>
            </ul>
          </div>


          {/* Product Type */}
          <div>
            <h3 className='text-sm font-medium text-white tracking-wide mb-5 underline underline-offset-8'>
              Product Type
            </h3>

            <ul className='space-y-4 text-xs text-white'>
              <li>
                <a
                  href='#'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Terms &amp; Conditions
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>


          {/* Useful Links */}
          <div>
            <h3 className='text-sm font-medium text-white tracking-wide mb-5 underline underline-offset-8'>
              Useful Links
            </h3>

            <ul className='space-y-4 text-xs text-white'>
              <li>
                <a
                  href='#'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  All Products
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='hover:text-blue-400 transition-colors duration-200'
                >
                  Refrences
                </a>
              </li>
            </ul>
          </div>

        </motion.div>


        {/* RIGHT / NEWSLETTER */}
        <motion.div
          className='lg:col-span-4 lg:border-l-2 lg:border-gray-400 lg:pl-10 w-full pt-4'
          variants={footerItem}
          initial='hidden'
          whileInView='visible'
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: 0.3,
          }}
        >

          <h3 className='text-sm font-medium text-white tracking-wide mb-4 underline underline-offset-8'>
            Newsletter
          </h3>

          <form
            onSubmit={handleSubmit}
            className='space-y-3'
          >

            {/* Name */}
            <div>
              <input
                type='text'
                placeholder='Name'
                className='w-full bg-white text-gray-900 placeholder-gray-400 px-4 py-2.5 text-xs rounded-xs outline-none focus:ring-1 focus:ring-gray-300 transition-all'
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                required
              />
            </div>


            {/* Email */}
            <div>
              <input
                type='email'
                placeholder='Email'
                className='w-full bg-white text-gray-900 placeholder-gray-400 px-4 py-2.5 text-xs rounded-xs outline-none focus:ring-1 focus:ring-gray-300 transition-all'
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>


            {/* Message */}
            <div>
              <textarea
                placeholder='Message'
                rows={3}
                className='w-full bg-white text-gray-900 placeholder-gray-400 px-4 py-3 text-xs rounded-xs outline-none resize-none focus:ring-1 focus:ring-gray-300 transition-all'
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                required
              />
            </div>


            {/* Send Button */}
            <motion.button
              type='submit'
              className='w-full bg-blue-500 text-white font-bold py-2.5 text-xs tracking-widest rounded-md transition-all duration-200 cursor-pointer hover:bg-blue-700 hover:text-white'
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              SEND
            </motion.button>

          </form>

        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;

