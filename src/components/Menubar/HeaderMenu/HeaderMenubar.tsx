import Image from "next/image";
import React, { useState } from "react";
import { ArrowDown } from "../Icons/Index";
import Profile from "@/components/Menubar/Profile/Profile";
import Notification from "../Notification/Notification";
import Language from "../Language/Language";
import DarkmodeLightmode from "../Mode/DarkmodeLightmode";
import Accessibility from "../Accessibility/Accessibility";

const HeaderMenubar = ({ isActive, setMenuItems, menuItems }: any) => {
  const [sidebarMenuIcon, setSidebarMenuIcon] = useState<any>({
    profile: false,
    language: false,
    notification: false,
    accessblity: false,
  });
  const handleClick = (item: any) => {
    setSidebarMenuIcon({
      ...sidebarMenuIcon,
      [item]: sidebarMenuIcon[item] == true ? false : true,
    });
    for (let key in sidebarMenuIcon) {
      if (key == item) {
        continue;
      }
      sidebarMenuIcon[key] = false;
    }
    console.log(sidebarMenuIcon[item]);
  };

  return (
    <div className="  w-full h-[65px] flex fixed top-0 right-0  bg-primary text-white ">
      <div
        className={` ${
          isActive ? "ml-20" : "ml-72"
        } text-white  px-10 bg-transparent w-full flex justify-between items-center duration-300 ease-in-out transition-all `}>
        <div className="">
          <span className="text-2xl">Dashboard</span>
        </div>

        <div className="flex space-x-3">
          <Language
            sidebarMenuIcon={sidebarMenuIcon}
            handleClick={handleClick}
          />
          <Accessibility
            sidebarMenuIcon={sidebarMenuIcon}
            handleClick={handleClick}
          />
          <DarkmodeLightmode />
          <Notification
            sidebarMenuIcon={sidebarMenuIcon}
            handleClick={handleClick}
          />
          <Profile
            sidebarMenuIcon={sidebarMenuIcon}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderMenubar;
