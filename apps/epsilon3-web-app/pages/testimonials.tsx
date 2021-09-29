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
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroTestimonials />
        <Clients />
        <VideoTestimonial />
        <TestimonialsCarousel />
        <TestimonialsCircles />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Testimonials;
