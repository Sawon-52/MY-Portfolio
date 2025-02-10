"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ToggleMode } from "../../ToggleMode/ToggleMode";
import { CgMenuLeft } from "react-icons/cg";
import { useState } from "react";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="max-w-screen-lg mx-auto flex justify-between items-center py-8  text-secondary-color">
      <div className="flex relative ">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-off-white-color dark:to-primary-color dark:bg-clip-text dark:text-transparent">Mehedi</h1>
        <div className=" absolute w-3 h-3 rounded-full bg-gradient-to-l from-primary-color to-secondary-color -right-4 bottom-2 dark:bg-gradient-to-r dark:from-off-white-color dark:to-primary-color"></div>
      </div>
      <div className={`${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static inset-y-0 left-0 w-64 md:w-96 bg-gradient-to-bl from-secondary-color to-primary-color lg:bg-transparent lg:bg-none lg:w-auto lg:flex lg:items-center transition-transform duration-300 ease-in-out z-50`}>
        <div className="flex flex-col py-14 lg:flex-row lg:py-0 gap-8 items-center text-md font-medium lg:dark:text-off-white-color text-off-white-color  lg:text-secondary-color ">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} onClick={toggleNavbar}>
              {link.name}
            </Link>
          ))}

          <div className="absolute top-4 right-4 text-xl text-off-white-color block lg:hidden" onClick={toggleNavbar}>
            {" "}
            X
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <ToggleMode />
        <Button variant="custom" className="mx-2 lg:mx-0 lg:ml-4">
          <Link href="#contact">Contact</Link>
        </Button>
        <div className="text-3xl block lg:hidden dark:text-off-white-color" onClick={toggleNavbar}>
          <CgMenuLeft />
        </div>
      </div>
    </nav>
  );
};

export default Navber;
