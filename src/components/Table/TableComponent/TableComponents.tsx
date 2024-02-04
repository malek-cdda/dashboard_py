import Image from "next/image";
import style from "./style.module.css";
import { CiEdit } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
export const AuthorComponent = ({ toggleProduct, data, allTableData }: any) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={toggleProduct.some((items: any) => items?.id === data?.id)}
        onChange={() => allTableData(data)}
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

export const ActionComponent = ({ data, handleDelete }: any) => {
  return (
    <>
      <div className={style.actions}>
        <button>
          <FiEye className={style.action_icon} />
        </button>
        <button>
          <CiEdit className={style.action_icon} />
        </button>
        <button
          onClick={() => {
            handleDelete(data);
          }}>
          <RiDeleteBin5Line className={style.action_icon} />
        </button>
      </div>
    </>
  );
};
