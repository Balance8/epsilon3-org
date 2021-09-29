import { Story, Meta } from '@storybook/react';
import { HeroHelp, HeroHelpProps } from './hero-help';

export default {
  component: HeroHelp,
  title: 'HeroHelp',
} as Meta;

const Template: Story<HeroHelpProps> = (args) => <HeroHelp {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
