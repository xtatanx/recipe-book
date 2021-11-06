import React from 'react';
import Spacer from './Spacer';
import Text from '../Text';

export default {
  title: 'Elements/Spacer',
  component: Spacer,
};

const Template = (args) => {
  return (
    <>
      <Text>upper text</Text>
      <Spacer {...args}></Spacer>
      <Text>bottom text</Text>
    </>
  );
};

export const Default = Template.bind({});

export const WithSpace1 = Template.bind({});
WithSpace1.args = {
  y: 1,
};

export const WithSpace2 = Template.bind({});
WithSpace2.args = {
  y: 2,
};

export const WithSpace3 = Template.bind({});
WithSpace3.args = {
  y: 3,
};

export const WithSpace4 = Template.bind({});
WithSpace4.args = {
  y: 4,
};

export const WithSpace5 = Template.bind({});
WithSpace5.args = {
  y: 5,
};

export const WithSpace6 = Template.bind({});
WithSpace6.args = {
  y: 6,
};

export const WithSpace7 = Template.bind({});
WithSpace7.args = {
  y: 7,
};

export const WithSpace8 = Template.bind({});
WithSpace8.args = {
  y: 8,
};
