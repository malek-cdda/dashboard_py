"use client";
import React, { lazy, useEffect, useState } from "react";
import { sidebarItem } from "./sidebarMenuItem";

import { AiFillAmazonCircle } from "react-icons/ai";
import dynamic from "next/dynamic";
import { RightLeftArrow } from "./Icons/Index";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="">
      <SidebarMenu />
    </div>
  );
};

export default Sidebar;

const SidebarMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={isActive ? "active wrapper" : "wrapper"}>
      <div className="  w-full h-[65px] flex fixed top-0">
        <div className="logo w-[300px] h-[74px] bg-primary border-r-[1px] border-b-[1px] border-primary">
          <Link href="#" className="text-white text-center block pt-5">
            Pyreactor
          </Link>
        </div>
        {/* <div className="top_menu">
          <div className="home_link">
            <a href="#">
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span>Home</span>
            </a>
          </div>
          <div className="right_info">
            <div className="icon_wrap">
              <div className="icon">
                <RightLeftArrow />
              </div>
            </div>
            <div className="icon_wrap">
              <div className="icon">
                <RightLeftArrow />
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="main_body">
        <div className="sidebar_menu">
          <div className="inner__sidebar_menu ">
            <ul className=" ">
              {[
                1, 2, 3, 4, 5, 5, 6, 7, 5, 5, 5, 5, 55, 5, 5, 55, 5, 5, 5, 5, 5,
                5, 5, 5, 3, 3, 3, 33, 3,
              ].map((item, index) => (
                <li key={index}>
                  <a href="#">
                    <span className="icon">
                      <RightLeftArrow />
                    </span>
                    <span className="list"> Home {item}</span>
                  </a>
                </li>
              ))}
            </ul>
            {/* hamburger button section  */}
            {/* <div
              className="hamburger bg-[#1570EF]"
              onClick={handleHamburgerClick}>
              <div className="inner_hamburger">
                <span className="arrow">
                  
                  <RightLeftArrow />
                </span>
              </div>
            </div> */}
          </div>
        </div>

        <div className="container">sdfsd</div>
      </div>
    </div>
  );
};
