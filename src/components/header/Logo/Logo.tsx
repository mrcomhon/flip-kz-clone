import LogoIcon from "@/assets/icons/logo.svg?react";
import { useTranslation } from "react-i18next";
import styles from "./Logo.module.scss";

export function Logo() {
  const { t } = useTranslation();

  return (
    <a href="/logo" title={t("header.logo.home")}>
      <LogoIcon className={styles.logo} />
    </a>
  );
}
