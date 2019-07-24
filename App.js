import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CodePush from 'react-native-code-push';

const codePushOption = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
}

const App = () => {
  const [logs, setLogs] = useState([`sync started at: ${new Date().getTime()}`]);

  function codePushSync() {
    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE,
    }, status => {
      for (var key in CodePush.SyncStatus) {
        if (status === CodePush.SyncStatus[key]) {
          setLogs([...logs, key.replace(/_/g, '')]);
          break;
        }
      }
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello CodePush ver1.0.1!</Text>
      <TouchableOpacity style={styles.button} onPress={() => codePushSync()}>
        <Text>Code Push</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(logs)}</Text>
    </View>
  );
};

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
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CodePush(codePushOption)(App);