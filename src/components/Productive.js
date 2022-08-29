import React from "react";

function Productive() {
  return (
    <section className="mt-32 md:mt-[8.5rem] w-full flex items-center justify-center">
      <div className="max-w-[76.75rem] p-9 md:p-0 flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-14">
        <img src="./images/illustration-stay-productive.png" alt="" />
        <div className="flex flex-col items-start justify-center space-y-4 md:space-y-6">
          <h2 className="font-bold md:text-[2.7rem] text-left max-w-md tracking-[.06rem] md:tracking-normal md:leading-[3rem]">
            Stay productive, wherever you are
          </h2>
          <p className="text-sm md:text-base text-left">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-sm md:text-base text-left">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <button className="flex justify-center items-center space-x-1 font-open-sans text-xs md:text-base text-cyan1 underline underline-offset-4 decoration-cyan1">
            <p>See how fylo works</p>
            <img src="./images/icon-arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Productive;
