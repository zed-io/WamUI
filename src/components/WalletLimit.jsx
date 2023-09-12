import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WalletLimit = ({ onClick }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text>Current Limit</Text>
        <Text style={styles.limitText}>TTD 5000</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("UpgradePage");
        }}
        style={styles.increaseLimitButton}
      >
        <Text style={styles.buttonText}>Upgrade</Text>
      </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: "bold",
  },
  increaseLimitButton: {
    backgroundColor: "#B34AFF",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default WalletLimit;
