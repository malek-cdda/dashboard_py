import MenuBar from "@/components/Menubar/Menu/Index";
import React from "react";

const Layouts = ({ children }: any) => {
  return (
    <div>
      <MenuBar>{children} </MenuBar>
    </div>
  );
};

export default Layouts;
