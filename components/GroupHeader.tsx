import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GroupHeader = () => {
  return (
    <View className='flex flex-row justify-between w-full px-3'>
      <Text className='text-lg font-bold'>Expenses</Text>
      <View>
        <Text className='text-lg font-bold'>Sort by</Text>
      </View>
    </View>
  );
};

export default GroupHeader;

const styles = StyleSheet.create({});
