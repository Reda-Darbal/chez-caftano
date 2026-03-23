"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Story() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";
  const [ref, isVisible] = useIntersectionObserver(0.1);

  return (
    <section id="story" className="py-24 md:py-32 bg-sand">
      <div
        ref={ref as any}
        className={`max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
      >

        {/* Images */}
        <div className={`relative h-[600px] w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${isRtl ? 'md:order-2' : 'md:order-1'}`}>
          <div className="absolute top-0 right-12 w-3/4 h-[450px]">
            <Image
              src="/images/hero_exclusive_caftan.png"
              alt="Craftsmanship detail"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-2/3 h-[350px] shadow-2xl">
            <Image
              src="/images/craftsmanship.png"
              alt="Zwaq embroidery"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className={`flex flex-col transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} ${isRtl ? 'md:order-1 text-right' : 'md:order-2 text-left'}`}>
          <h2 className="font-headings text-4xl md:text-5xl text-charcoal mb-10 leading-snug">
            {t.story.title}
          </h2>
          <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
            <p>{t.story.p1}</p>
            <p>{t.story.p2}</p>
          </div>
          <div className={`mt-12 flex ${isRtl ? 'justify-end' : 'justify-start'}`}>
            <Image src="/images/logo.png" alt="Signature" width={120} height={40} className="object-contain" />
          </div>
        </div>

      </div>
    </section>
  );
}
