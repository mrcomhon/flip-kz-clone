import { FavoritesList } from "@/components/favorites/FavoritesList";
import { FavoritesTitle } from "@/components/favorites/FavoritesTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Избранное",
};

export default function FavoritesPage() {
  return (
    <main>
      <FavoritesTitle />
      <FavoritesList />
    </main>
  );
}
