import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TextInputProps,
} from 'react-native';

import EyeIcon from '../../icons/Eye';
import EyeClosedIcon from '../../icons/EyeClosed';
import { Search as SearchIcon } from '../../icons/Search';
import ClearInputIcon from '../../icons/ClearInput';


type Props = {
  placeholder: string;
  children?: React.ReactNode;
  type?: 'email' | 'phone';
  iconPosition?: 'left' | 'right';
  icon?: React.ReactNode
} & TextInputProps;

const BaseInput = ({
  placeholder,
  children,
  type = 'email',
  iconPosition = 'left',
  icon,
  ...props
}: Props) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');


  const keyboardType =
    type === 'phone' ? 'phone-pad' : type === 'email' ? 'email-address' : 'default';
  const iconSide = iconPosition === 'left' ? styles.iconLeft : styles.iconRight;

  const iconMap = {
    Eye: EyeIcon,
    EyeClosed: EyeClosedIcon,
    Search: SearchIcon,
    ClearInput: ClearInputIcon,
  };

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
        keyboardType={keyboardType}
      />
      {iconPosition === 'right' && icon && (
       icon
      )}
      {children}
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

