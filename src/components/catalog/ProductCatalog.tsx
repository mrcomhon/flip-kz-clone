import productSections from "./productData";
import { Container } from "../layout/Container";
import { ProductCard } from "./ProductCard";

export function ProductCatalog() {
  return (
    <main>
      <Container>
        {productSections.map((section) => (
          <section key={section.key}>
            <h2>{section.name}</h2>
            <ul>
              {section.items.map((product) => {
                return (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </Container>
    </main>
  );
}
