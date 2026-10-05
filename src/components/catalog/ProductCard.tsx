import type { ProductType } from "@/data/productData";
import styles from "./ProductCard.module.scss";
import { FavoriteButton } from "@/components/favorites";

type ProductCardProps = {
  product: ProductType;
  onToggleFavorite: (productId: number) => void;
  favoriteIds: number[];
};

export function ProductCard({
  product,
  onToggleFavorite,
  favoriteIds,
}: ProductCardProps) {
  const isFavorite = favoriteIds.includes(product.id);

  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={product.image}
        alt=""
        width={640}
        height={640}
        loading="lazy"
      />
      <FavoriteButton
        onToggleFavorite={() => onToggleFavorite(product.id)}
        isFavorite={isFavorite}
        productName={product.name}
      />
      <p className={styles.price}>{product.price} ₸</p>
      <h3 className={styles.name}>{product.name}</h3>
      {product.description && (
        <p className={styles.description}>{product.description}</p>
      )}
    </article>
  );
}
