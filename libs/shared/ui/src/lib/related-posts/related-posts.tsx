import Link from 'next/link';
import Image from 'next/image';
import './related-posts.module.css';

import RelatedPost01 from '../assets/related-post-01.jpg';
import NewsAuthor04 from '../assets/news-author-04.jpg';
import RelatedPost02 from '../assets/related-post-02.jpg';
import NewsAuthor03 from '../assets/news-author-03.jpg';

/* eslint-disable-next-line */
export interface RelatedPostsProps {}

export function RelatedPosts(props: RelatedPostsProps) {
  return (
    <aside>
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <h4 className="mb-8 h4 font-red-hat-display">Related articles</h4>

            {/* Articles container */}
            <div
              className="grid gap-4 sm:gap-6 sm:grid-cols-2"
              data-aos-id-relposts
            >
              {/* 1st article */}
              <article
                className="relative p-6 text-white group"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-relposts]"
              >
                <figure>
                  <Image
                    className="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out opacity-50 group-hover:opacity-75"
                    src={RelatedPost01}
                    width="372"
                    height="182"
                    alt="Related post 01"
                  />
                  <div
                    className="absolute inset-0 transition duration-700 ease-out bg-teal-500 opacity-75 group-hover:opacity-50"
                    aria-hidden="true"
                  ></div>
                </figure>
                <div className="relative flex flex-col h-full">
                  <header className="flex-grow">
                    <Link href="/blog-post" passHref>
                      <a className="hover:underline">
                        <h3 className="mb-2 text-lg font-bold tracking-tight font-red-hat-display">
                          How to talk about yourself in the best possible way
                        </h3>
                      </a>
                    </Link>
                    <div className="text-sm opacity-80">Nov 16, 2020</div>
                  </header>
                  <footer>
                    {/* Author meta */}
                    <div className="flex items-center mt-5 text-sm">
                      <Link href="#0" passHref>
                        <a>
                          <Image
                            className="flex-shrink-0 mr-3 rounded-full"
                            src={NewsAuthor04}
                            width="32"
                            height="32"
                            alt="Author 04"
                          />
                        </a>
                      </Link>
                      <div>
                        <span className="opacity-75">By </span>
                        <a className="font-medium hover:underline" href="#0">
                          Mari Champ
                        </a>
                      </div>
                    </div>
                  </footer>
                </div>
              </article>

              {/* 2nd article */}
              <article
                className="relative p-6 text-white group"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-relposts]"
                data-aos-delay="200"
              >
                <figure>
                  <Image
                    className="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out opacity-50 group-hover:opacity-75"
                    src={RelatedPost02}
                    width="372"
                    height="182"
                    alt="Related post 02"
                  />
                  <div
                    className="absolute inset-0 transition duration-700 ease-out bg-purple-500 opacity-75 group-hover:opacity-50"
                    aria-hidden="true"
                  ></div>
                </figure>
                <div className="relative flex flex-col h-full">
                  <header className="flex-grow">
                    <Link href="/blog-post" passHref>
                      <a className="hover:underline">
                        <h3 className="mb-2 text-lg font-bold tracking-tight font-red-hat-display">
                          How I Park Inc make $5,000 every month by sellings
                          gifts
                        </h3>
                      </a>
                    </Link>
                    <div className="text-sm opacity-80">Nov 12, 2020</div>
                  </header>
                  <footer>
                    {/* Author meta */}
                    <div className="flex items-center mt-5 text-sm">
                      <Link href="#0" passHref>
                        <a>
                          <Image
                            className="flex-shrink-0 mr-3 rounded-full"
                            src={NewsAuthor03}
                            width="32"
                            height="32"
                            alt="Author 03"
                          />
                        </a>
                      </Link>
                      <div>
                        <span className="opacity-75">By </span>
                        <a className="font-medium hover:underline" href="#0">
                          Lisa Allison Champ
                        </a>
                      </div>
                    </div>
                  </footer>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default RelatedPosts;
