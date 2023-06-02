import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  Text,
  TouchableOpacity,
} from "react-native";
import { ClearInput } from "../../icons/ClearInput";

type Props = {
  label?: string;
  placeholder?: string;
  value?: string;
  RightIcon?: React.ReactElement;
  LeftIcon?: React.ReactElement;
  onPress?: () => void;
} & TextInputProps;

const ClearInputButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <ClearInput />
  </TouchableOpacity>
);

const BaseInput = ({
  label,
  placeholder,
  RightIcon,
  LeftIcon,
  value,
  ...props
}: Props) => {
  const { onChangeText } = props;
  const [isFocused, setFocused] = useState<boolean>(false);
  const handleFocus = (focused: boolean) => {
    // @note what is the custom logic?
    setFocused(focused);
  };

  const handleChange = (text: string): void => {
    onChangeText(text);
  };

  const clearInput = () => {
    onChangeText(" ");
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, isFocused && styles.focusedInput]}>
        {LeftIcon && LeftIcon}
        <TextInput
          {...props}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="gray"
          selectionColor="#B34AFF"
          value={value}
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
          onChangeText={(text: string) => {
            handleChange(text);
          }}
        />
        {value !== "" &&
          (RightIcon ? RightIcon : <ClearInputButton onPress={clearInput} />)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#C7CED04D",
  },
  label: {
    paddingBottom: 3,
    paddingTop: 3,
    fontWeight: "bold",
  },
  focusedInput: {
    borderColor: "#B34AFF",
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
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
});

export { BaseInput };
