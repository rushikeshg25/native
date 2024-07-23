import { View } from 'react-native';
import React from 'react';
import { Card, Text } from 'react-native-paper';
import { Image } from 'expo-image';

const DayExpenseCard = () => {
  return (
    <Card>
      <Card.Content className='flex flex-col gap-2'>
        <Text className='font-bold'>Today</Text>
        <ExpenseCard />
      </Card.Content>
    </Card>
  );
};

const ExpenseCard = () => {
  return (
    <View className='flex flex-row items-center justify-between w-full gap-2'>
      <View className='flex flex-row items-center gap-2'>
        <Image
          source={'https://picsum.photos/200'}
          className='w-10 h-10 rounded-full'
        />
        <View className='flex flex-col gap-1'>
          <Text className='font-bold'>Lunch</Text>
          <Text className='text-sm'>Bro paid Rs.2000</Text>
        </View>
      </View>

      <View className='flex flex-col gap-1'>
        <Text className='text-sm text-green-500'>You paid </Text>
        <Text className='text-lg text-green-500'>₹ 200</Text>
      </View>
    </View>
  );
};

export default DayExpenseCard;
