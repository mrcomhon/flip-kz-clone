import LogoIcon from "@/assets/icons/logo.svg?react";
import { useTranslation } from "react-i18next";
import styles from "./Logo.module.scss";
import Link from "next/link";

export function Logo() {
  const { t } = useTranslation();

  return (
    <Link
      href="/"
      title={t("header.logo.home")}
      aria-label={t("header.logo.home")}
    >
      <LogoIcon className={styles.logo} aria-hidden="true" />
    </Link>
  );
}
