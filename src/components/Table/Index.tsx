import React from "react";
import WidgetCard from "../Widget/Card";
import { IoAnalytics } from "react-icons/io5";
import ValidatorTable from "./ValidatorTable/ValidatorTable";
import style from "./style.module.css";
const TableValidator = () => {
  return (
    <div className={style.main_table_content}>
      <div className={style.data_validate_table}>
        <p className={style.general}>General Overview</p>
        <div className={style.data_validate_table_card}>
          <WidgetCard
            icon={<IoAnalytics />}
            title="Total  Data Vaidation"
            user="12"
            subTitle="Subtitle"
            iconColor="red"
          />
          <WidgetCard
            icon={<IoAnalytics />}
            title="Ready to Use"
            user="12"
            subTitle="Subtitle"
          />
          <WidgetCard
            icon={<IoAnalytics />}
            title="Data Validation with Issues"
            user="12"
            subTitle="Subtitle"
            iconColor="green"
          />
        </div>
      </div>

      <ValidatorTable />
    </div>
  );
};

export default TableValidator;
