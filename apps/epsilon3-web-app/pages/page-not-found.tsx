import { Header, PageIllustration, Footer } from '@epsilon3-org/shared/ui';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface PageNotFoundProps {}

export function PageNotFound(props: PageNotFoundProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div
          className="relative h-0 max-w-6xl mx-auto pointer-events-none -z-1"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                <div className="relative inline-flex items-center justify-center">
                  <img
                    className="hidden opacity-50 sm:block md:opacity-80"
                    src={require('../images/404.jpg').default}
                    width="768"
                    height="432"
                    alt="404"
                  />
                  <div
                    className="absolute inset-0 hidden sm:block bg-gradient-to-t from-white dark:from-gray-900"
                    aria-hidden="true"
                  ></div>
                  <div className="w-full sm:absolute">
                    <h1 className="mb-8 h3 font-red-hat-display">
                      Hm, the page you were looking for doesn't exist anymore.
                    </h1>
                    <Link passHref href="/">
                      <a
                        className="inline-flex items-center text-white bg-teal-500 btn hover:bg-teal-400"
                        href="/"
                      >
                        <span>Back to Appy</span>
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default PageNotFound;
