import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import PasswordInput from "./src/components/Inputs/PasswordInput";
import { BaseInput } from "./src/components/Inputs/BaseInput";
import { ClearInput } from "./src/icons/ClearInput";
import SearchIcon, { Search } from "./src/icons/Search";
import { Eye } from "./src/icons/Eye";

const App = () => {
  const keyboardBehavior = Platform.OS === "ios" ? "padding" : "height";

  // @todo show the contents of each input field
  // and ensure that they are always capitalized
  // but do not modify the text inside the input
  // itself.

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={keyboardBehavior}
      >
        <BaseInput
          label="Username"
          placeholder="Enter Username Here"
          LeftIcon={<Eye />}
        />
        <PasswordInput
          placeholder="Enter password"
          label="Password"
          description="Must be at least 8 characters long"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default App;
