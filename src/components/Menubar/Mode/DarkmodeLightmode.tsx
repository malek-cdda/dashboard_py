import Image from "next/image";
import React from "react";

const DarkmodeLightmode = () => {
  return (
    <div className=" relative">
      <button className="relative     ">
        <Image
          src="/assets/light.svg"
          width={1000}
          height={1000}
          className="w-10 h-10 rounded-full border-2 border-[#cccccc]"
          alt=""
        />
      </button>
    </div>
  );
};

export default DarkmodeLightmode;
