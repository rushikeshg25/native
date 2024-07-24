import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='setting' options={{ title: 'Setting' }} />
      <Stack.Screen name='addExpense' options={{ title: 'Add Expense' }} />
      <Stack.Screen name='scan' options={{ title: 'Scan' }} />
    </Stack>
  );
}