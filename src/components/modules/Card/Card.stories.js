import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';

export default {
  title: 'Modules/Card',
  component: Card,
  args: {
    imageSrc: 'https://picsum.photos/1280/768',
    title: 'This is the title',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

export const WithLink = Template.bind({});
WithLink.args = {
  to: '/some-route.html',
};
