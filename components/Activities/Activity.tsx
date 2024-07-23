import React from 'react';
import { FlatList, View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { ActivityData } from '@/utils/ActivityData';

function Activity() {
  return (
    <FlatList
      data={ActivityData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className='mb-6 w-full'>
          <View className='flex flex-row flex-start'>
            <Image source={{ uri: item.image }} className='w-12 h-12 mr-4' />
            <View className='flex flex-col flex-1'>
              <Text className='text-white text-l flex-wrap'>
                {item.activity}
              </Text>
              <Text
                className={`text-xl ${
                  item.summary === ' owe ' ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {item.summary}
              </Text>
              <Text className='text-gray-400 text-sm'>{item.date}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

export default Activity;