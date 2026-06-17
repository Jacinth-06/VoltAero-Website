import { notFound } from "next/navigation";
import products from "../productsData";
import ProductDetailsClient from "./ProductViewer";



export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.title} | Products`,
    description: product.shortDescription,
    openGraph: {
      images: [
        {
          url: process.env.NEXT_PUBLIC_SITE_URL + product.imageUrl,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  // Assuming our product data already contains the enhanced data structure
  return <ProductDetailsClient product={product} />;
}
