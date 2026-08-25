import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ForTutors } from "@/components/ForTutors";
import { Footer } from "@/components/Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ForTutors />
        <Footer />
      </main>
    </>
  );
}

export default HomePage;
