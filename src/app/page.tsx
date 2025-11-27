import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Empathy from "@/components/Empathy";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Plans from "@/components/Plans";
import FAQ from "@/components/FAQ";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Empathy />
      <Problem />
      <Features />
      <Steps />
      <Plans />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
