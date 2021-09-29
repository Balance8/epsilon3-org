import { Story, Meta } from '@storybook/react';
import { PricingTables, PricingTablesProps } from './pricing-tables';

export default {
  component: PricingTables,
  title: 'PricingTables',
} as Meta;

const Template: Story<PricingTablesProps> = (args) => (
  <PricingTables {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
