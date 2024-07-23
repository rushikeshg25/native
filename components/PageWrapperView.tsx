import { Platform, StatusBar, SafeAreaView } from 'react-native';

export default function PageWrapperView(props) {
  return (
    <SafeAreaView
      style={{
        paddingTop:
          (Platform.OS === 'ios' || !props.isHeaderShown
            ? 0
            : StatusBar.currentHeight ?? 0) + 20,
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        ...props.style,
      }}
    >
      {props.children}
    </SafeAreaView>
  );
}
