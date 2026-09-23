import FavoriteIcon from "@/assets/icons/favorite.svg?react";
import styles from "./FavoriteButton.module.scss";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

type FavoriteButtonProps = {
  onToggleFavorite: () => void;
  isFavorite: boolean;
};

export function FavoriteButton({
  onToggleFavorite,
  isFavorite,
}: FavoriteButtonProps) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className={clsx(styles.button, isFavorite && styles.isActive)}
      aria-label={t("header.menu.favorites")}
      onClick={onToggleFavorite}
      aria-pressed={isFavorite}
    >
      <FavoriteIcon className={styles.icon} aria-hidden="true" />
    </button>
  );
}
