import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import Group from "@/components/Groups/Group";
import Avatar from "@/components/Avatar";
import { GroupData } from "@/utils/GroupData";

export default function App() {
  return (
    <View className='flex flex-col h-screen bg-black justify-center px-6 '>
      <View className='flex flex-row justify-between w-full'>
        <View className='mb-10'>
          <Text className='text-white text-5xl font-bold'>Groups</Text>
          <Text className='text-white font-semibold'>
            Overall, you are owed ₹2,300
          </Text>
        </View>
        <View className='flex items-center justify-center mb-10'>
          <Avatar />
        </View>
      </View>
      <View className='flex flex-col w-full gap-5'>
        {GroupData.map((group, i) => (
          <View key={i} className=' w-full'>
            <Group
              key={i}
              name={group.name}
              members={group.members}
              owe={group.owe}
            />
          </View>
        ))}
      </View>
      <StatusBar style='auto' />
    </View>
  );
}
