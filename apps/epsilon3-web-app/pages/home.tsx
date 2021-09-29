import {
  // Carousel,
  PageIllustration,
  HeroHome,
  Tabs,
  Process,
  PricingTables,
  TestimonialsBlocks,
  FeaturesBlocks,
  Cta,
  Footer,
  Stats,
  Header,
} from '@epsilon3-org/shared/ui';
import React from 'react';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div
          className="relative h-0 max-w-6xl mx-auto pointer-events-none -z-1"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <Stats />
        {/* <Carousel /> */}
        <Tabs />
        <Process />
        <PricingTables />
        <TestimonialsBlocks />
        <FeaturesBlocks />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
