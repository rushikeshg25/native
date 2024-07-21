import { Tabs } from "expo-router";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import Avatar from "@/components/Avatar";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='groups'
        options={{
          title: "Groups",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6 name='user-group' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='friends'
        options={{
          title: "Friends",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name='person' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='activity'
        options={{
          title: "Activity",
          tabBarIcon: ({ color, focused }) => (
            <Feather name='activity' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='account'
        options={{
          title: "account",
          tabBarIcon: ({ color, focused }) => <Avatar />,
        }}
      />
    </Tabs>
  );
}
