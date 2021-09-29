import { Story, Meta } from '@storybook/react';
import { Clients, ClientsProps } from './clients';

export default {
  component: Clients,
  title: 'Clients',
} as Meta;

const Template: Story<ClientsProps> = (args) => <Clients {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
