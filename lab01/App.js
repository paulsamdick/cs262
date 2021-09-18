/*Paul Dick, CS 262, 9/4/21, Lab1
App.js contains the source code for myApp- a hello world application.
*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World from Paul Dick!</Text>
      <Text>This is a really nice day!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f0ead',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
