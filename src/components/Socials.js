import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Socials() {
  return (
    <div className="flex items-center justify-center w-full md:w-fit space-x-4">
      <div className="border border-white p-2 rounded-full cursor-pointer hover:border-cyan1 hover:text-cyan1">
        <FaFacebookF />
      </div>
      <div className="border border-white p-2 rounded-full cursor-pointer hover:border-cyan1 hover:text-cyan1">
        <FaTwitter />
      </div>
      <div className="border border-white p-2 rounded-full cursor-pointer hover:border-cyan1 hover:text-cyan1">
        <FaInstagram />
      </div>
    </div>
  );
}

export default Socials;
