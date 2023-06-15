import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TaskCategory, TaskType } from '../../components/Task/Task';
import { RootState } from '../../app/store';

interface TasksState {
    tasks: TaskType[];
}

const initialState: TasksState = {
    tasks: [
        {
            taskCategory: 'PERSONAL',
            text: 'Initial task',
        },
    ],
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const taskItems = state.tasks;
            const newTaskText = action.payload;
            let newTaskCategory: TaskCategory;

            if (taskItems.length === 0) newTaskCategory = 'PERSONAL';
            else {
                newTaskCategory =
                    taskItems.at(-1)?.taskCategory === 'PERSONAL' ? 'WORK' : 'PERSONAL';
            }

            const newTask: TaskType = {
                text: newTaskText,
                taskCategory: newTaskCategory,
            };
            state.tasks.push(newTask);
        },
    },
});

export const { addTask } = tasksSlice.actions;
export const selectTasks = (state: RootState) => state.tasks.tasks;
export default tasksSlice.reducer;
