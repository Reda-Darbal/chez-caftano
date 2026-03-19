"use client";

import { useLanguage } from "@/context/LanguageContext";
import { 
  Scissors, 
  Calendar, 
  Sparkles, 
  ShoppingBag, 
  RotateCw 
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Services() {
  const { t } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver(0.1);

  const servicesList = [
    {
      icon: <Scissors className="w-8 h-8 text-gold" />,
      title: t.services.madeToMeasure.title,
      desc: t.services.madeToMeasure.desc,
      delay: "delay-[0ms]",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-gold" />,
      title: t.services.readyToWear.title,
      desc: t.services.readyToWear.desc,
      delay: "delay-[100ms]",
    },
    {
      icon: <RotateCw className="w-8 h-8 text-gold" />,
      title: t.services.rental.title,
      desc: t.services.rental.desc,
      delay: "delay-[200ms]",
    },
    {
      icon: <Calendar className="w-8 h-8 text-gold" />,
      title: t.services.appointment.title,
      desc: t.services.appointment.desc,
      delay: "delay-[300ms]",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      title: t.services.style.title,
      desc: t.services.style.desc,
      delay: "delay-[400ms]",
    }
  ];

  return (
    <section id="services" className="py-24 bg-sand border-y border-stone/20">
      <div ref={ref as any} className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className={`font-headings text-4xl md:text-5xl text-charcoal mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.services.title}
          </h2>
          <div className={`h-px bg-gold mx-auto transition-all duration-700 delay-[150ms] ${isVisible ? 'w-12 opacity-100' : 'w-0 opacity-0'}`}></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white p-10 text-center group hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:border-t-2 hover:border-[#B8976E] flex flex-col items-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] min-w-[300px] ${service.delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionProperty: 'opacity, transform, box-shadow, border-color', transitionDuration: isVisible ? '700ms' : '0ms', transitionDelay: isVisible ? service.delay.replace('delay-[','').replace(']','') : '0ms' }}
            >
              <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-headings text-2xl text-charcoal mb-4 leading-tight">{service.title}</h3>
              <p className="text-charcoal/80 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
