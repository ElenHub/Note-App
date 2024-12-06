import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store/store.ts'
import { Story, Meta } from '@storybook/react';

const withReduxProvider = (Story: Story) => (
    <Provider store={store}>
        <Story />
    </Provider>
);

export const decorators = [withReduxProvider];