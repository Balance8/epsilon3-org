import { useState } from 'react';
import Modal from '../utils/Modal';

import MockupImage01 from '../assets/mockup-image-01.jpg';
import iPhoneMockup from '../assets/iphone-mockup.png';
import PlayButton from '../assets/play-button.svg';

import './hero-home.module.css';

/* eslint-disable-next-line */
export interface HeroHomeProps {}

export function HeroHome(props: HeroHomeProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Hero content */}
          <div className="items-center md:grid md:grid-cols-12 md:gap-12 lg:gap-20">
            {/* Content */}
            <div className="mb-8 text-center md:col-span-7 lg:col-span-7 md:mb-0 md:text-left">
              <h1
                className="mb-4 font-extrabold h1 lg:text-6xl font-red-hat-display"
                data-aos="fade-down"
              >
                Your website, reimagined
              </h1>
              <p
                className="text-xl text-gray-600 dark:text-gray-400"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              {/* CTA form */}
              <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
                <div className="flex flex-col justify-center max-w-sm mx-auto sm:flex-row sm:max-w-md md:mx-0">
                  <input
                    type="tel"
                    className="w-full mb-2 form-input sm:mb-0 sm:mr-2"
                    placeholder="Phone number"
                    aria-label="Phone number"
                  />
                  <a
                    className="flex-shrink-0 text-white bg-teal-500 btn hover:bg-teal-400"
                    href="#0"
                  >
                    Request code
                  </a>
                </div>
                {/* Success message */}
                {/* <p className="mt-2 text-sm text-center opacity-75 md:text-left">Thanks for subscribing!</p> */}
              </form>
              <ul
                className="max-w-sm mx-auto mt-8 -mb-2 text-gray-600 sm:max-w-md md:max-w-none dark:text-gray-400"
                data-aos="fade-down"
                data-aos-delay="450"
              >
                <li className="flex items-center mb-2">
                  <svg
                    className="flex-shrink-0 w-3 h-3 mr-2 text-teal-400 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="flex-shrink-0 w-3 h-3 mr-2 text-teal-400 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat.</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="flex-shrink-0 w-3 h-3 mr-2 text-teal-400 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
              </ul>
            </div>

            {/* Mobile mockup */}
            <div
              className="text-center md:col-span-5 lg:col-span-5 md:text-right"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <div className="relative inline-flex items-center justify-center">
                {/* Glow illustration */}
                <svg
                  className="absolute mt-32 mr-12 pointer-events-none -z-1 dark:opacity-40"
                  aria-hidden="true"
                  width="678"
                  height="634"
                  viewBox="0 0 678 634"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="240"
                    cy="394"
                    r="240"
                    fill="url(#piphoneill_paint0_radial)"
                    fillOpacity=".4"
                  />
                  <circle
                    cx="438"
                    cy="240"
                    r="240"
                    fill="url(#piphoneill_paint1_radial)"
                    fillOpacity=".6"
                  />
                  <defs>
                    <radialGradient
                      id="piphoneill_paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(90 -77 317) scale(189.054)"
                    >
                      <stop stopColor="#667EEA" />
                      <stop offset="1" stopColor="#667EEA" stopOpacity=".01" />
                    </radialGradient>
                    <radialGradient
                      id="piphoneill_paint1_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(90 99 339) scale(189.054)"
                    >
                      <stop stopColor="#9F7AEA" />
                      <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01" />
                    </radialGradient>
                  </defs>
                </svg>
                {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
                <img
                  className="absolute"
                  src={MockupImage01}
                  width="290"
                  height="624"
                  style={{ maxWidth: '84.33%' }}
                  alt="Features illustration"
                />
                {/* iPhone mockup */}
                <img
                  className="relative h-auto max-w-full mx-auto pointer-events-none md:mr-0 md:max-w-none"
                  src={iPhoneMockup}
                  width="344"
                  height="674"
                  alt="iPhone mockup"
                  aria-hidden="true"
                />
                {/* Play button */}
                <a
                  className="absolute group"
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setVideoModalOpen(true);
                  }}
                  aria-controls="modal"
                >
                  <img src={PlayButton} width="96" height="96" alt="Play" />
                </a>
              </div>

              {/* Modal */}
              <Modal
                id="modal"
                ariaLabel="modal-headline"
                show={videoModalOpen}
                handleClose={() => setVideoModalOpen(false)}
              >
                <div className="relative pb-9/16">
                  <iframe
                    className="absolute w-full h-full"
                    src="https://player.vimeo.com/video/174002812"
                    title="Video"
                    allowFullScreen
                  ></iframe>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
