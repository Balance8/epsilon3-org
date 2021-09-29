import { Story, Meta } from '@storybook/react';
import {
  TestimonialsCircles,
  TestimonialsCirclesProps,
} from './testimonials-circles';

export default {
  component: TestimonialsCircles,
  title: 'TestimonialsCircles',
} as Meta;

const Template: Story<TestimonialsCirclesProps> = (args) => (
  <TestimonialsCircles {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
