import { SiteHeader } from "../components/SiteHeader";
import { Hero } from "../components/Hero";
import { BuiltWith } from "../components/BuiltWith";
import { Stats } from "../components/Stats";
import { Features } from "../components/Features";
import { CTA } from "../components/CTA";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />

        <BuiltWith />

        <Stats />

        <Features />

        <CTA />

        <FAQ />
      </main>

      <Footer />
    </>
  );
}