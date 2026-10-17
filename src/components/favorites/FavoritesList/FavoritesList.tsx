"use client";

import { ProductCard } from "@/components/catalog/ProductCard";
import productSections from "@/data/productData";
import { useAppSelector } from "@/store/hooks";

export function FavoritesList() {
  const favoriteIds = useAppSelector((state) => state.favorites.value);

  const allProducts = productSections.flatMap((section) => section.items);
  const favoriteProducts = allProducts.filter((product) =>
    favoriteIds.includes(product.id),
  );

  return (
    <ul>
      {favoriteProducts.map((product) => {
        return (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        );
      })}
    </ul>
  );
}
