import CurrencyButton from '@/components/Button/CurrencyButton';
import CalculatorInput from '@/components/Input/CalculatorInput';
import { Link } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const Header = () => {
  return <View style={styles.headerContainer}></View>;
};

const SplitCategory = () => {
  return (
    <View style={styles.splitCategoryContainer}>
      <Link href={'/addExpense/adjustSplit'}>
        <Text>split method</Text>
      </Link>
    </View>
  );
};

export default function ExpenseModal() {
  const [description, setDescription] = useState('');
  const [input, setInput] = useState('');

  return (
    <>
      <View style={styles.container}>
        <Header />

        <View style={styles.inputContainer}>
          <View style={styles.calcInputContainer}>
            <CurrencyButton
              customStyles={{
                style: styles.currencyButtonStyle,
                contentStyle: styles.currencyButtonStyle,
              }}
            />
            <CalculatorInput
              customStyles={styles.calcInput}
              input={input}
              setInput={setInput}
            />
          </View>

          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder='Description'
            style={styles.descriptionInput}
          />
        </View>

        <SplitCategory />
      </View>
    </>
  );
}

const BUTTON_SIZE = 50;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  splitCategoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 40,
    width: '80%',
  },
  calcInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  calcInput: {
    height: BUTTON_SIZE,
    flex: 1,
    marginLeft: 10,
  },
  currencyButtonStyle: {
    height: BUTTON_SIZE + 10,
    width: BUTTON_SIZE + 10,
  },
  descriptionInput: {
    backgroundColor: 'none',
    width: '100%',
  },
});
