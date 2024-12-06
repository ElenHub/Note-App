import React from 'react';
import ConfirmationDialog from './ConfirmationDialog';

export default {
  title: 'Components/ConfirmationDialog',
  component: ConfirmationDialog,
};

const Template = (args) => <ConfirmationDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  title: 'Confirm Action',
  message: 'Are you sure you want to proceed?',
  onConfirm: () => alert('Confirmed!'),
  onCancel: () => alert('Canceled!'),
};