import './process.module.css';

import IphoneMockup from '../assets/iphone-mockup.png';
import MockupImage02 from '../assets/mockup-image-02.jpg';
import MockupImage03 from '../assets/mockup-image-03.jpg';
import MockupImage04 from '../assets/mockup-image-04.jpg';

/* eslint-disable-next-line */
export interface ProcessProps {}

export function Process(props: ProcessProps) {
  return (
    <section className="relative">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-200 md:py-20 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2 font-red-hat-display">
              Build and style every element to perfection
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          {/* Glow illustration */}
          <svg
            className="absolute hidden mt-20 transform -translate-x-1/2 pointer-events-none left-1/2 lg:mt-40 -z-1 dark:opacity-20 md:block"
            aria-hidden="true"
            width="854"
            height="509"
            viewBox="0 0 854 509"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__a"
              >
                <stop stopColor="#667EEA" offset="0%" />
                <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
              </radialGradient>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__b"
              >
                <stop stopColor="#9F7AEA" offset="0%" />
                <stop stopColor="#9F7AEA" stopOpacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
              <circle
                fillOpacity=".64"
                fill="url(#iphonesill__a)"
                cx="300"
                cy="300"
                r="300"
              />
              <circle
                fillOpacity=".72"
                fill="url(#iphonesill__b)"
                cx="729"
                cy="384"
                r="240"
              />
            </g>
          </svg>

          {/* Items */}
          <div className="grid items-start max-w-sm gap-12 mx-auto md:gap-x-6 lg:gap-x-12 md:grid-cols-3 md:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center">
              {/* Line connecting (1) and (2) */}
              <div
                aria-hidden="true"
                className="absolute hidden h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 md:block"
                style={{
                  width: 'calc(100% - 48px)',
                  left: 'calc(50% + 48px)',
                  top: '24px',
                }}
              >
                <div className="absolute inset-0 border-t border-white border-dashed dark:border-gray-900"></div>
              </div>
              {/* Number */}
              <div className="flex items-center justify-center w-12 h-12 mb-8 font-medium text-white bg-teal-400 rounded-full dark:bg-teal-600 dark:bg-opacity-25 dark:text-teal-400 lg:mb-12">
                1
              </div>
              {/* Mobile mockup */}
              <div className="relative inline-flex items-center justify-center">
                {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
                <img
                  className="absolute"
                  src={MockupImage02}
                  width="290"
                  height="624"
                  style={{ maxWidth: '84.33%' }}
                  alt="App screen 02"
                />
                {/* iPhone mockup */}
                <img
                  className="relative h-auto max-w-full mx-auto pointer-events-none"
                  src={IphoneMockup}
                  width="344"
                  height="674"
                  alt="iPhone mockup"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center">
              {/* Line connecting (2) and (3) */}
              <div
                aria-hidden="true"
                className="absolute hidden h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 md:block"
                style={{
                  width: 'calc(100% - 48px)',
                  left: 'calc(50% + 48px)',
                  top: '24px',
                }}
              >
                <div className="absolute inset-0 border-t border-white border-dashed dark:border-gray-900"></div>
              </div>
              {/* Number */}
              <div className="flex items-center justify-center w-12 h-12 mb-8 font-medium text-white bg-teal-400 rounded-full dark:bg-teal-600 dark:bg-opacity-25 dark:text-teal-400 lg:mb-12">
                2
              </div>
              {/* Mobile mockup */}
              <div className="relative inline-flex items-center justify-center">
                {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
                <img
                  className="absolute"
                  src={MockupImage03}
                  width="290"
                  height="624"
                  style={{ maxWidth: '84.33%' }}
                  alt="App screen 03"
                />
                {/* iPhone mockup */}
                <img
                  className="relative h-auto max-w-full mx-auto pointer-events-none"
                  src={IphoneMockup}
                  width="344"
                  height="674"
                  alt="iPhone mockup"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 mb-8 font-medium text-white bg-teal-400 rounded-full dark:bg-teal-600 dark:bg-opacity-25 dark:text-teal-400 lg:mb-12">
                3
              </div>
              {/* Mobile mockup */}
              <div className="relative inline-flex items-center justify-center">
                {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
                <img
                  className="absolute"
                  src={MockupImage04}
                  width="290"
                  height="624"
                  style={{ maxWidth: '84.33%' }}
                  alt="App screen 04"
                />
                {/* iPhone mockup */}
                <img
                  className="relative h-auto max-w-full mx-auto pointer-events-none"
                  src={IphoneMockup}
                  width="344"
                  height="674"
                  alt="iPhone mockup"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
