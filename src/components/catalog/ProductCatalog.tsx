"use client";

import { Container } from "@/components/layout/Container";
import { ProductCard } from "./ProductCard";
import styles from "./ProductCatalog.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { filterProducts } from "@/components/catalog/filterProducts";

type ProductCatalogProps = {
  searchQuery: string;
  badges: string[];
};

export function ProductCatalog({ searchQuery, badges }: ProductCatalogProps) {
  const { t } = useTranslation();

  const filteredProductSections = filterProducts(searchQuery, badges);

  return (
    <Container>
      {filteredProductSections.length === 0 && (
        <p className={styles.notFound}>{t("product.notFound")}</p>
      )}
      {filteredProductSections.map((section) => {
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
