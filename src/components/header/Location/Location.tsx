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
    <button className={clsx(styles.location, className, "reset-button")}>
      <span className={`${styles.city} p300 hidden-tablet`}>
        {t("header.location.city")}
      </span>
      <div className={styles.gapRow}>
        <LocationIcon className={`${styles.icon} hidden-tablet`} />
        <div className="p500 hidden-tablet">{t("header.location.address")}</div>

        <LocationIcon className={`${styles.icon} visible-tablet`} />
        <span className={`${styles.city} p500 visible-tablet`}>
          {t("header.location.city")}
        </span>
        <a href="#" className={`${styles.mobileAddress} visible-tablet p500`}>
          {t("header.location.mobileAddress")} ▾
        </a>
      </div>
    </button>
  );
}
