import React from 'react';
import Text from './Text';

export default {
  title: 'Elements/Text',
  component: Text,
  args: {
    children: 'This is a sample text',
  },
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});

export const Headline = Template.bind({});
Headline.args = {
  size: 'headline',
};

export const Primary = Template.bind({});
Primary.args = {
  size: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'tertiary',
};

export const WithDifferentTag = Template.bind({});
WithDifferentTag.args = {
  size: 'headline',
  as: 'h2',
};
