"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoriesProps {
  onCategorySelect?: (categoryId: string) => void;
  activeCategory?: string | null;
}

export default function Categories({ onCategorySelect, activeCategory }: CategoriesProps) {
  const { t, language } = useLanguage();
  const albumRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isRtl = language === 'ar';
  const [isPaused, setIsPaused] = useState(false);



  // Pause auto-scroll when user interacts with scroll container
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let pauseTimeout: ReturnType<typeof setTimeout>;

    const handleWheel = (e: WheelEvent) => {
      // Allow horizontal scrolling via mouse wheel
      if (Math.abs(e.deltaX) > 0 || Math.abs(e.deltaY) > 0) {
        setIsPaused(true);
        clearTimeout(pauseTimeout);
        pauseTimeout = setTimeout(() => setIsPaused(false), 3000);
      }
    };

    const handleTouchStart = () => {
      setIsPaused(true);
    };

    const handleTouchEnd = () => {
      clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(() => setIsPaused(false), 3000);
    };

    container.addEventListener("wheel", handleWheel, { passive: true });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      clearTimeout(pauseTimeout);
    };
  }, [activeCategory]);

  // Arrow scroll handler
  const scrollByAmount = useCallback((direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = 280;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    // Pause auto-scroll temporarily when user clicks arrows
    setIsPaused(true);
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(() => setIsPaused(false), 3000);
  }, []);

  const categories = [
    {
      id: "caftans",
      title: t.categories.caftans,
      products: [
        { src: "/images/products/kaftan.png", alt: "Caftan Classique" },
        { src: "/images/products/keftan.png", alt: "Caftan Élégant" },
        { src: "/images/products/bleuMarin-kaftan.png", alt: "Caftan Bleu Marine" },
        { src: "/images/products/flowers-kaftan.png", alt: "Caftan Floral" },
        { src: "/images/products/green-kaftan.png", alt: "Caftan Vert" },
        { src: "/images/products/red-kaftan.png", alt: "Caftan Rouge" },
        { src: "/images/products/modern-caftan.png", alt: "Caftan Moderne" },
        { src: "/images/products/open-front caftan.png", alt: "Caftan Ouvert" },
      ]
    },
    {
      id: "takchitas",
      title: t.categories.takchitas,
      products: [
        { src: "/images/products/2pes tekchita.png", alt: "Takchita 2 Pièces" },
        { src: "/images/products/emerald_takchita.png", alt: "Takchita Émeraude" },
        { src: "/images/products/royal_blue_takchita.png", alt: "Takchita Bleu Royal" },
        { src: "/images/products/burgundy_takchita.png", alt: "Takchita Bordeaux" },
        { src: "/images/lookbook_model_1.png", alt: "Takchita Majestueuse" },
        { src: "/images/hero_model.png", alt: "Takchita Nouvelle Collection" },
      ]
    },
    {
      id: "djellabas",
      title: t.categories.djellabas,
      products: [
        { src: "/images/products/bleu marin djelaba.png", alt: "Djellaba Bleu Marine" },
        { src: "/images/products/pink-djelaba.png", alt: "Djellaba Rose" },
        { src: "/images/products/white-djelaba.png", alt: "Djellaba Blanche" },
        { src: "/images/products/off_white_djellaba.png", alt: "Djellaba Blanc Cassé" },
        { src: "/images/products/pink_djellaba.png", alt: "Djellaba Rose Pâle" },
        { src: "/images/products/navy_stars_djellaba.png", alt: "Djellaba Marine Étoilée" },
        { src: "/images/hero_djellaba.png", alt: "Djellaba d'Exception" },
        { src: "/images/lookbook_model_2.png", alt: "Djellaba Moderne" },
      ]
    },
    {
      id: "ventes",
      title: t.categories.ventes,
      products: [
        { src: "/images/products/black_velvet_kimono.png", alt: "Kimono Velours Noir" },
        { src: "/images/products/kaftan.png", alt: "Caftan Classique — Promotion" },
        { src: "/images/products/bleu marin djelaba.png", alt: "Djellaba Bleu Marine — Promotion" },
        { src: "/images/products/keftan.png", alt: "Caftan Élégant — Promotion" },
        { src: "/images/products/white-djelaba.png", alt: "Djellaba Blanche — Promotion" },
        { src: "/images/products/2pes tekchita.png", alt: "Takchita 2 Pièces — Promotion" },
        { src: "/images/products/green-kaftan.png", alt: "Caftan Vert — Promotion" },
        { src: "/images/products/open-front caftan.png", alt: "Caftan Ouvert — Promotion" },
      ]
    }
  ];

  const activeProducts = categories.find(c => c.id === activeCategory)?.products || categories[0].products;

  const displayProducts = activeProducts;

  return (
    <section id="categories" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4 md:px-12">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className={`max-w-2xl ${isRtl ? 'text-right' : 'text-left'}`}>
            <h2 className="font-headings text-5xl md:text-7xl text-charcoal mb-6 leading-tight">
              {t.categories.title} <span className="italic font-light">{t.categories.titleAccent}</span>
            </h2>
            <p className="text-charcoal/60 text-lg max-w-lg">
              {t.categories.subtitle}
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 border-b border-sand pb-4 w-full md:w-auto overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategorySelect?.(cat.id)}
                className="group relative py-2 px-6 transition-all duration-500 flex flex-col items-center gap-2"
              >
                <span className={`uppercase tracking-[0.2em] text-xs font-semibold transition-colors duration-300 ${activeCategory === cat.id ? 'text-gold' : 'text-charcoal/40 group-hover:text-charcoal'}`}>
                  {cat.title}
                </span>
                <span className={`h-px bg-gold transition-all duration-500 ${activeCategory === cat.id ? 'w-full' : 'w-0'}`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scrolling Products */}
        <div ref={albumRef} className="relative group/container">

          {/* Glassy Left Arrow (Desktop only) */}
          <button
            onClick={() => scrollByAmount("left")}
            className="glass-arrow hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center opacity-0 group-hover/container:opacity-100 transition-opacity duration-300 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-charcoal/70" />
          </button>

          {/* Glassy Right Arrow (Desktop only) */}
          <button
            onClick={() => scrollByAmount("right")}
            className="glass-arrow hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center opacity-0 group-hover/container:opacity-100 transition-opacity duration-300 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-charcoal/70" />
          </button>

          {/* Gradient fade edges (Desktop) */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory || 'default'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              ref={scrollContainerRef}
              className="overflow-x-auto no-scrollbar"
            >
              <div className="flex gap-6">
                {displayProducts.map((product, idx) => (
                  <div
                    key={`${product.src}-${idx}`}
                    className="flex-shrink-0 w-[220px] md:w-[260px] lg:w-[280px] group/card"
                  >
                    {/* 9:16 Aspect Ratio Container */}
                    <div className="relative aspect-[9/16] overflow-hidden rounded-sm shadow-lg group-hover/card:shadow-2xl transition-shadow duration-500 bg-sand/30">
                      <Image
                        src={product.src}
                        alt={product.alt}
                        fill
                        className="object-cover transition-transform duration-[1200ms] group-hover/card:scale-105"
                        sizes="(max-width: 768px) 220px, (max-width: 1024px) 260px, 280px"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-charcoal/0 group-hover/card:bg-charcoal/10 transition-all duration-500"></div>
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                        <p className="text-white text-xs tracking-[0.15em] uppercase text-center">{product.alt}</p>
                      </div>
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
