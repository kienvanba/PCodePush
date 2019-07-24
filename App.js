import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CodePush from 'react-native-code-push';

const codePushOption = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
}

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello CodePush!</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Check for update.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
  button: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CodePush(codePushOption)(App);