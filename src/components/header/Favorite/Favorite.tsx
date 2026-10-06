import FavoriteIcon from "@/assets/icons/favorite.svg?react";
import styles from "./Favorite.module.scss";
import { useTranslation } from "react-i18next";

type FavoriteProps = {
  favoriteCount: number;
};

export function Favorite({ favoriteCount }: FavoriteProps) {
  const { t } = useTranslation();

  return (
    <a
      className={styles.favorite}
      href="#"
      aria-label={t("header.menu.favorites")}
    >
      <FavoriteIcon className={styles.icon} aria-hidden="true" />
      <span>{favoriteCount}</span>
    </a>
  );
}
