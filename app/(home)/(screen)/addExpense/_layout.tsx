import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Add expense' }} />
      <Stack.Screen name='adjustSplit' options={{ title: 'Adjust split' }} />
    </Stack>
  );
}
