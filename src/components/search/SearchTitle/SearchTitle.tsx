"use client";

import { useTranslation } from "react-i18next";

type SearchTitleProps = {
  query: string;
};

export function SearchTitle({ query }: SearchTitleProps) {
  const { t } = useTranslation();

  return <h1>{t("searchPage.title", { query })}</h1>;
}
