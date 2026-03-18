import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Story from "@/components/Story";
import Lookbook from "@/components/Lookbook";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <Story />
        <Lookbook />
        <Services />
        <Contact />
      </main>
      <Map />
      <Footer />
    </div>
  );
}
