import { CiEdit } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import style from "./style.module.css";

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
