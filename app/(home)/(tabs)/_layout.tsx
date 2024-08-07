import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Avatar from '@/components/Avatar';
import FloatingButton from '@/components/FloatingAddExpense';
import { useFloatingButtonVisiblity } from '@/hooks/useFloatingButtonVisiblity';
import Header from '@/components/Header';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

export default function TabLayout() {
  const { isVisible } = useFloatingButtonVisiblity();

  return (
    <>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name='group'
          options={{
            headerTitle: () => <Header page='groups' />,
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <FontAwesome6 name='user-group' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='friends'
          options={{
            title: 'Friends',
            tabBarIcon: ({ size, color }) => (
              <Ionicons name='person' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='activity'
          options={{
            title: 'Activity',
            tabBarIcon: ({ size, color }) => (
              <Feather name='activity' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='(account)'
          options={{
            headerShown: false,
            title: 'Account',
            tabBarIcon: ({ color, size }) => (
              <Avatar
                source={{
                  uri: 'https://userpic.codeforces.org/2074766/title/7c6bd92a5d4bdad.jpg',
                }}
                size={size}
                style={{ borderColor: color, borderWidth: 1 }}
              />
            ),
          }}
        />
      </Tabs>
      {isVisible && <FloatingButton />}
    </>
  );
}
