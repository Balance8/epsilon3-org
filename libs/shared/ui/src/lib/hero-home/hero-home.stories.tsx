import { Story, Meta } from '@storybook/react';
import { HeroHome, HeroHomeProps } from './hero-home';

export default {
  component: HeroHome,
  title: 'HeroHome',
} as Meta;

const Template: Story<HeroHomeProps> = (args) => <HeroHome {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
