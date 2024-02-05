import React from "react";

const CheckBoxButton = ({
  handleSelectAllData,
  records,
  toggleProduct,
}: any) => {
  console.log(toggleProduct, records);
  return (
    <div>
      <input
        type="checkbox"
        // checked={toggle}
        checked={toggleProduct?.some((item: any) => item.id === records.id)}
        onChange={() => {
          handleSelectAllData(records);
        }}
      />
    </div>
  );
};

export default CheckBoxButton;
