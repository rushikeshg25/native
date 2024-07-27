import React, { useState } from 'react';
import { View } from 'react-native';
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router';
import { Button, Card, Text, Menu } from 'react-native-paper';
import { GroupData } from '@/utils/GroupData';
import DayExpenseCard from '@/components/Groups/DayExpenseCard';
import GroupHeader from '@/components/Header';

const Group = () => {
  const { groupId } = useLocalSearchParams();
  const group = GroupData.find((g) => g.id === groupId);
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => <GroupHeader page='group' />,
          title: 'group',
        }}
      />
      <View className='flex flex-col h-full '>
        <View className='flex flex-row items-center justify-between px-5 py-3'>
          <Text className='text-3xl font-extrabold'>{group?.name}</Text>
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
          <Card.Content className='flex flex-col gap-2 px-5 py-3'>
            <View className='flex flex-row items-center justify-between'>
              <Text className='text-lg font-bold'>Expenses</Text>
              <View>
                <Menu
                  visible={visible}
                  onDismiss={closeMenu}
                  anchor={<Button onPress={openMenu}>Sort by</Button>}
                >
                  <Menu.Item onPress={() => {}} title='Last Modified' />
                  <Menu.Item onPress={() => {}} title='Oldest First' />
                  <Menu.Item onPress={() => {}} title='Newest First' />
                </Menu>
              </View>
            </View>
            <DayExpenseCard />
          </Card.Content>
        </Card>
      </View>
    </>
  );
};

export default Group;
