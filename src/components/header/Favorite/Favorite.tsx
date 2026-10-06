import FavoriteIcon from "@/assets/icons/favorite.svg?react";
import styles from "./Favorite.module.scss";
import { useTranslation } from "react-i18next";

type FavoriteProps = {
  favoriteCount: number;
};

export function Favorite({ favoriteCount }: FavoriteProps) {
  const { t } = useTranslation();
  const label =
    favoriteCount > 0
      ? t("header.favorite.withCount", { count: favoriteCount })
      : t("header.menu.favorites");

  return (
    <a className={styles.favorite} href="#" aria-label={label}>
      <span className={styles.iconWrapper}>
        <FavoriteIcon className={styles.icon} aria-hidden="true" />
        {favoriteCount > 0 && (
          <span className={styles.count} aria-hidden="true">
            {favoriteCount}
          </span>
        )}
      </span>
    </a>
  );
}
