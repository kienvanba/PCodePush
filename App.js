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
  installMode: CodePush.InstallMode.IMMEDIATE,
}

const App = () => {
  const [logs, setLogs] = useState([]);

  function syncWithCodePush() {
    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE,
    }, status => {
      for (var key in CodePush.SyncStatus) {
        if (status === CodePush.SyncStatus[key]) {
          setLogs([...logs, key.replace(/_/g, ' ')]);
          break;
        }
      }
    })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello CodePush!</Text>
      <TouchableOpacity style={styles.button} onPress={() => syncWithCodePush()}>
        <Text>Check for update.</Text>
      </TouchableOpacity>
      <Text>Code update logging:</Text>
      {
        logs.map((v, i) => (
          <Text key={i}>{v}</Text>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 64,
    fontWeight: 'bold',
  },
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