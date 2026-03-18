"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Lookbook() {
  const { t } = useLanguage();

  const images = [
    { src: "/images/product_1.jpg", alt: "Lookbook image 1", className: "h-[600px]" },
    { src: "/images/lookbook_model_1.png", alt: "Lookbook image 2", className: "h-[400px]" },
    { src: "/images/lookbook_model_2.png", alt: "Lookbook image 3", className: "h-[400px]" },
    { src: "/images/product_4.jpg", alt: "Lookbook image 4", className: "h-[600px]" },
    { src: "/images/product_2.png", alt: "Lookbook image 5", className: "h-[400px]" },
    { src: "/images/product_3.png", alt: "Lookbook image 6", className: "h-[400px]" },
  ];

  return (
    <section id="lookbook" className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-headings text-4xl md:text-5xl text-charcoal mb-4">{t.nav.lookbook}</h2>
          <div className="w-12 h-px bg-gold mx-auto"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className={`relative overflow-hidden group mb-4 break-inside-avoid w-full ${img.className}`}>
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
