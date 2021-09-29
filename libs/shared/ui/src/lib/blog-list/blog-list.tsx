import Link from 'next/link';
import './blog-list.module.css';

import News01 from '../assets/news-01.jpg';
import News02 from '../assets/news-02.jpg';
import News03 from '../assets/news-03.jpg';
import News04 from '../assets/news-04.jpg';
import News05 from '../assets/news-05.jpg';
import NewsAuthor01 from '../assets/news-author-01.jpg';
import NewsAuthor03 from '../assets/news-author-03.jpg';
import NewsAuthor04 from '../assets/news-author-04.jpg';
import NewsAuthor05 from '../assets/news-author-05.jpg';
import NewsAuthor06 from '../assets/news-author-06.jpg';

/* eslint-disable-next-line */
export interface BlogListProps {}

export function BlogList(props: BlogListProps) {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="lg:flex lg:justify-between">
            {/* Main content */}
            <div
              className="lg:flex-grow"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {/* Section title */}
              <h4 className="mb-8 h3 font-red-hat-display">Latest</h4>

              {/* Articles container */}
              <div className="grid items-start gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8">
                {/* 1st article */}
                <article className="flex flex-col h-full">
                  <header>
                    <Link passHref href="/blog-post">
                      <a className="block mb-4">
                        <figure className="relative h-0 pb-9/16">
                          <img
                            className="absolute inset-0 object-cover w-full h-full"
                            src={News01}
                            width="352"
                            height="198"
                            alt="News 01"
                          />
                        </figure>
                      </a>
                    </Link>
                    <Link passHref href="/blog-post">
                      <a className="hover:underline">
                        <h3 className="mb-2 h4 font-red-hat-display">
                          How to create a profile page using Appy
                        </h3>
                      </a>
                    </Link>
                  </header>
                  <p className="flex-grow text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <footer className="flex items-center mt-4">
                    <a href="#0">
                      <img
                        className="flex-shrink-0 mr-3 rounded-full"
                        src={NewsAuthor03}
                        width="32"
                        height="32"
                        alt="Author 03"
                      />
                    </a>
                    <div className="text-sm text-gray-500">
                      By{' '}
                      <a
                        className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                        href="#0"
                      >
                        Lisa Allison
                      </a>{' '}
                      · <span className="text-gray-500">Oct 22, 2020</span>
                    </div>
                  </footer>
                </article>

                {/* 2nd article */}
                <article className="flex flex-col h-full">
                  <header>
                    <Link passHref href="/blog-post">
                      <a className="block mb-4">
                        <figure className="relative h-0 pb-9/16">
                          <img
                            className="absolute inset-0 object-cover w-full h-full"
                            src={News02}
                            width="352"
                            height="198"
                            alt="News 02"
                          />
                        </figure>
                      </a>
                    </Link>
                    <Link passHref href="/blog-post">
                      <a className="hover:underline">
                        <h3 className="mb-2 h4 font-red-hat-display">
                          20+ elements of a modern website design
                        </h3>
                      </a>
                    </Link>
                  </header>
                  <p className="flex-grow text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <footer className="flex items-center mt-4">
                    <a href="#0">
                      <img
                        className="flex-shrink-0 mr-3 rounded-full"
                        src={NewsAuthor06}
                        width="32"
                        height="32"
                        alt="Author 06"
                      />
                    </a>
                    <div className="text-sm text-gray-500">
                      By{' '}
                      <a
                        className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                        href="#0"
                      >
                        Greg Gilev
                      </a>{' '}
                      · <span className="text-gray-500">Oct 22, 2020</span>
                    </div>
                  </footer>
                </article>

                {/* 3rd article */}
                <article className="flex flex-col h-full">
                  <header>
                    <Link passHref href="/blog-post">
                      <a className="block mb-4">
                        <figure className="relative h-0 pb-9/16">
                          <img
                            className="absolute inset-0 object-cover w-full h-full"
                            src={News03}
                            width="352"
                            height="198"
                            alt="News 03"
                          />
                        </figure>
                      </a>
                    </Link>
                    <Link passHref href="/blog-post">
                      <a className="hover:underline">
                        <h3 className="mb-2 h4 font-red-hat-display">
                          20 unique places to find web design inspiration
                        </h3>
                      </a>
                    </Link>
                  </header>
                  <p className="flex-grow text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <footer className="flex items-center mt-4">
                    <a href="#0">
                      <img
                        className="flex-shrink-0 mr-3 rounded-full"
                        src={NewsAuthor01}
                        width="32"
                        height="32"
                        alt="Author 01"
                      />
                    </a>
                    <div className="text-sm text-gray-500">
                      By{' '}
                      <a
                        className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                        href="#0"
                      >
                        Mark Varsano
                      </a>{' '}
                      · <span className="text-gray-500">Oct 22, 2020</span>
                    </div>
                  </footer>
                </article>

                {/* 4th article */}
                <article className="flex flex-col h-full">
                  <header>
                    <Link passHref href="/blog-post">
                      <a className="block mb-4">
                        <figure className="relative h-0 pb-9/16">
                          <img
                            className="absolute inset-0 object-cover w-full h-full"
                            src={News04}
                            width="352"
                            height="198"
                            alt="News 04"
                          />
                        </figure>
                      </a>
                    </Link>
                    <Link passHref href="/blog-post">
                      <a className="hover:underline">
                        <h3 className="mb-2 h4 font-red-hat-display">
                          What to look for in a digital portfolio
                        </h3>
                      </a>
                    </Link>
                  </header>
                  <p className="flex-grow text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <footer className="flex items-center mt-4">
                    <a href="#0">
                      <img
                        className="flex-shrink-0 mr-3 rounded-full"
                        src={NewsAuthor03}
                        width="32"
                        height="32"
                        alt="Author 03"
                      />
                    </a>
                    <div className="text-sm text-gray-500">
                      By{' '}
                      <a
                        className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                        href="#0"
                      >
                        Lisa Allison
                      </a>{' '}
                      · <span className="text-gray-500">Oct 22, 2020</span>
                    </div>
                  </footer>
                </article>

                {/* 5th article */}
                <article className="flex flex-col h-full">
                  <header>
                    <Link passHref href="/blog-post">
                      <a className="block mb-4">
                        <figure className="relative h-0 pb-9/16">
                          <img
                            className="absolute inset-0 object-cover w-full h-full"
                            src={News05}
                            width="352"
                            height="198"
                            alt="News 05"
                          />
                        </figure>
                      </a>
                    </Link>
                    <Link passHref href="/blog-post">
                      <a className="hover:underline">
                        <h3 className="mb-2 h4 font-red-hat-display">
                          Why your customers needs a responsive website
                        </h3>
                      </a>
                    </Link>
                  </header>
                  <p className="flex-grow text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <footer className="flex items-center mt-4">
                    <a href="#0">
                      <img
                        className="flex-shrink-0 mr-3 rounded-full"
                        src={NewsAuthor04}
                        width="32"
                        height="32"
                        alt="Author 04"
                      />
                    </a>
                    <div className="text-sm text-gray-500">
                      By{' '}
                      <a
                        className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                        href="#0"
                      >
                        Mary Champ
                      </a>{' '}
                      · <span className="text-gray-500">Oct 22, 2020</span>
                    </div>
                  </footer>
                </article>

                {/* 6th article */}
                <article className="flex flex-col h-full">
                  <header>
                    <Link passHref href="/blog-post">
                      <a className="block mb-4">
                        <figure className="relative h-0 pb-9/16">
                          <img
                            className="absolute inset-0 object-cover w-full h-full"
                            src={News01}
                            width="352"
                            height="198"
                            alt="News 06"
                          />
                        </figure>
                      </a>
                    </Link>
                    <Link passHref href="/blog-post">
                      <a className="hover:underline">
                        <h3 className="mb-2 h4 font-red-hat-display">
                          Launch lessons: the creators of Intrusive Inc.
                        </h3>
                      </a>
                    </Link>
                  </header>
                  <p className="flex-grow text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <footer className="flex items-center mt-4">
                    <a href="#0">
                      <img
                        className="flex-shrink-0 mr-3 rounded-full"
                        src={NewsAuthor05}
                        width="32"
                        height="32"
                        alt="Author 05"
                      />
                    </a>
                    <div className="text-sm text-gray-500">
                      By{' '}
                      <a
                        className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                        href="#0"
                      >
                        Yuri Lapko
                      </a>{' '}
                      · <span className="text-gray-500">Oct 22, 2020</span>
                    </div>
                  </footer>
                </article>
              </div>

              {/* Load more button */}
              <div className="flex justify-center mt-12 md:mt-16">
                <a
                  className="flex items-center text-gray-300 bg-gray-800 btn-sm hover:text-gray-100"
                  href="#0"
                >
                  <span>See previous articles</span>
                  <svg
                    className="flex-shrink-0 w-4 h-4 ml-3"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="text-gray-500 fill-current"
                      d="M14.7 9.3l-1.4-1.4L9 12.2V0H7v12.2L2.7 7.9 1.3 9.3 8 16z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside
              className="relative mt-12 lg:mt-0 lg:w-64 lg:ml-16 lg:flex-shrink-0"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {/* Popular posts */}
              <div className="mb-8">
                <h4 className="mb-5 h4 font-red-hat-display">
                  Popular on Simple
                </h4>
                <ul className="-my-3">
                  <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex-shrink-0 w-12 mt-1 text-gray-400 h4 font-red-hat-display dark:text-gray-600">
                      01
                    </div>
                    <article>
                      <Link passHref href="/blog-post">
                        <a className="hover:underline">
                          <h3 className="mb-1 font-bold tracking-tight font-red-hat-display">
                            How to get creative using geometric patterns
                          </h3>
                        </a>
                      </Link>
                      <div className="text-sm text-gray-500">
                        By{' '}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                          href="#0"
                        >
                          Mary Champ
                        </a>{' '}
                        · <span className="text-gray-500">Oct 22, 2020</span>
                      </div>
                    </article>
                  </li>
                  <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex-shrink-0 w-12 mt-1 text-gray-400 h4 font-red-hat-display dark:text-gray-600">
                      02
                    </div>
                    <article>
                      <Link passHref href="/blog-post">
                        <a className="hover:underline">
                          <h3 className="mb-1 font-bold tracking-tight font-red-hat-display">
                            Create your branding strategy in 4 simple steps
                          </h3>
                        </a>
                      </Link>
                      <div className="text-sm text-gray-500">
                        By{' '}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                          href="#0"
                        >
                          Lisa Allison
                        </a>{' '}
                        · <span className="text-gray-500">Oct 17, 2020</span>
                      </div>
                    </article>
                  </li>
                  <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex-shrink-0 w-12 mt-1 text-gray-400 h4 font-red-hat-display dark:text-gray-600">
                      03
                    </div>
                    <article>
                      <Link passHref href="/blog-post">
                        <a className="hover:underline">
                          <h3 className="mb-1 font-bold tracking-tight font-red-hat-display">
                            Don’t miss Appy’s exclusive workshop with our CEO
                          </h3>
                        </a>
                      </Link>
                      <div className="text-sm text-gray-500">
                        By{' '}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                          href="#0"
                        >
                          Lisa Allison
                        </a>{' '}
                        · <span className="text-gray-500">Oct 2, 2020</span>
                      </div>
                    </article>
                  </li>
                  <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex-shrink-0 w-12 mt-1 text-gray-400 h4 font-red-hat-display dark:text-gray-600">
                      04
                    </div>
                    <article>
                      <Link passHref href="/blog-post">
                        <a className="hover:underline">
                          <h3 className="mb-1 font-bold tracking-tight font-red-hat-display">
                            How to optimize your website to convert more leads
                          </h3>
                        </a>
                      </Link>
                      <div className="text-sm text-gray-500">
                        By{' '}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                          href="#0"
                        >
                          Greg Gilev
                        </a>{' '}
                        · <span className="text-gray-500">Sep 24, 2020</span>
                      </div>
                    </article>
                  </li>
                  <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex-shrink-0 w-12 mt-1 text-gray-400 h4 font-red-hat-display dark:text-gray-600">
                      05
                    </div>
                    <article>
                      <Link passHref href="/blog-post">
                        <a className="hover:underline">
                          <h3 className="mb-1 font-bold tracking-tight font-red-hat-display">
                            What to do if your product idea is stolen
                          </h3>
                        </a>
                      </Link>
                      <div className="text-sm text-gray-500">
                        By{' '}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                          href="#0"
                        >
                          Yuri Lapko
                        </a>{' '}
                        · <span className="text-gray-500">Sep 22, 2020</span>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
