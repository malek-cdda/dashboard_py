import React from "react";
import style from "./style.module.css";
interface BadgeType {
  title?: string;
  color?: string;
  bgColor?: string;
  gap?: string;
}
const Badge = ({ title, color, bgColor, gap = "2px" }: BadgeType) => {
  return (
    <>
      {title ? (
        <span
          className={style.badge}
          style={{ color: color, background: bgColor, margin: gap }}>
          {" "}
          {title}
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default Badge;
