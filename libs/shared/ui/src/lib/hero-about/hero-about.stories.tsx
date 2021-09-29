import { Story, Meta } from '@storybook/react';
import { HeroAbout, HeroAboutProps } from './hero-about';

export default {
  component: HeroAbout,
  title: 'HeroAbout',
} as Meta;

const Template: Story<HeroAboutProps> = (args) => <HeroAbout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
