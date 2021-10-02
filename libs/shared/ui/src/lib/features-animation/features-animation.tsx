import './features-animation.module.css';

/* eslint-disable-next-line */
export interface FeaturesAnimationProps {}

export function FeaturesAnimation(props: FeaturesAnimationProps) {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-200 md:py-20 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <h1 className="mb-4 h2 font-red-hat-display">
              Custom built ecosystem
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est.
            </p>
          </div>

          {/* Custom animation */}
          <div className="max-w-3xl mx-auto">
            <div className="relative flex items-center justify-center overflow-hidden">
              {/* Big circle behind: light layout */}
              <svg
                className="dark:hidden"
                width="432"
                height="432"
                viewBox="0 0 432 432"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="50%"
                    cy="50%"
                    fx="50%"
                    fy="50%"
                    r="48.919%"
                    id="prefix__a"
                  >
                    <stop stopColor="#B2F5EA" stopOpacity=".64" offset="0%" />
                    <stop stopColor="#B2F5EA" stopOpacity="0" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <circle fill="url(#prefix__a)" cx="216" cy="216" r="216" />
                  <g transform="translate(22 22)" stroke="#1D1D20">
                    <circle strokeOpacity=".04" cx="194" cy="194" r="193.5" />
                    <circle
                      strokeOpacity=".08"
                      strokeWidth="2"
                      cx="194"
                      cy="194"
                      r="153"
                    />
                    <circle
                      strokeOpacity=".16"
                      strokeWidth="2.5"
                      cx="194"
                      cy="194"
                      r="112.75"
                    />
                  </g>
                </g>
              </svg>

              {/* Big circle behind: dark layout */}
              <svg
                className="hidden dark:block"
                width="432"
                height="432"
                viewBox="0 0 432 432"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="50%"
                    cy="50%"
                    fx="50%"
                    fy="50%"
                    r="50%"
                    id="circleill_a"
                  >
                    <stop stopColor="#1D1D21" stopOpacity="0" offset="0%" />
                    <stop stopColor="#2E2E33" stopOpacity=".32" offset="100%" />
                  </radialGradient>
                </defs>
                <circle
                  cx="216"
                  cy="216"
                  r="216"
                  fill="url(#circleill_a)"
                  fillRule="evenodd"
                />
              </svg>

              {/* Moving tags */}
              <div className="absolute inset-0">
                <div className="absolute inline-flex items-center justify-center px-4 py-2 font-medium text-white delay-1000 rounded-full dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation mt-28">
                  Custom Support
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.1}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 font-medium text-white rounded-full dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation mt-72 "
                >
                  Components
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.16}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 mt-40 font-medium text-white rounded-full dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation "
                >
                  Items
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.23}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 font-medium text-white rounded-full dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation mt-80 top-4"
                >
                  Tools
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.27}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 mt-56 font-medium text-white delay-[30000*-0.27] rounded-full dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation "
                >
                  Development
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.27}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 font-medium text-white rounded-full delay-[30000*-0.44] dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation "
                >
                  Project Settings
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.44}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 font-medium text-white delay-[30000*-0.55] rounded-full dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation mt-14"
                >
                  Tools & Widgets
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.44}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 font-medium text-white rounded-full delay-[30000*-0.63] dark:text-purple-500 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation mt-80 top-4"
                >
                  Getting Started
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.55}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 mt-40 font-medium text-white delay-[30000*-0.73] rounded-full dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation "
                >
                  Templates
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.63}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 font-medium text-white rounded-full delay-[30000*-0.76] dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation "
                >
                  Frameworks
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.63}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 font-medium text-white delay-[30000*-0.8] rounded-full dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation mt-72"
                >
                  Custom UI
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.73}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 font-medium text-white delay-[30000*-0.63] rounded-full dark:text-purple-500 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation mt-28"
                >
                  Layout & Design
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.76}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 font-medium text-white delay-[30000*-0.44] rounded-full dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation mt-80 top-4"
                >
                  Perks
                </div>
                <div
                  style={{ animationDelay: `${30000 * -0.8}ms` }}
                  className="absolute inline-flex items-center justify-center px-4 py-2 mt-56 font-medium text-white delay-[30000*-0.1] rounded-full dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 animate-tags-animation"
                >
                  Product & Design
                </div>
              </div>

              {/* Inner cricle */}
              <svg
                className="absolute rounded-full shadow-xl"
                width="148"
                height="148"
                viewBox="0 0 148 148"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="74"
                  cy="74"
                  r="74"
                  fill="#2E2E33"
                  fillRule="evenodd"
                />
              </svg>
              {/* Logo */}
              <svg
                className="absolute w-12 h-12 animate-spin"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    x1="26%"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    id="logo_a"
                  >
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#7F9CF5" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="26%"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    id="logo_b"
                  >
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z"
                  fill="url(#logo_a)"
                />
                <path
                  d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z"
                  fill="url(#logo_b)"
                />
              </svg>
              {/* Side gradients */}
              <div
                className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900"
                aria-hidden="true"
              ></div>
              <div
                className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-900"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesAnimation;
