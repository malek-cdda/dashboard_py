import React from "react";
import style from "./style.module.css";
interface BadgeType {
  title?: string;
  color?: string;
  bgColor?: string;
}
const Badge = ({ title, color, bgColor }: BadgeType) => {
  return (
    <>
      {title ? (
        <span
          className={style.badge}
          style={{ color: color, background: bgColor }}>
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
