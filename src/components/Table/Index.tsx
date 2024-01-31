import React from "react";
import WidgetCard from "../Widget/Card";
import { IoAnalytics } from "react-icons/io5";
import ValidatorTable from "./ValidatorTable/ValidatorTable";
const TableValidator = () => {
  return (
    <div>
      <div className="flex w-full gap-3 py-10">
        <WidgetCard
          icon={<IoAnalytics />}
          title="Title"
          user="12"
          subTitle="Subtitle"
          iconColor="red"
        />
        <WidgetCard
          icon={<IoAnalytics />}
          title="Title"
          user="12"
          subTitle="Subtitle"
        />
        <WidgetCard
          icon={<IoAnalytics />}
          title="Title"
          user="12"
          subTitle="Subtitle"
          iconColor="green"
        />
      </div>
      <div className="text-white">
        <ValidatorTable />
      </div>
    </div>
  );
};

export default TableValidator;
