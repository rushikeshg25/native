import { View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { Card, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';

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
  const router = useRouter();
  // const membersList=
  return (
    <Card
      className='grid w-full bg-black border border-border-light dark:border-border-dark place-content-center rounded-2xl'
      onPress={() => router.push(`/group/${id}`)}
    >
      <Card.Content>
        <View className='flex flex-row justify-between w-full'>
          <View className='flex flex-row items-center justify-center gap-2'>
            <Image
              source={{ uri: 'https://picsum.photos/200' }}
              className='w-20 rounded-lg h-14'
            />
            <View className='flex flex-col items-start justify-center'>
              <Text className='text-2xl font-bold text-white '>{name}</Text>
              <Text>Members: 3</Text>
            </View>
          </View>
          <View>
            <Text className='text-sm font-bold text-red-300 '>You owe</Text>
            <Text className='text-2xl font-extrabold text-red-300 '>
              ₹{owe}
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default GroupCard;
