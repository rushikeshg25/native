import { Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Entypo } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type Member = {
  id: number;
  name: string;
  image: string;
};
interface GroupProps {
  name: string;
  members: Array<Member>;
  owe: number;
}

const Group = ({ name, members, owe }: GroupProps) => {
  return (
    <View className='border-2 border-white  bg-black w-full place-content-center grid rounded-2xl p-4'>
      <View className='flex  flex-row justify-between w-full'>
        <View className='relative flex flex-row'>
          {members.map((member, i) => (
            <View
              key={i}
              className='absolute '
              style={{ left: i * 35, zIndex: members.length - i }} // Adjust the left value for overlap
            >
              <Image
                source={{ uri: member.image }}
                className='w-10 h-10 rounded-full'
              />
            </View>
          ))}
        </View>

        <View className='flex items-center justify-center pt-3'>
          <Entypo name='dots-three-horizontal' size={24} color='white' />
        </View>
      </View>
      <Text className='text-white text-2xl font-bold mb-3'>{name}</Text>
      <View className='flex justify-between flex-row'>
        <View>
          <Text className=' text-sm text-red-300 font-bold'>You owe</Text>
          <Text className=' text-2xl text-red-300 font-extrabold'>₹{owe}</Text>
        </View>
        <View className='flex flex-row gap-1 items-end justify-center'>
          <FontAwesome6 name='plus' size={24} color='green' />
          <Text className=' text-xl text-green-400'>Add Expense</Text>
        </View>
      </View>
    </View>
  );
};

export default Group;
