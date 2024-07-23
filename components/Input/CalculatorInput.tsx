import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function CalculatorInput({ customStyles }) {
  const [input, setInput] = useState('');

  const changeHandler = (e) => {
    setInput(e);
  };

  return (
    <TextInput
      value={input}
      onChangeText={changeHandler}
      placeholder='0.00'
      keyboardType='numeric'
      style={{ ...styles.input, ...customStyles }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    fontSize: 40,
    fontWeight: 'semibold',
    backgroundColor: 'none',
  },
});
