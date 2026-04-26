import Header from "../components/leo/Header";
import Hero from "../components/leo/Hero";
import About from "../components/leo/About";
import MenuSection from "../components/leo/MenuSection";
import Specials from "../components/leo/Specials";
import Gallery from "../components/leo/Gallery";
import Testimonials from "../components/leo/Testimonials";
import Visit from "../components/leo/Visit";
import Footer from "../components/leo/Footer";

export default function CafeLeo() {
  return (
    <div className="min-h-screen bg-[#FAF3E7] text-[#2A1810] font-body" data-testid="cafe-leo-page">
      <Header />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Specials />
        <Gallery />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
