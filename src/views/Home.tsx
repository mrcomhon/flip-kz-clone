import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductCatalog } from "@/components/catalog";
import { useState } from "react";
import { Badge } from "@/components/badge";
import productSections from "@/data/productData";

const CATEGORY_COUNT = productSections.length;

function HomePage() {
  const [badges, setBadges] = useState<string[]>([]);

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

  return (
    <>
      <Header />
      <main>
        <Badge value={badges} onBadge={handleBadge} />
        <ProductCatalog searchQuery="" badges={badges} />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
