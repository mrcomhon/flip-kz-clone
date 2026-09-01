import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductCatalog } from "@/components/catalog";

function HomePage() {
  return (
    <>
      <Header />
      <ProductCatalog />
      <Footer />
    </>
  );
}

export default HomePage;
