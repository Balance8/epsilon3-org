import { Story, Meta } from '@storybook/react';
import { FeaturedPosts, FeaturedPostsProps } from './featured-posts';

export default {
  component: FeaturedPosts,
  title: 'FeaturedPosts',
} as Meta;

const Template: Story<FeaturedPostsProps> = (args) => (
  <FeaturedPosts {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
