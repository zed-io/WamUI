import React from 'react';
import { Appearance, KeyboardAvoidingView, Platform, useColorScheme } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PasswordInput from './src/components/Inputs/PasswordInput';
import { BaseInput } from './src/components/Inputs/BaseInput';
import ClearInputIcon, { ClearInput } from './src/icons/ClearInput';
import { Search } from './src/icons/Search';

const App = () => {
  const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={keyboardBehavior}>
        <BaseInput 
        placeholder='Kevin'
        type='phone'
        iconPosition='left'
        icon={<Search 
         size={24}
         color={'#A0A0A0'}/>}
        />
        <PasswordInput />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;
