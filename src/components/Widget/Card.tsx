import React from "react";
import style from "./style.module.css";
export interface cardDataType {
  icon?: string | React.ReactNode;
  title?: string;
  user?: string | number;
  subTitle?: string;
  iconColor?: string;
}

const WidgetCard = ({
  icon = "",
  title = "Total Data Validation",
  user = 12,
  subTitle = "Validation",
  iconColor = "red",
}: cardDataType) => {
  return (
    <div className={style.card}>
      <div className={style.card_icon} style={{ background: iconColor }}>
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
