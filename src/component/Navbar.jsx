import React from "react";

const Navbar = () => {
  return (
    <div className=" px-4 w-full flex items-center justify-between py-4 bg-black">
      <div>
        <a className=" text-red-100 font-semibold text-[24px]" href="/">
          Title
        </a>
      </div>

      <div className=" flex items-center gap-4 text-white text-[16px]">
        <div>
          <a
            className=" border-b-[2px] border-black px-2 hover:border-white"
            href="/"
          >
            Home
          </a>
        </div>
        <div>
          <a
            className=" border-b-[2px] border-black px-2 hover:border-white"
            href="/"
          >
            Services
          </a>
        </div>
        <div>
          <a
            className=" border-b-[2px] border-black px-2 hover:border-white"
            href="/"
          >
            Contact Us
          </a>
        </div>
        <div>
          <a
            className=" border-b-[2px] border-black px-2 hover:border-white"
            href="/"
          >
            About Us
          </a>
        </div>
      </div>
      <button className=" bg-white px-2 py-[4px]  rounded-[4px]">Login</button>
    </div>
  );
};

export default Navbar;
