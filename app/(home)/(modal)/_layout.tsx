import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='addExpense' options={{ title: 'Add Expense' }} />
    </Stack>
  );
}
