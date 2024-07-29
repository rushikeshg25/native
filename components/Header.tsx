import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  page: 'groups' | 'friends' | 'activity' | 'account' | 'group';
}

const Header = ({ page }: Props) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const onLoadingQuery = () => {};
  const { dark } = useTheme();

  switch (page) {
    case 'groups':
      return (
        <SafeAreaView className='flex flex-row items-center justify-between w-full p-4 '>
          <Searchbar
            className='w-3/5 '
            style={{ height: 40 }}
            placeholder='Search'
            onChangeText={setSearchQuery}
            value={searchQuery}
            loading={loading}
            inputStyle={{
              minHeight: 0, // Add this
            }}
          />
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons
              name='qrcode-scan'
              size={24}
              color={dark ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push('/createGroup');
            }}
          >
            <AntDesign
              name='pluscircleo'
              size={24}
              color={dark ? 'white' : 'black'}
            />
          </TouchableOpacity>
          {/* // TODO: Add filter logic (Drawer) */}
          <TouchableOpacity onPress={() => {}}>
            <AntDesign
              name='filter'
              size={24}
              color={dark ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </SafeAreaView>
      );
    case 'friends':
      return (
        <View className='flex flex-row justify-between w-full px-3'></View>
      );
    case 'activity':
      return (
        <View className='flex flex-row justify-between w-full px-3'></View>
      );
    case 'account':
      return (
        <View className='flex flex-row justify-between w-full px-3'></View>
      );
    case 'group':
      return (
        <View className='flex flex-row justify-between w-full px-3'></View>
      );
  }
};

export default Header;
