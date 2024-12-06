// tasksSlice.test.ts
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer, { addTask, deleteTask, updateTask, toggleTaskCompletion, updateTaskTitle, setTasks, TasksState } from './tasksSlice';
import { TaskType } from '../../types/type';

describe('tasksSlice', () => {
    let store: any;

    beforeEach(() => {
        store = configureStore({ reducer: { tasks: tasksReducer } });
    });

    it('should return the initial state', () => {
        const state = store.getState().tasks;
        expect(state).toEqual([]);
    });

    it('should add a task', () => {
        const newTask: Omit<TaskType, 'id' | 'isDone'> = { title: 'New Task', date: '2023-10-01' };
        store.dispatch(addTask(newTask));
        const state = store.getState().tasks;
        expect(state.length).toBe(1);
        expect(state[0]).toMatchObject({ title: 'New Task', isDone: false, date: '2023-10-01' });
    });

    it('should delete a task', () => {
        store.dispatch(addTask({ title: 'Task to delete', date: '2023-10-01' }));
        const stateBeforeDelete = store.getState().tasks;
        const taskToDeleteId = stateBeforeDelete[0].id;

        store.dispatch(deleteTask(taskToDeleteId));

        const stateAfterDelete = store.getState().tasks;
        expect(stateAfterDelete).toHaveLength(0);
    });

    it('should update a task', () => {
        store.dispatch(addTask({ title: 'Task to update', date: '2023-10-01' }));
        const stateBeforeUpdate = store.getState().tasks;
        const taskToUpdateId = stateBeforeUpdate[0].id;

        store.dispatch(updateTask({ ...stateBeforeUpdate[0], title: 'Updated Task' }));

        const stateAfterUpdate = store.getState().tasks;
        expect(stateAfterUpdate[0].title).toBe('Updated Task');
    });

    it('should toggle task completion', () => {
        store.dispatch(addTask({ title: 'Task to toggle', date: '2023-10-01' }));
        const stateBeforeToggle = store.getState().tasks;
        const taskToToggleId = stateBeforeToggle[0].id;

        store.dispatch(toggleTaskCompletion(taskToToggleId));

        const stateAfterToggle = store.getState().tasks;
        expect(stateAfterToggle[0].isDone).toBe(true); // Проверяем, что задача теперь выполнена

        store.dispatch(toggleTaskCompletion(taskToToggleId));
        const stateAfterSecondToggle = store.getState().tasks;
        expect(stateAfterSecondToggle[0].isDone).toBe(false); // Проверяем, что задача снова не выполнена
    });

    it('should update task title', () => {
        store.dispatch(addTask({ title: 'Initial Title', date: '2023-10-01' }));
        const stateBeforeUpdateTitle = store.getState().tasks;
        const taskToUpdateId = stateBeforeUpdateTitle[0].id;

        store.dispatch(updateTaskTitle({ id: taskToUpdateId, newTitle: 'New Title' }));

        const stateAfterUpdateTitle = store.getState().tasks;
        expect(stateAfterUpdateTitle[0].title).toBe('New Title');
    });

    it('should set tasks', () => {
        const tasks: TasksState = [
            { id: '1', title: 'Task 1', isDone: false, date: '2023-10-01' },
            { id: '2', title: 'Task 2', isDone: true, date: '2023-10-02' }
        ];
        store.dispatch(setTasks(tasks));

        const state = store.getState().tasks;
        expect(state).toEqual(tasks);
    });
});