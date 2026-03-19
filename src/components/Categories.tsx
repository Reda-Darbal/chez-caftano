"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

interface CategoriesProps {
  onCategorySelect?: (categoryId: string) => void;
  activeCategory?: string | null;
}

export default function Categories({ onCategorySelect, activeCategory }: CategoriesProps) {
  const { t, language } = useLanguage();
  const albumRef = useRef<HTMLDivElement>(null);
  const isRtl = language === 'ar';

  // Set default category if none active
  useEffect(() => {
    if (!activeCategory) {
      onCategorySelect?.("caftans");
    }
  }, [activeCategory, onCategorySelect]);

  // Scroll to section when category changes (except on first mount if possible)
  const firstMount = useRef(true);
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    if (activeCategory && albumRef.current) {
      const offset = 100; // room for fixed header
      const elementPosition = albumRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, [activeCategory]);

  const categories = [
    {
      id: "caftans",
      title: t.categories.caftans,
      image: "/images/product_2.png",
      album: [
        { src: "/images/hero_exclusive_caftan.png", alt: "Exclusive Caftan", size: "large" },
        { src: "/images/product_1.jpg", alt: "Caftan Classic", size: "small" },
        { src: "/images/product_4.jpg", alt: "Caftan Detail", size: "small" },
      ]
    },
    {
      id: "takchitas",
      title: t.nav.takchitas,
      image: "/images/lookbook_model_1.png",
      album: [
        { src: "/images/hero_model.png", alt: "Takchita Model", size: "large" },
        { src: "/images/product_2.png", alt: "Takchita Design", size: "small" },
        { src: "/images/lookbook_model_1.png", alt: "Takchita Detail", size: "small" },
      ]
    },
    {
      id: "djellabas",
      title: t.categories.djellabas,
      image: "/images/product_3.png",
      album: [
        { src: "/images/hero_djellaba.png", alt: "Djellaba Design", size: "large" },
        { src: "/images/lookbook_model_2.png", alt: "Djellaba Model", size: "small" },
        { src: "/images/product_3.png", alt: "Djellaba Detail", size: "small" },
      ]
    }
  ];

  const activeAlbum = categories.find(c => c.id === activeCategory)?.album || categories[0].album;

  return (
    <section id="categories" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4 md:px-12">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className={`max-w-2xl ${isRtl ? 'text-right' : 'text-left'}`}>
            <h2 className="font-headings text-5xl md:text-7xl text-charcoal mb-6 leading-tight">
              Nos <span className="italic font-light">Collections</span>
            </h2>
            <p className="text-charcoal/60 text-lg max-w-lg">
              Une sélection curatoriale de nos pièces les plus prestigieuses, conçues pour sublimer chaque instant.
            </p>
          </div>
          
          {/* Elegant Category Switcher (Tabs) */}
          <div className="flex flex-wrap gap-4 border-b border-sand pb-4 w-full md:w-auto overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategorySelect?.(cat.id)}
                className={`group relative py-2 px-6 transition-all duration-500 flex flex-col items-center gap-2`}
              >
                <span className={`uppercase tracking-[0.2em] text-xs font-semibold transition-colors duration-300 ${activeCategory === cat.id ? 'text-gold' : 'text-charcoal/40 group-hover:text-charcoal'}`}>
                  {cat.title}
                </span>
                <span className={`h-px bg-gold transition-all duration-500 ${activeCategory === cat.id ? 'w-full' : 'w-0'}`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Album Experience */}
        <div ref={albumRef} className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory || 'default'}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Feature Large Image */}
              <div className="lg:col-span-7 relative h-[600px] md:h-[800px] overflow-hidden group shadow-2xl rounded-sm">
                <Image
                  src={activeAlbum[0].src}
                  alt={activeAlbum[0].alt}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
                <div className={`absolute bottom-12 ${isRtl ? 'right-12' : 'left-12'} z-10`}>
                  <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2">Pièce Exceptionnelle</p>
                  <h4 className="text-white text-3xl font-headings uppercase tracking-widest">{activeAlbum[0].alt}</h4>
                </div>
              </div>

              {/* Side Images Stack (Editorial) */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-8">
                {activeAlbum.slice(1).map((item, idx) => (
                  <div key={idx} className="relative h-[380px] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 rounded-sm">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500"></div>
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                      <p className="text-white text-xs tracking-[0.2em] uppercase">{item.alt}</p>
                    </div>
                  </div>
                ))}

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

