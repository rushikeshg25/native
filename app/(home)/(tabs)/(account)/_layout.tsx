import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='account' options={{ title: 'Account' }} />
      <Stack.Screen name='setting' options={{ title: 'Setting' }} />
    </Stack>
  );
}
