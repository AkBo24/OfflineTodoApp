import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

export default function Home() {
    return (
        <Provider store={store}>
            <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
                <View style={{ flex: 1 }}>
                    {/* Use the `Screen` component to configure the layout. */}
                    <Stack.Screen options={{ title: 'Home' }} />

                    <HomeScreen />
                </View>
            </PersistGate>
        </Provider>
    );
}
