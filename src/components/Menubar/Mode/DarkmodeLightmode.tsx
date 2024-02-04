import { toggleDarkmode } from "@/redux/slice/tableDataSlice";
import { store } from "@/redux/store";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuSunDim } from "react-icons/lu";
const DarkmodeLightmode = () => {
  // useEffect(() => {
  //   let body = document.body;
  //   let theme: any;
  //   theme = localStorage.getItem("theme");
  //   if (theme === "dark") {
  //     body.classList.add("dark");
  //   } else {
  //     body.classList.add("light");
  //   }
  // }, []);
  const dispatch = useDispatch();

  const lightMode = "light";
  const darkMode = "dark";
  let body = document.body;
  let theme: any;
  theme = localStorage.getItem("theme");
  console.log(theme);

  if (theme === lightMode || theme === darkMode) {
    body.classList.add(theme);
  } else {
    body.classList.add(theme);
  }

  const handleDarkMode = (e: string) => {
    if (theme === darkMode) {
      body.classList.replace(darkMode, lightMode);
      body.classList.remove(theme);
      localStorage.setItem("theme", lightMode);
      theme = lightMode;
    } else {
      body.classList.replace(lightMode, darkMode);
      body.classList.remove(theme);
      localStorage.setItem("theme", darkMode);
      theme = darkMode;
    }
  };

  const state = useSelector((state: any) => state.darkmode?.darkmode);
  console.log(state);
  if (state === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.add("light");
  }
  return (
    <div className="  ">
      <button
        className="relative  w-10 h-10  bg-[#5f5f5f33] p-2 rounded-full   "
        onClick={() => handleDarkMode("ee")}>
        {" "}
        <LuSunDim className="w-6 h-6 " />
      </button>
    </div>
  );
};

export default DarkmodeLightmode;
