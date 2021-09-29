import { Story, Meta } from '@storybook/react';
import { HeroTestimonials, HeroTestimonialsProps } from './hero-testimonials';

export default {
  component: HeroTestimonials,
  title: 'HeroTestimonials',
} as Meta;

const Template: Story<HeroTestimonialsProps> = (args) => (
  <HeroTestimonials {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
