import React from 'react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'My Notes',
  onAddNote: () => alert('Add note clicked!'),
};