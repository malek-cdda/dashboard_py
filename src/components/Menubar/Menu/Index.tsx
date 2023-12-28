"use client";
import React, { lazy, useEffect, useState } from "react";

import { AiFillAmazonCircle } from "react-icons/ai";
import dynamic from "next/dynamic";
import { ArrowDown, CloseSubmenuIcon, RightLeftArrow } from "../Icons/Index";

import Sidebar from "../Sidebar/Sidebar";
import HeaderMenubar from "../HeaderMenu/HeaderMenubar";
import { data } from "../MenuData/data";
import Drugable from "@/components/Drugable/Drugable";
const MenuBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [menuItems, setMenuItems] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  const [activeMenu, setActiveMenu] = useState("");
  const [submenuItems, setSubmenuItems] = useState("home");
  return (
    <div
      className={`${
        isActive ? "active wrapper bg-primary" : "wrapper bg-primary"
      } ${submenu ? "new" : ""} bg-gray-300`}>
      <HeaderMenubar
        isActive={isActive}
        setMenuItems={setMenuItems}
        menuItems={menuItems}
      />
      <FooterArea isActive={isActive} />
      <div className="main_body  ">
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
        <ContainerArea isActive={isActive} />
      </div>
    </div>
  );
};

export default MenuBar;
const ContainerArea = ({ isActive }: any) => {
  return (
    <div
      className={` ${
        isActive ? "md:ml-24 ml-80 " : "md:ml-80 ml-24"
      }   duration-300 ease-in-out transition-all mt-16 bg-black text-white `}>
      <Drugable />
    </div>
  );
};

const FooterArea = ({ isActive }: any) => {
  return (
    <div className="  w-full h-[65px] flex fixed bottom-0 right-0  bg-primary text-white ">
      <div
        className={` ${
          isActive ? "md:ml-20 ml-72 " : "md:ml-72 ml-20"
        } text-white  px-10   bg-transparent w-full flex justify-between items-center duration-300 ease-in-out transition-all `}>
        <div className="">
          <span className="text-sm leading-[18px]">© 2024 Pyreactor inc.</span>
        </div>

        <div className="flex space-x-3">
          {[1, 2, 3].map((item, index) => (
            <Github key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Github = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0061 2.00001C9.63078 1.99737 7.3322 2.86251 5.52229 4.44037C3.71237 6.01823 2.50942 8.20566 2.12903 10.6107C1.74863 13.0157 2.21566 15.481 3.4464 17.5649C4.67715 19.6488 6.59116 21.215 8.84543 21.9828C9.34968 22.0779 9.52919 21.7604 9.52919 21.4893C9.52919 21.2442 9.51911 20.4373 9.51507 19.5807C6.73464 20.2014 6.1487 18.3714 6.1487 18.3714C5.96519 17.7515 5.57175 17.2191 5.03935 16.8704C4.13169 16.2342 5.10893 16.2498 5.10893 16.2498C5.42582 16.2945 5.72855 16.413 5.99404 16.596C6.25952 16.7791 6.48075 17.0219 6.64084 17.3059C6.77627 17.5588 6.95922 17.7816 7.17912 17.9615C7.39901 18.1414 7.6515 18.2748 7.92197 18.354C8.19244 18.4331 8.47552 18.4565 8.75486 18.4228C9.03419 18.389 9.30423 18.2988 9.54936 18.1573C9.59395 17.6372 9.81905 17.1509 10.1837 16.7866C7.96501 16.528 5.63033 15.6487 5.63033 11.7178C5.61654 10.6991 5.98563 9.71409 6.66102 8.96713C6.35487 8.08315 6.38913 7.11266 6.75682 6.25373C6.75682 6.25373 7.5959 5.97856 9.506 7.30474C11.144 6.84545 12.8722 6.84545 14.5102 7.30474C16.4162 5.97856 17.2503 6.25373 17.2503 6.25373C17.6195 7.11202 17.6556 8.08248 17.3511 8.96713C18.0262 9.71412 18.3947 10.6993 18.3798 11.7178C18.3798 15.656 16.0411 16.5218 13.8163 16.7753C14.0545 17.0238 14.2383 17.3216 14.3553 17.6487C14.4724 17.9759 14.52 18.3249 14.4951 18.6725C14.4951 20.0442 14.4829 21.149 14.4829 21.4862C14.4829 21.7583 14.6635 22.0779 15.1697 21.9776C17.4205 21.2069 19.3306 19.6399 20.5582 17.557C21.7859 15.4742 22.2511 13.0112 21.8707 10.6087C21.4902 8.20625 20.2889 6.02097 18.4816 4.44377C16.6743 2.86657 14.3789 2.00033 12.0061 2.00001Z"
        fill="#666666"
      />
    </svg>
  );
};
