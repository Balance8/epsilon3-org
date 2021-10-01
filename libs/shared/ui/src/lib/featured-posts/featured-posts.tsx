import Link from 'next/link';
import Image from 'next/image';
import './featured-posts.module.css';

import RelatedPost03 from '../assets/related-post-03.jpg';
import RelatedPost04 from '../assets/related-post-04.jpg';
import RelatedPost05 from '../assets/related-post-05.jpg';
import RelatedPost06 from '../assets/related-post-06.jpg';

/* eslint-disable-next-line */
export interface FeaturedPostsProps {}

export function FeaturedPosts(props: FeaturedPostsProps) {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pb-12 md:pb-16">
          <div
            className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
            data-aos-id-featposts
          >
            {/* 1st article */}
            <article
              className="relative px-6 py-4 group sm:py-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-featposts]"
              data-aos-delay="100"
            >
              <figure>
                <div className="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out opacity-50 group-hover:opacity-75">
                  <Image
                    className="object-cover"
                    src={RelatedPost03}
                    width="258"
                    height="154"
                    alt="Related post 03"
                    layout="fill"
                  />
                </div>
                <div
                  className="absolute inset-0 transition duration-700 ease-out bg-teal-500 opacity-75 group-hover:opacity-50"
                  aria-hidden="true"
                ></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="flex-grow">
                  <Link href="/blog-post" passHref>
                    <a className="hover:underline">
                      <h3 className="mb-2 text-lg font-bold tracking-tight font-red-hat-display">
                        Creating events in the pandemic
                      </h3>
                    </a>
                  </Link>
                </header>
                <footer>
                  <div className="text-sm opacity-80">
                    By Josh Wang · Nov 16, 2020
                  </div>
                </footer>
              </div>
            </article>

            {/* 2nd article */}
            <article
              className="relative px-6 py-4 group sm:py-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-featposts]"
              data-aos-delay="200"
            >
              <figure>
                <div className="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out opacity-50 group-hover:opacity-75">
                  <Image
                    className="object-cover"
                    src={RelatedPost04}
                    width="258"
                    height="154"
                    alt="Related post 04"
                    layout="fill"
                  />
                </div>
                <div
                  className="absolute inset-0 transition duration-700 ease-out bg-purple-500 opacity-75 group-hover:opacity-50"
                  aria-hidden="true"
                ></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="flex-grow">
                  <Link href="/blog-post" passHref>
                    <a className="hover:underline">
                      <h3 className="mb-2 text-lg font-bold tracking-tight font-red-hat-display">
                        5 Ways to grow your personal network
                      </h3>
                    </a>
                  </Link>
                </header>
                <footer>
                  <div className="text-sm opacity-80">
                    By Yuri Lapko · Nov 14, 2020
                  </div>
                </footer>
              </div>
            </article>

            {/* 3rd article */}
            <article
              className="relative px-6 py-4 group sm:py-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-featposts]"
              data-aos-delay="300"
            >
              <figure>
                <div className="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out opacity-50 group-hover:opacity-75">
                  <Image
                    className="object-cover"
                    src={RelatedPost05}
                    width="258"
                    height="154"
                    alt="Related post 05"
                    layout="fill"
                  />
                </div>
                <div
                  className="absolute inset-0 transition duration-700 ease-out bg-indigo-500 opacity-75 group-hover:opacity-50"
                  aria-hidden="true"
                ></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="flex-grow">
                  <Link href="/blog-post" passHref>
                    <a className="hover:underline">
                      <h3 className="mb-2 text-lg font-bold tracking-tight font-red-hat-display">
                        How to fix my website myself
                      </h3>
                    </a>
                  </Link>
                </header>
                <footer>
                  <div className="text-sm opacity-80">
                    By Josh Wang · Nov 10, 2020
                  </div>
                </footer>
              </div>
            </article>

            {/* 4th article */}
            <article
              className="relative px-6 py-4 group sm:py-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-featposts]"
              data-aos-delay="400"
            >
              <figure>
                <div className="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out opacity-50 group-hover:opacity-75">
                  <Image
                    className="object-cover"
                    src={RelatedPost06}
                    width="258"
                    height="154"
                    alt="Related post 06"
                    layout="fill"
                  />
                </div>
                <div
                  className="absolute inset-0 transition duration-700 ease-out bg-pink-500 opacity-75 group-hover:opacity-50"
                  aria-hidden="true"
                ></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="flex-grow">
                  <Link href="/blog-post" passHref>
                    <a className="hover:underline">
                      <h3 className="mb-2 text-lg font-bold tracking-tight font-red-hat-display">
                        How COVID-19 redefined the entrepreneur
                      </h3>
                    </a>
                  </Link>
                </header>
                <footer>
                  <div className="text-sm opacity-80">
                    By Mary Champ · Nov 2, 2020
                  </div>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPosts;
