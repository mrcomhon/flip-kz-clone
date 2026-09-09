import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductCatalog } from "@/components/catalog";
import { useState } from "react";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchClear = () => {
    setSearchQuery("");
  };

  return (
    <>
      <Header
        value={searchQuery}
        onSearchChange={handleSearchChange}
        onClear={handleSearchClear}
      />
      <ProductCatalog searchQuery={searchQuery} />
      <Footer />
    </>
  );
}

export default HomePage;
