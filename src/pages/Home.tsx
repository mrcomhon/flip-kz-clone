import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductCatalog } from "@/components/catalog";
import { useState } from "react";
import { Badge } from "@/components/badge";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClear = () => {
    setSearchQuery("");
  };

  const [chooseBadge, setChooseBadge] = useState<string>("all")

  return (
    <>
      <Header
        value={searchQuery}
        onSearchChange={handleSearchChange}
        onClear={handleSearchClear}
      />
      <Badge value={chooseBadge} onBadge={(key) => setChooseBadge(key)} />
      <ProductCatalog searchQuery={searchQuery} />
      <Footer />
    </>
  );
}

export default HomePage;
