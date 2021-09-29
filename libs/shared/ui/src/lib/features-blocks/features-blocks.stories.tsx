import { Story, Meta } from '@storybook/react';
import { FeaturesBlocks, FeaturesBlocksProps } from './features-blocks';

export default {
  component: FeaturesBlocks,
  title: 'FeaturesBlocks',
} as Meta;

const Template: Story<FeaturesBlocksProps> = (args) => (
  <FeaturesBlocks {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
