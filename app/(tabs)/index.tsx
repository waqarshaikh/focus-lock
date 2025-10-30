import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFocusTimer } from '../../hooks/use-focus-timer';

export default function HomeScreen() {
  const { timeLeft, isFocusing, toggleFocus, resetTimer } = useFocusTimer();

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎯 FocusLock</Text>
      <Text style={styles.subtitle}>
        {isFocusing ? 'Stay focused...' : 'Ready to start your session?'}
      </Text>

      <Text style={styles.timer}>{formatTime(timeLeft)}</Text>

      {/* Start / Stop button */}
      <TouchableOpacity
        style={[styles.button, isFocusing ? styles.stopButton : styles.startButton]}
        onPress={toggleFocus}
      >
        <Text style={styles.buttonText}>
          {isFocusing ? 'Stop' : 'Start Focus'}
        </Text>
      </TouchableOpacity>

      {/* Reset button — only visible while focusing */}
      {isFocusing && (
        <TouchableOpacity style={styles.resetButton} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      )}
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
    marginBottom: 20,
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
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
  resetButton: {
    backgroundColor: '#636e72',
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
