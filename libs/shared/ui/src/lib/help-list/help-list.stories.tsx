import { Story, Meta } from '@storybook/react';
import { HelpList, HelpListProps } from './help-list';

export default {
  component: HelpList,
  title: 'HelpList',
} as Meta;

const Template: Story<HelpListProps> = (args) => <HelpList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
