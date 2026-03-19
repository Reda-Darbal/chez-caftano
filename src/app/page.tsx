"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>("caftans");

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onCategorySelect={handleCategorySelect} />
      <main className="flex-grow">
        <Hero onCategorySelect={handleCategorySelect} />
        <Categories onCategorySelect={handleCategorySelect} activeCategory={activeCategory} />
        <Story />
        <Services />
        <Contact />
      </main>
      <Map />
      <Footer />
    </div>
  );
}
