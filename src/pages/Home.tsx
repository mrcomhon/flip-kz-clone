import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductCatalog } from "@/components/catalog";
import { useState } from "react";
import { Badge } from "@/components/badge";
import productSections from "@/data/productData";

const CATEGORY_COUNT = productSections.length;

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [badges, setBadges] = useState<string[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClear = () => {
    setSearchQuery("");
  };

  const handleBadge = (currentBadge: string) => {
    if (currentBadge === "all") {
      setBadges([]);
      return;
    }

    if (badges.includes(currentBadge)) {
      setBadges(badges.filter((badge) => badge !== currentBadge));
    } else {
      const badgeArray = [...badges, currentBadge];
      setBadges(badgeArray.length === CATEGORY_COUNT ? [] : badgeArray);
    }
  };

  const handleToggleFavorite = (productId: number) => {
    if (favoriteIds.includes(productId)) {
      setFavoriteIds((prev) => prev.filter((fav) => fav !== productId));
    } else {
      setFavoriteIds((prev) => [...prev, productId]);
    }
  };

  const favoriteCount = favoriteIds.length;

  return (
    <>
      <Header
        value={searchQuery}
        onSearchChange={handleSearchChange}
        onClear={handleSearchClear}
        favoriteCount={favoriteCount}
      />
      <main>
        <Badge value={badges} onBadge={handleBadge} />
        <ProductCatalog
          searchQuery={searchQuery}
          badges={badges}
          onToggleFavorite={handleToggleFavorite}
          favoriteIds={favoriteIds}
        />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
