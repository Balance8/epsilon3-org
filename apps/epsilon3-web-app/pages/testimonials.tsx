import {
  Header,
  HeroTestimonials,
  Clients,
  VideoTestimonial,
  TestimonialsCarousel,
  TestimonialsCircles,
  Cta,
  Footer,
} from '@epsilon3-org/shared/ui';

/* eslint-disable-next-line */
export interface TestimonialsProps {}

export function Testimonials(props: TestimonialsProps) {
  return (
    <>
      {/*  Page sections */}
      <HeroTestimonials />
      <Clients />
      <VideoTestimonial />
      <TestimonialsCarousel />
      <TestimonialsCircles />
      <Cta />
    </>
  );
}

export default Testimonials;
