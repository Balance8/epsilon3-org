import { Story, Meta } from '@storybook/react';
import { VideoTestimonial, VideoTestimonialProps } from './video-testimonial';

export default {
  component: VideoTestimonial,
  title: 'VideoTestimonial',
} as Meta;

const Template: Story<VideoTestimonialProps> = (args) => (
  <VideoTestimonial {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
