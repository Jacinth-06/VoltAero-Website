"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      id: "product1",
      title: "UAV Test Platform Complete Kit",
      image: "/products/product1.jpg",
      description: "High-quality precision engineered UAV Test Platform Complete Kit with Aluminum Arms, Brushless Motors, STM32/Arduino Compatible, High Precision Sensors, Modular & Upgradeable.",
    },
    {
      id: "product2",
      title: "UAV Test Platform Core",
      image: "/products/product2.jpg",
      description: "Advanced precision engineered UAV Test Platform core with integrated high precision sensors, modular design, and robust performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Products"
          subtitle="Discover our advanced autonomous and UAV solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{product.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                <div className="bg-purple-50 p-4 rounded-xl mb-6">
                  <p className="text-purple-800 font-semibold text-center">Minimum 5 orders required</p>
                </div>
                <Link href="/contact" className="w-full block">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg">
                    Inquire Now
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Interested in our products?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            For further details, bulk orders, and custom requirements, please contact us directly.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
              <Mail className="w-6 h-6 text-pink-400" />
              <span className="font-medium">voltaerotech@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
              <Phone className="w-6 h-6 text-purple-400" />
              <span className="font-medium">+91 8848653573</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
