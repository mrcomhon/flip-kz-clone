import LocationIcon from "@/assets/icons/location.svg?react";
import clsx from "clsx";
import styles from "./Location.module.scss";

type LocationProps = {
  className?: string;
};

export function Location({ className }: LocationProps) {
  return (
    <button className={clsx(styles.location, className, "reset-button")}>
      <span className={`${styles.city} p300 hidden-tablet`}>Астана</span>
      <div className={styles.gapRow}>
        <LocationIcon className={`${styles.icon} hidden-tablet`} />
        <div className="p500 hidden-tablet">Уточните адрес</div>

        <LocationIcon className={`${styles.icon} visible-tablet`} />
        <span className={`${styles.city} p500 visible-tablet`}>Астана</span>
        <a href="#" className={`${styles.mobileAddress} visible-tablet p500`}>
          уточните город и адрес доставки ▾
        </a>
      </div>
    </button>
  );
}
