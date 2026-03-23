"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onCategorySelect?: (categoryId: string) => void;
}

export default function Hero({ onCategorySelect }: HeroProps) {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);


  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-Screen Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.shopify.com/videos/c/o/v/d418886a8dfd4563806657c9fc405c59.mp4" type="video/mp4" />
        </video>
        
        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.shopify.com/videos/c/o/v/141bb007f9a14256b279c411d0f135a9.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full transition-transform duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
        <div className={`max-w-3xl ${isRtl ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-6 flex items-center gap-4 justify-start"
          >
            <span className="h-px bg-gold w-12 block"></span>
            <span className="uppercase tracking-widest text-xs font-semibold text-gold">{t.hero.newCollection}</span>
            <span className="h-px bg-gold w-12 block"></span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="font-headings text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-white mb-8"
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-white/90 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-start"
          >
            <Link 
              href="#categories" 
              onClick={() => onCategorySelect?.("caftans")}
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-charcoal hover:bg-white transition-colors duration-300 font-medium tracking-wide uppercase text-sm"
            >
              <span>{t.hero.shopCaftans}</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>
            <Link 
              href="#categories" 
              onClick={() => onCategorySelect?.("djellabas")}
              className="group inline-flex items-center justify-center px-10 py-5 border border-white text-white hover:bg-white hover:text-charcoal transition-all duration-300 font-medium tracking-wide uppercase text-sm"
            >
              <span>{t.hero.shopDjellabas}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


