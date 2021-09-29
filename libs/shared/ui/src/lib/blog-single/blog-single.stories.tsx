import { Story, Meta } from '@storybook/react';
import { BlogSingle, BlogSingleProps } from './blog-single';

export default {
  component: BlogSingle,
  title: 'BlogSingle',
} as Meta;

const Template: Story<BlogSingleProps> = (args) => <BlogSingle {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
