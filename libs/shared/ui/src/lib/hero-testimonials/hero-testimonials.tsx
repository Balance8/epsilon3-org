import Link from 'next/link';
import './hero-testimonials.module.css';

import HeroBg02 from '../assets/hero-bg-02.jpg';

/* eslint-disable-next-line */
export interface HeroTestimonialsProps {}

export function HeroTestimonials(props: HeroTestimonialsProps) {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="box-content absolute inset-0 pt-16 h-128 -z-1">
        <img
          className="absolute inset-0 object-cover w-full h-full opacity-25"
          src={HeroBg02}
          width="1440"
          height="577"
          alt="Testimonials"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
          aria-hidden="true"
        ></div>
      </div>

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 h1 font-red-hat-display" data-aos="fade-down">
              Smart teams trust Appy to build killer websites
            </h1>
            <p
              className="text-xl text-gray-600 dark:text-gray-400"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              Our customers are building some of the world's most original,
              useful and loved products.
            </p>
            <div className="mt-8" data-aos="fade-down" data-aos-delay="300">
              <Link href="/contact" passHref>
                <a className="ml-3 text-white bg-teal-500 btn hover:bg-teal-400">
                  Request code
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroTestimonials;
