"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Brand */}
        <div>
          <Image src="/images/main-logo.png" alt="Chez Caftano Logo" width={140} height={50} className="object-contain w-28 md:w-40 mb-6" />
          <p className="text-stone text-sm leading-relaxed max-w-xs">
            {t.story.p1.substring(0, 100)}...
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="uppercase tracking-widest text-sm font-medium mb-6 text-sand">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="#caftans" className="nav-link-light py-1 px-1">{t.nav.caftans}</Link></li>
            <li><Link href="#djellabas" className="nav-link-light py-1 px-1">{t.nav.djellabas}</Link></li>
            <li><Link href="#story" className="nav-link-light py-1 px-1">{t.nav.story}</Link></li>
            <li><Link href="#contact" className="nav-link-light py-1 px-1">{t.nav.contact}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="uppercase tracking-widest text-sm font-medium mb-6 text-sand">{t.nav.contact}</h3>
          <ul className="space-y-4 text-stone text-sm">
            <li className={`flex flex-row items-center gap-3 ${isRtl ? 'flex-row-reverse text-right justify-end' : ''}`}>
              <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
              <span>{t.contact.address}</span>
            </li>
            <li className={`flex flex-row items-center gap-3 ${isRtl ? 'flex-row-reverse text-right justify-end' : ''}`}>
              <Phone className="w-4 h-4 text-gold flex-shrink-0" />
              <span dir="ltr">0620433840</span>
            </li>
            <li className={`flex flex-row items-center gap-3 ${isRtl ? 'flex-row-reverse text-right justify-end' : ''}`}>
              <Instagram className="w-4 h-4 text-gold flex-shrink-0" />
              <a href="https://www.instagram.com/chez_caftano_/" target="_blank" className="nav-link-light">@chez_caftano_</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone">
        <p>&copy; {new Date().getFullYear()} Chez Caftano. {t.footer.rights}</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="nav-link-light text-[10px]">Privacy Policy</Link>
          <Link href="#" className="nav-link-light text-[10px]">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
