import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [isFocusing, setIsFocusing] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎯 FocusLock</Text>
      <Text style={styles.subtitle}>
        {isFocusing ? "Stay focused..." : "Ready to start your session?"}
      </Text>

      <TouchableOpacity
        style={[styles.button, isFocusing ? styles.stopButton : styles.startButton]}
        onPress={() => setIsFocusing(!isFocusing)}
      >
        <Text style={styles.buttonText}>
          {isFocusing ? "Stop" : "Start Focus"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  startButton: {
    backgroundColor: '#2e86de',
  },
  stopButton: {
    backgroundColor: '#d63031',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
