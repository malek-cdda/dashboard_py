"use client";
import TableValidator from "@/components/Table/Index";
import Layouts from "@/layouts/Layouts";
import React from "react";

const Home = () => {
  return (
    <Layouts>
      <TableValidator /> {/* Fix the problem */}
    </Layouts>
  );
};

export default Home;
