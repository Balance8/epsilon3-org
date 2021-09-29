import { Story, Meta } from '@storybook/react';
import { PageIllustration, PageIllustrationProps } from './page-illustration';

export default {
  component: PageIllustration,
  title: 'PageIllustration',
} as Meta;

const Template: Story<PageIllustrationProps> = (args) => (
  <PageIllustration {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
