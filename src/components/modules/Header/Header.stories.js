import React from 'react';
import { MemoryRouter } from 'react-router';
import Header from './Header';

export default {
  title: 'Modules/Header',
  component: Header,
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
