import React, { useState } from "react";
import { ArrowDown, RightLeftArrow } from "../Icons/Index";
import Link from "next/link";

const Sidebar = ({
  setIsActive,
  isActive,
  item,
  setSubmenuItems,
  submenuItems,
}: any) => {
  console.log(item);
  console.log(submenuItems);
  return (
    <div>
      <div className="sidebar_menu p-4 fixed top-0 left-0 bg-primary w-[300px] h-full duration-300 transition-all ease-linear overflow-hidden">
        <div className="inner__sidebar_menu relative">
          <div className="logo   bg-primary border-r-[1px] border-b-[1px] border-primary">
            <Link href="#" className="text-white text-center block pt-5">
              Pyreactor
            </Link>
          </div>
          <span className="text-sm font-normal text-secondary ">Main menu</span>
          <ul className=" menu-items relative ">
            {item.map((listItem: any, index: any) => (
              <li
                key={index}
                onClick={() => {
                  setSubmenuItems(listItem?.name);
                }}>
                <a
                  href="#"
                  className={`text-secondary text-sm font-medium whitespace-nowrap border border-primary py-3 px-0  ${
                    submenuItems == listItem.name
                      ? " bg-primaryLite  border-white"
                      : ""
                  } flex items-center justify-between hover: rounded-[6px]  hover:border hover:bg-primaryLite hover:border-white`}>
                  <div className="flex items-center">
                    <span className="icon inline-block px-4 ">
                      <RightLeftArrow />
                    </span>
                    <span className="list inline-block">
                      {" "}
                      {console.log(submenuItems == listItem.name)}
                      {listItem?.name}{" "}
                    </span>
                  </div>
                  <span className="icon inline-block px-4 ">
                    <ArrowDown />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          {/* hamburger button section  */}

          <div
            onClick={() => setIsActive(!isActive)}
            className="absolute top-0 right-0 flex items-center bg-[#1570EF] z-50 cursor-pointer p-4 rounded-full">
            <div className="flex rounded-full ">
              <span className=" ">
                <RightLeftArrow />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
