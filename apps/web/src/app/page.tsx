import { SiteHeader } from "../components/SiteHeader";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />

        <Stats />

        <Features />
      </main>

      <Footer />
    </>
  );
}