"use client";

import { useTranslation } from "react-i18next";
import { Container } from "@/components/layout/Container";
import styles from "./FavoritesTitle.module.scss";

export function FavoritesTitle() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1 className={styles.title}>{t("header.menu.favorites")}</h1>
    </Container>
  );
}
