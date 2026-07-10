import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { SiteHeader } from "../components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}