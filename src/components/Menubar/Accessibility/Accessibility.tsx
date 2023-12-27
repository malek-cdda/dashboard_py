import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    name: "Color Blind",
  },
  {
    name: "Color",
  },

  {
    name: "Vision impaired (microphone)",
  },
  {
    name: "Motor disable (Keyboard navigation)",
  },
  {
    name: "Font Size",
  },
  {
    name: "Page Zoom",
  },
  {
    name: "Magnify",
  },
];
const availAbleItem = [
  { name: "Available", color: "#fff" },
  { name: "Busy", color: "#D92D20" },
  { name: "Do not disturb", color: "#DC6803" },
  { name: "Appear offline", color: "#808080" },
];
const Accessibility = ({ sidebarMenuIcon, handleClick }: any) => {
  return (
    <div className=" relative">
      <button
        className="relative     "
        onClick={() => handleClick("accessblity")}>
        <Image
          src="/assets/accessblity.svg"
          width={1000}
          height={1000}
          className="w-10 h-10 rounded-full border-2 border-[#cccccc]"
          alt=""
        />
      </button>
      <div
        className={`${
          sidebarMenuIcon?.accessblity
            ? "block   min-h-min  borderss"
            : " h-0 text-transparent  overflow-hidden  "
        } bg-[#1A1A1A] absolute -right-6 top-[54px] rounded-md duration-300 ease-in-out transition-all  w-80  divide-y `}>
        <div className="flex space-x-2 py-3  px-5 ">
          <div className="flex flex-col">
            <span className="text-lg leading-[23px] font-semibold">
              Accessibility assistant
            </span>
            <span className="text-sm leading-4 font-normal text-[#999]">
              let’s Personalize your experience.
            </span>
          </div>
        </div>
        <div>
          <AccessibilityData data={data} />
        </div>
      </div>
    </div>
  );
};

export default Accessibility;

const AccessibilityData = ({ data }: any) => {
  let [count, setCount] = useState(100);
  const handleClick = (value: any) => {
    const bodyZoom: any = document.body.style;
    if (value == "inc") {
      setCount(count + 5);
      bodyZoom.zoom = `${count}%`;
      return;
    } else {
      setCount(count - 5);
      bodyZoom.zoom = `${count}%`;
    }
  };
  return (
    <div className="divide-y divide-dashed ">
      {data.map((item: any, index: any) => (
        <div key={index} className="flex justify-between py-2">
          <div>
            <span></span>
          </div>
          <div className="p-1 flex  items-center bg-[#333333] space-x-1 rounded-full">
            <button
              className="w-5 h-5 bg-[#4D4D4D] flex items-center justify-center rounded-full    "
              onClick={() => handleClick("inc")}>
              {" "}
              <PlusIcon />{" "}
            </button>
            <span className="text-sm leading-[18px] font-medium">100%</span>
            <button
              className="w-5 h-5 bg-[#4D4D4D] flex items-center justify-center rounded-full   "
              onClick={() => handleClick("i")}>
              <MinusIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none">
      <path
        d="M3 6H9"
        stroke="#F2F2F2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 9V3"
        stroke="#F2F2F2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none">
      <path
        d="M3 6H9"
        stroke="#F2F2F2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
