import LandingSection from "@/components/sections/LandingSection";
import Features from "@/components/sections/Features";
import Header from "@/components/organisms/Header";
import Partners from "@/components/sections/Partners";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/organisms/Footer";
import AboutUs from "@/components/sections/AboutUs";
import Services from "../sections/Services";

export default function HomePage() {
  return (
    <main>
      <Header />
      <LandingSection />
      <Features />
      <AboutUs />
      <Services />
      <Partners />
      <ContactUs />
      <Footer />
    </main>
  );
}
