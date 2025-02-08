import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ToggleMode } from "../../ToggleMode/ToggleMode";
import { CgMenuLeft } from "react-icons/cg";

const Navber = () => {
  return (
    <nav className="max-w-screen-lg mx-auto flex justify-between items-center py-8  text-secondary-color">
      <div className="flex relative ">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-off-white-color dark:to-primary-color dark:bg-clip-text dark:text-transparent">Mehedi</h1>
        <div className=" absolute w-3 h-3 rounded-full bg-gradient-to-l from-primary-color to-secondary-color -right-4 bottom-2 dark:bg-gradient-to-r dark:from-off-white-color dark:to-primary-color"></div>
      </div>
      <div className="hidden lg:block">
        <div className="flex gap-8 items-center text-md font-medium dark:text-off-white-color">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
        </div>
      </div>
      <div className="flex items-center">
        <ToggleMode />
        <Button variant="custom" className="mx-2 lg:mx-0 lg:ml-4">
          <Link href="#contact">Contact</Link>
        </Button>
        <div className="text-3xl block lg:hidden dark:text-off-white-color">
          <CgMenuLeft />
        </div>
      </div>
    </nav>
  );
};

export default Navber;
