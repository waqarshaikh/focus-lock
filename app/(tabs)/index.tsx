import { Text, View, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FocusLock</Text>
      <Text style={styles.subtitle}>Start your focus session</Text>
      <Button title="Start Focus Session" onPress={() => alert('Focus session started!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 16,
  },
});
