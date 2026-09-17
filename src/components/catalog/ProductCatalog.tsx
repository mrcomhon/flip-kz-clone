import productSections from "@/data/productData";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "./ProductCard";
import styles from "./ProductCatalog.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

type ProductCatalogProps = {
  searchQuery: string;
  badges: string[];
};

export function ProductCatalog({ searchQuery, badges }: ProductCatalogProps) {
  const { t } = useTranslation();
  const normalizedQuery = searchQuery.toLowerCase().trim();

  const filteredProductSections = productSections
    .filter((section) => badges.length === 0 || badges.includes(section.key))
    .map((section) => {
      const isSectionMatch = section.name
        .toLowerCase()
        .includes(normalizedQuery);

      const filteredProducts = section.items.filter((item) => {
        return (
          isSectionMatch || item.name.toLowerCase().includes(normalizedQuery)
        );
      });

      return {
        name: section.name,
        key: section.key,
        items: filteredProducts,
      };
    })
    .filter((section) => section.items.length > 0);

  return (
    <Container>
      {filteredProductSections.length === 0 && (
        <p className={styles.notFound}>{t("product.notFound")}</p>
      )}
      {filteredProductSections.map((section) => {
        const isGridSection = section.key === "extra";

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
              {section.items.map((product) => {
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
  );
}
