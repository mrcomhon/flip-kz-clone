import LogoIcon from "@/assets/icons/logo.svg?react";
import { useTranslation } from "react-i18next";
import styles from "./Logo.module.scss";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  const { t } = useTranslation();

  return (
    <a href="/logo" title={t("header.logo.home")} className={className}>
      <LogoIcon className={styles.logo} />
    </a>
  );
}
