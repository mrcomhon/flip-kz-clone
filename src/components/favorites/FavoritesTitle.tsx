"use client";

import { useTranslation } from "react-i18next";

export function FavoritesTitle() {
  const { t } = useTranslation();

  return <h1>{t("header.menu.favorites")}</h1>;
}
