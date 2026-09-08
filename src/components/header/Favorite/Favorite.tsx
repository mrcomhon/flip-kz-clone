import FavoriteIcon from "@/assets/icons/favourite.svg?react";
import styles from "./Favorite.module.scss";
import { useTranslation } from "react-i18next";

export function Favorite() {
  const { t } = useTranslation();

  return (
    <a
      className={styles.favorite}
      href="#"
      aria-label={t("header.menu.favorites")}
    >
      <FavoriteIcon className={styles.icon} aria-hidden="true" />
    </a>
  );
}
