import { Image, View } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

export default function Account() {
  return (
    <View className='flex flex-col justify-center gap-3 p-2 px-6 my-3'>
      <View className='flex flex-row items-center justify-between '>
        <View className='flex flex-row items-center gap-5'>
          <View className='relative'>
            <Image
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1CFbzbCWlKp7bqG9CeXkvt9iYa8dwS4yYkg&s'
              className='w-20 h-20 rounded-full'
            />
            <View className='absolute flex items-center justify-center bg-white rounded-full h-7 aspect-square -bottom-1 -right-1'>
              <AntDesign name='camerao' size={22} color='black' />
            </View>
          </View>
          <View className='flex flex-col'>
            <Text className='text-xl font-light text-gray-200'>
              Rushikesh Ghotekar
            </Text>
            <Text className='text-sm font-light text-gray-400'>
              rushikesh@splitwise.com
            </Text>
          </View>
        </View>
        <View className='flex items-center justify-center'>
          <Feather name='edit-2' size={24} color='white' />
        </View>
      </View>
      <Divider className='-mb-3' />
      <View className='flex flex-row gap-4'>
        <Ionicons name='qr-code-outline' size={35} color='white' />
        <View className='flex items-center justify-center'>
          <Text className='text-lg font-light text-gray-200 '>Scan Code</Text>
        </View>
      </View>
      <Text className='-mb-3 font-light text-gray-200'>Preferences</Text>
      <View className='flex flex-row gap-4'>
        <AntDesign name='notification' size={35} color='white' />
        <View className='flex items-center justify-center'>
          <Text className='text-lg font-light text-gray-200 '>
            Push Notifications
          </Text>
        </View>
      </View>
      <View className='flex flex-row gap-4'>
        <Entypo name='lock' size={35} color='white' />
        <View className='flex items-center justify-center'>
          <Text className='text-lg font-light text-gray-200 '>Passcode</Text>
        </View>
      </View>
      <Text className='-mb-3 font-light text-gray-200 '>Feedback</Text>
      <View className='flex flex-row gap-4'>
        <AntDesign name='customerservice' size={35} color='white' />
        <View className='flex items-center justify-center'>
          <Text className='text-lg font-light text-gray-200 '>
            Contact Customer Support
          </Text>
        </View>
      </View>
      <View className='flex flex-row gap-4'>
        <AntDesign name='star' size={35} color='white' />
        <View className='flex items-center justify-center'>
          <Text className='text-lg font-light text-gray-200 '>
            Rate on App Store
          </Text>
        </View>
      </View>
      <Divider className='-mb-3' />
      <View className='flex flex-row gap-4'>
        <MaterialIcons name='logout' size={35} color='white' />
        <View className='flex items-center justify-center'>
          <Text className='text-lg font-light text-gray-200 '>Logout</Text>
        </View>
      </View>
    </View>
  );
}
