import FavoriteIcon from "@/assets/icons/favorite.svg?react";
import styles from "./Favorite.module.scss";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

export function Favorite() {
  const { t } = useTranslation();
  const favoriteCount = useAppSelector((state) => state.favorites.value.length);

  const label =
    favoriteCount > 0
      ? t("header.favorite.withCount", { count: favoriteCount })
      : t("header.menu.favorites");

  return (
    <Link className={styles.favorite} href="/favorites" aria-label={label}>
      <span className={styles.iconWrapper}>
        <FavoriteIcon className={styles.icon} aria-hidden="true" />
        {favoriteCount > 0 && (
          <span className={styles.count} aria-hidden="true">
            {favoriteCount}
          </span>
        )}
      </span>
    </Link>
  );
}
