import { Story, Meta } from '@storybook/react';
import {
  TestimonialsCarousel,
  TestimonialsCarouselProps,
} from './testimonials-carousel';

export default {
  component: TestimonialsCarousel,
  title: 'TestimonialsCarousel',
} as Meta;

const Template: Story<TestimonialsCarouselProps> = (args) => (
  <TestimonialsCarousel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
