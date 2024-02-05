import React from "react";
import style from "./style.module.css";
export interface cardDataType {
  icon?: string | React.ReactNode;
  title?: string;
  user?: string | number;
  subTitle?: string;
  iconColor?: string;
  bgColor?: string;
  iconBgColor?: string;
}

const WidgetCard = ({
  icon = "",
  title = "Total Data Validation",
  user = 12,
  subTitle = "Validation",
  iconColor = "red",
  iconBgColor = "red",
  bgColor = "",
}: cardDataType) => {
  return (
    <div className={style.card} style={{ background: bgColor }}>
      <div
        className={style.card_icon}
        style={{ background: iconBgColor, color: iconColor }}>
        {icon}
      </div>
      <div className={style.card_body}>
        <span className={style.card_title}>{title}</span>
        <div className={style.card_footer}>
          {" "}
          <span className={style.card_footer_number}>{user}</span>
          <span>{subTitle}r</span>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
