import { Metadata } from "next";
import ProductsPage from "./ProductsPage";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our specialized drone products and autonomous systems.",
};

export default function Page() {
  return (
    <div>
      <ProductsPage />
    </div>
  );
}
