import React from "react";
import mypicture from "@/public/myImage.png";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { Button } from "../../ui/button";

const About = () => {
  return (
    <>
      <div id="about" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 my-8 gap-x-5 lg:gap-x-8 gap-y-5 lg:gap-y-0 h-min">
        <div className=" col-span-1 lg:col-span-2 flex justify-center">
          <Image className="object-cover rounded-38px border-2   rounded-xl border-primary-color h-full w-full" src={mypicture} alt="My Picture" />
        </div>
        <div className="col-span-2  md:col-span-2 lg:col-span-4 flex flex-col justify-between gap-8 ">
          <div className="">
            <p className="text-justify">A passionate Computer Science graduate with expertise in the MERN stack, dedicated to building innovative, user-centered web applications. Skilled in problem-solving and committed to continuous learning, I aim to contribute to impactful projects that drive growth and create value in the tech industry. A passionate Computer Science graduate with expertise in the MERN stack, dedicated to building innovative, user-centered web applications. Skilled in problem-solving and committed to continuous learning, I aim to contribute to impactful projects that drive growth and create value in the tech industry.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* education card */}
            <div className="min-h-[150px] p-4 space-y-2 rounded-md border border-primary-color">
              <FaGraduationCap className="text-4xl  text-secondary-color " />
              <h2 className="text-base font-semibold">Education</h2>
              <p className="text-sm font-medium">B.Sc in Computer Science And Engineering </p>
            </div>
            <div className="grid place-items-center p-4 space-y-1 rounded-md border border-primary-color min-h-[150px]">
              <PiCertificateFill className="text-4xl  text-secondary-color " />
              <h2 className="text-sm font-medium">
                Proficient in <span className="bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">JavaScript</span> and <span className="bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">React.js</span>
              </h2>
              <Button variant="custom" size="sm">
                Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
