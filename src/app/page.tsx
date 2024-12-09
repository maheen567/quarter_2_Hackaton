import AboutUsSection from "./pages/AboutUs/AboutUsSection";
import HeroSection from "./pages/Hero/HeroSection";
import FoodCategorySection from "./pages/FoodCategory/FoodCategorySection";
import WhyUsSection from "./pages/WhyUs/WhyUsSection";
import StatsBannersection from "@/components/StatsBanner/StatsBannersection";
import MenuSection from "./pages/Menu/MenuSection";
import ChefsSection from "./pages/Chefs/ChefsSection";
import TestimonialsSection from "./pages/Testimonials/TestimonialsSection";
import FoodBanner from "@/components/FoodBanner/FoodBanner";
import BlogSection from "./pages/Blog/BlogSection";

export default function Home() {
  return (
    <>
    <main>
      <HeroSection />
      <AboutUsSection />
      <FoodCategorySection />
      <WhyUsSection />
      <StatsBannersection />
      <MenuSection />
      <ChefsSection />
      <TestimonialsSection />
      <FoodBanner />
      <BlogSection />
    </main>
    
    </>
  );
}
