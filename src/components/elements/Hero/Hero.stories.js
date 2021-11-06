import React from 'react';
import Hero from './Hero';

export default {
  title: 'Elements/Hero',
  component: Hero,
  args: {
    imageSrc: 'https://picsum.photos/1280/768',
  },
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});

export const WithAltTag = Template.bind({});
WithAltTag.args = {
  imageAlt: 'This is a random image',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: (
    <h1
      style={{
        color: 'white',
        textShadow: '1px 1px 4px rgba(0,0,0, 0.2)',
        textAlign: 'center',
      }}
    >
      Centered children
    </h1>
  ),
};

export const WithMediumSize = Template.bind({});
WithMediumSize.args = {
  size: 'medium',
};
