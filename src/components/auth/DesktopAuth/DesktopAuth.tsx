import { AuthDropdown } from "@/components/auth/AuthDropdown";
import styles from "./DesktopAuth.module.scss";
import type { FocusEvent } from "react";

type DesktopAuthProps = {
  onOpen: () => void;
  onClose: () => void;
  isModalOpen: boolean;
};

export function DesktopAuth({
  onOpen,
  onClose,
  isModalOpen,
}: DesktopAuthProps) {
  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (
      event.relatedTarget &&
      event.currentTarget.contains(event.relatedTarget)
    ) {
      return;
    }

    onClose();
  };

  return (
    <div
      className={styles.desktopAuth}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={handleBlur}
    >
      <button className={`${styles.auth} reset-button`}>
        <div className="p500">Войти</div>
        <div className="p300">Мой раздел</div>
      </button>
      {isModalOpen && (
        <div onFocus={onOpen}>
          <AuthDropdown />
        </div>
      )}
    </div>
  );
}
