import { Slot } from 'expo-router';
import Constants from 'expo-constants';

const RootLayout = () => {
    return <Slot />;
};

let AppEntryPoint = RootLayout;
const enableStorybook: boolean = Constants.expoConfig?.extra?.storybookEnabled === 'true';

if (enableStorybook) {
    AppEntryPoint = require('../.ondevice').default;
}

export default AppEntryPoint;
