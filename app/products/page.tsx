import { Metadata } from "next";
import ProductsPage from "./ProductsPage";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our specialized drone products and autonomous systems.",
  keywords:
    "drones, drone technology, surveillance drones, cinematography drones, specialized drone applications, autonomous systems",
  robots: "index, follow",
  openGraph: {
    title: "Products",
    description:
      "Explore our specialized drone products and autonomous systems.",
    type: "website",
  },
};

const Page = () => {
  return (
    <div className="">
      <ProductsPage />
    </div>
  );
};

export default Page;
