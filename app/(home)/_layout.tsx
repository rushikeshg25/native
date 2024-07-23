import { JsStack } from '@/utils/JsStack';
import { Stack } from 'expo-router';
import { TransitionPresets } from '@react-navigation/stack';

export default function Layout() {
  return (
    <JsStack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(setting)' />
      <JsStack.Screen
        name='(modal)'
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          presentation: 'modal',
          gestureEnabled: true,
        }}
      />
    </JsStack>
  );
}
