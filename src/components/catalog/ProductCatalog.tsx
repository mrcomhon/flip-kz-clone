import productSections from "./productData";
import { Container } from "../layout/Container";
import { ProductCard } from "./ProductCard";
import styles from "./ProductCatalog.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

type ProductCatalogProps = {
  searchQuery: string;
};

export function ProductCatalog({ searchQuery }: ProductCatalogProps) {
  const { t } = useTranslation();
  const normalizedQuery = searchQuery.toLowerCase().trim();

  return (
    <main>
      <Container>
        {productSections.map((section, index) => {
          const isLastSection = index === productSections.length - 1;

          const filteredProducts = section.items.filter((product) =>
            product.name.toLowerCase().includes(normalizedQuery),
          );

          if (filteredProducts.length === 0) {
            return <p>{t("product.notFound")}</p>;
          } else {
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
                  {filteredProducts.map((product) => {
                    return (
                      <li key={product.id}>
                        <ProductCard product={product} />
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          }
        })}
      </Container>
    </main>
  );
}
