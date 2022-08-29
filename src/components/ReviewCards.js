import React from "react";

function ReviewCards(props) {
  return (
    <div className="flex flex-col max-w-[22.75rem] bg-testimonials-background p-6 md:py-10 md:px-7 space-y-4 md:space-y-7 text-left rounded-md md:rounded-lg">
      <p className="text-[.575rem] md:text-sm tracking-wide md:tracking-wider leading-[1.1rem]">
        {props.review}
      </p>
      <div className="flex justify-start items-center space-x-2">
        <img
          src={`./images/${props.img}`}
          alt=""
          className="w-6 rounded-full"
        />
        <div className="space-y-1">
          <h3 className="text-[.575rem] font-bold tracking-widest">
            {props.name}
          </h3>
          <p className="text-[.5rem] tracking-widest">{props.title}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCards;
