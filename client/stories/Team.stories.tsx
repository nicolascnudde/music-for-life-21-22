import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Team } from '../src/components/team';
import { Members } from '../src/components/team/Team';
// import { global } from '../src/styles/theme';

// import Button, { BannerProps } from '../src/components/banner/Banner';

const meta: Meta = {
  title: 'Components/Team', // the title for the section in storybook
  component: Team, // the import component
  argTypes: {
    firstName: {
      defaultValue: 'firstname',
    },
    lastName: {
      defaultValue: 'lastname',
    },
    imageUrl: {
      defaultValue: 'nicolas.png',
    },
    bio: {
      defaultValue: 'A short bio about first name last name member',
    },
    linkedinUrl: {
      defaultValue: '/',
    },
    gitUrl: {
      defaultValue: '/',
    },
  },
};

export default meta;

const Template: Story<Members> = (args) => <Team {...args} />;
export const Default = Template.bind({});
export const Nicolas = Template.bind({});
export const Thabisa = Template.bind({});
export const Cagri = Template.bind({});

Nicolas.args = {
  firstName: 'Nicolas',
  lastName: 'Cnudde',
  imageUrl: 'nicolas.png',
  bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
  linkedinUrl: 'https://www.linkedin.com/in/nicolascnudde/',
  gitUrl: 'https://github.com/pgm-nicolascnudde',
};
Thabisa.args = {
  firstName: 'Thabisa',
  lastName: 'Dingani',
  imageUrl: 'thabisa.png',
  bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
  linkedinUrl: 'https://www.linkedin.com/in/thabisa-dingani-b173251b7/',
  gitUrl: 'https://github.com/pgm-thabisadingani',
};
Cagri.args = {
  firstName: 'Cagri',
  lastName: 'Avci',
  imageUrl: 'cagri.png',
  bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
  linkedinUrl: 'https://www.linkedin.com/in/cagricemavci/',
  gitUrl: 'https://github.com/pgm-cagravci',
};
