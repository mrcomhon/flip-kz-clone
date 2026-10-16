import { ProductCatalog } from "@/components/catalog";
import { SearchTitle } from "@/components/search/SearchTitle";

export default async function SearchPage({
  searchParams,
}: PageProps<"/search">) {
  const searchString = (await searchParams).search;
  const query = typeof searchString === "string" ? searchString : "";

  return (
    <main>
      <SearchTitle query={query} />
      <ProductCatalog searchQuery={query} badges={[]} />
    </main>
  );
}
