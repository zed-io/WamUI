import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { registerRootComponent } from 'expo';

import Wam from './src/Wam/index';

// registerRootComponent(PaperExample);

export default function App() {
  return (
      <Wam/>
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
