import FavoriteIcon from "@/assets/icons/favorite-heart.svg?react";
import styles from "./FavoriteButton.module.scss";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

type FavoriteButtonProps = {
  onToggleFavorite: () => void;
  isFavorite: boolean;
  productName: string;
};

export function FavoriteButton({
  onToggleFavorite,
  isFavorite,
  productName,
}: FavoriteButtonProps) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className={clsx(styles.button, isFavorite && styles.isActive)}
      aria-label={t("product.addToFavorites", { name: productName })}
      onClick={onToggleFavorite}
      aria-pressed={isFavorite}
    >
      <FavoriteIcon
        className={styles.icon}
        aria-hidden="true"
        focusable="false"
      />
    </button>
  );
}
