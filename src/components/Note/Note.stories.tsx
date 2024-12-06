import React from 'react';
import Note from './Note';

export default {
  title: 'Components/Note',
  component: Note,
};

const Template = (args) => <Note {...args} />;

export const Default = Template.bind({});
Default.args = {
  note: {
    title: 'Sample Note',
    details: 'This is a sample note to display.',
    date: '2023-01-01',
  },
};