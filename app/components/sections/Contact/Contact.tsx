import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center gap-2 ">
      {/* Email */}
      <div className="flex  justify-center">
        <Link href="mailto:mehedihasan.contact1@gmail.com" className="text-secondary-color dark:text-off-white-color hover:text-blue-800 flex gap-1 items-center">
          <MdEmail />
          <p>mehedihasan.contact1@gmail.com</p>
        </Link>
      </div>

      {/* LinkedIn */}
      <div className="flex  justify-center">
        <Link href="https://www.linkedin.com/in/mehedi-hasan-9417061a5/" className="text-secondary-color dark:text-off-white-color hover:text-blue-800 flex gap-1 items-center">
          <FaLinkedin />
          <p>Linkedin</p>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
