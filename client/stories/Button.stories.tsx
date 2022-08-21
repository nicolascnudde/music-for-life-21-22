import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonLink } from '../src/components/buttons/Buttons';

const meta: Meta = {
  title: 'Components/Button', // the title for the section in storybook
  component: Button, // the import component
  argTypes: {
    type: {
      defaultValue: 'primary',
    },
    title: {
      defaultValue: 'DONATE',
    },
    url: {
      defaultValue: '/',
    },
  },
};

export default meta;

const Template: Story<ButtonLink> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});

Secondary.args = {
  type: 'secondary',
  title: 'SVG',
  url: '/',
};
Tertiary.args = {
  type: 'tertiary',
  title: 'PNG',
  url: '/',
};
