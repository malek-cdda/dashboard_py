import Image from "next/image";
import style from "./style.module.css";

export const AuthorComponent = ({ toggleProduct, data, allTableData }: any) => {
  console.log(data);
  return (
    <div className={style.author_sec}>
      <input
        type="checkbox"
        // checked={toggleProduct.some((items: any) => items?.id === data?.id)}
        // onChange={() => allTableData(data)}
      />{" "}
      <Image
        src={data?.img}
        alt="arrow-down"
        width={20}
        height={20}
        className={style?.author_img}
      />
    </div>
  );
};
export const CheckboxComponent = ({
  data,
  item,
  updateAllToggleFunction,
}: any) => {
  return (
    <>
      {/* data.id, [item]: data[item] }} toggleProduct="toggle" /> */}
      <input
        type="checkbox"
        checked={data[item]}
        onChange={() => {
          updateAllToggleFunction({ id: data.id, [item]: !data[item] });
        }}
      />
    </>
  );
};

// action component for table data
