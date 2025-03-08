import React from "react";
import htmlImage from "@/public/html.png";
import cssImage from "@/public/css.png";
import TailwindCSSImage from "@/public/tailwind.png";
import GSAPImage from "@/public/gsap.png";
import jsImage from "@/public/js.png";
import tsImage from "@/public/typescript.png";
import reactImage from "@/public/react.png";
import nextImage from "@/public/next.png";
import nodeImage from "@/public/nodejs.png";
import expressImage from "@/public/express.png";
import mongoImage from "@/public/mongo-db.png";
import reduxImage from "@/public/redux.png";
import phpImage from "@/public/php.png";
import mySqlImage from "@/public/mysql.png";
import bootstrap from "@/public/bootstrap-framework.png";

import Image from "next/image";

const TechStack = () => {
  const tools = [
    { name: "HTML", description: "Markup Language", image: htmlImage },
    { name: "CSS", description: "User Interface", image: cssImage },
    { name: "TailwindCSS", description: "CSS framework", image: TailwindCSSImage },
    { name: "Bootstrap", description: "CSS framework", image: bootstrap },
    { name: "GSAP", description: "Animation library", image: GSAPImage },
    { name: "JavaScript", description: "Interaction", image: jsImage },
    { name: "TypeScript", description: "Typed JavaScript", image: tsImage },
    { name: "Redux", description: "State Management", image: reduxImage },
    { name: "ReactJS", description: "JavaScript library", image: reactImage },
    { name: "NextJS", description: "React Framework", image: nextImage },
    { name: "NodeJS", description: "Web Server", image: nodeImage },
    { name: "PHP", description: "Web Server", image: phpImage },
    { name: "MySQL", description: "Database", image: mySqlImage },
    { name: "ExpressJS", description: "Node Framework", image: expressImage },
    { name: "MongoDB", description: "Database", image: mongoImage },
  ];
  return (
    <div id="#skills" className="">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
        {tools.map((tool) => (
          <div key={tool.name} className="flex items-center p-2 rounded-lg  border border-primary-color gap-2 hover:shadow-xl shadow-primary-color transition-all ease-out duration-200">
            <Image src={tool.image} alt={tool.name} className=" max-w-8 md:max-w-14"></Image>
            <div className="flex flex-col">
              <p className=" text-sm md:text-base font-semibold bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-off-white-color dark:to-primary-color dark:bg-clip-text dark:text-transparent">{tool.name}</p>
              <p className="text-gray-500 text-sm">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
