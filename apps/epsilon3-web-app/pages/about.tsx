import {
  Career,
  CtaContact,
  FeaturesAnimation,
  FeaturesGallery,
  HeroAbout,
  Team,
  Timeline,
} from '@epsilon3-org/shared/ui';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <>
      <HeroAbout />
      <FeaturesGallery />
      <Timeline />
      <Career />
      <FeaturesAnimation />
      <Team />
      <CtaContact />
    </>
  );
}

export default About;
