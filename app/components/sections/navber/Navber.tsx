import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const Navber = () => {
  return (
    <nav className="max-w-screen-lg mx-auto flex justify-between items-center py-8  text-secondary-color">
      <div className="flex relative ">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">Mehedi</h1>
        <div className=" absolute w-3 h-3 rounded-full bg-gradient-to-l from-primary-color to-secondary-color -right-4 bottom-2"></div>
      </div>
      <div className="hidden lg:block">
        <div className="flex gap-8 items-center text-md font-medium">
          <Link href="#Home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#Projects">Projects</Link>
        </div>
      </div>
      <div>
        <Button variant="custom" className="ml-4">
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Navber;
