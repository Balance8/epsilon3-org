import { Story, Meta } from '@storybook/react';
import { Process, ProcessProps } from './process';

export default {
  component: Process,
  title: 'Process',
} as Meta;

const Template: Story<ProcessProps> = (args) => <Process {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
