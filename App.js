import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Keyboard} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const App = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const clearInputValue = () => {
    setInputValue('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Text style={{paddingBottom: 3, paddingTop: 3}}>Name</Text>
      </TouchableWithoutFeedback>
      <View style={[styles.inputContainer, nameFocused && styles.focusedInput]}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="gray"
          selectionColor="#B34AFF"
          onFocus={() => setNameFocused(true)}
          onBlur={() => setNameFocused(false)}
        />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Text style={{paddingBottom: 3, paddingTop: 3}}>Email:</Text>
      </TouchableWithoutFeedback>
      <View style={[styles.inputContainer, emailFocused && styles.focusedInput]}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          placeholderTextColor="gray"
          selectionColor="#B34AFF"
          value={inputValue}
        onChangeText={setInputValue}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
        <TouchableOpacity onPress={clearInputValue}>
          <Ionicons name="close-circle-outline" size={24} color="##A4A4A4" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Text style={{paddingBottom: 3, paddingTop: 3}}>Password</Text>
      </TouchableWithoutFeedback>
      <View style={[styles.inputContainer, passwordFocused && styles.focusedInput]}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="gray"
          selectionColor="#B34AFF"
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons
            name={passwordVisible ? 'eye' : 'eye-off'}
            size={24}
            color="#A0A0A0"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
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
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#C7CED04D',
  },
  focusedInput: {
    borderColor: '#B34AFF',
    borderWidth: 2,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    color: 'black',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default App;
