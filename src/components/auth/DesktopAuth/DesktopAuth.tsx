import { AuthDropdown } from "@/components/auth/AuthDropdown";
import { useTranslation } from "react-i18next";
import styles from "./DesktopAuth.module.scss";
import type { FocusEvent } from "react";
import { useId, useRef } from "react";

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
  const { t } = useTranslation();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (
      event.relatedTarget &&
      event.currentTarget.contains(event.relatedTarget)
    ) {
      return;
    }

    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" && isModalOpen) {
      onClose();
      buttonRef.current?.focus();
    }
  };

  return (
    <div
      className={styles.desktopAuth}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={buttonRef}
        onClick={onOpen}
        type="button"
        className={`${styles.auth} reset-button`}
        aria-expanded={isModalOpen}
        aria-controls={isModalOpen ? menuId : undefined}
      >
        <div className="p500">{t("header.auth.login")}</div>
        <div className="p300">{t("header.auth.mySection")}</div>
      </button>
      {isModalOpen && (
        <AuthDropdown menuId={menuId} />
      )}
    </div>
  );
}
