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
          headerShown: false,
          title: 'Groups',
        }}
      />
    </Stack>
  );
}
