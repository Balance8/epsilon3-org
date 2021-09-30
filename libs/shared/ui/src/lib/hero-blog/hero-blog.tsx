import Link from 'next/link';
import Image from 'next/image';

import './hero-blog.module.css';

import HeroBg from '../assets/hero-bg.jpg';
import Author01 from '../assets/news-author-01.jpg';

/* eslint-disable-next-line */
export interface HeroBlogProps {}

export function HeroBlog(props: HeroBlogProps) {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="box-content absolute inset-0 pt-16 h-128 -z-1">
        <Image
          className="absolute inset-0 object-cover w-full h-full opacity-25"
          src={HeroBg}
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
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">
          {/* Featured article */}
          <div className="max-w-3xl" data-aos="fade-down">
            <article>
              <header>
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <Link href="/blog-post" passHref>
                    <a>
                      <h1 className="mb-4 h1 font-red-hat-display">
                        Appy launches new thematic solutions
                      </h1>
                    </a>
                  </Link>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    Curious about how your favorite product was created? Hear
                    from the team about how it was built, and how continued
                    improvements are made.
                  </p>
                </div>
                {/* Article meta */}
                <div className="mt-5 md:flex md:items-center md:justify-between">
                  {/* Author meta */}
                  <div className="flex items-center justify-center">
                    <Link href="#0" passHref>
                      <a>
                        <Image
                          className="flex-shrink-0 mr-3 rounded-full"
                          src={Author01}
                          width="32"
                          height="32"
                          alt="Author 04"
                        />
                      </a>
                    </Link>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">
                        By{' '}
                      </span>
                      <a
                        className="font-medium text-gray-800 dark:text-gray-300 hover:underline"
                        href="#0"
                      >
                        Micheal Osman
                      </a>
                      <span className="text-gray-600 dark:text-gray-400">
                        {' '}
                        · Nov 2, 2020
                      </span>
                    </div>
                  </div>
                </div>
              </header>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBlog;
