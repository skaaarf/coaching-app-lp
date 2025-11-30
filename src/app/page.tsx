import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Empathy from '@/components/Empathy';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import BeforeAfter from '@/components/BeforeAfter';
import FAQ from '@/components/FAQ';
import Closing from '@/components/Closing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div id="about">
        <Empathy />
      </div>
      <Problem />
      <div id="features">
        <Features />
      </div>
      <BeforeAfter />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
