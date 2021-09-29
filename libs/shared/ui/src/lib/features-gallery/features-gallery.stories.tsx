import { Story, Meta } from '@storybook/react';
import { FeaturesGallery, FeaturesGalleryProps } from './features-gallery';

export default {
  component: FeaturesGallery,
  title: 'FeaturesGallery',
} as Meta;

const Template: Story<FeaturesGalleryProps> = (args) => (
  <FeaturesGallery {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
