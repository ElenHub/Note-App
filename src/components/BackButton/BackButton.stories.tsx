import React from 'react';
import {BackButton} from './BackButton';

export default {
  title: 'Components/BackButton',
  component: BackButton,
};

const Template = (args) => <BackButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Back',
  onClick: () => alert('Back button clicked!'),
};