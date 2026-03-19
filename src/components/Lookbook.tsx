"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface LookbookProps {
  activeCategory?: string | null;
}

export default function Lookbook({ activeCategory }: LookbookProps) {
  const { t } = useLanguage();

  const allImages = [
    { src: "/images/product_1.jpg", alt: "Caftan Exclusive", category: "caftans", className: "h-[600px]" },
    { src: "/images/lookbook_model_1.png", alt: "Takchita Design", category: "takchitas", className: "h-[400px]" },
    { src: "/images/lookbook_model_2.png", alt: "Djellaba Raffinée", category: "djellabas", className: "h-[400px]" },
    { src: "/images/product_4.jpg", alt: "Caftan Detail", category: "caftans", className: "h-[600px]" },
    { src: "/images/product_2.png", alt: "Takchita Luxury", category: "takchitas", className: "h-[400px]" },
    { src: "/images/product_3.png", alt: "Djellaba Modern", category: "djellabas", className: "h-[400px]" },
  ];

  const filteredImages = activeCategory 
    ? allImages.filter(img => img.category === activeCategory)
    : allImages;

  return (
    <section id="lookbook" className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-headings text-4xl md:text-5xl text-charcoal mb-4">
            {activeCategory 
              ? `${t.nav.lookbook} - ${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`
              : t.nav.lookbook}
          </h2>
          <div className="w-12 h-px bg-gold mx-auto"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 transition-all duration-500">
          {filteredImages.map((img: any, idx: number) => (
            <div 
              key={`${activeCategory}-${idx}`} 
              className={`relative overflow-hidden group mb-4 break-inside-avoid w-full animate-fade-in-up ${img.className}`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-sm tracking-widest uppercase">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
