"use client";

import { ProductCard } from "@/components/catalog/ProductCard";
import { Container } from "@/components/layout/Container";
import productSections from "@/data/productData";
import { useAppSelector } from "@/store/hooks";
import styles from "./FavoritesList.module.scss";
import { useTranslation } from "react-i18next";

export function FavoritesList() {
  const { t } = useTranslation();
  const favoriteIds = useAppSelector((state) => state.favorites.value);

  const allProducts = productSections.flatMap((section) => section.items);
  const favoriteProducts = allProducts.filter((product) =>
    favoriteIds.includes(product.id),
  );

  return (
    <Container>
      {favoriteProducts.length === 0 ? (
        <p>{t("favoritesPage.empty")}</p>
      ) : (
        <ul role="list" className={styles.list}>
          {favoriteProducts.map((product) => {
            return (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
}
