// import React from 'react';
// import EditableSpan from './EditableSpan'; // Путь к вашему компоненту

// export default {
//     title: 'Example/EditableSpan', // Название вашей истории
//     component: EditableSpan, // Компонент, который мы тестируем
// };

// const Template = (args) => <EditableSpan {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//     title: 'Double click to edit me!',
//     onChange: (newTitle) => console.log('New Title:', newTitle),
// };

// export const EmptyTitle = Template.bind({});
// EmptyTitle.args = {
//     title: '',
//     onChange: (newTitle) => console.log('New Title:', newTitle),
// };

import React from 'react';
import EditableSpan from './EditableSpan'; 
import { action } from "@storybook/addon-actions";


export default {
    title: 'EditableSpan Component',
    component: EditableSpan,
  };

  const changeTodoListTitleCallback = action('title changed');

export const EditableSpanBaseExample = () => {
    return  <EditableSpan title={"Double click to edit me!"} onChange={changeTodoListTitleCallback}/>
};