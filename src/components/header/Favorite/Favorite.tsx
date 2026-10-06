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
      <span className={styles.iconWrapper}>
        <FavoriteIcon className={styles.icon} aria-hidden="true" />
        {favoriteCount > 0 && (
          <span className={styles.count}>{favoriteCount}</span>
        )}
      </span>
    </a>
  );
}
