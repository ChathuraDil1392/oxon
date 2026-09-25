import React, { useState } from 'react';
import footer from '../assets/White logo copy.png';
import mbl from '../assets/mbl.jpg';
import mib from '../assets/mib.png';

// Real-world placeholder SVGs for standard branding symbols matching your footer screenshot
const SocialIcons: React.FC = () => (
  <div className='flex items-center gap-3 mt-6 '>
    <span className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-black font-sans cursor-pointer text-white'>
      <img src={mbl} alt='mbl' />
    </span>
    <span className='w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] font-black font-sans cursor-pointer text-white'>
      <img src={mib} alt='mbl' />
    </span>
  </div>
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
    <footer className='w-full bg-[#000b2f] text-blue-950 py-14 px-6 md:px-12 font-sans border-t-8 border-blue-500'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
        {/* Left Column: Branding and Intro */}
        <div className='lg:col-span-3 flex flex-col justify-between h-full'>
          <div>
            {/* Logo Wrapper - Fixed to render image uninhibited by artificial borders */}
            <div className='text-blue-900 font-bold text-4xl leading-none select-none tracking-tighter ml-6 mb-10'>
              <img className='w-50 h-30' src={footer} alt='Logo' />
            </div>

            {/* Description Text */}
            <p className='text-xs text-white leading-relaxed max-w-xs'>
              Oxon Maldives Pvt Ltd &mdash; Smart Automation for Homes &amp;
              Hospitality. Exclusive Orbita Partner in the Maldives.
            </p>
          </div>

          <hr className='border-gray-900 my-6 w-4/5 block lg:hidden' />

          {/* Tiny dividing line from screenshot above social icons */}
          <div className='w-44 h-px bg-gray-900 mt-8' />
          <SocialIcons />
        </div>

        {/* Middle Area: Links Matrix matching spacing */}
        <div className='lg:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-8 pt-4'>
          {/* Popular Categories */}
          <div>
            <h3 className='text-sm font-bold text-white tracking-wide mb-5 underline underline-offset-8'>
              Popular Categories
            </h3>
            <ul className='space-y-4 text-xs text-white'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Smart Home Solutions
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Hospitality Smart Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Product Type */}
          <div>
            <h3 className='text-sm font-bold text-white tracking-wide mb-5 underline underline-offset-8'>
              Product Type
            </h3>
            <ul className='space-y-4 text-xs text-white'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className='text-sm font-bold text-white tracking-wide mb-5 underline underline-offset-8'>
              Useful Links
            </h3>
            <ul className='space-y-4 text-xs text-white'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  All Products
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Refrences
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Embedded Form Section with True Vertical Divider */}
        <div className='lg:col-span-4 lg:border-l lg:border-gray-800 lg:pl-10 w-full pt-4'>
          <h3 className='text-sm font-bold text-white tracking-wide mb-4 underline underline-offset-8'>
            Newsletter
          </h3>

          <form onSubmit={handleSubmit} className='space-y-3'>
            <div>
              <input
                type='text'
                placeholder='Name'
                className='w-full bg-white text-gray-900 placeholder-gray-400 px-4 py-2.5 text-xs rounded-xs outline-none focus:ring-1 focus:ring-gray-300 transition-all'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <input
                type='email'
                placeholder='Email'
                className='w-full bg-white text-gray-900 placeholder-gray-400 px-4 py-2.5 text-xs rounded-xs outline-none focus:ring-1 focus:ring-gray-300 transition-all'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <textarea
                placeholder='Message'
                rows={3}
                className='w-full bg-white text-gray-900 placeholder-gray-400 px-4 py-3 text-xs rounded-xs outline-none resize-none focus:ring-1 focus:ring-gray-300 transition-all'
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-500 text-white hover:text-gray-900 font-semibold py-2.5 text-xs tracking-widest rounded-md transition-all duration-200 cursor-pointer hover:bg-white'
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
