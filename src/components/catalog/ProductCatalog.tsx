import productSections from "./productData";
import { Container } from "../layout/Container";
import { ProductCard } from "./ProductCard";
import styles from "./Product.module.scss";
import clsx from "clsx";

export function ProductCatalog() {
  return (
    <main>
      <Container>
        {productSections.map((section, index) => {
          const isLastSection = index === productSections.length - 1;

          return (
            <section className={styles.section} key={section.key}>
              <h2 className={styles.title}>{section.name}</h2>

              <ul
                role="list"
                className={clsx(
                  styles.ul,
                  isLastSection ? styles.ulGrid : styles.ulSlider,
                )}
              >
                {section.items.map((product) => (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </Container>
    </main>
  );
}
