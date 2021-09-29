import { Story, Meta } from '@storybook/react';
import { RelatedLinks, RelatedLinksProps } from './related-links';

export default {
  component: RelatedLinks,
  title: 'RelatedLinks',
} as Meta;

const Template: Story<RelatedLinksProps> = (args) => <RelatedLinks {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
