import { Stack } from 'expo-router';
import Constants from 'expo-constants';

const RootLayout = () => {
    <Stack />;
};

let AppEntryPoint = RootLayout;
const enableStorybook: boolean = Constants.expoConfig?.extra?.storybookEnabled === 'true';

if (enableStorybook) {
    AppEntryPoint = require('../.ondevice').default;
}

export default AppEntryPoint;
