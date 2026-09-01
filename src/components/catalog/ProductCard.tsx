import type { ProductType } from "./productData";

type ProductCardProps = {
  product: ProductType;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <p>{product.price}</p>
      <h3>{product.name}</h3>
      {product.description && <p>{product.description}</p>}
    </article>
  );
}
