import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Keyboard} from 'react-native';
import EyeIcon from '../../icons/Eye';
import EyeClosedIcon from '../../icons/EyeClosed';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const PasswordInput = ({placeholder, value, onChangeText} : Props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
      <View style={[styles.inputContainer, passwordFocused && styles.focusedInput]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="gray"
          selectionColor="#B34AFF"
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          secureTextEntry={!passwordVisible}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          {passwordVisible ? <EyeIcon size={24} color='#A0A0A0'/> : <EyeClosedIcon size={24} color='#A0A0A0'/>}
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  label: {
    paddingBottom: 3,
    paddingTop: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#C7CED04D',
    paddingLeft: 10,
    paddingRight: 5, 
  },
  focusedInput: {
    borderColor: '#B34AFF',
    borderWidth: 2,
  },
  input: {
    flex: 1,
    height: 50,
    color: 'black',
  },
});


export default PasswordInput;
