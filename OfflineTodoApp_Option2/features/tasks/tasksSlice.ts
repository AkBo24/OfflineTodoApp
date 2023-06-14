import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TaskType } from '../../components/Task/Task';
import { RootState } from '../../app/store';

interface TasksState {
    tasks: TaskType[];
}

const initialState: TasksState = {
    tasks: [],
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskType>) => {
            state.tasks.push(action.payload);
        },
    },
});

export const { addTask } = tasksSlice.actions;
export const selectTasks = (state: RootState) => state.tasks.tasks;
export default tasksSlice.reducer;
