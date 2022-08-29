import React from "react";
import Contact from "./Contact";
import Form from "./Form";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="mt-[12.75rem] pt-72 bg-footer-background space-y-12 md:space-y-8 relative">
      <Form />
      <div className="px-7 md:px-32">
        <img src="./images/logo.svg" alt="" className="pl-2 md:pl-0" />
      </div>
      <div className="px-7 md:px-32 pb-12 flex flex-col md:flex-row items-start justify-center space-y-12 md:space-y-0">
        <Contact />
        <ul className="flex flex-col items-start space-y-3 md:w-6/12">
          <li className="cursor-pointer hover:font-bold">About Us</li>
          <li className="cursor-pointer hover:font-bold">Jobs</li>
          <li className="cursor-pointer hover:font-bold">Press</li>
          <li className="cursor-pointer hover:font-bold">Blog</li>
        </ul>
        <ul className="flex flex-col items-start space-y-3 md:w-6/12">
          <li className="cursor-pointer hover:font-bold">Contact Us</li>
          <li className="cursor-pointer hover:font-bold">Terms</li>
          <li className="cursor-pointer hover:font-bold">Privacy</li>
        </ul>
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
