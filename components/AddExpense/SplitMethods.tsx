import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Text,
  ActivityIndicator,
  IconButton,
  useTheme,
} from 'react-native-paper';
import { useEffect, useState } from 'react';
import Avatar from '@/components/Avatar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CalculatorInput from '@/components/Input/CalculatorInput';
import BottomBar, { BOTTOM_APPBAR_HEIGHT } from './BottomBar';

export const splitMethods = {
  EQUAL: 'equal',
  AMOUNT: 'amount',
  PERCENTAGE: 'percentage',
  SHARES: 'shares',
};

export default function SplitMethod({ method, superHeroes, loading }) {
  const { bottom } = useSafeAreaInsets();
  const [currency, setCurrency] = useState<string>('₹');

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingBottom: BOTTOM_APPBAR_HEIGHT + 20,
        }}
        style={{ flex: 1 }}
      >
        <TopInfoBar method={method} />
        {loading ? (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator animating={true} />
          </View>
        ) : (
          superHeroes.map((hero) => (
            <View key={hero.name + hero.image} style={styles.list}>
              <View style={styles.heroContainer}>
                <Avatar
                  source={{
                    uri:
                      hero?.image ??
                      'https://userpic.codeforces.org/2074766/title/7c6bd92a5d4bdad.jpg',
                  }}
                  size={40}
                  style={styles.avatar}
                />
                <Text
                  ellipsizeMode='tail'
                  numberOfLines={1}
                  variant='labelLarge'
                  style={styles.heroName}
                >
                  {hero?.name}
                </Text>
              </View>
              <View style={styles.inputContainer}>
                <InputMethod method={method} currency={currency} />
              </View>
            </View>
          ))
        )}
      </ScrollView>
      <BottomBar bottomInset={bottom} />
    </View>
  );
}

const MAX_FONT_SIZE = 16;
const MIN_FONT_SIZE = 12;
const MAX_CHAR_LIMIT = 10;
const LENGTH_THRESHOLD = 7;

const InputMethod = ({ method, currency }) => {
  switch (method) {
    case splitMethods.EQUAL:
      return (
        <Text variant='labelLarge' theme={{ fonts: {} }}>
          {currency}1,234.00
        </Text>
      );

    case splitMethods.AMOUNT:
      return <AmountSplitInput currency={currency} />;
    case splitMethods.PERCENTAGE:
      return <PercentSplitInput />;
    case splitMethods.SHARES:
      return <SharesSplitInput />;
  }
};

const AmountSplitInput = ({ currency }) => {
  const [input, setInput] = useState<string>('');
  const [fontSize, setFontSize] = useState(MAX_FONT_SIZE);

  useEffect(() => {
    if (input.length > LENGTH_THRESHOLD) {
      const newSize = Math.max(
        MIN_FONT_SIZE,
        MAX_FONT_SIZE - (input.length - LENGTH_THRESHOLD) * 2,
      );
      setFontSize(newSize);
    } else {
      setFontSize(MAX_FONT_SIZE);
    }
  }, [input]);

  return (
    <View style={styles.splitInput}>
      <Text>{currency}</Text>
      <CalculatorInput
        customStyles={{
          fontSize: fontSize,
          height: 40,
          flex: 1,
        }}
        input={input}
        setInput={setInput}
        customProps={{ maxLength: MAX_CHAR_LIMIT }}
      />
    </View>
  );
};

const PercentSplitInput = () => {
  const [input, setInput] = useState('');

  const onCheckLimit = (value: string) => {
    const parsedQty = Number.parseFloat(value);
    if (Number.isNaN(parsedQty)) {
      setInput('');
    } else if (parsedQty > 100.0) {
      setInput('100.00');
    } else {
      setInput(value);
    }
  };

  return (
    <View style={styles.splitInput}>
      <CalculatorInput
        customStyles={{
          fontSize: MAX_FONT_SIZE + 2,
          height: 40,
          flex: 0.7,
        }}
        input={input}
        setInput={onCheckLimit}
        customProps={{ maxLength: 6 }}
      />
      <Text>{'%'}</Text>
    </View>
  );
};

const SharesSplitInput = () => {
  const [input, setInput] = useState(0);

  return (
    <View style={styles.splitInput}>
      <IconButton
        icon='minus'
        size={25}
        disabled={input <= 0}
        onPress={() => setInput((value) => Math.max(0, value - 1))}
      />
      <Text variant='headlineSmall'>{input}</Text>
      <IconButton
        icon='plus'
        size={25}
        onPress={() => setInput((value) => value + 1)}
      />
    </View>
  );
};

const TopInfoBar = ({ method }) => {
  const theme = useTheme();
  const [currentFont, setCurrentFont] = useState(MAX_FONT_SIZE);

  return (
    <View style={styles.infoBarContainer}>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[{ fontSize: currentFont }]}
        onTextLayout={(e) => {
          const { lines } = e.nativeEvent;
          if (lines.length > 1) {
            setCurrentFont(currentFont - 1);
          }
        }}
        theme={{ colors: { onSurface: theme.colors.onSurfaceDisabled } }}
        variant='headlineSmall'
      >
        {getTextFromMethod(method)}
      </Text>
    </View>
  );
};

const getTextFromMethod = (method) => {
  switch (method) {
    case splitMethods.EQUAL:
      return 'Equal share, equal care';
    case splitMethods.AMOUNT:
      return 'Pay for what you enjoyed';
    case splitMethods.PERCENTAGE:
      return 'Split by your share';
    case splitMethods.SHARES:
      return 'Custom split, custom fit';
  }
};

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  avatar: {
    marginRight: 10,
  },
  heroContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.7,
  },
  heroName: {
    flex: 1,
    marginLeft: 10,
  },
  inputContainer: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  splitInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  infoBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
