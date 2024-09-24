import React from "react";

const MobileNavBar = ({ setClose }) => {
  return (
    <div className=" fixed pb-[20px] bg-slate-500 top-0 right-0 md:hidden flex flex-col  z-20 w-[300px] min-h-screen  gap-4  text-white text-[16px]">
      <div
        onClick={() => setClose(false)}
        className=" absolute top-4 rounded-full text-black right-4 w-[24px] h-[24px] bg-white flex items-center justify-center text-[14px]"
      >
        x
      </div>
      <div className=" pt-[60px]">
        <a
          className=" border-b-[2px] border-slate-500 px-2 hover:border-white"
          href="/"
        >
          Home
        </a>
      </div>
      <div>
        <a
          className=" border-b-[2px] border-slate-500 px-2 hover:border-white"
          href="/"
        >
          Services
        </a>
      </div>
      <div>
        <a
          className=" border-b-[2px] border-slate-500 px-2 hover:border-white"
          href="/"
        >
          Contact Us
        </a>
      </div>
      <div>
        <a
          className=" border-b-[2px] border-slate-500 px-2 hover:border-white"
          href="/"
        >
          About Us
        </a>
      </div>
      <div>
        {" "}
        <button className=" bg-white px-2 py-[4px] text-black rounded-[4px]">
          Login
        </button>
      </div>
    </div>
  );
};

export default MobileNavBar;
