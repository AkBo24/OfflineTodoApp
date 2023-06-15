import { View } from 'react-native';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

export default function Home() {
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                {/* Use the `Screen` component to configure the layout. */}
                <Stack.Screen options={{ title: 'Home' }} />

                <HomeScreen />
            </View>
        </Provider>
    );
}
