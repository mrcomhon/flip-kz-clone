import productSections from "@/data/productData";

export function filterProducts(searchQuery: string, badges: string[]) {
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

  return filteredProductSections;
}
