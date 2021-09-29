import {
  Career,
  CtaContact,
  FeaturesAnimation,
  FeaturesGallery,
  Footer,
  Header,
  HeroAbout,
  Team,
  Timeline,
} from '@epsilon3-org/shared/ui';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroAbout />
        <FeaturesGallery />
        <Timeline />
        <Career />
        <FeaturesAnimation />
        <Team />
        <CtaContact />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default About;
