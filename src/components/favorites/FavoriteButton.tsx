import FavoriteIcon from "@/assets/icons/favorite.svg?react";
import styles from "./FavoriteButton.module.scss";
import { useTranslation } from "react-i18next";

export function FavoriteButton() {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className={styles.favorite}
      aria-label={t("header.menu.favorites")}
    >
      <FavoriteIcon className={styles.icon} aria-hidden="true" />
    </button>
  );
}
