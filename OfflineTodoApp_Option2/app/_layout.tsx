import { Stack } from 'expo-router';
import Constants from 'expo-constants';

const Layout = () => {
    return <Stack />;
};

let AppEntryPoint = Layout;

const disableStorybook: boolean =
    Constants.expoConfig?.extra?.storybookEnabled === 'true';

if (disableStorybook) {
    AppEntryPoint = require('../.ondevice').default;
}

export default AppEntryPoint;
