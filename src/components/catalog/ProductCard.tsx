import type { ProductType } from "./productData";

type ProductCardProps = {
  product: ProductType;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <img
        src={product.image}
        alt={product.name}
        width="200"
        height="200"
        loading="lazy"
      />
      <p>{product.price}</p>
      <h3>{product.name}</h3>
      {product.description && <p>{product.description}</p>}
    </article>
  );
}
