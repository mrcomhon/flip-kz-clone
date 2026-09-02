import type { ProductType } from "./productData";
import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  product: ProductType;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={product.image}
        alt={product.name}
        width={640}
        height={640}
        loading="lazy"
      />
      <p className={styles.price}>{product.price} ₸</p>
      <h3 className={styles.name}>{product.name}</h3>
      {product.description && (
        <p className={styles.description}>{product.description}</p>
      )}
    </article>
  );
}
