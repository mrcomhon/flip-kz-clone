import { ProductCatalog } from "@/components/catalog";
import { SearchTitle } from "@/components/search/SearchTitle";
import type { Metadata } from "next";

function getQuery(searchString: string | string[] | undefined) {
  return typeof searchString === "string" ? searchString : "";
}

export async function generateMetadata({
  searchParams,
}: PageProps<"/search">): Promise<Metadata> {
  const query = getQuery((await searchParams).search);

  return {
    title: query ? `Поиск: ${query}` : "Поиск",
  };
}

export default async function SearchPage({
  searchParams,
}: PageProps<"/search">) {
  const query = getQuery((await searchParams).search);

  return (
    <main>
      <SearchTitle query={query} />
      <ProductCatalog searchQuery={query} badges={[]} />
    </main>
  );
}
