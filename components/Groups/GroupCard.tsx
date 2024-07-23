import { View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { Entypo } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Button, Card, Text } from 'react-native-paper';
import { Link } from 'expo-router';

type Member = {
  id: string;
  name: string;
  image: string;
};
interface GroupProps {
  id: string;
  name: string;
  members: Array<Member>;
  owe: number;
}

const GroupCard = ({ name, members, owe, id }: GroupProps) => {
  return (
    <Card className='grid w-full bg-black border border-white place-content-center rounded-2xl'>
      <Card.Content>
        <View className='flex flex-row justify-between w-full'>
          <View className='relative flex flex-row'>
            {members.map((member, i) => (
              <View
                key={i}
                className='absolute '
                style={{ left: i * 35, zIndex: members.length - i }}
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
        <Text className='mb-3 text-2xl font-bold text-white'>{name}</Text>
        <View className='flex flex-row justify-between'>
          <View>
            <Text className='text-sm font-bold text-red-300 '>You owe</Text>
            <Text className='text-2xl font-extrabold text-red-300 '>
              ₹{owe}
            </Text>
          </View>
          <View className='flex flex-row items-end justify-center gap-3'>
            <Link href={`/group/${id}`}>
              <Text className='dark:text-white '>View</Text>
            </Link>
            <View className='flex flex-row items-end justify-center gap-1'>
              <Text className='text-green-400 '>Add Expense</Text>
            </View>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default GroupCard;
