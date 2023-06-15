import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';
import { useState } from 'react';
import Task, { TaskCategory, TaskType } from '../../components/Task/Task';
import { Link } from 'expo-router';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const HomeScreen = () => {
    const [newTaskText, setNewTaskText] = useState<string>('');
    const [taskItems, setTaskItems] = useState<TaskType[]>([]);

    const tasks = useAppSelector((state) => state.tasks.tasks);
    const dispatch = useAppDispatch();

    const handleAddTask = () => {
        Keyboard.dismiss();

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
        setTaskItems([...taskItems, newTask]);
        setNewTaskText('');
    };

    const completeTask = (index: any) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    };

    return (
        <View style={styles.container}>
            {/* Today's tasks */}
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Typescript Today's Tasks</Text>

                <View style={styles.items}>
                    {tasks.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => completeTask(index)}>
                                <Task task={item} />
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <View style={styles.linksContainer}>
                    <Link href='/personalTasks'>Personal Tasks</Link>
                    <Link href='/workTasks'>Work Tasks</Link>
                </View>
            </View>

            {/* Write a task */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTaskWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={'Write a task'}
                    value={newTaskText}
                    onChangeText={(text) => setNewTaskText(text)}
                />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tasksWrapper: {
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
});

export default HomeScreen;
