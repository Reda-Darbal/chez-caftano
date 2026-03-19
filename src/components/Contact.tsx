"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Contact() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";
  const [ref, isVisible] = useIntersectionObserver(0.1);
  
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div 
        ref={ref as any}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          <div className={`${isRtl ? 'lg:order-2 text-right' : 'lg:order-1 text-left'}`}>
            <h2 className="font-headings text-4xl md:text-5xl text-charcoal mb-6">
              {t.contact.title}
            </h2>
            <div className={`w-12 h-px bg-gold mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'w-12 opacity-100' : 'w-0 opacity-0'} ${isRtl ? 'ml-0 mr-0' : ''}`}></div>
            
            <p className="text-charcoal/80 text-lg mb-12 max-w-md">
              Nous sommes à votre disposition pour toute demande de création sur mesure ou pour prendre rendez-vous dans notre boutique.
            </p>

            <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              <a href="https://wa.me/212620433840" target="_blank" className={`flex items-start gap-6 group ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-charcoal group-hover:text-gold transition-colors" />
                </div>
                <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
                  <h4 className="font-medium text-charcoal mb-1">WhatsApp</h4>
                  <p className="text-charcoal/80 text-sm">{t.contact.whatsapp}</p>
                </div>
              </a>

              <a href="https://www.instagram.com/chez_caftano_/" target="_blank" className={`flex items-start gap-6 group ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all flex-shrink-0">
                  <Instagram className="w-5 h-5 text-charcoal group-hover:text-gold transition-colors" />
                </div>
                <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
                  <h4 className="font-medium text-charcoal mb-1">Instagram</h4>
                  <p className="text-charcoal/80 text-sm">{t.contact.instagram}</p>
                </div>
              </a>

              <a 
                href="https://waze.com/ul/hey50fyh5h" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-start gap-6 group ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all flex-shrink-0">
                  <MapPin className="w-5 h-5 text-charcoal group-hover:text-gold transition-colors" />
                </div>
                <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
                  <h4 className="font-medium text-charcoal mb-1 group-hover:text-gold transition-colors">{t.contact.visit}</h4>
                  <p className="text-charcoal/80 text-sm group-hover:text-gold transition-colors underline decoration-gold/30">{t.contact.address}</p>
                </div>
              </a>

            </div>
          </div>

          <div className={`bg-sand p-12 md:p-16 h-full flex flex-col justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'} ${isRtl ? 'lg:order-1' : 'lg:order-2'}`}>
            <h3 className="font-headings text-3xl text-charcoal mb-8 text-center">Prendre Rendez-vous</h3>
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Nom complet" className="w-full bg-white border-none py-4 px-6 focus:ring-1 focus:ring-gold outline-none transition-shadow" />
              </div>
              <div>
                <input type="tel" placeholder="Téléphone" className="w-full bg-white border-none py-4 px-6 focus:ring-1 focus:ring-gold outline-none text-left transition-shadow" dir="ltr" />
              </div>
              <div>
                <textarea placeholder="Votre message" rows={4} className="w-full bg-white border-none py-4 px-6 focus:ring-1 focus:ring-gold outline-none resize-none transition-shadow"></textarea>
              </div>
              <a
                href="https://wa.me/212620433840" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 relative group font-medium tracking-wide uppercase text-sm flex items-center justify-center gap-2 btn-primary"
              >
                <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-medium tracking-wide">Envoyer la demande</span>
              </a>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
