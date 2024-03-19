import Image from "next/image";
import HeroSection from "@/app/components/ui/HeroSection";
import FeaturedCourses from "@/app/components/ui/FeaturedCourses";
import WhyChooseUs from "./components/ui/WhyChooseUs";
import StockTestimonialCards from "./components/ui/TestimonialCards";
import UpcomingWebinars from "./components/ui/UpcomingWebinars";
import Instructors from "./components/ui/Instructors";
import Footer from "./components/ui/Footer";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedCourses/>
    <WhyChooseUs />
    <StockTestimonialCards/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
  </main>
  );
}
