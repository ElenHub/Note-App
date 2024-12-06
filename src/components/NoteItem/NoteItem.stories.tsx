import React from 'react';
import NoteItem from './NoteItem';
import { NoteItemProps } from '../types/type';

export default {
  title: 'Components/NoteItem',
  component: NoteItem,
};

const Template = (args: NoteItemProps) => <NoteItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  note: {
    id: '1',
    title: 'Sample Note',
    details: 'This is a sample note.',
    date: '2023-10-01',
    color: '#ffffff',
  },
};
