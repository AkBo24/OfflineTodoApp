import { View } from 'react-native';
import { Link, Stack } from 'expo-router';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            {/* Use the `Screen` component to configure the layout. */}
            <Stack.Screen options={{ title: 'Home' }} />

            <HomeScreen />
        </View>
    );
}
