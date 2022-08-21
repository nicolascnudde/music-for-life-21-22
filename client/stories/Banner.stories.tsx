/**
 * Storybook for the Banner component
 */
// Imports
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Banner, { BannerProps } from '../src/components/banner/Banner';
import { theme } from '../src/styles/theme';

// Meta
const meta: Meta = {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {
    color: {
      defaultValue: theme.colors.dark,
    },
    image: {
      defaultValue: 'image-4.jpg',
    },
    title: {
      defaultValue: 'Title',
    },
    url: {
      defaultValue: '/',
    },
  },
};

// Stories
const Template: Story<BannerProps> = (args) => <Banner {...args} />;

const Default = Template.bind({});
const Green = Template.bind({});
const Pink = Template.bind({});
const Blue = Template.bind({});

Green.args = {
  color: theme.colors.green,
  image: 'image-4.jpg',
  title: 'Services',
  url: '/services',
};

Pink.args = {
  color: theme.colors.pink,
  image: 'image-5.jpg',
  title: 'About',
  url: '/about',
};

Blue.args = {
  color: theme.colors.blue,
  image: 'image-6.jpg',
  title: 'Contact',
  url: '/contact',
};

// Exports
export default meta;
export { Default, Green, Pink, Blue };
