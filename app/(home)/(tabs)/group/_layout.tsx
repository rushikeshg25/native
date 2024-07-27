import Header from '@/components/Header';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          headerTitle: () => <Header page='groups' />,
          headerShown: true,
          title: 'Groups',
        }}
      />
    </Stack>
  );
}
