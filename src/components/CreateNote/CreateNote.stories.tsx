import React from 'react';
import CreateNote from './CreateNote';

export default {
  title: 'Components/CreateNote',
  component: CreateNote,
};

const Template = (args) => <CreateNote {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSave: (note) => alert(`Note saved: ${JSON.stringify(note)}`),
};