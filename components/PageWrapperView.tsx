import { cn } from '@/utils/tw-merge';
import { SafeAreaView } from 'react-native';

export default function PageWrapperView(props: {
  children: React.ReactNode;
  isHeaderShown?: boolean;
  style?: any;
  classname?: string;
}) {
  return (
    <SafeAreaView
      //to remove this default styling add className="px-0" wherever you use this component
      className={cn('px-3', props.classname)}
      // style={
      //   {
      //     paddingTop:
      //       (Platform.OS === 'ios' || props.isHeaderShown
      //         ? 0
      //         : StatusBar.currentHeight ?? 0) + 20,
      //     flex: 1,
      //     ...props.style,
      //   }
      // }
    >
      {props.children}
    </SafeAreaView>
  );
}
