import React, { useEffect, useState } from "react";
import { navItems } from "../data/navItems";
import { CgMenuRound } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  // const [theme, setTheme] = useState(() => {
  //   return !("theme" in localStorage) ? "light" : localStorage.getItem("theme");
  // });

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [theme]);

  // const handleThemeChange = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  const [mobileView, setMobileView] = useState(false);

  return (
    <nav className="sticky left-0 top-0 z-[100] w-full bg-primaryDark shadow-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="flex flex-wrap items-center justify-between px-3 sm:px-8 py-6 bg-bgDark"
      >
        <ScrollLink to="home" smooth={true} duration={500}>
          <span
            className=" min-w-[150px] cursor-pointer font-[600] text-lg tracking-wide 
          sm:font[800] sm:text-xl"
          >
            @srm
          </span>
        </ScrollLink>

        {/* toggle navbar mobile view */}
        <span
          className="lg:hidden text-[22px] -ml-[120px] cursor-pointer"
          onClick={() => {
            setMobileView(!mobileView);
          }}
        >
          <CgMenuRound />
        </span>

        {/* mobile navbar */}
        <AnimatePresence>
          {mobileView && (
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              exit={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-5 left-0 flex h-fit w-full flex-col bg-primaryDark"
            >
              <div className="flex flex-col lg:hidden bg-primaryDark relative p-5">
                <span
                  className="absolute top-[45px] right-12 text-[24px] cursor-pointer"
                  onClick={() => {
                    setMobileView(!mobileView);
                  }}
                >
                  <AiFillCloseCircle />
                </span>
                <div className="flex gap-4 p-6 border-b-white border-b-2 text-[22px]">
                  <a
                    href="https://www.linkedin.com/in/shoaib-raja-molla/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="https://github.com/shoaibcodez"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                  <a href="mailto:shoaibrajamolla@gmail.com">
                    <HiMailOpen />
                  </a>
                </div>

                <div>
                  <ul className="flex flex-col items-center justify-between p-5 gap-5 relative">
                    {navItems?.map((navItem) => (
                      <li key={navItem.id}>
                        <ScrollLink
                          to={navItem.url}
                          smooth={true}
                          duration={1000}
                          title={navItem.name}
                          onClick={() => {
                            setMobileView(!mobileView);
                          }}
                          className="relative cursor-pointer text-[18px] font-[500] hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[3px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
                        >
                          {navItem.name}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* overlay */}
              <div
                className="flex-grow bg-transparent w-full"
                onClick={() => setMobileView(!mobileView)}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* full screen navbar */}
        <div className="hidden lg:block -ml-8">
          <ul className="flex items-center justify-between gap-5 relative">
            {navItems?.map((navItem) => (
              <li key={navItem.id}>
                <ScrollLink
                  to={navItem.url}
                  smooth={true}
                  duration={1000}
                  title={navItem.name}
                  className="relative cursor-pointer text-[18px] font-[500] hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[3px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  {navItem.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-4 text-[24px]">
          <span className="py-2 px-1 hover:-translate-y-[2px] transition-all duration-500 ease-in-out cursor-pointer">
            <a
              href="https://www.linkedin.com/in/shoaib-raja-molla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
          </span>
          <span className="py-2 px-1 hover:-translate-y-[2px] transition-all duration-500 ease-in-out cursor-pointer">
            <a
              href="https://github.com/shoaibcodez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </span>
          <span className="py-2 px-1 hover:-translate-y-[2px] transition-all duration-500 ease-in-out cursor-pointer">
            <a href="mailto:shoaibrajamolla@gmail.com">
              <HiMailOpen />
            </a>
          </span>
        </div>

        {/* dark-mode toggle button */}
        {/* <div>
          <button
            onClick={handleThemeChange}
            className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              className="fill-violet-700 block dark:hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              className="fill-yellow-500 hidden dark:block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div> */}
      </motion.div>
    </nav>
  );
};

export default Navbar;
