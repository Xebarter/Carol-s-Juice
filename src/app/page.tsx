import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturedJuices } from '@/components/featured-juices';
import { ProductionProcess } from '@/components/production-process';
import { Testimonials } from '@/components/testimonials';
import { ContactCTA } from '@/components/contact-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturedJuices />
      <ProductionProcess />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
