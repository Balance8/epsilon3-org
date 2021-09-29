import './career.module.css';

import Career01 from '../assets/career-01.jpg';
import Career02 from '../assets/career-02.jpg';
import Career03 from '../assets/career-03.jpg';
import Career04 from '../assets/career-04.jpg';
import Career05 from '../assets/career-05.jpg';
import Career06 from '../assets/career-06.jpg';

/* eslint-disable-next-line */
export interface CareerProps {}

export function Career(props: CareerProps) {
  return (
    <section className="relative border-t border-gray-200 dark:border-gray-800">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900"
        aria-hidden="true"
      ></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2 font-red-hat-display">
              Explore roles at Appy’s offices around the world
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est.
            </p>
          </div>

          {/* Section content */}
          <div className="lg:flex lg:items-start lg:justify-between">
            {/* Job categories */}
            <div className="flex-grow max-w-xs mx-auto sm:max-w-lg md:max-w-3xl lg:mx-0 lg:order-1">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
                {/* 1st job item */}
                <a className="block group" href="#0">
                  <div className="relative h-0 pb-9/16 sm:pb-1/1">
                    <img
                      className="absolute inset-0 object-cover w-full h-full"
                      src={Career01}
                      width="240"
                      height="240"
                      alt="Career 01"
                    />
                    <div
                      className="absolute inset-0 opacity-75 bg-gradient-to-t from-gray-900"
                      aria-hidden="true"
                    ></div>
                    <div className="absolute bottom-0 left-0 right-0 m-4 text-center text-white">
                      <h4 className="text-lg font-bold tracking-tight break-words font-red-hat-display">
                        Development
                      </h4>
                      <div className="text-sm italic opacity-70">
                        4 Positions
                      </div>
                    </div>
                  </div>
                </a>
                {/* 2nd job item */}
                <a className="block group" href="#0">
                  <div className="relative h-0 pb-9/16 sm:pb-1/1">
                    <img
                      className="absolute inset-0 object-cover w-full h-full"
                      src={Career02}
                      width="240"
                      height="240"
                      alt="Career 02"
                    />
                    <div
                      className="absolute inset-0 opacity-75 bg-gradient-to-t from-gray-900"
                      aria-hidden="true"
                    ></div>
                    <div className="absolute bottom-0 left-0 right-0 m-4 text-center text-white">
                      <h4 className="text-lg font-bold tracking-tight break-words font-red-hat-display">
                        Product & Design
                      </h4>
                      <div className="text-sm italic opacity-70">
                        10 Positions
                      </div>
                    </div>
                  </div>
                </a>
                {/* 3rd job item */}
                <a className="block group" href="#0">
                  <div className="relative h-0 pb-9/16 sm:pb-1/1">
                    <img
                      className="absolute inset-0 object-cover w-full h-full"
                      src={Career03}
                      width="240"
                      height="240"
                      alt="Career 03"
                    />
                    <div
                      className="absolute inset-0 opacity-75 bg-gradient-to-t from-gray-900"
                      aria-hidden="true"
                    ></div>
                    <div className="absolute bottom-0 left-0 right-0 m-4 text-center text-white">
                      <h4 className="text-lg font-bold tracking-tight break-words font-red-hat-display">
                        Marketing
                      </h4>
                      <div className="text-sm italic opacity-70">
                        2 Positions
                      </div>
                    </div>
                  </div>
                </a>
                {/* 4th job item */}
                <a className="block group" href="#0">
                  <div className="relative h-0 pb-9/16 sm:pb-1/1">
                    <img
                      className="absolute inset-0 object-cover w-full h-full"
                      src={Career04}
                      width="240"
                      height="240"
                      alt="Career 04"
                    />
                    <div
                      className="absolute inset-0 opacity-75 bg-gradient-to-t from-gray-900"
                      aria-hidden="true"
                    ></div>
                    <div className="absolute bottom-0 left-0 right-0 m-4 text-center text-white">
                      <h4 className="text-lg font-bold tracking-tight break-words font-red-hat-display">
                        Data Science
                      </h4>
                      <div className="text-sm italic opacity-70">
                        4 Positions
                      </div>
                    </div>
                  </div>
                </a>
                {/* 5th job item */}
                <a className="block group" href="#0">
                  <div className="relative h-0 pb-9/16 sm:pb-1/1">
                    <img
                      className="absolute inset-0 object-cover w-full h-full"
                      src={Career05}
                      width="240"
                      height="240"
                      alt="Career 05"
                    />
                    <div
                      className="absolute inset-0 opacity-75 bg-gradient-to-t from-gray-900"
                      aria-hidden="true"
                    ></div>
                    <div className="absolute bottom-0 left-0 right-0 m-4 text-center text-white">
                      <h4 className="text-lg font-bold tracking-tight break-words font-red-hat-display">
                        Internal Systems
                      </h4>
                      <div className="text-sm italic opacity-70">
                        0 Positions
                      </div>
                    </div>
                  </div>
                </a>
                {/* 6th job item */}
                <a className="block group" href="#0">
                  <div className="relative h-0 pb-9/16 sm:pb-1/1">
                    <img
                      className="absolute inset-0 object-cover w-full h-full"
                      src={Career06}
                      width="240"
                      height="240"
                      alt="Career 06"
                    />
                    <div
                      className="absolute inset-0 opacity-75 bg-gradient-to-t from-gray-900"
                      aria-hidden="true"
                    ></div>
                    <div className="absolute bottom-0 left-0 right-0 m-4 text-center text-white">
                      <h4 className="text-lg font-bold tracking-tight break-words font-red-hat-display">
                        Administrative
                      </h4>
                      <div className="text-sm italic opacity-70">
                        0 Positions
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Locations links */}
            <div className="max-w-lg mx-auto mt-8 lg:w-64 lg:mt-0 lg:ml-0 lg:mr-6">
              <h3 className="mb-4 text-lg font-bold tracking-tight text-center lg:text-left">
                Locations
              </h3>
              <ul className="flex flex-wrap justify-center -mx-3 -my-1 font-medium lg:flex-col lg:justify-start lg:mx-0">
                <li className="px-3 py-1 lg:px-0">
                  <a className="flex items-center text-teal-500" href="#0">
                    <svg
                      className="flex-shrink-0 w-4 h-4 mr-3 text-gray-400 fill-current dark:text-gray-500"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                    </svg>
                    <span>All locations (44)</span>
                  </a>
                </li>
                <li className="px-3 py-1 lg:px-0">
                  <a
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-teal-500"
                    href="#0"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4 mr-3 text-gray-400 fill-current dark:text-gray-500"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                    </svg>
                    <span>London, UK (14)</span>
                  </a>
                </li>
                <li className="px-3 py-1 lg:px-0">
                  <a
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-teal-500"
                    href="#0"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4 mr-3 text-gray-400 fill-current dark:text-gray-500"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                    </svg>
                    <span>Milan, Italy (22)</span>
                  </a>
                </li>
                <li className="px-3 py-1 lg:px-0">
                  <a
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-teal-500"
                    href="#0"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4 mr-3 text-gray-400 fill-current dark:text-gray-500"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                    </svg>
                    <span>New York, NYC (4)</span>
                  </a>
                </li>
                <li className="px-3 py-1 lg:px-0">
                  <a
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-teal-500"
                    href="#0"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4 mr-3 text-gray-400 fill-current dark:text-gray-500"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                    </svg>
                    <span>Berlin, DE (12)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
