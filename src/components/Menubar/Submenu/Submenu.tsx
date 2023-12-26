import React from "react";
import { CloseSubmenuIcon, RightLeftArrow } from "../Icons/Index";

const Submenu = ({ submenu, setSubmenu, item }: any) => {
  console.log(item?.label, "submenu item is here ");
  return (
    <div>
      <div className="sidebar_menu1 p-4   bg-primary w-[200px] h-full duration-300 transition-all ease-linear overflow-hidden">
        <div className="inner__sidebar_menu relative">
          <span className="text-sm font-normal text-secondary ">
            child menu
          </span>
          <ul className=" menu-items ">
            {item?.label.map((itemList: any, index: any) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-secondary text-sm font-medium whitespace-nowrap border border-primary py-3 px-0 hover:bg-primaryLite flex items-center justify-between hover: rounded-[6px] hover:border-white hover:border">
                  <div className="flex items-center">
                    <span
                      className={` inline-block   ${
                        submenu ? "px-0" : "px-4"
                      }`}>
                      <RightLeftArrow />
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
            className="absolute top-1/2 right-0 flex items-center bg-[#1570EF] z-50 cursor-pointer p-4 rounded-full">
            <div className="flex rounded-full ">
              <span className=" ">
                <CloseSubmenuIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
