"use client";

import { useTranslation } from "react-i18next";
import { Container } from "@/components/layout/Container";
import styles from "./SearchTitle.module.scss";

type SearchTitleProps = {
  query: string;
};

export function SearchTitle({ query }: SearchTitleProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <h1 className={styles.title}>{t("searchPage.title", { query })}</h1>
    </Container>
  );
}
