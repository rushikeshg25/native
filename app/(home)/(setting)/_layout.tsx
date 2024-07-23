import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='setting' options={{ title: 'Setting' }} />
    </Stack>
  );
}
