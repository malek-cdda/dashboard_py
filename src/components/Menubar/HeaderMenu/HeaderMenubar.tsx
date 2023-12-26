import Image from "next/image";
import React from "react";
import { ArrowDown } from "../Icons/Index";
import Profile from "@/components/Profile/Profile";

const HeaderMenubar = ({ isActive, setMenuItems, menuItems }: any) => {
  return (
    <div className="  w-full h-[65px] flex fixed top-0 right-0  bg-primary text-white ">
      <div
        className={` ${
          isActive ? "ml-20" : "ml-72"
        } text-white  px-10 bg-transparent w-full flex justify-between items-center duration-300 ease-in-out transition-all `}>
        <div className="">
          <span className="text-2xl">Dashboard</span>
        </div>
        <Profile menuItems={menuItems} setMenuItems={setMenuItems} />
      </div>
    </div>
  );
};

export default HeaderMenubar;
