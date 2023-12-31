import React from "react";

import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Submenu = ({ submenu, setSubmenu, item }: any) => {
  return (
    <div className="sidebar_menu1 p-4   bg-primary w-[100px] h-full duration-300 transition-all ease-linear  ">
      <div className="inner__sidebar_menu">
        <span className="text-sm font-normal text-secondary ">child menu</span>
        <ul className=" menu-items ">
          {item?.label.map((itemList: any, index: any) => (
            <li key={index}>
              <a
                href="#"
                className="text-secondary text-sm font-medium whitespace-nowrap border border-primary py-3 px-0 hover:bg-primaryLite flex items-center justify-between hover: rounded-[6px] hover:border-white hover:border">
                <div className="flex items-center">
                  <span
                    className={` inline-block   ${submenu ? "px-0" : "px-4"}`}>
                    <HiOutlineArrowsRightLeft />
                  </span>
                  <span className="list inline-block"> {itemList?.name}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        {/* hamburger button section  */}

        <div
          onClick={() => setSubmenu(!submenu)}
          className="absolute top-1/2 -right-4 flex items-center justify-center bg-primary z-50 cursor-pointer p-4   w-4 h-4 py-4 px-1 rounded-e-md ">
          <div className="flex rounded-full ">
            <span className=" ">
              <IoMdClose />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
