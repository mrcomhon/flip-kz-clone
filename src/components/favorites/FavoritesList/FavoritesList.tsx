"use client";

import { ProductCard } from "@/components/catalog/ProductCard";
import { Container } from "@/components/layout/Container";
import productSections from "@/data/productData";
import { useAppSelector } from "@/store/hooks";
import styles from "./FavoritesList.module.scss";

export function FavoritesList() {
  const favoriteIds = useAppSelector((state) => state.favorites.value);

  const allProducts = productSections.flatMap((section) => section.items);
  const favoriteProducts = allProducts.filter((product) =>
    favoriteIds.includes(product.id),
  );

  return (
    <Container>
      <ul role="list" className={styles.list}>
        {favoriteProducts.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
