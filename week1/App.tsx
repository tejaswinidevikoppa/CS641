import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <text>text 1</text>
      <text>text 2</text>
      <ActivityIndicator></ActivityIndicator>
      <Image 
      source={{ uri: 
      }}
      style={styles.tinyLogo}
        ></Image>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
