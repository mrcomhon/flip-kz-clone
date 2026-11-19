"use client";

import { Container } from "@/components/layout/Container";
import { ProductCard } from "./ProductCard";
import styles from "./ProductCatalog.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import type { ProductSection } from "@/data/productData";

type ProductCatalogProps = {
  searchQuery: string;
  badges: string[];
};

export function ProductCatalog({ searchQuery, badges }: ProductCatalogProps) {
  const [sections, setSections] = useState<ProductSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        setIsError(false);
        const params = new URLSearchParams();
        params.set("search", searchQuery);
        badges.forEach((badge) => params.append("badges", badge));
        const response = await fetch(`/api/products?${params}`);
        if (!response.ok) throw new Error("error");
        const data = await response.json();
        setSections(data);
      } catch {
        setIsError(true);
        setSections([]);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, [searchQuery, badges]);

  let message = t("product.notFound");
  if (isLoading) {
    message = t("product.loading");
  }
  if (isError) {
    message = t("product.error");
  }

  return (
    <Container>
      {sections.length === 0 && <p className={styles.notFound}>{message}</p>}
      {sections.map((section) => {
        const isGridSection = section.key === "extra";

        return (
          <section className={styles.section} key={section.key}>
            <h2 className={styles.title}>{t(`badge.${section.key}`)}</h2>
            <ul
              role="list"
              className={clsx(
                styles.ul,
                isGridSection ? styles.ulGrid : styles.ulSlider,
              )}
            >
              {section.items.map((product) => {
                return (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </Container>
  );
}
