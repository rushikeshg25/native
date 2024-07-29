import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const CurrencyButton = ({ customStyles }: { customStyles: any }) => {
  const [currency, setCurrency] = useState('IN');

  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'US' ? 'IN' : 'US'));
  };

  return (
    <Button
      mode='elevated'
      onPress={toggleCurrency}
      style={{ ...styles.currencyButton, ...customStyles.style }}
      contentStyle={{
        ...styles.currencyButtonContent,
        ...customStyles.contentStyle,
      }}
      compact={true}
    >
      {currency}
    </Button>
  );
};

const styles = StyleSheet.create({
  currencyButton: {
    justifyContent: 'center',
  },
  currencyButtonContent: {},
});

export default CurrencyButton;
