import { Link } from 'expo-router';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function Account() {
  return (
    <View className='flex items-center justify-center mb-10'>
      <Text>Account Page</Text>
      <Link href={'/(home)/(setting)/setting'} asChild>
        <Button>Go to settings</Button>
      </Link>
      <Link href={'/(tabs)/(account)/setting'} asChild>
        <Button>Go to settings in account</Button>
      </Link>
      <Link href={'/(home)/(modal)/modal'} asChild>
        <Button>Add expense modal</Button>
      </Link>
    </View>
  );
}
