import { Story, Meta } from '@storybook/react';
import { BlogList, BlogListProps } from './blog-list';

export default {
  component: BlogList,
  title: 'BlogList',
} as Meta;

const Template: Story<BlogListProps> = (args) => <BlogList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
