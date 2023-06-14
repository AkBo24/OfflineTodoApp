import { Link } from 'expo-router';
import React from 'react';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { View, KeyboardAvoidingView, Platform, Text, StyleSheet } from 'react-native';
import Task, { TaskType } from '../../components/Task/Task';

type PersonalTasksScreenProps = {
    allTasks: TaskType[];
};

const WorkTasksScreen = () => {
    return (
        <View style={styles.container}>
            {/* Today's tasks */}
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Work Tasks</Text>

                <View style={styles.items}>
                    {/* {taskItems.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => completeTask(index)}>
                                <Task task={item} />
                            </TouchableOpacity>
                        );
                    })} */}
                </View>
            </View>

            {/* <Link href='/personalTasks'>Home</Link>
            <Link href='/workTasks'>Work Tasks</Link> */}

            {/* Write a task */}
            {/* <KeyboardAvoidingView
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
            </KeyboardAvoidingView> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
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
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        marginLeft: 10,
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default WorkTasksScreen;
