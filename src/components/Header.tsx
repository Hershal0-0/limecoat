"use client";
import { motion } from "framer-motion";
// import React, { useEffect, useState } from "react";
import { pageLinks } from "../../src/utils/data";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  //   const [currentPath, setCurrentpath] = useState(window.location.pathname);
  //   useEffect(() => {
  //     setCurrentpath(window.location.pathname);
  //   }, [currentPath]);
  return (
    <header className="z-[10] flex justify-between   bg-slate-3001  bg-white/80">
      <Link href="/">
        <div className="logo">
          <Image
            src={"/images/logo1.png"}
            className="h-20 mt-4 ml-4 borderBlacks"
            alt=""
            width={100}
            height={100}
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
                className="flex items-center justify-center w-full px-3 py-3 text-base transition hover:text-gray-950 hover:scale-110"
                href={link.url}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
