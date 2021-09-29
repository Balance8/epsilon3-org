import { Story, Meta } from '@storybook/react';
import {
  TestimonialsBlocks,
  TestimonialsBlocksProps,
} from './testimonials-blocks';

export default {
  component: TestimonialsBlocks,
  title: 'TestimonialsBlocks',
} as Meta;

const Template: Story<TestimonialsBlocksProps> = (args) => (
  <TestimonialsBlocks {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
