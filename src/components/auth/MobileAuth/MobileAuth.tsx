import AuthIcon from "@/assets/icons/account.svg?react";
import styles from "./MobileAuth.module.scss";
import { useTranslation } from "react-i18next";

export function MobileAuth() {
  const { t } = useTranslation();

  return (
    <div className={styles.mobileAuth}>
      <a
        href="#"
        className={styles.authIcon}
        aria-label={t("header.auth.login")}
      >
        <AuthIcon className={styles.icon} aria-hidden="true" />
      </a>
    </div>
  );
}
