import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-start gap-x-8 w-fit text-left space-y-5 md:space-y-0 text-[.95rem]">
        <div className="row-span-3 flex space-x-7 justify-center items-start">
          <img src="./images/icon-location.svg" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex space-x-7 justify-center items-center">
          <img src="./images/icon-phone.svg" alt="" />
          <p> +1-543-123-4567</p>
        </div>
        <div className="flex space-x-7 justify-center items-center">
          <img src="./images/icon-email.svg" alt="" />
          <p>example@fylo.com</p>
        </div>
      </div>
    </div>
  );
}
