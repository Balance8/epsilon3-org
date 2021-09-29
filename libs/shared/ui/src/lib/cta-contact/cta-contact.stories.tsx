import { Story, Meta } from '@storybook/react';
import { CtaContact, CtaContactProps } from './cta-contact';

export default {
  component: CtaContact,
  title: 'CtaContact',
} as Meta;

const Template: Story<CtaContactProps> = (args) => <CtaContact {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
