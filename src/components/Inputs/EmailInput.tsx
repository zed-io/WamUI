import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Keyboard, Platform} from 'react-native';


type Props = {
  placeholder: string,
  children?: React.ReactNode,
  
}
const EmailInput = ({placeholder, children}:Props) => {

  const [emailFocused, setEmailFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const clearInputValue = () => {
    setInputValue('');
  };
  return (
      <View style={[styles.inputContainer, emailFocused && styles.focusedInput]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="gray"
          selectionColor="#B34AFF"
          value={inputValue}
        onChangeText={setInputValue}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
        {children}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default EmailInput;
