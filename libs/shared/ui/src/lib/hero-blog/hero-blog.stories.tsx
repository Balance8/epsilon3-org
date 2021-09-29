import { Story, Meta } from '@storybook/react';
import { HeroBlog, HeroBlogProps } from './hero-blog';

export default {
  component: HeroBlog,
  title: 'HeroBlog',
} as Meta;

const Template: Story<HeroBlogProps> = (args) => <HeroBlog {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
