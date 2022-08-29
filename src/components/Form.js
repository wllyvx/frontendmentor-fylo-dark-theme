import React from "react";

function Form() {
  return (
    <div className="card px-7 md:px-[4.75rem] bg-intro-background w-[21rem] md:w-[54rem] left-1/2 -translate-x-1/2 -top-20 absolute rounded-xl shadow-md">
      <div className="space-y-4 md:space-y-8 pt-10 md:pt-12 pb-9">
        <h2 className="font-bold text-[1.05rem] md:text-3xl">
          Get early accsess today
        </h2>
        <p className="text-[.9rem]">
          {" "}
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="space-y-6 md:space-y-0 md:space-x-8 flex flex-col md:flex-row">
          <input
            type="email"
            id="email"
            placeholder="email@example.com"
            className="w-full md:w-8/12 rounded-full text-xs py-4 px-7 text-black"
          />
          <button className="w-full md:w-4/12 rounded-full py-4 text-center text-xs font-bold  tracking-wider bg-gradient-to-r from-cyan1 to-blue1 hover:bg-cyan-200">
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
