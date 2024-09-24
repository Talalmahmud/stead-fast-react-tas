import React, { useState } from "react";
import MobileNavBar from "./MobileNavBar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" px-4 w-full flex items-center justify-between py-4 bg-black">
      <div>
        <a className=" text-red-100 font-semibold text-[24px]" href="/">
          Title
        </a>
      </div>

      <div className=" hidden md:flex items-center gap-4 text-white text-[16px]">
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
      <button className=" hidden md:block bg-white px-2 py-[4px]  rounded-[4px]">
        Login
      </button>
      <div
        onClick={() => setToggle(true)}
        className=" md:hidden flex flex-col gap-[4px] min-w-[24px]"
      >
        <div className=" w-full h-[2px] bg-white"></div>
        <div className=" w-full h-[2px] bg-white"></div>{" "}
        <div className=" w-full h-[2px] bg-white"></div>
      </div>
      {toggle && <MobileNavBar setClose={setToggle} />}
    </div>
  );
};

export default Navbar;
