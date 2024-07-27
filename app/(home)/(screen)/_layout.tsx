import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='setting' options={{ title: 'Setting' }} />
      <Stack.Screen
        name='addExpense/index'
        options={{ title: 'Add expense' }}
      />
      <Stack.Screen
        name='addExpense/adjustSplit'
        options={{ title: 'Adjust split' }}
      />
      <Stack.Screen name='scan' options={{ title: 'Scan' }} />
    </Stack>
  );
}
