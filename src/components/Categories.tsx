"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Categories() {
  const { t } = useLanguage();

  const categories = [
    {
      id: "caftans",
      title: t.categories.caftans,
      image: "/images/product_2.png", // using an actual product image
      link: "#lookbook"
    },
    {
      id: "takchitas",
      title: t.nav.takchitas,
      image: "/images/lookbook_model_1.png", 
      link: "#lookbook"
    },
    {
      id: "djellabas",
      title: t.categories.djellabas,
      image: "/images/product_3.png", // using an actual product image
      link: "#lookbook"
    }
  ];

  return (
    <section id="categories" className="py-12 bg-off-white">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8">
        {categories.map((cat, idx) => (
          <Link href={cat.link} key={cat.id} className="group relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-end justify-center pb-16">
            <Image 
              src={cat.image} 
              alt={cat.title} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="font-headings text-4xl text-white mb-4">{cat.title}</h2>
              <span className="uppercase tracking-widest text-xs font-medium text-white/80 group-hover:text-gold transition-colors border-b border-transparent group-hover:border-gold pb-1">
                {t.categories.viewCollection}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
