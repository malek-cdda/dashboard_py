import React, { useState } from "react";
import { ArrowDown, RightLeftArrow } from "../Icons/Index";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
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
      <div className="sidebar_menu p-4 fixed top-0 left-0 bg-primary w-[300px] h-full duration-300 transition-all ease-linear  ">
        <div className="inner__sidebar_menu relative">
          <div className="logo   bg-primary border-r-[1px] border-b-[1px] border-primary">
            <Link
              href="#"
              className={`text-white text-center   pt-5 ${
                isActive && "hidden"
              }   `}>
              Pyreactor
            </Link>
            <Link
              href="#"
              className={`text-white text-center   pt-5 ${
                !isActive && "hidden"
              }  `}>
              <PyreactorIcon />
            </Link>
          </div>
          <span
            className={`text-sm font-normal text-secondary ${
              isActive && "hidden"
            } `}>
            Main menu
          </span>
          <ul className=" menu-items relative overflow-y-scroll overflow-hidden ">
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
            className="absolute top-0 -right-6 flex items-center bg-[#1570EF]   cursor-pointer p-3 rounded-full z-50">
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

const PyreactorIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none">
      <g clip-path="url(#clip0_16_7797)">
        <path
          d="M14.9998 30C23.2843 30 29.9998 23.2845 29.9998 15V4.5C29.9998 3.30653 29.5257 2.16193 28.6818 1.31802C27.8379 0.474106 26.6933 0 25.4998 0L15.7498 0V6.5805C15.7498 8.082 15.8413 9.6375 16.6288 10.9155C17.1926 11.8314 17.9468 12.6153 18.8402 13.2141C19.7336 13.8129 20.7454 14.2124 21.8068 14.3857L22.0941 14.4323C22.2125 14.4727 22.3153 14.5492 22.3881 14.651C22.4609 14.7528 22.5 14.8749 22.5 15C22.5 15.1251 22.4609 15.2472 22.3881 15.349C22.3153 15.4508 22.2125 15.5273 22.0941 15.5677L21.8068 15.6143C20.256 15.8676 18.8238 16.6017 17.7127 17.7128C16.6015 18.824 15.8674 20.2561 15.6141 21.807L15.5676 22.0942C15.5271 22.2127 15.4506 22.3155 15.3488 22.3883C15.247 22.4611 15.125 22.5002 14.9998 22.5002C14.8747 22.5002 14.7527 22.4611 14.6509 22.3883C14.549 22.3155 14.4726 22.2127 14.4321 22.0942L14.3856 21.807C14.2122 20.7456 13.8126 19.7338 13.2139 18.8404C12.6151 17.947 11.8312 17.1928 10.9153 16.629C9.63732 15.8415 8.08182 15.75 6.58032 15.75H0.0178223C0.410072 23.6858 6.96732 30 14.9998 30Z"
          fill="white"
        />
        <path
          d="M0 14.25H6.5805C8.082 14.25 9.6375 14.1585 10.9155 13.371C11.9145 12.7555 12.7555 11.9145 13.371 10.9155C14.1585 9.6375 14.25 8.082 14.25 6.5805V0H4.5C3.30653 0 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 0 3.30653 0 4.5L0 14.25Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_16_7797">
          <rect width="29.9999" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
