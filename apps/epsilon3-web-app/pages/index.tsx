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
    <>
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
    </>
  );
}

export default Home;
