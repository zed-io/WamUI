import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { BaseInput } from "./BaseInput";
import { Eye } from "../../icons/Eye";
import { EyeClosed } from "../../icons/EyeClosed";

type Props = {
  placeholder?: string;
  label?: string;
  description?: string;
};

const PasswordInput = ({ placeholder, label, description }: Props) => {
  const [value, setValue] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (text: string): void => {
    setValue(text);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <BaseInput
      keyboardType={"default"}
      secureTextEntry={!passwordVisible}
      placeholder={placeholder}
      label={label}
      value={value}
      RightIcon={
        <TouchableOpacity onPress={togglePasswordVisibility}>
          {passwordVisible ? <Eye /> : <EyeClosed />}
        </TouchableOpacity>
      }
      onChangeText={(text: string) => {
        handleChange(text);
      }}
    />
  );
};

const styles = StyleSheet.create({
  label: {
    paddingBottom: 3,
    paddingTop: 3,
    fontWeight: "bold",
  },
  description: {
    paddingTop: 3,
    color: "red",
  },
  input: {
    flex: 1,
    height: 50,
    color: "black",
  },
});

export default PasswordInput;
