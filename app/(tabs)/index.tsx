import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import Group from '@/components/Groups/Group';
import Avatar from '@/components/Avatar';
import { GroupData } from '@/utils/GroupData';

export default function App() {
  return (
    <ScrollView>
      <View className='flex flex-row justify-between w-full'>
        <View className='mb-10'>
          <Text className='text-5xl font-bold'>Groups</Text>
          <Text className='font-semibold'>Overall, you are owed ₹2,300</Text>
        </View>
        <View className='flex items-center justify-center mb-10'>
          <Avatar
            source={{
              uri: 'https://userpic.codeforces.org/2074766/title/7c6bd92a5d4bdad.jpg',
            }}
            size={40}
          />
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
    </ScrollView>
  );
}
