import { View, FlatList, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';

export default function Friends() {
  const dummyData = [
    {
      id: '1',
      fullName: 'Mazerunner',
      summary: 'You owe',
      amount: 'Rs.5000',
      image: 'https://picsum.photos/200',
    },
    {
      id: '2',
      fullName: 'RG nub',
      summary: 'owes you',
      amount: 'Rs.150',
      image: 'https://picsum.photos/200',
    },
    {
      id: '3',
      fullName: 'Slayer',
      summary: 'owes you',
      amount: 'Rs.1000',
      image: 'https://picsum.photos/200',
    },
  ];

  return (
    <View className='flex flex-col h-screen py-2'>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card className='m-2'>
            <Card.Content className='flex flex-row items-center p-2'>
              <Image
                source={{ uri: item.image }}
                className='w-10 h-10 items-start rounded-full mr-4'
              />
              <View>
                <Text className='text-lg mr-4'>{item.fullName}</Text>
              </View>
              <View className='flex-1 items-end justify-end'>
                <Text
                  className={`text-s ${
                    item.summary.includes('owes')
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {item.summary}
                </Text>
                <Text
                  className={`text-s ${
                    item.summary.includes('owes')
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {item.amount}
                </Text>
              </View>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
