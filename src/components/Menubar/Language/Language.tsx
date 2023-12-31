import Image from "next/image";
import React, { useState } from "react";

import { RxAvatar } from "react-icons/rx";

import { LiaLanguageSolid } from "react-icons/lia";
import { IoCheckmarkDone } from "react-icons/io5";
const data = [
  {
    name: "America",
  },
  {
    name: "Bangladesh",
  },

  {
    name: "India",
  },
  {
    name: "Brazil",
  },
  {
    name: "Brazil",
  },
  {
    name: "Brazil",
  },
  {
    name: "Brazil",
  },
];
const availAbleItem = [
  { name: "Available", color: "#fff" },
  { name: "Busy", color: "#D92D20" },
  { name: "Do not disturb", color: "#DC6803" },
  { name: "Appear offline", color: "#808080" },
];
const Language = ({ sidebarMenuIcon, handleClick }: any) => {
  const [language, setLanguage] = useState(false);
  return (
    <div className=" relative ">
      <button
        className="relative w-10 h-10  bg-[#5f5f5f33] p-2 rounded-full  "
        onClick={() => handleClick("language")}>
        <LiaLanguageSolid className="w-6 h-6  " />
      </button>
      <div
        className={`${
          sidebarMenuIcon?.language
            ? "block   min-h-min  borderss"
            : " h-0 text-transparent  overflow-hidden  "
        } bg-[#1A1A1A] absolute -right-6 top-[54px] rounded-md duration-300 ease-in-out transition-all  w-80  divide-y  h-[300px] text-white  `}>
        <div className=" space-x-2 py-3  px-5 justify-between items-center">
          <span className="text-lg">Select your language</span>
        </div>

        <LanguageData data={data} />
      </div>
    </div>
  );
};

export default Language;

const LanguageData = ({ data }: any) => {
  return (
    <div
      className={` ${
        data.length > 6 ? " overflow-y-auto  h-[250px] " : "h-auto"
      }  py-3  px-5  `}>
      {data.map((item: any, index: any) => (
        <div key={index} className="flex justify-between py-3 space-x-2">
          <div className="flex space-x-2 items-center">
            <Image
              src="/assets/flag.png"
              width={1000}
              height={1000}
              alt=""
              className="w-7 h-7 "
            />
            <span className="text-base font-medium leading-5 ">English</span>
          </div>
          {index == 0 && (
            <div>
              <input className="" type="checkbox" defaultChecked />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
