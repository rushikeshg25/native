import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { Button, Text } from 'react-native-paper';
import GroupCard from '@/components/Groups/GroupCard';
import Avatar from '@/components/Avatar';
import { useNavigation } from 'expo-router';
import { GroupData } from '@/utils/GroupData';
import PageWrapperView from '@/components/PageWrapperView';
import ScrollableCard from '@/components/ScrollableCard';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

const owed = 2300;
const owned = 1000;
const HEIGHT = 150;
const MIN_HEIGHT = 120;
const MAX_HEIGHT = 180;
const SCROLL_DISTANCE = MAX_HEIGHT - MIN_HEIGHT;
const { width } = Dimensions.get('window');

export default function App() {
  const navigation = useNavigation();
  const toggleInactiveGroups = () => {};
  const [currecy, setCurrency] = useState<string>('₹');
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const topAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEIGHT, 0, HEIGHT],
            [-HEIGHT / 2, 0, HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEIGHT, 0, HEIGHT],
            [2, 1, 1],
          ),
        },
      ],
    };
  });

  return (
    <PageWrapperView isHeaderShown={true} classname='px-0'>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          className='flex flex-col justify-between px-3 pt-3'
          style={[styles.animatedContainer, topAnimatedStyle]}
        >
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
        </Animated.View>
        <ScrollableCard classname='px-3 pt-3 dark:bg-purple-dark bg-purple-light'>
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
      </Animated.ScrollView>
    </PageWrapperView>
  );
}

const styles = StyleSheet.create({
  animatedContainer: {
    width: width,
    height: HEIGHT,
  },
});
