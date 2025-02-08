"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="py-2 flex justify-center ">
        <p className="text-sm">&copy; {currentYear} Mehedi. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
