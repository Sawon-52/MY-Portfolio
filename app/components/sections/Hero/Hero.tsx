import Image from "next/image";
import React from "react";
import myImage from "@/public/myImage.png";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { AiOutlineDownload } from "react-icons/ai";

const Hero = () => {
  const googleDocsResume = "https://docs.google.com/document/d/1ApOhsj2EN1YyXrT9slnZxGCuTxikXO9fr-hhb1xx5XY/edit?tab=t.0";

  return (
    <>
      <div className="flex flex-col justify-center text-center items-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center  gap-1  my-4 ">
            <div className="flex items-center  text-secondary-color text-xl  lg:text-2xl  lg:leading-1.5 font-bold dark:text-off-white-color">
              <h4>Hi, I&apos;m</h4>
              <Image className="max-w-[60px] min-h-[60px] object-cover rounded-38px border-2 border-seondary-color rounded-xl hover:border-primary-color hover:rotate-0 rotate-[4.29deg] transition-all duration-300 mx-2" src={myImage} alt="My Picture" />
              <h4>Mehedi Hasan!</h4>
            </div>
          </div>

          <div className="px-2 md:px-2 lg:px-12 text-5xl md:text-6xl">
            <h1 className="font-bold bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent leading-[60px] md:leading-[75px] dark:bg-gradient-to-r dark:from-off-white-color dark:to-primary-color dark:bg-clip-text dark:text-transparent">Full Stack Web Developer Based in Bangladesh</h1>
          </div>

          <div className="px-12 lg:px-10">
            <p className="text-base md:text-xl leading-7 text-primary-color-light dark:text-body-color max-w-[540px] my-5">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 flex-wrap my-5">
          <a href={googleDocsResume} target="_blank" className="">
            <Button variant="custom">
              <p>Resume</p>
              <AiOutlineDownload />
            </Button>
          </a>

          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/in/mehedi-hasan-9417061a5/" target="_blank">
              <div className=" p-3 rounded-full ring-1 ring-primary-color">
                <FaLinkedinIn className=" text-secondary-color dark:text-primary-color text-md" />
              </div>
            </a>

            <a href="https://github.com/Sawon-52" target="_blank">
              <div className=" p-3 rounded-full ring-1 ring-primary-color">
                <TbBrandGithubFilled className="text-secondary-color dark:text-primary-color text-md" />
              </div>
            </a>
            <a href="https://www.facebook.com/mehedi.hassansawon.1" target="_blank">
              <div className=" p-3 rounded-full ring-1 ring-primary-color ">
                <FaFacebookF className=" text-secondary-color dark:text-primary-color text-md" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
