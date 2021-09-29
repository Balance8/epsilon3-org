import { Story, Meta } from '@storybook/react';
import { RelatedPosts, RelatedPostsProps } from './related-posts';

export default {
  component: RelatedPosts,
  title: 'RelatedPosts',
} as Meta;

const Template: Story<RelatedPostsProps> = (args) => <RelatedPosts {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
