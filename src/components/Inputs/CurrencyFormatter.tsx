import React, { useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import { BaseInput } from "./BaseInput";
import { useFonts } from "expo-font";

type Props = {
  label?: string;
  placeholder: string;
  value?: string;
  RightIcon?: React.ReactElement;
  LeftIcon?: React.ReactElement;
  onPress?: () => void;
  currency?: string;
};

const NumberBaseInput = ({
  label,
  placeholder,
  RightIcon,
  LeftIcon,
  currency,
  ...props
}: Props) => {
  const [value, setValue] = useState("");

  const formatValue = (input: string) => {
    const numericInput = input.replace(/[^0-9.]+/g, "");
    let decimalStarted = input.includes(".");
    let [integerPart, decimalPart] = numericInput.split(".");

    integerPart = integerPart?.replace(/\B(?=(\d{3,3})+(?!\d))/g, ",");
    decimalPart = decimalPart?.slice(0, 2);

    let formattedValue = integerPart || "";
    if (decimalPart) {
      decimalPart = Math.floor(Number(decimalPart)).toString();
      formattedValue += `.${decimalPart}`;
    } else if (decimalStarted) {
      formattedValue += ".";
    }

    if (formattedValue !== "") {
      formattedValue = currency + formattedValue; // Add currency prefix
    }

    return formattedValue;
  };

  const handleChangeText = (input: string) => {
    const formattedValue = formatValue(input);
    setValue(formattedValue);
  };

  return (
    <BaseInput
      {...props}
      keyboardType="decimal-pad"
      style={[
        styles.input,
        {
          fontFamily: "IBM Plex Mono",
        },
      ]}
      placeholder={placeholder}
      placeholderTextColor="gray"
      selectionColor="#B34AFF"
      value={value}
      onChangeText={handleChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontFamily: "IBM Plex Mono",
    fontSize: 16,
  },
});

export { NumberBaseInput };
