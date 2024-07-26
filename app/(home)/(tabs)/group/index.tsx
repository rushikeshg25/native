import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import GroupCard from '@/components/Groups/GroupCard';
import Avatar from '@/components/Avatar';
import { useNavigation } from 'expo-router';
import { GroupData } from '@/utils/GroupData';
import PageWrapperView from '@/components/PageWrapperView';
import ScrollableCard from '@/components/ScrollableCard';

const owed = 2300;
const owned = 1000;

export default function App() {
  const navigation = useNavigation();
  const toggleInactiveGroups = () => {};
  const [currecy, setCurrency] = useState<string>('₹');

  return (
    <PageWrapperView isHeaderShown={true} classname='px-0'>
      <ScrollView className=''>
        <View className='flex flex-col justify-between w-full px-3 pt-3'>
          <View className='flex flex-row justify-between w-full px-3'>
            <View className='flex flex-col'>
              <Text className='-mb-1 text-lg font-semibold'>
                You owe{' '}
                <Text className='text-lg font-bold text-red-400'>{`${currecy}${owed} `}</Text>
              </Text>
              <Text className='-mt-1 text-lg font-semibold'>
                and you are owned{' '}
                <Text className='text-lg font-bold text-green-400'>{`${currecy}${owned} `}</Text>
              </Text>
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
          <View className='pb-6'>
            <Button mode='contained'>Scan</Button>
          </View>
        </View>
        <ScrollableCard classname='px-3 pt-3 border border-red-400 dark:bg-purple-dark bg-purple-light'>
          <View className='flex flex-col w-full gap-3'>
            {GroupData.map((group, i) => (
              <View key={i} className='w-full'>
                <GroupCard
                  id={group.id as string}
                  key={i}
                  name={group.name}
                  members={group.members}
                  owe={group.owe}
                />
              </View>
            ))}
            <View className='flex flex-row items-center justify-center w-full'>
              <Button
                className='flex flex-row items-center justify-center w-2/4 rounded-xl'
                mode='outlined'
                onPress={toggleInactiveGroups}
              >
                Show Inactive Groups
              </Button>
            </View>
          </View>
        </ScrollableCard>
        <StatusBar style='auto' />
      </ScrollView>
    </PageWrapperView>
  );
}
