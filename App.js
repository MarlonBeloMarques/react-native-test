import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import TeamsList from './src/components/TeamsList';

export default function App() {
  const [isVisible, setVisibility] = useState(false);

  const toggle = () => setVisibility(!isVisible);

  const list = [
    {
      id: "1",
      name: "barcelona",
    },
    {
      id: "2",
      name: "real madrid",
    },
    {
      id: "3",
      name: "são paulo",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>
        This is a React Native snapshot test.
      </Text>
      <TeamsList size="large" list={list} />
      <Button title="Click" onPress={toggle}></Button>
      {isVisible && <Text>Visible</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center",
  },
  instructions: {
    color: "#333333",
    marginBottom: 5,
    textAlign: "center",
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
});
