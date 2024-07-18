import { Text, View } from "react-native";
import React from "react";

const Avatar = () => {
  return (
    <View className='rounded-full border-2 h-10 w-10  bg-gray-100 flex items-center justify-center'>
      <Text className='font-bold text-xl'>RG</Text>
    </View>
  );
};

export default Avatar;
