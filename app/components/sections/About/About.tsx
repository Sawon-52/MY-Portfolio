import React from "react";
import mypicture from "@/public/myImage.png";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div id="about" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 lg:gap-x-8 gap-y-5 lg:gap-y-0 h-min">
        <div className=" col-span-1 lg:col-span-2 flex justify-center">
          <Image className="object-cover rounded-38px border-2   rounded-xl border-primary-color h-full w-full" src={mypicture} alt="My Picture" />
        </div>
        <div className="col-span-2  md:col-span-2 lg:col-span-4 flex flex-col justify-between gap-8 ">
          <div className="">
            <p className="text-justify">I am a passionate computer science graduate with expertise in the MERN stack, dedicated to building innovative and user-centered web applications. Skilled in problem-solving and committed to continuous learning, I thrive on creating solutions that are both functional and impactful. My goal is to contribute to meaningful projects that drive growth and add value in the tech industry. With a focus on clean code, seamless user experiences, and scalable solutions, I aim to make a positive impact through technology. Let’s work together to build something amazing and transformative!</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {/* education card */}
            <div className="min-h-[150px] p-8 space-y-2 rounded-md border border-primary-color">
              <FaGraduationCap className="text-4xl  text-secondary-color " />
              <h2 className="text-base font-semibold">Education</h2>
              <p className="text-sm font-medium">B.Sc in Computer Science And Engineering </p>
            </div>
            <div className="grid place-items-center p-8  space-y-1 rounded-md border border-primary-color min-h-[150px]">
              <PiCertificateFill className="text-4xl  text-secondary-color " />
              <h2 className="text-sm font-medium">
                Proficient in <span className="bg-gradient-to-b from-primary-color to-secondary-color bg-clip-text text-transparent dark:bg-gradient-to-t dark:from-off-white-color dark:to-primary-color dark:bg-clip-text dark:text-transparent mx-1"> JavaScript</span> and <span className="bg-gradient-to-b from-primary-color to-secondary-color bg-clip-text text-transparent dark:bg-gradient-to-t dark:from-off-white-color dark:to-primary-color dark:bg-clip-text dark:text-transparent mr-1">React.js</span>
              </h2>
              <Link href="#projects">
                <Button variant="custom" size="sm">
                  Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
