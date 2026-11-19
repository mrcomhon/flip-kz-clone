import { filterProducts } from "@/components/catalog/filterProducts";

export async function GET(request: Request) {
  const address = new URL(request.url);
  const searchResult = address.searchParams.get("search");
  const badgesResult = address.searchParams.getAll("badges");
  const result = searchResult ?? "";

  return Response.json(filterProducts(result, badgesResult));
}
