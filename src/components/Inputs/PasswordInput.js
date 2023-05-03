import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Keyboard} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const PasswordInput = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <SafeAreaView>
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

export default PasswordInput;
