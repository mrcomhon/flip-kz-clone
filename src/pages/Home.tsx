import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductCatalog } from "@/components/catalog";
import { useState } from "react";
import { Badge } from "@/components/badge";
import productSections from "@/data/productData";

const CATEGORY_COUNT = productSections.length


function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [badges, setBadges] = useState<string[]>([]);

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
      setBadges(badges.filter((b) => b !== currentBadge));
    } else {
      const badgeArray = [...badges, currentBadge];
      setBadges(badgeArray.length === CATEGORY_COUNT ? [] : badgeArray);
    }
  };

  return (
    <>
      <Header
        value={searchQuery}
        onSearchChange={handleSearchChange}
        onClear={handleSearchClear}
      />
      <main>
        <Badge value={badges} onBadge={handleBadge} />
        <ProductCatalog searchQuery={searchQuery} badges={badges} />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
