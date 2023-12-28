import Image from "next/image";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
console.log(style);
const data = [
  {
    name: "Color Blind",
    type: "checkbox",
  },
  {
    name: "Color",
  },

  {
    name: "Vision impaired (microphone)",
    type: "checkbox",
  },
  {
    name: "Motor disable (Keyboard navigation)",
    type: "checkbox",
  },
  {
    name: "Font Size",
    type: "zoom_font",
  },
  {
    name: "Page Zoom",
    type: "zoom_font",
  },
  {
    name: "Magnify",
    type: "checkbox",
  },
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
        } bg-[#1A1A1A] absolute -right-6 top-[54px] rounded-md duration-300 ease-in-out transition-all  w-[360px]  divide-y `}>
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
      bodyZoom.zoom = `${count + 5}%`;
      return;
    } else {
      setCount(count - 5);
      bodyZoom.zoom = `${count - 5}%`;
    }
  };
  return (
    <div className="divide-y divide-dashed ">
      {data.map((item: any, index: any) => (
        <AccessibilityMenutItem
          item={item}
          key={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
const AccessibilityMenutItem = ({ item, handleClick }: any) => {
  return (
    <div className="flex justify-between py-4 px-5 relative">
      <div className="flex space-x-1">
        <span>
          <ZoomIcon />
        </span>
        <div className="text-base leading-5 ">
          <span>{item.name}</span>
          {item.name == "Color" && (
            <div className="flex  justify-around   w-full absolute left-0 py-[2px] ">
              <div className="w-1/2 flex space-x-2 items-center pl-20">
                <div className="w-3 h-3 bg-[#F2F2F2] rounded-full border"></div>
                <div className="w-3 h-3 bg-[#54c59a] rounded-full border"></div>
                <div className="w-3 h-3 bg-[#3e3bee] rounded-full border"></div>
                <div className="w-3 h-3 bg-[#ce4343] rounded-full border"></div>
              </div>
              <div className="w-1/2 flex pl-36">
                <EditIcon />
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        {item.type == "zoom_font" && (
          <div>
            <div className="p-1 flex  items-center bg-[#333333] space-x-1 rounded-full ">
              <button
                className="w-5 h-5 bg-[#4D4D4D] flex items-center justify-center rounded-full  hover:bg-gray-400  "
                onClick={() => handleClick("inc")}>
                {" "}
                <PlusIcon />{" "}
              </button>
              <span className="text-sm leading-[18px] font-medium">100%</span>
              <button
                className="w-5 h-5 bg-[#4D4D4D] flex items-center justify-center rounded-full hover:bg-gray-400  "
                onClick={() => handleClick("i")}>
                <MinusIcon />
              </button>
            </div>
            {item.name == "Font Size" && (
              <span className="text-xs leading-3 font-normal text-[#B3B3B3] underline tracking-tighter mt-0 block">
                Change font style
              </span>
            )}
          </div>
        )}
        {item?.type == "checkbox" && (
          <label className={style.switch}>
            <input type="checkbox" />
            <span className={`${style.slider} ${style.round}`}> </span>
          </label>
        )}
      </div>
    </div>
  );
};
const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none">
      <path
        d="M7.73499 2.09996L2.94583 7.16913C2.76499 7.36163 2.58999 7.7408 2.55499 8.0033L2.33916 9.8933C2.26333 10.5758 2.75333 11.0425 3.42999 10.9258L5.30833 10.605C5.57083 10.5583 5.93833 10.3658 6.11916 10.1675L10.9083 5.0983C11.7367 4.2233 12.11 3.2258 10.8208 2.00663C9.53749 0.79913 8.56333 1.22496 7.73499 2.09996Z"
        stroke="#F2F2F2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.93582 2.9458C7.18665 4.5558 8.49332 5.78663 10.115 5.94997"
        stroke="#F2F2F2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.75 12.8334H12.25"
        stroke="#F2F2F2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
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

const ZoomIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M9.20001 11.7H14.2"
        stroke="#F2F2F2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.7 14.2V9.19995"
        stroke="#F2F2F2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="#F2F2F2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 22L20 20"
        stroke="#F2F2F2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
