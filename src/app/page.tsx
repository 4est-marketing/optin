import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import GrowthLevers from "@/components/GrowthLevers";
import MysteryShopper from "@/components/MysteryShopper";
import Pillars from "@/components/Pillars";
import Authority from "@/components/Authority";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <GrowthLevers />
        <MysteryShopper />
        <Pillars />
        <Authority />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
