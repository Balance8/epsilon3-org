import { Story, Meta } from '@storybook/react';
import { Team, TeamProps } from './team';

export default {
  component: Team,
  title: 'Team',
} as Meta;

const Template: Story<TeamProps> = (args) => <Team {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
