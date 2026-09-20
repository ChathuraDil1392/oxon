import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png';
const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  // const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // You can also proactively push paths programmatically upon form actions:
    // navigate(`/products?search=${searchQuery}`);
  };
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between font-sans">

      {/* 1. Left Section: Logo inside a Router Link wrapper */}
      <div className="flex items-center shrink-0">
        <Link to="/" className="flex flex-col items-center">
          <div className="text-blue-900 font-bold text-4xl leading-none select-none tracking-tighter ml-6">
            <img className="w-full h-14" src={Logo} alt="Logo" />
          </div>
        </Link>
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
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z" />
            </svg>
          </button>
        </form>

        {/* Navigation Links using NavLink for dynamic active state highlights */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-semibold text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block pb-1 cursor-pointer transition-all border-b-2 ${isActive ? 'text-blue-900 border-blue-900' : 'border-transparent text-gray-700 hover:text-blue-900'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex items-center space-x-1 cursor-pointer pb-1 transition-all border-b-2 ${isActive ? 'text-blue-900 border-blue-900' : 'border-transparent text-gray-700 hover:text-blue-900'
                }`
              }
            >
              <span>All Products</span>
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our_projects"
              className={({ isActive }) =>
                `block pb-1 cursor-pointer transition-all border-b-2 ${isActive ? 'text-blue-900 border-blue-900' : 'border-transparent text-gray-700 hover:text-blue-900'
                }`
              }
            >
              Our Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block pb-1 cursor-pointer transition-all border-b-2 ${isActive ? 'text-blue-900 border-blue-900' : 'border-transparent text-gray-700 hover:text-blue-900'
                }`
              }
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block pb-1 cursor-pointer transition-all border-b-2 ${isActive ? 'text-blue-900 border-blue-900' : 'border-transparent text-gray-700 hover:text-blue-900'
                }`
              }
            >
              Contact us
            </NavLink>
          </li>

        </ul>
      </div>

      {/* 3. Right Section: CTA Button wired up with a standard Router Link wrapper */}
      <div className="flex items-center pl-6 border-l border-gray-200 h-10 shrink-0">
        <Link to="/get-quote">
          <button className="hover:bg-blue-900 bg-white hover:text-white text-blue-900 border-2 ease-in-out duration-700 border-blue-900 text-sm font-semibold py-2 px-5 rounded-lg transition-colors cursor-pointer">
            Get Quote
          </button>
        </Link>
      </div>

    </nav>
  )
}

export default NavBar;