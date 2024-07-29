import { SafeAreaView } from 'react-native';
import { useTheme, IconButton } from 'react-native-paper';
import { TabView, TabBar } from 'react-native-tab-view';
import { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { getSuperHeroList } from '@/utils/PeopleData';
import { Stack } from 'expo-router';
import SplitMethod, {
  splitMethods,
} from '@/components/AddExpense/SplitMethods';

export default function AdjustSplit() {
  const theme = useTheme();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: splitMethods.EQUAL, icon: 'safety-divider' },
    { key: splitMethods.AMOUNT, icon: '123' },
    { key: splitMethods.PERCENTAGE, icon: 'percent' },
    { key: splitMethods.SHARES, icon: 'pie-chart-outline' },
  ]);
  const [superHeroes, setSuperHeroes] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuperHeroes = async () => {
      try {
        const heroes = await getSuperHeroList(20); // Fetch 20 superheroes as an example
        setSuperHeroes(heroes);
      } catch (error) {
        console.error('Error fetching superheroes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuperHeroes();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <IconButton
              icon='check-bold'
              size={20}
              onPress={() => console.log('Pressed')}
            />
          ),
        }}
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={({ route }) => (
          <SplitMethod
            method={route.key}
            superHeroes={superHeroes}
            loading={loading}
          />
        )}
        onIndexChange={setIndex}
        overScrollMode={'always'}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: theme.colors.primary }}
            style={{
              backgroundColor: theme.colors.background,
            }}
            labelStyle={{ color: theme.colors.primary }}
            renderIcon={({ route, focused, color }) => (
              <MaterialIcons
                name={route.icon as any}
                size={30}
                color={focused ? theme.colors.primary : theme.colors.secondary}
              />
            )}
          />
        )}
      />
    </SafeAreaView>
  );
}
