import { AuthDropdown } from "@/components/auth/AuthDropdown";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
      <button type="button" className={`${styles.auth} reset-button`}>
        <div className="p500">{t("header.auth.login")}</div>
        <div className="p300">{t("header.auth.mySection")}</div>
      </button>
      {isModalOpen && (
        <div onFocus={onOpen}>
          <AuthDropdown />
        </div>
      )}
    </div>
  );
}
