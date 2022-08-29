import React from "react";

function FeatureItems(props) {
  return (
    <div className="flex flex-col justify-center items-center max-w-[28rem]">
      <img
        src={`./images/${props.icon}`}
        alt=""
        className="w-16 md:w-[4.5rem]"
      />
      <h2 className="font-bold md:text-xl tracking-[.06rem] mt-8">
        {props.title}
      </h2>
      <p className="text-sm px-9 mt-2">{props.desc}</p>
    </div>
  );
}

export default FeatureItems;
