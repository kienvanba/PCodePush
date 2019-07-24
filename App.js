import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CodePush from 'react-native-code-push';

const codePushOption = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
}

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello World!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  }
});

export default CodePush(codePushOption)(App);