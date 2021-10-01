import './blog-single.module.css';

import HeroBg from '../assets/hero-bg.jpg';
import NewsAuthor01 from '../assets/news-author-01.jpg';
import NewsInnerImage from '../assets/news-inner-image.jpg';
import NewsInnerImageLeft from '../assets/news-inner-image-left.jpg';
import Link from 'next/link';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface BlogSingleProps {}

export function BlogSingle(props: BlogSingleProps) {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="box-content absolute inset-0 pt-16 h-128">
        <div className="absolute inset-0 object-cover w-full h-full opacity-25">
          <Image
            className="object-cover"
            src={HeroBg}
            width="1440"
            height="577"
            alt="About"
            layout="fill"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
          aria-hidden="true"
        ></div>
      </div>

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <article>
              {/* Article header */}
              <header className="mb-8">
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <h1
                    className="mb-4 h1 font-red-hat-display"
                    data-aos="fade-down"
                  >
                    Appy launches new thematic solutions
                  </h1>
                  <p
                    className="text-xl text-gray-600 dark:text-gray-400"
                    data-aos="fade-down"
                    data-aos-delay="150"
                  >
                    Curious about how your favorite product was created? Hear
                    from the team about how it was built, and how continued
                    improvements are made.
                  </p>
                </div>
                {/* Article meta */}
                <div className="mt-5 md:flex md:items-center md:justify-between">
                  {/* Author meta */}
                  <div
                    className="flex items-center justify-center"
                    data-aos="fade-down"
                    data-aos-delay="300"
                  >
                    <Link href="#0" passHref>
                      <a className="flex-shrink-0 mr-3 rounded-full">
                        <Image
                          className="flex-shrink-0 mr-3 rounded-full"
                          src={NewsAuthor01}
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
              <hr
                className="w-5 h-px pt-px mb-8 bg-gray-400 border-0 dark:bg-gray-500"
                data-aos="fade-down"
                data-aos-delay="450"
              />

              {/* Article content */}
              <div
                className="text-lg text-gray-600 dark:text-gray-400"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <p className="mb-8">
                  <strong className="font-medium text-gray-900 dark:text-gray-100">
                    There’s nothing more damaging to aspiring entrepreneurs than
                    mere inaction
                  </strong>
                  . I can attest to this myself as I spent the entirety of my
                  mid-twenties talking about starting a business, but I never
                  did.
                </p>
                <p className="mb-8">
                  Aenean sed adipiscing diam donec adipiscing tristique risus
                  nec feugiat auctor urna nunc id cursus metus aliquam eleifend,
                  arcu dictum varius duis at consectetur lorem donec massa
                  sapien, sed risus ultricies tristique nulla aliquet. Morbi
                  tristique senectus et netus et, nibh nisl condimentum id
                  venenatis a condimentum vitae sapien?
                </p>
                <figure className="mb-8">
                  <Image
                    className="w-full"
                    src={NewsInnerImage}
                    width="768"
                    height="432"
                    alt="News inner"
                  />
                  <figcaption className="mt-3 text-sm text-center text-gray-500">
                    Photo by Helena Lopes on Unsplash
                  </figcaption>
                </figure>
                <h3 className="mb-4 text-gray-900 h4 font-red-hat-display dark:text-gray-100">
                  1. An Ending and a Beginning
                </h3>
                <p className="mb-8">
                  Et leo duis ut diam quam nulla porttitor porttitor lacus
                  luctus accumsan tortor, lorem dolor sed viverra ipsum nunc
                  aliquet bibendum enim eu augue ut{' '}
                  <a
                    className="font-medium text-teal-500 hover:underline"
                    href="#0"
                  >
                    lectus arcu bibendum
                  </a>{' '}
                  at. Non sodales neque sodales ut etiam sit. Venenatis urna
                  cursus eget nunc scelerisque viverra mauris in aliquam.
                </p>
                <p className="mb-8">
                  Aenean sed adipiscing diam donec adipiscing tristique risus
                  nec feugiat auctor urna nunc id cursus metus aliquam eleifend,
                  arcu{' '}
                  <u className="underline">
                    dictum varius duis at consectetur lorem donec
                  </u>{' '}
                  massa sapien, sed risus.
                </p>
                <p className="mb-8">
                  <a
                    className="inline-flex items-center mt-2 font-medium text-teal-500 hover:underline"
                    href="#0"
                  >
                    <span>Ultricies tristique nulla aliquet</span>
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
                </p>
                <h3 className="mb-4 text-gray-900 h4 font-red-hat-display dark:text-gray-100">
                  1. How To Apply This:
                </h3>
                <p className="mb-8">
                  Bibendum enim facilisis gravida neque convallis. Convallis
                  posuere morbi leo urna molestie turpis in eu mi bibendum neque
                  egestas. Est ante in nibh mauris cursus mattis molestie
                  aliquam purus sit amet luctus vulputate sapien nec sagittis
                  aliquam enim nec dui nunc mattis enim, sit amet nulla facilisi
                  morbi tempus iaculis urna id. Blandit cursus risus at ultrices
                  mi tempus imperdiet nulla.
                </p>
                <figure className="mb-8 md:float-left md:max-w-sm md:mr-8 lg:max-w-none lg:-ml-32">
                  <Image
                    className="mx-auto"
                    src={NewsInnerImageLeft}
                    width="480"
                    height="300"
                    alt="News inner left"
                  />
                </figure>
                <p className="mb-8">
                  “ Et leo duis ut diam quam nulla porttitor porttitor lacus
                  luctus accumsan tortor, lorem dolor sed viverra ipsum nunc
                  aliquet bibendum enim eu augue ut lectus arcu bibendum at. Non
                  sodales neque sodales ut etiam sit. Venenatis urna cursus eget
                  nunc scelerisque viverra mauris in aliquam.”
                </p>
                <p className="mb-8">
                  Convallis posuere morbi leo urna molestie turpis in eu mi
                  bibendum neque egestas. Est ante in nibh mauris cursus.
                </p>
                <p className="mb-8">
                  Est ante in nibh mauris cursus mattis molestie aliquam purus
                  sit amet luctus vulputate sapien nec sagittis aliquam enim nec
                  dui nunc mattis enim.
                </p>
                <h3 className="mb-4 text-gray-900 h4 font-red-hat-display dark:text-gray-100">
                  3. Where Do You Go From Here?
                </h3>
                <p className="mb-8">
                  Lorem dolor sed viverra ipsum nunc aliquet bibendum enim eu
                  augue ut lectus arcu bibendum at non sodales neque sodales ut
                  etiam sit. Venenatis urna cursus eget nunc scelerisque viverra
                  mauris in aliquam:
                </p>
                <ul className="mb-8 list-decimal list-inside">
                  <li>
                    <strong className="font-medium text-gray-900 dark:text-gray-100">
                      Build systems
                    </strong>
                    . Aenean sed adipiscing diam donec adipiscing tristique
                    risus nec feugiat auctor urna nunc id cursus.
                  </li>
                  <li>
                    <strong className="font-medium text-gray-900 dark:text-gray-100">
                      Prioritize the balance
                    </strong>
                    . Venenatis urna cursus eget nunc scelerisque viverra mauris
                    in aliquam.
                  </li>
                  <li>
                    <strong className="font-medium text-gray-900 dark:text-gray-100">
                      Focus on one thing
                    </strong>
                    . Non sodales neque sodales ut etiam sit. Venenatis urna
                    cursus eget nunc scelerisque viverra mauris in aliquam.
                  </li>
                </ul>
                <blockquote className="pl-4 mb-8 italic border-l-2 border-teal-500 dark:border-gray-400">
                  “It’s really hard, but fundamentally, one of the hardest
                  decisions you’re going to ever have to make is what you’re not
                  going to do.”
                </blockquote>
                <h3 className="mb-4 text-gray-900 h4 font-red-hat-display dark:text-gray-100">
                  4. Final Thoughts
                </h3>
                <p className="mb-8">
                  Sem nulla pharetra diam sit massa eget egestas purus viverra
                  ut tortor pretium viverra suspendisse potenti justo eget magna
                  fermentum, iaculis eu non diam phasellus nisl suscipit
                  adipiscing bibendum est, dolor sed viverra ipsum nunc aliquet
                  bibendum enim facilisis gravida. Integer feugiat scelerisque
                  varius morbi enim nunc faucibus.
                </p>
              </div>

              {/* Article footer */}
              <footer>
                {/* Newsletter module */}
                <div
                  className="px-8 py-8 text-center text-gray-100 bg-gray-800 dark md:py-12 md:px-12"
                  data-aos="fade-down"
                >
                  <div className="mb-6 text-xl font-medium">
                    Sign up to our newsletter for more articles like this.
                  </div>
                  <form>
                    <div className="relative flex flex-col justify-center max-w-xs mx-auto sm:flex-row sm:max-w-sm sm:px-4">
                      <input
                        type="email"
                        className="w-full px-4 py-2 mb-2 form-input sm:mb-0 sm:mr-2"
                        placeholder="Your email"
                        aria-label="Your email"
                      />
                      <a
                        className="flex-shrink-0 text-white bg-teal-500 btn-sm hover:bg-teal-400"
                        href="#0"
                      >
                        Subscribe
                      </a>
                      <svg
                        className="absolute hidden -mt-3 sm:block left-full"
                        width="42"
                        height="44"
                        viewBox="0 0 42 44"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          className="text-gray-600 fill-current"
                          d="M6.226 39.073l9.71 2.172-.436 1.951-13.436-3.004-1.735-.388 1.232-1.281 9.545-9.923 1.441 1.387-6.898 7.171 7.737-2.329C25.946 29.254 34.831 17.909 40.043.71l1.914.58c-5.378 17.746-14.651 29.572-27.818 35.393l-.117.043-7.796 2.347z"
                        />
                      </svg>
                    </div>
                    {/* Success message */}
                    {/* <p className="mt-2 text-sm opacity-80">Thanks for subscribing!</p> */}
                    <p className="mt-3 text-sm italic text-gray-400">
                      No spam. No ads. Only great content.
                    </p>
                  </form>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSingle;
