import { Story, Meta } from '@storybook/react';
import { Career, CareerProps } from './career';

export default {
  component: Career,
  title: 'Career',
} as Meta;

const Template: Story<CareerProps> = (args) => <Career {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
