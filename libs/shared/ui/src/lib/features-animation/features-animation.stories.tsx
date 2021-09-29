import { Story, Meta } from '@storybook/react';
import {
  FeaturesAnimation,
  FeaturesAnimationProps,
} from './features-animation';

export default {
  component: FeaturesAnimation,
  title: 'FeaturesAnimation',
} as Meta;

const Template: Story<FeaturesAnimationProps> = (args) => (
  <FeaturesAnimation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
