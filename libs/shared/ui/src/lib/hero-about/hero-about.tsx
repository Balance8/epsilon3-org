import './hero-about.module.css';

import Image from 'next/image';

import HeroBg03 from '../assets/hero-bg-03.jpg';
import AboutHero from '../assets/about-hero.jpg';

/* eslint-disable-next-line */
export interface HeroAboutProps {}

export function HeroAbout(props: HeroAboutProps) {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="box-content absolute inset-0 pt-16 h-128 -z-1">
        <Image
          className="absolute inset-0 object-cover w-full h-full opacity-25"
          src={HeroBg03}
          width="1440"
          height="577"
          alt="About"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
          aria-hidden="true"
        ></div>
      </div>

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <div className="relative flex items-center justify-center">
              <div
                className="relative inline-flex items-start"
                data-aos="fade-up"
              >
                <Image
                  className="opacity-50"
                  src={AboutHero}
                  width="768"
                  height="432"
                  alt="About hero"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
                  aria-hidden="true"
                ></div>
              </div>
              <div className="absolute" data-aos="fade-down">
                <h1 className="h1 lg:text-6xl font-red-hat-display">
                  Make your own <span className="text-teal-500">way</span>
                </h1>
              </div>
              <div
                className="absolute bottom-0 -mb-8 w-0.5 h-16 bg-gray-300 dark:bg-gray-700"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroAbout;
