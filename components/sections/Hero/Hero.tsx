import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import myImage from "@/public/myImage.png";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import Stats from "@/components/sections/Stats/Stats";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center items-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center  gap-1  my-4">
            <div className=" lg:w-12 h-1 bg-gradient-to-r from-primary-color to-secondary-color "> </div>
            <div className="flex items-center  text-secondary-color text-3xl  lg:leading-1.5 font-bold">
              <h4>Hi, I'm</h4>
              <Image className="max-w-[60px] max-h-[60px] object-cover rounded-38px border-2 border-seondary-color rounded-xl hover:border-primary-color hover:rotate-0 rotate-[4.29deg] transition-all duration-300 mx-2" src={myImage} alt="My Picture" />
              <h4>Mehedi Hasan!</h4>
            </div>
          </div>

          <div>
            <h1 className="text-6xl px-10 font-bold bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent leading-[80px]">Frontend Web Developer Based in Bangladesh</h1>
          </div>
          <div>
            <p className="text-xl leading-7 text-primary-color-light dark:text-body-color max-w-[540px] my-5">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
          </div>
        </div>

        <div className="flex items-center gap-5  my-8">
          <Button variant="custom">Download Resume</Button>
          <div className="flex items-center gap-5">
            <div className=" p-3 rounded-full ring-1 ring-primary-color">
              <FaLinkedinIn className="text-primary-color text-md" />
            </div>
            <div className=" p-3 rounded-full ring-1 ring-primary-color">
              <TbBrandGithubFilled className="text-primary-color text-md" />
            </div>
            <div className=" p-3 rounded-full ring-1 ring-primary-color text-md">
              <FaFacebookF className="text-primary-color" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
