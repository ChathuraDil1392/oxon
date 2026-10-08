
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Logo from "../assets/logo_long copy_1.png";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { scrollY } = useScroll();

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (latest > 50 && !isFocused) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
    setIsVisible(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);

    if (scrollY.get() > 50) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  };

  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.4)"]
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 80],
    ["blur(0px)", "blur(16px)"]
  );

  const topPosition = useTransform(scrollY, [0, 32], ["32px", "0px"]);

  const boxShadow = useTransform(
    scrollY,
    [0, 80],
    [
      "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
    ]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(229, 231, 235, 1)", "rgba(229, 231, 235, 0.3)"]
  );

  const searchBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.2)"]
  );

  const searchBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(30, 58, 138, 0.8)", "rgba(30, 58, 138, 0.3)"]
  );

  const btnBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.2)"]
  );

  const btnBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(30, 58, 138, 1)", "rgba(30, 58, 138, 0.3)"]
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <motion.nav
      initial={{
        y: -120,
        opacity: 0,
      }}
      animate={{
        y: isVisible ? 0 : "-100%",
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        y: {
          type: "spring",
          stiffness: 120,
          damping: 14,
          mass: 0.8,
        },
        opacity: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      style={{
        top: topPosition,
        backgroundColor,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        boxShadow,
        borderColor,
      }}
      // Inside NavBar.jsx — Update the className string on your <motion.nav> element:

      className="fixed top-8 left-0 right-0 z-70 w-full border-b px-6 py-3 flex items-center justify-between"
    >
      <div className="flex items-center shrink-0 ">
        <Link to="/" className="flex flex-col items-center">
          <div className="text-blue-900 font-bold text-4xl leading-none select-none tracking-tighter ml-8">
            <img
              className="w-full h-10"
              src={Logo}
              alt="Logo"
            />
          </div>
        </Link>
      </div>

      <div className="flex items-center space-x-8 grow justify-center max-w-4xl mx-4">
        <form
          onSubmit={handleSearch}
          className="relative w-64 xl:w-80"
        >
          <motion.input
            type="text"
            placeholder="Search for Products"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              backgroundColor: searchBg,
              borderColor: searchBorder,
            }}
            className="w-full border-2 rounded-lg py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:border-blue-900 text-blue-900 placeholder-blue-900 transition-colors"
          />

          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-900 hover:text-blue-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z"
              />
            </svg>
          </button>
        </form>

        <ul className="hidden md:flex items-center space-x-6 text-xs font-semibold text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block pb-1 cursor-pointer uppercase transition-all border-b-2 ${isActive
                  ? "text-blue-900 border-blue-900"
                  : "border-transparent text-gray-700 hover:text-blue-900"
                } `
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex items-center space-x-1 cursor-pointer uppercase pb-1 transition-all border-b-2 ${isActive
                  ? "text-blue-900 border-blue-900"
                  : "border-transparent text-gray-700 hover:text-blue-900"
                } `
              }
            >
              <span>All Products</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/our_projects"
              className={({ isActive }) =>
                `block pb-1 cursor-pointer uppercase transition-all border-b-2 ${isActive
                  ? "text-blue-900 border-blue-900"
                  : "border-transparent text-gray-700 hover:text-blue-900"
                } `
              }
            >
              Our Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block pb-1 cursor-pointer uppercase transition-all border-b-2 ${isActive
                  ? "text-blue-900 border-blue-900"
                  : "border-transparent text-gray-700 hover:text-blue-900"
                } `
              }
            >
              About us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block pb-1 cursor-pointer transition-all uppercase border-b-2 ${isActive
                  ? "text-blue-950 border-blue-950"
                  : "border-transparent text-gray-700 hover:text-blue-900 "
                } `
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex items-center pl-6 border-l border-gray-200 h-10 shrink-0">
        <Link to="/get-quote">
          <motion.button
            style={{
              backgroundColor: btnBg,
              borderColor: btnBorder,
            }}
            whileHover={{
              backgroundColor: "rgba(30, 58, 138, 1)",
              color: "rgba(255, 255, 255, 1)",
              borderColor: "rgba(30, 58, 138, 1)",
            }}
            className="text-blue-900 border-2 ease-in-out duration-300 text-sm font-semibold py-2 px-5 rounded-lg transition-colors cursor-pointer"
          >
            Get Quote
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default NavBar;

