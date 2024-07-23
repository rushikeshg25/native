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
        <View className='w-full mb-6'>
          <View className='flex flex-row items-center flex-start'>
            <Image source={{ uri: item.image }} className='w-12 h-12 mr-4' />
            <View className='flex flex-col flex-1'>
              <Text className='flex-wrap text-white text-l'>
                {item.activity}
              </Text>
              <Text
                className={`text-xl ${
                  item.summary.includes('owe')
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {item.summary}
              </Text>
              <Text className='text-sm text-gray-400'>{item.date}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

export default Activity;
