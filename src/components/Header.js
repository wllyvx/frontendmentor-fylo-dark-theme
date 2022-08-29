import React from "react";

function Header() {
  return (
    <header className="h-full w-full flex flex-col items-center">
      <nav className="p-6 md:pt-[4.5rem] md:pb-[3rem] flex justify-between items-center w-full max-w-[83rem]">
        <img src="./images/logo.svg" alt="" className="w-20 md:w-auto" />
        <ul className="flex text-xs md:text-base space-x-6 md:space-x-14">
          <li className="cursor-pointer hover:font-bold hover:underline">
            Features
          </li>
          <li className="cursor-pointer hover:font-bold hover:underline">
            Team
          </li>
          <li className="cursor-pointer hover:font-bold hover:underline">
            Sign In
          </li>
        </ul>
      </nav>
      <div className="flex flex-col justify-center items-center p-9 space-y-6 md:space-y-9">
        <img src="./images/illustration-intro.png" alt="" />
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl md:text-[2.5rem] max-w-3xl leading-9 md:leading-[3.5rem]">
            All your files in one secure location, accessible anywhere.
          </h2>
          <p className="mt-4 md:mt-10 text-[.845rem] md:text-xl max-w-xl">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers
          </p>
          {/* GANTI BACKGROUND BUTTON HOVER!! */}
          <button className="mt-8 md:mt-9 p-3 md:p-4 w-[15rem] md:w-[17.5rem] rounded-full bg-gradient-to-r from-cyan1 to-blue1 font-bold">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
