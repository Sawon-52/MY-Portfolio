"use client";
import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-4 right-4  text-white p-2 text-xl rounded-full z-50 bg-gradient-to-br from-primary-color to-secondary-color">
          <MdKeyboardDoubleArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
