import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProgressBar, MD3Colors } from "react-native-paper";

import { Switch } from "react-native-paper";

const activity = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View className='flex items-center justify-center h-screen'>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  );
};

export default activity;

const styles = StyleSheet.create({});
