import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BaseInput } from "./src/components/Inputs/BaseInput";
import { NumberBaseInput } from "./src/components/Inputs/CurrencyFormatter";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    "IBM Plex Mono": require("./assets/fonts/IBMPlexMono-Bold.ttf"),
    "CircularStd-Book": require("./assets/fonts/CircularStd-Book.ttf"),
  });

  const keyboardBehavior = Platform.OS === "ios" ? "padding" : "height";

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={keyboardBehavior}
      >
        <NumberBaseInput placeholder="Money money money" currency="$" />
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
    fontFamily: "CircularStd-Book",
  },
});

export default App;
