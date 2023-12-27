"use client";
import React, { lazy, useEffect, useState } from "react";

import { AiFillAmazonCircle } from "react-icons/ai";
import dynamic from "next/dynamic";
import { ArrowDown, CloseSubmenuIcon, RightLeftArrow } from "../Icons/Index";
import Link from "next/link";
import Image from "next/image";
import Submenu from "../Submenu/Submenu";
import Sidebar from "../Sidebar/Sidebar";
import HeaderMenubar from "../HeaderMenu/HeaderMenubar";
import { data } from "../MenuData/data";
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
      <div className="main_body bg-red-900">
        {data.map((item, index) => (
          <div key={index}>
            <Sidebar
              setIsActive={setIsActive}
              isActive={isActive}
              item={data}
              setSubmenuItems={setSubmenuItems}
              submenuItems={submenuItems}
            />
            {/* {item?.name == submenuItems && (
              <Submenu submenu={submenu} setSubmenu={setSubmenu} item={item} />
            )} */}
          </div>
        ))}
        <div className=" bg-black     ">
          <h1> this is heading number -1 title is tilte</h1>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
