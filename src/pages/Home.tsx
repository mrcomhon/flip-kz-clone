import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductCatalog } from "@/components/catalog";
import { useState } from "react";
import { Badge } from "@/components/badge";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [badges, setBadge] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClear = () => {
    setSearchQuery("");
  };

  const handleBadge = (currentBadge: string) => {
    if (badges.includes(currentBadge)) {
      setBadge(badges.filter((b) => b !== currentBadge));
    } else {
      setBadge([...badges, currentBadge]);
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
        <ProductCatalog searchQuery={searchQuery} />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
