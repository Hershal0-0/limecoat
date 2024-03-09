import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { pageLinks } from "../Utils/data";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentPath, setCurrentpath] = useState(window.location.pathname);
  useEffect(() => {
    setCurrentpath(window.location.pathname);
  }, [currentPath]);
  return (
    <header className="z-[10] flex justify-between   bg-slate-3001 relative">
      <Link to="/">
        <div className="logo">
          <img
            src={require("../Images/logo1.png")}
            className="h-20 mt-4 ml-4 borderBlacks"
            alt=""
          />
        </div>
      </Link>

      <nav className="flex items-center justify-center">
        <ul className="flex x-[22rem] flex-wrap items-center justify-center borderBlacks gap-y-1 text-[0.9rem] text-gray-500 font-mediuim sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {pageLinks.map((link) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative flex items-center justify-center h-3/4"
              key={link.url}
            >
              <Link
                className={clsx(
                  "flex w-full justify-center items-center px-3 py-3 hover:text-gray-950 transition hover:scale-110 text-base",
                  {
                    "text-gray-950 ": currentPath === link.name,
                  }
                )}
                to={link.url}
              >
                {link.name}
                {/* {link.url === currentPath && (
                  <motion.span
                    layoutId="activeSelection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute inset-0 bg-gray-200 rounded-full -z-10 "
                  ></motion.span>
                )} */}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
