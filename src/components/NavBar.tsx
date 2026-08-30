import { useState } from "react";
import Logo from '../assets/Logo.png'
const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between font-sans">

      {/* 1. Left Section: Logo */}
      <div className="flex items-center shrink-0">
        <div className="flex flex-col items-center">
          {/* Main Logo Icon */}
          <div className="text-blue-900 font-bold text-4xl leading-none select-none tracking-tighter ml-6">
            <img className="w-full h-14" src={Logo} alt="Logo" />
          </div>
        </div>
      </div>

      {/* 2. Middle Section: Search Bar & Navigation Links */}
      <div className="flex items-center space-x-8 grow justify-center max-w-4xl mx-4">

        {/* Search Input Box */}
        <form onSubmit={handleSearch} className="relative w-64 xl:w-80">
          <input
            type="text"
            placeholder="Search for products"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            className="w-full border border-blue-900 rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:border-blue-900 text-blue-900 placeholder-blue-900"
          />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-900 hover:text-blue-900">
            {/* SVG Search Icon */}
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z" />
            </svg>
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-semibold text-gray-700">
          <li className="relative pb-1 text-blue-900 border-b-2 border-blue-900 cursor-pointer">
            Home
          </li>
          <li className="flex items-center space-x-1 cursor-pointer hover:text-blue-900 transition-colors">
            <span>All Products</span>
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </li>
          <li className="cursor-pointer hover:text-blue-900 transition-colors">About us</li>
          <li className="cursor-pointer hover:text-blue-900 transition-colors">Contact us</li>
          <li className="cursor-pointer hover:text-blue-900 transition-colors">References</li>
        </ul>
      </div>

      {/* 3. Right Section: CTA Button */}
      <div className="flex items-center pl-6 border-l border-gray-200 h-10 shrink-0">
        <button className="hover:bg-blue-900 bg-white hover:text-white text-blue-900 border-2 ease-in-out duration-700 border-blue-900 text-sm font-semibold py-2 px-5 rounded-lg transition-colors">
          Get Quote
        </button>
      </div>

    </nav>
  )
}

export default NavBar;