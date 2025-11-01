import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import { useFocusTimer } from '../../hooks/use-focus-timer';

export default function HomeScreen() {
  const { timeLeft, isFocusing, toggleFocus } = useFocusTimer();

  // Format seconds as MM:SS
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Disable Android back button while focusing
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (isFocusing) return true; // prevent going back
      return false;
    });

    return () => backHandler.remove();
  }, [isFocusing]);

  return (
    <View style={styles.container}>
      {isFocusing ? (
        // FULL LOCK MODE
        <View style={styles.lockOverlay}>
          <Text style={styles.lockText}>🔒 Lock Mode Active</Text>
          <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
        </View>
      ) : (
        // NORMAL HOME SCREEN
        <>
          <Text style={styles.title}>🎯 FocusLock</Text>
          <Text style={styles.subtitle}>Ready to start your session?</Text>

          <Text style={styles.timer}>{formatTime(timeLeft)}</Text>

          <TouchableOpacity
            style={[styles.button, styles.startButton]}
            onPress={toggleFocus}
          >
            <Text style={styles.buttonText}>Start Focus</Text>
          </TouchableOpacity>
        </>
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
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  lockOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  lockText: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
