import React from "react";
import WidgetCard from "../utils/Widget/Card";
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
            title="Total Data Validation"
            user="12"
            subTitle="Subtitle"
            iconColor="#6938ef"
          />
          <WidgetCard
            icon={<IoAnalytics />}
            title="Ready to Use"
            user="12"
            subTitle="Subtitle"
            iconColor="#0e9384"
          />
          <WidgetCard
            title="Data Validate With Issues"
            user="12"
            subTitle="Subtitle"
            icon={<IoAnalytics />}
            iconColor="#dc6803"
            bgColor="re"
          />
        </div>
      </div>

      <ValidatorTable />
    </div>
  );
};

export default TableValidator;
