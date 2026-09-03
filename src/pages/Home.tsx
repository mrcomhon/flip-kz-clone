import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductCatalog } from "@/components/catalog";
import { useState } from "react";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Header value={searchQuery} onSearchChange={handleSearchChange} />
      <ProductCatalog value={searchQuery} />
      <Footer />
    </>
  );
}

export default HomePage;
