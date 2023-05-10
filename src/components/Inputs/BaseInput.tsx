import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

type Props = {
  placeholder: string;
  children?: React.ReactNode;
  type?: 'email' | 'phone';
  iconPosition?: 'left' | 'right';
  icon?: React.ReactNode
} & TextInputProps;

const BaseInput = ({
  placeholder,
  iconPosition = 'left',
  icon,
  ...props
}: Props) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');


  const keyboardType = () => {
    switch (props.type) {
      case 'phone':
        return 'phone-pad';
      case 'email':
        return 'email-address';
      default:
        return 'default';
    }
  }

  return (
       <View style={[styles.inputContainer, inputFocused && styles.focusedInput]}>
      {iconPosition === 'left' && icon && (
       icon
      )}
      
      <TextInput
        {...props}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        selectionColor="#B34AFF"
        value={inputValue}
        onChangeText={setInputValue}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        keyboardType={keyboardType()}
      />
      {iconPosition === 'right' && icon && (
       icon
      )}
    </View>
  );
};


const styles = StyleSheet.create({
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
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
});

export { BaseInput };

