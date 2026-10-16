export default async function SearchPage({
  searchParams,
}: PageProps<"/search">) {
  const searchString = (await searchParams).search;
  const query = typeof searchString === "string" ? searchString : "";

  return <h1>Результаты поиска по запросу: "{query}"</h1>;
}
