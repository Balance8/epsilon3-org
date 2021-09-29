import { Story, Meta } from '@storybook/react';
import { Timeline, TimelineProps } from './timeline';

export default {
  component: Timeline,
  title: 'Timeline',
} as Meta;

const Template: Story<TimelineProps> = (args) => <Timeline {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
