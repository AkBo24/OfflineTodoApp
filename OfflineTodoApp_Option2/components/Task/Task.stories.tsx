import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
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

/**
 * type MyButtonStory = ComponentStory<typeof MyButton>;
 * export const Basic: MyButtonStory = (args) => <MyButton {...args} />;
 */

type MyTaskStory = ComponentStory<typeof Task>;
export const Basic: MyTaskStory = (args) => <Task {...args} />;
