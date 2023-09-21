import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WalletLimit = ({ onClick }) => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    navigation.navigate("UpgradePage");
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.limitText}>5,000 Limit</Text>
      </View>

      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={({ pressed }) => [
          styles.increaseLimitButton,
          {
            backgroundColor: pressed || isPressed ? "#A8FCAE" : "#43FF52",
          },
        ]}
      >
        {({ pressed }) => (
          <Text
            style={[
              styles.buttonText,
              {
                color: pressed || isPressed ? "#00BF4D" : "black",
              },
            ]}
          >
            Upgrade
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  limitText: {
    fontSize: 16,
  },
  increaseLimitButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default WalletLimit;
