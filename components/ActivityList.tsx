import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { ActivityData } from '@/utils/ActivityData';
import ScrollableCard from '@/components/ScrollableCard';

const ActivityList = () => {
  return (
    <ScrollableCard classname='p-2 mb-20 bg-white dark:bg-gray-800'>
      {ActivityData.map((group) => (
        <View key={group.dateId} className='mb-4'>
          <Text className='text-xl font-semibold '>
            {group.dateId.charAt(0).toUpperCase() + group.dateId.slice(1)}
          </Text>
          {group.activities.map((item) => (
            <View key={item.id} className='w-full mb-4 mt-2'>
              <View className='flex flex-row items-center flex-start'>
                <Image
                  source={{ uri: item.image }}
                  className='w-12 h-12 mr-4'
                />
                <View className='flex flex-col flex-1'>
                  <Text className='text-l'>{item.activity}</Text>
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
          ))}
        </View>
      ))}
    </ScrollableCard>
  );
};

export default ActivityList;
