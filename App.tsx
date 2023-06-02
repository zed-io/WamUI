import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BaseInput } from "./src/components/Inputs/BaseInput";
import PasswordInput from "./src/components/Inputs/PasswordInput";
import { Search } from "./src/icons/Search";

const App = () => {
  const keyboardBehavior = Platform.OS === "ios" ? "padding" : "height";

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={keyboardBehavior}
      >
      <Text>This is WamUI</Text>
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
