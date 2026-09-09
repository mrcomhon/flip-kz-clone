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

  const filteredProductSections = productSections.filter((section) => {
    return (
      section.name.toLowerCase().includes(normalizedQuery) ||
      section.items.some((item) => {
        return item.name.toLowerCase().includes(normalizedQuery);
      })
    );
  });

  return (
    <main>
      <Container>
        {filteredProductSections.length === 0 && (
          <p className={styles.notFound}>{t("product.notFound")}</p>
        )}
        {filteredProductSections.map((section) => {
          const isGridSection = section.key === "third";

          const filteredProducts = section.items.filter((item) => {
            return (
              section.name.toLowerCase().includes(normalizedQuery) ||
              item.name.toLowerCase().includes(normalizedQuery)
            );
          });

          return (
            <section className={styles.section} key={section.key}>
              <h2 className={styles.title}>{section.name}</h2>
              <ul
                role="list"
                className={clsx(
                  styles.ul,
                  isGridSection ? styles.ulGrid : styles.ulSlider,
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
        })}
      </Container>
    </main>
  );
}
