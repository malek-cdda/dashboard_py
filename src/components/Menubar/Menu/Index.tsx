"use client";
import React, { lazy, useEffect, useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import HeaderMenubar from "../HeaderMenu/HeaderMenubar";
import { data } from "../MenuData/data";

import { FaFacebookF } from "react-icons/fa6";
import { FaGithub, FaTwitter } from "react-icons/fa";

const MenuBar = ({ children }: any) => {
  const [isActive, setIsActive] = useState(false);
  const [menuItems, setMenuItems] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  const [activeMenu, setActiveMenu] = useState("");
  const [submenuItems, setSubmenuItems] = useState("home");
  return (
    <div
      className={`${isActive ? "active wrapper  " : "wrapper   "} ${
        submenu ? "new" : ""
      }    `}>
      <HeaderMenubar
        isActive={isActive}
        setMenuItems={setMenuItems}
        menuItems={menuItems}
      />
      <FooterArea isActive={isActive} />
      <div className="main_body my-[76px] ">
        {data.map((item, index) => (
          <div key={index}>
            <Sidebar
              setIsActive={setIsActive}
              isActive={isActive}
              item={data}
              setSubmenuItems={setSubmenuItems}
              submenuItems={submenuItems}
            />
            {/* nested layout menubar code  */}
            {/* {item?.name == submenuItems && (
              <Submenu submenu={submenu} setSubmenu={setSubmenu} item={item} />
            )} */}
          </div>
        ))}
        <ContainerArea isActive={isActive} className="  my-32">
          {children}
        </ContainerArea>
      </div>
    </div>
  );
};

export default MenuBar;
const ContainerArea = ({ isActive, children }: any) => {
  return (
    <div
      className={` ${
        isActive ? "md:ml-[84px] ml-[302px]  " : "md:ml-[302px] ml-[84px]"
      }   duration-300 ease-in-out transition-all    `}>
      {children}
    </div>
  );
};

const FooterArea = ({ isActive }: any) => {
  return (
    <div className="  w-full h-[56px] flex fixed bottom-0 right-0  bg-primary text-white ">
      <div
        className={` ${
          isActive ? "md:ml-20 ml-72 " : "md:ml-72 ml-20"
        } text-white  px-10   bg-transparent w-full flex justify-between items-center duration-300 ease-in-out transition-all `}>
        <div className="">
          <span className="text-base lg:text-lg leading-[18px] ">
            © 2024 Pyreactor inc.
          </span>
        </div>

        <div className="flex space-x-4">
          <FaFacebookF className="text-[#666666] h-6 w-6" />
          <FaTwitter className="text-[#666666] h-6 w-6" />
          <FaGithub className="text-[#666666] h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
