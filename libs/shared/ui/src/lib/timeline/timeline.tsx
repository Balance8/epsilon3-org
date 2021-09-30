import Link from 'next/link';
import { useState } from 'react';
import './timeline.module.css';

/* eslint-disable-next-line */
export interface TimelineProps {}

export function Timeline(props: TimelineProps) {
  const [year, setYear] = useState('2020');

  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-200 md:py-20 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2 font-red-hat-display">
              What we’ve achieved
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est.
            </p>
          </div>

          {/* Section content */}
          <div>
            <div className="flex items-start">
              {/* Timeline buttons */}
              <div className="relative mr-4 sm:mr-12 lg:mr-32">
                <div
                  className="absolute inset-0 my-6 ml-16 pointer-events-none -z-1"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
                </div>
                <button
                  className="flex items-center justify-between w-20 py-3 pr-2 font-medium text-left text-gray-500 dark:text-gray-400"
                  onClick={() => setYear('2020')}
                >
                  <span className="block w-12 truncate">2020</span>
                  <span
                    className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${
                      year === '2020' && 'bg-teal-500 dark:bg-teal-500'
                    }`}
                  ></span>
                </button>
                <button
                  className="flex items-center justify-between w-20 py-3 pr-2 font-medium text-left text-gray-500 dark:text-gray-400"
                  onClick={() => setYear('2019')}
                >
                  <span className="block w-12 truncate">2019</span>
                  <span
                    className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${
                      year === '2019' && 'bg-teal-500 dark:bg-teal-500'
                    }`}
                  ></span>
                </button>
                <button
                  className="flex items-center justify-between w-20 py-3 pr-2 font-medium text-left text-gray-500 dark:text-gray-400"
                  onClick={() => setYear('2018')}
                >
                  <span className="block w-12 truncate">2018</span>
                  <span
                    className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${
                      year === '2018' && 'bg-teal-500 dark:bg-teal-500'
                    }`}
                  ></span>
                </button>
                <button
                  className="flex items-center justify-between w-20 py-3 pr-2 font-medium text-left text-gray-500 dark:text-gray-400"
                  onClick={() => setYear('2017')}
                >
                  <span className="block w-12 truncate">2017</span>
                  <span
                    className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${
                      year === '2017' && 'bg-teal-500 dark:bg-teal-500'
                    }`}
                  ></span>
                </button>
                <button
                  className="flex items-center justify-between w-20 py-3 pr-2 font-medium text-left text-gray-500 dark:text-gray-400"
                  onClick={() => setYear('2016')}
                >
                  <span className="block w-12 truncate">2016</span>
                  <span
                    className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${
                      year === '2016' && 'bg-teal-500 dark:bg-teal-500'
                    }`}
                  ></span>
                </button>
              </div>

              {/* 2020's articles */}
              <div className={`flex-grow ${year !== '2020' && 'hidden'}`}>
                <div className="grid gap-4 md:grid-cols-2 sm:gap-6">
                  <article className="flex flex-col p-6 bg-white shadow-2xl dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>Launched Appy Business</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                  <article className="flex flex-col p-6 bg-white shadow-2xl dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>Series B fundraising</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                  <article className="flex flex-col p-6 bg-white shadow-2xl dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>1M Customers</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                  <article className="flex flex-col p-6 bg-white shadow-2xl dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>Mobile builder enabled</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

              {/* 2019's articles */}
              <div className={`flex-grow ${year !== '2019' && 'hidden'}`}>
                <div className="grid gap-6 md:grid-cols-2">
                  <article className="flex flex-col p-6 bg-white shadow-2xl dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>1M Customers</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Sed do eiusmod tempor incididunt, Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                  <article className="flex flex-col p-6 bg-white shadow-2xl dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>Mobile builder enabled</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Sed do eiusmod tempor incididunt, Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

              {/* 2018's articles */}
              <div className={`flex-grow ${year !== '2018' && 'hidden'}`}>
                <div className="grid gap-6 md:grid-cols-2">
                  <article className="flex flex-col p-6 bg-white shadow-2xl dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>Series B fundraising</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                  <article className="flex flex-col p-6 bg-white shadow-2xl dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>Launched Appy Business</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

              {/* 2017's articles */}
              <div className={`flex-grow ${year !== '2017' && 'hidden'}`}>
                <div className="grid gap-6 md:grid-cols-2">
                  <article className="flex flex-col p-6 bg-white shadow-2xl dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>1M Customers</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Sed do eiusmod tempor incididunt, Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                  <article className="flex flex-col p-6 bg-white shadow-2xl dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>Mobile builder enabled</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Sed do eiusmod tempor incididunt, Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>

              {/* 2016's articles */}
              <div className={`flex-grow ${year !== '2016' && 'hidden'}`}>
                <div className="grid gap-6 md:grid-cols-2">
                  <article className="flex flex-col p-6 bg-white shadow-2xl md:col-span-2 dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>Mobile builder enabled</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                  <article className="flex flex-col p-6 bg-white shadow-2xl dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>Series B fundraising</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                  <article className="flex flex-col p-6 bg-white shadow-2xl dark:bg-gray-800">
                    <header>
                      <h3 className="mb-1 h4 font-red-hat-display">
                        <Link href="#0" passHref>
                          <a>1M Customers</a>
                        </Link>
                      </h3>
                    </header>
                    <div className="flex-grow text-gray-600 dark:text-gray-400">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <a className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline">
                      <span>Learn more</span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
