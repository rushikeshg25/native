import * as React from 'react';
import { useRouter } from 'expo-router';
import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const FloatingButton = () => {
  const router = useRouter();
  return (
    <FAB
      style={styles.fab}
      label='Add Expense'
      onPress={() => {
        router.push('/'); //Add Expense Path goes here
      }}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 45,
  },
});

export default FloatingButton;
