import { View } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';
import Activity from '@/components/Activities/Activity';

const activity = () => {
  return (
    <View className='flex flex-col h-screen px-3 py-2'>
      <View className='flex flex-row justify-between w-full mb-6'>
        <Text className='text-3xl font-bold'>Activity</Text>
      </View>
      <Activity />
    </View>
  );
};

export default activity;
