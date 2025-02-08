"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => {
      setIsHovered(true);
    };

    const handleLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", moveCursor);

    // Example: Add hover effects to buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleHover);
      button.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleHover);
        button.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);
  return (
    <>
      <div
        className={`custom-cursor ${isHovered ? "w-8 h-8 bg-red-500" : "w-6 h-6 bg-black"}  duration-50 ease-in-out `}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
