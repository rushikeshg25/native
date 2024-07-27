import { StyleSheet } from 'react-native';
import { useTheme, Appbar } from 'react-native-paper';

export const BOTTOM_APPBAR_HEIGHT = 50;

export default function BottomBar({ bottomInset }) {
  const theme = useTheme();

  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottomInset,
          backgroundColor: theme.colors.elevation.level2,
        },
      ]}
      safeAreaInsets={{ bottom: bottomInset }}
    >
      <Appbar.Action icon='archive' onPress={() => {}} />
      <Appbar.Action icon='email' onPress={() => {}} />
      <Appbar.Action icon='label' onPress={() => {}} />
      <Appbar.Action icon='delete' onPress={() => {}} />
    </Appbar>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
