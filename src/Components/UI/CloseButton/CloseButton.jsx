import styles from '@/Components/UI/CloseButton/CloseButton.module.scss'
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";

function CloseButton({onClose}) {
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

export default CloseButton