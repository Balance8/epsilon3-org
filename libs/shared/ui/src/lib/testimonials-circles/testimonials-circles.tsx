import { useState } from 'react';
import './testimonials-circles.module.css';

import Image from 'next/image';

import UserOne from '../assets/user-1.jpg';
import UserTwo from '../assets/user-2.jpg';
import UserThree from '../assets/user-3.jpg';
import UserFour from '../assets/user-4.jpg';
import UserFive from '../assets/user-5.jpg';
import UserSix from '../assets/user-6.jpg';
import UserSeven from '../assets/user-7.jpg';
import UserEight from '../assets/user-8.jpg';
import UserNine from '../assets/user-9.jpg';
import UserTen from '../assets/user-10.jpg';
import UserEleven from '../assets/user-11.jpg';
import UserTwelve from '../assets/user-12.jpg';
import UserThirteen from '../assets/user-13.jpg';
import UserFourteen from '../assets/user-14.jpg';
import UserFifteen from '../assets/user-15.jpg';
import UserSixteen from '../assets/user-16.jpg';
import UserSeventeen from '../assets/user-17.jpg';
import UserEighteen from '../assets/user-18.jpg';
import UserNineteen from '../assets/user-19.jpg';
import UserTwenty from '../assets/user-20.jpg';

/* eslint-disable-next-line */
export interface TestimonialsCirclesProps {}

export function TestimonialsCircles(props: TestimonialsCirclesProps) {
  const [commentOn, setCommentOn] = useState(false);
  const [active, setActive] = useState(0);
  const [items] = useState([
    {
      // user-1.jpg
      size: '48', // image width / height
      style: { maxWidth: '7.08%', top: '29%', left: '2%' }, // image absolute  positioning
      comment:
        'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. 🙌', // comment to be displayed on hover,
      name: 'Elian Whitney',
      src: UserOne,
    },
    {
      // user-2.jpg
      size: '36',
      style: { maxWidth: '5.31%', top: '60%', left: '2%' },
      comment:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Justice Porter',
      src: UserTwo,
    },
    {
      // user-3.jpg
      size: '72',
      style: { maxWidth: '10.62%', top: '43%', left: '13%' },
      comment:
        'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream.',
      name: 'Leonel Roy',
      src: UserThree,
    },
    {
      // user-4.jpg
      size: '56',
      style: { maxWidth: '8.26%', top: '75%', left: '14%' },
      comment:
        'O my friend -- but it is too much for my strength -- I sink under the weight of the splendour.',
      name: 'Daniel Wolf',
      src: UserFour,
    },
    {
      // user-5.jpg
      size: '64',
      style: { maxWidth: '9.44%', top: '11%', left: '15%' },
      comment:
        'I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
      name: 'Seamus Miranda',
      src: UserFive,
    },
    {
      // user-6.jpg
      size: '80',
      style: { maxWidth: '11.8%', top: '32%', left: '30%' },
      comment:
        'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.',
      name: 'Fiona Schultz',
      src: UserSix,
    },
    {
      // user-7.jpg
      size: '50',
      style: { maxWidth: '7.37%', top: '65%', left: '30%' },
      comment:
        'I should be incapable of drawing a single stroke at the present moment.',
      name: 'Monica Evans',
      src: UserSeven,
    },
    {
      // user-8.jpg
      size: '36',
      style: { maxWidth: '5.31%', top: '6%', left: '33%' },
      comment: 'I feel that I never was a greater artist than now.',
      name: 'Jakayla Dunlap',
      src: UserEight,
    },
    {
      // user-9.jpg
      size: '44',
      style: { maxWidth: '6.49%', top: '77%', left: '44%' },
      comment:
        'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.',
      name: 'Mattie Sharp',
      src: UserNine,
    },
    {
      // user-10.jpg
      size: '64',
      style: { maxWidth: '9.44%', top: '48%', left: '46%' },
      comment:
        'I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.',
      name: 'Jazmyn Gaines',
      src: UserTen,
    },
    {
      // user-11.jpg
      size: '72',
      style: { maxWidth: '10.62%', top: '16%', left: '46%' },
      comment:
        'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.',
      name: 'Patrick Christensen',
      src: UserEleven,
    },
    {
      // user-12.jpg
      size: '64',
      style: { maxWidth: '9.44%', top: '65%', left: '58%' },
      comment:
        'His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.',
      name: 'Mike Johnson',
      src: UserTwelve,
    },
    {
      // user-13.jpg
      size: '80',
      style: { maxWidth: '11.8%', top: '32%', left: '62%' },
      comment:
        'His room, a proper human room although a little too small, lay peacefully between its four familiar walls.',
      name: 'Lyla Griffith',
      src: UserThirteen,
    },
    {
      // user-14.jpg
      size: '48',
      style: { maxWidth: '7.08%', top: '6%', left: '63%' },
      comment:
        'Drops of rain could be heard hitting the pane, which made him feel quite sad.',
      name: 'Damien Mclaughlin',
      src: UserFourteen,
    },
    {
      // user-15.jpg
      size: '24',
      style: { maxWidth: '3.54%', top: '93%', left: '65%' },
      comment:
        'He felt a slight itch up on his belly; pushed himself slowly up on his back towards the headboard so that he could lift his head better.',
      name: 'Perry Mason',
      src: UserFifteen,
    },
    {
      // user-16.jpg
      size: '36',
      style: { maxWidth: '5.31%', top: '86%', left: '76%' },
      comment:
        'For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts. I ought to just try that with my boss.',
      name: 'Briana Friedman',
      src: UserSixteen,
    },
    {
      // user-17.jpg
      size: '44',
      style: { maxWidth: '6.49%', top: '59%', left: '76%' },
      comment:
        'I would get kicked out on the spot.But who knows, maybe that would be the best thing for me.',
      name: 'Manuel Kirk',
      src: UserSeventeen,
    },
    {
      // user-18.jpg
      size: '72',
      style: { maxWidth: '10.62%', top: '14%', left: '78%' },
      comment:
        'And it is a funny sort of business to be sitting up there at your desk, talking down at your subordinates from up there.',
      name: 'Cedric Reynolds',
      src: UserEighteen,
    },
    {
      // user-19.jpg
      size: '64',
      style: { maxWidth: '9.44%', top: '40%', left: '89%' },
      comment: 'I ought to just try that with my boss.',
      name: 'Gracelyn Wilcox',
      src: UserNineteen,
    },
    {
      // user-20.jpg
      size: '24',
      style: { maxWidth: '3.54%', top: '74%', left: '91%' },
      comment:
        'It was half past six and the hands were quietly moving forwards, it was even later than half past.',
      name: 'Jamir Henson',
      src: UserTwenty,
    },
  ]);

  return (
    <section>
      <div className="max-w-3xl px-4 mx-auto sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="relative">
            {/* Background image */}
            <svg
              className="mx-auto"
              viewBox="0 0 678 346"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient
                  cx="50%"
                  cy="50%"
                  fx="50%"
                  fy="50%"
                  r="39.386%"
                  id="circle_b"
                >
                  <stop stopColor="#3ABAB4" offset="0%" />
                  <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                </radialGradient>
                <linearGradient
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="89.386%"
                  id="circle_a"
                >
                  <stop stopColor="#2E2E33" offset="0%" />
                  <stop stopColor="#2E2E33" stopOpacity="0" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <circle
                  className="opacity-10 dark:opacity-100"
                  fill="url(#circle_a)"
                  opacity=".32"
                  cx="339"
                  cy="173"
                  r="173"
                />
                <circle
                  fill="url(#circle_b)"
                  opacity=".32"
                  cx="339"
                  cy="173"
                  r="140"
                />
              </g>
            </svg>
            {/* People pics */}
            {items.map((item, index) => (
              <div
                className="absolute z-10 rounded-full animate-float"
                style={item.style}
              >
                <Image
                  key={index}
                  className="rounded-full "
                  src={item.src}
                  width={item.size}
                  height={item.size}
                  alt={`User ${index + 1}`}
                  onMouseEnter={() => {
                    setActive(index);
                    setCommentOn(true);
                  }}
                  onMouseLeave={() => setCommentOn(false)}
                />
              </div>
            ))}
            {/* Comment box */}
            <div
              className={`opacity-0 transition duration-150 ease-in-out absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 max-w-xs w-full p-3 bg-white dark:bg-gray-800 text-center shadow-2xl z-20 pointer-events-none ${
                commentOn && 'opacity-100'
              }`}
            >
              <div className="mb-1 text-gray-600 dark:text-gray-400">
                {items[active].comment}
              </div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-100">
                {items[active].name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCircles;
