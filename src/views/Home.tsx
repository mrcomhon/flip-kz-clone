import { ProductCatalog } from "@/components/catalog";
import { useState } from "react";
import { Badge } from "@/components/badge";
import productSections from "@/data/productData";
import { useTranslation } from "react-i18next";

const CATEGORY_COUNT = productSections.length;

function HomePage() {
  const { t } = useTranslation();
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
    <main>
      <h1 className="visually-hidden">{t("homePage.title")}</h1>
      <Badge value={badges} onBadge={handleBadge} />
      <ProductCatalog searchQuery="" badges={badges} />
    </main>
  );
}

export default HomePage;
