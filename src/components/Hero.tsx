"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const images = [
    { src: "/images/hero_model.png", alt: "Main Model", rotate: 0, x: 0, y: 0, z: 30 },
    { src: "/images/hero_djellaba.png", alt: "Djellaba", rotate: 6, x: 60, y: 30, z: 20 },
    { src: "/images/hero_exclusive_caftan.png", alt: "Exclusive Caftan", rotate: 12, x: 120, y: 60, z: 10 },
  ];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-off-white">
      <div className={`max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center transition-transform duration-1000 ${loaded ? 'lg:translate-x-12' : 'lg:translate-x-24'}`}>
        
        {/* Text Content */}
        <div className={`flex flex-col z-10 ${isRtl ? 'lg:order-2 text-right' : 'lg:order-1 text-left'}`}>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px bg-gold w-12 block"></span>
            <span className="uppercase tracking-widest text-xs font-semibold text-gold">Nouvelle Collection</span>
            <span className="h-px bg-gold w-12 block"></span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: 30 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="font-headings text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-charcoal mb-8"
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: 25 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-charcoal/80 text-lg max-w-lg mb-12 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className={`flex flex-col sm:flex-row gap-6 ${isRtl ? 'justify-end' : ''}`}
          >
            <Link 
              href="#caftans" 
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 btn-primary font-medium tracking-wide uppercase text-sm"
            >
              <span>{t.hero.shopCaftans}</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>
            <Link 
              href="#djellabas" 
              className="group inline-flex items-center justify-center px-8 py-4 btn-secondary font-medium tracking-wide uppercase text-sm"
            >
              <span>{t.hero.shopDjellabas}</span>
            </Link>
          </motion.div>
        </div>

        {/* 3-Layer Image Stack */}
        <div className={`relative h-[70vh] min-h-[500px] w-full flex items-center justify-center ${isRtl ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative w-full h-full max-w-[450px]">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: 1000, 
                  rotate: index * 5,
                  scale: 0.9 
                }}
                animate={loaded ? { 
                  opacity: 1, 
                  x: img.x, 
                  y: img.y,
                  rotate: img.rotate,
                  scale: 1 
                } : {}}
                transition={{ 
                  duration: 1.8, 
                  delay: 0.8 + (index * 0.4),
                  ease: [0.16, 1, 0.3, 1] 
                }}
                style={{ zIndex: img.z }}
                className="absolute inset-0 shadow-2xl rounded-t-full overflow-hidden border-4 border-white/80 backdrop-blur-sm"
              >
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover object-center"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </motion.div>
            ))}
            
            {/* Background shape */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={loaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="absolute -inset-10 bg-sand/30 rounded-t-full blur-3xl -z-10"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


