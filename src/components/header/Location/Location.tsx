import LocationIcon from "@/assets/icons/location.svg?react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import styles from "./Location.module.scss";

type LocationProps = {
  className?: string;
};

export function Location({ className }: LocationProps) {
  const { t } = useTranslation();

  return (
    <button
      className={clsx(styles.location, className, "reset-button")}
      type="button"
    >
      <span className="hidden-tablet">
        <span className={`${styles.city} p300`}>
          {t("header.location.city")}
        </span>
        <span className={styles.gapRow}>
          <LocationIcon className={styles.icon} aria-hidden="true" />
          <span className="p500">{t("header.location.address")}</span>
        </span>
      </span>

      <span className={clsx("visible-tablet", styles.mobileLocation)}>
        <LocationIcon className={styles.icon} aria-hidden="true" />
        <span className={`${styles.city} p500`}>
          {t("header.location.city")}
        </span>
        <span className={`${styles.mobileAddress} p500`}>
          {t("header.location.mobileAddress")} ▾
        </span>
      </span>
    </button>
  );
}
