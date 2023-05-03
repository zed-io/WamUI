import React from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import EmailInput from './src/components/Inputs/EmailInput';
import PasswordInput from './src/components/Inputs/PasswordInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={[styles.container, colorScheme === 'dark' && styles.darkModeContainer]}>
      <View style={styles.container}>
        <Text style={[styles.text, colorScheme === 'dark' && styles.darkModeText]}>
          Name
        </Text>
        <EmailInput 
          placeholder="Enter Name Here" />
        <EmailInput 
          placeholder="Enter Name Here">
          <TouchableOpacity>
            <Ionicons name="close-circle-outline" size={24} color="#A4A4A4" />
          </TouchableOpacity>
        </EmailInput>
        <EmailInput 
          placeholder="Enter Name Here" />
        <PasswordInput />
      </View>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  darkModeContainer: {
    backgroundColor: '#000',
  },
  text: {
    color: '#000',
  },
  darkModeText: {
    color: '#fff',
  },
});

export default App;
