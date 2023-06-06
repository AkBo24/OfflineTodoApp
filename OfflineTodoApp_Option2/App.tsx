import { useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Constants from 'expo-constants';
import Task, { TaskType } from './components/Task/Task';

function App() {
    const [newTaskText, setNewTaskText] = useState<string>('');
    const [taskItems, setTaskItems] = useState<TaskType[]>([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        const newTask: TaskType = {
            text: newTaskText,
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
                    {taskItems.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => completeTask(index)}>
                                <Task task={item} />
                            </TouchableOpacity>
                        );
                    })}
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
}

let AppEntryPoint = App;
const enableStorybook: boolean = Constants.expoConfig?.extra?.storybookEnabled === 'true';

if (enableStorybook) {
    AppEntryPoint = require('./.ondevice').default;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 80,
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

export default AppEntryPoint;
