import React from 'react';
import { View } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Button, Card, Text, useTheme } from 'react-native-paper';
import { GroupData } from '@/utils/GroupData';

const Group = () => {
  const { groupId } = useLocalSearchParams();
  const group = GroupData.find((g) => g.id === groupId);
  const { dark } = useTheme();
  const navigation = useNavigation();
  return (
    <View className='flex flex-col h-full '>
      <Button
        className='flex flex-row items-center justify-start w-full'
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons
          name='arrow-back-ios-new'
          size={24}
          color={dark ? 'white' : 'black'}
        />
        <Text className='text-lg'>Groups</Text>
      </Button>
      <View className='flex flex-row items-center justify-between px-5 py-3'>
        <Text className='text-3xl font-extrabold'>{group?.name}</Text>
        <Text className='text-lg'>Edit</Text>
      </View>
      <View className='flex flex-row gap-1 px-2 py-3'>
        <Button mode='outlined' className='rounded-xl'>
          Settle Up
        </Button>
        <Button mode='outlined' className='rounded-xl'>
          Charts
        </Button>
        <Button mode='outlined' className='rounded-xl'>
          Remind
        </Button>
        <Button mode='outlined' className='rounded-xl'>
          Export
        </Button>
      </View>
      <Card className='flex-grow '>
        <Card.Content>
          <Text>Card Content</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Group;
