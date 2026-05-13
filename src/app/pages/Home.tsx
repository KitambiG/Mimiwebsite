import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { DashboardPreview } from '../components/DashboardPreview';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <WhyChooseUs />
      <DashboardPreview />
      <Testimonials />
      <Footer />
    </>
  );
}
