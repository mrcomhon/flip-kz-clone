import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import styles from "./CloseButton.module.scss";

type CloseButtonProps = {
  onClose: () => void;
  ariaLabel: string;
};

export function CloseButton({ onClose, ariaLabel }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label={ariaLabel}
      className={clsx("reset-button", styles.closeButton)}
    >
      <IoMdClose />
    </button>
  );
}
