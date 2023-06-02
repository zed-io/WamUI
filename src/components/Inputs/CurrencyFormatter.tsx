import React from "react";
import { StyleSheet, TextInputProps } from "react-native";

import { CurrencySymbol, defaultCurrencySymbol } from "../../home/currency";
import { BaseInput } from "./BaseInput";
``;

type Props = {
  placeholder: string;
  value?: string;
  onPress?: () => void;
  currency?: CurrencySymbol;
  onChangeText: (text: string) => void;
} & TextInputProps;

const CurrencyFormatter = ({
  placeholder,
  currency = defaultCurrencySymbol,
  value,
  ...props
}: Props) => {
  const formatValue = (input: string) => {
    const numericInput = input.replace(/[^0-9.]+/g, "");
    const decimalStarted = input.includes(".");
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
      formattedValue = currency + formattedValue;
    }

    return formattedValue;
  };

  const handleChange = (input: string) => {
    const formattedValue = formatValue(input);
    props.onChangeText(formattedValue);
  };

  return (
    <BaseInput
      {...props}
      keyboardType="decimal-pad"
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="gray"
      selectionColor="#B34AFF"
      value={value}
      onChangeText={handleChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export { CurrencyFormatter };
