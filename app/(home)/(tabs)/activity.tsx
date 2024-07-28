import PageWrapperView from '@/components/PageWrapperView';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import ScrollableCard from '@/components/ScrollableCard';
import ActivityList from '@/components/ActivityList';
import { SortButton } from '@/components/Button/SortButton';

const activity = () => {
  return (
    <PageWrapperView isHeaderShown={true} classname='flex-1'>
      <View className='flex flex-col px-3 py-2 '>
        <View className='flex flex-row justify-between items-center w-full mb-6'>
          <Text className='text-3xl font-bold'>Activity</Text>
          <View className='flex flex-row items-center'>
            <SortButton />
          </View>
        </View>
      </View>
      <ScrollableCard classname='px-3 pt-3 bg-white dark:bg-gray-800'>
        <View className='flex flex-row justify-between w-full px-3 mt-2 mb-4'>
          <View className='flex flex-col'>
            <Text className='-mb-1 text-lg font-semibold'>
              Overall,You owe{' '}
              <Text className='text-lg font-bold text-red-400'>Rs.5000</Text>
            </Text>
            <Text className='-mt-1 text-lg font-semibold'>
              and you are owned{' '}
              <Text className='text-lg font-bold text-green-400'>Rs.3000</Text>
            </Text>
          </View>
        </View>
        <ActivityList />
      </ScrollableCard>
    </PageWrapperView>
  );
};

export default activity;
