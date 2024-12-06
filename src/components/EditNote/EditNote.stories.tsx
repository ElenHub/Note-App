import React from 'react';
import EditNote from './EditNote';

export default {
  title: 'Components/EditNote',
  component: EditNote,
};

const Template = (args) => <EditNote {...args} />;

export const Default = Template.bind({});
Default.args = {
  note: {
    id: '1',
    title: 'Sample Note',
    details: 'This is a sample note for editing.',
    date: '2023-01-01',
  },
  onSave: (note) => alert(`Note updated: ${JSON.stringify(note)}`),
};