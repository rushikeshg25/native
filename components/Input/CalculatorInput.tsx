import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';

export default function CalculatorInput({
  customStyles = {},
  customProps = {},
  input,
  setInput,
}: {
  customStyles: StyleProp<TextStyle> | undefined;
  customProps?: TextInputProps;
  input: string | number;
  setInput: Function;
}) {
  const changeHandler = (text: string) => {
    setInput(text);
  };

  return (
    <TextInput
      value={input as string}
      onChangeText={changeHandler}
      placeholder='0.00'
      keyboardType='numeric'
      allowFontScaling={false}
      style={[styles.input, customStyles]}
      {...customProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 40,
    fontWeight: 'semibold',
    backgroundColor: 'transparent',
    paddingHorizontal: 8,
    paddingVertical: 0,
  },
});
