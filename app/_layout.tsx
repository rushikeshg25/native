import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Text, useColorScheme, View } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Colors } from '@/constants/Colors';
import merge from 'deepmerge';
// import { useFloatingButtonVisiblity } from '@/hooks/useFloatingButtonVisiblity';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };
const customLightTheme = { ...MD3LightTheme, colors: Colors.light };

const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);
const CombinedDefaultTheme = merge(LightTheme, customLightTheme);

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const paperTheme =
    colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // const { isVisible, path } = useFloatingButtonVisiblity();

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={paperTheme}>
        <RootSiblingParent>
          <Stack>
            <Stack.Screen name='(auth)' options={{ headerShown: false }} />
            <Stack.Screen name='(home)' options={{ headerShown: false }} />
            <Stack.Screen name='+not-found' />
          </Stack>
          {/* <View>
            <Text>{path}</Text>
          </View> */}
        </RootSiblingParent>
      </ThemeProvider>
    </PaperProvider>
  );
}
