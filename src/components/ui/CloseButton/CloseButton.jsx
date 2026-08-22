import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import styles from "./CloseButton.module.scss";

export function CloseButton({onClose}) {
  return (
    <button
      type="button"
      onClick={onClose}
      className={clsx('reset-button', styles.closeButton)}
    >
      <IoMdClose />
    </button>
  )
}
