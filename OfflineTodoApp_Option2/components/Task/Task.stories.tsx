import React from 'react';
import { ComponentStory, ComponentMeta, StoryObj } from '@storybook/react-native';
import Task from './Task';

const MyTaskMeta: ComponentMeta<typeof Task> = {
    title: 'Task Stories',
    component: Task,
    args: {
        task: {
            text: 'My first Task',
        },
    },
};

export default MyTaskMeta;

type MyTaskStory = ComponentStory<typeof Task>;
type TaskObj = StoryObj<typeof Task>;

export const Basic: MyTaskStory = (args) => <Task {...args} />;
export const LongTask: TaskObj = {
    args: {
        task: {
            text: 'SUPER DUPER LONG TASK SUPER DUPER LONG TASK SUPER DUPER LONG TASK SUPER DUPER LONG TASK',
        },
    },
};
export const EmptyTask: TaskObj = {
    args: {
        task: {
            Text: '',
        },
    },
};
