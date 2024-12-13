// AccountCenter.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileTab from "./components/ProfileTab";

const AccountCenter = () => {
  const navigation = useNavigation();
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelection = (profileName) => {
    setSelectedProfile(profileName);
    navigation.dispatch({
      type: "SET_SELECTED_PROFILE",
      payload: profileName,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Center</Text>
      <View style={styles.accountCard}>
        <View style={styles.accountInfo}>
          <Text style={styles.accountName}>John Doe</Text>
          <Text style={styles.accountBalance}>Account Tier: 1</Text>
          <Text style={styles.accountBalance}>Account Type: Personal</Text>
          <Text style={styles.accountBalance}>$5,000</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("KycFunTime");
          }}
          style={styles.increaseLimitButton}
        >
          <Text style={styles.buttonText}>Upgrade</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.accountCard}>
        <View style={styles.accountInfo}>
          <Text style={styles.accountName}>Unorthodox Rhabi Clothing Inc.</Text>
          <Text style={styles.accountBalance}>Account Tier: 2</Text>
          <Text style={styles.accountBalance}>Account Type: Business</Text>
          <Text style={styles.accountBalance}>$15,000</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleProfileSelection("Unorthodox Rhabi Clothing Inc.");
          }}
          style={[
            styles.increaseLimitButton,
            selectedProfile === "Unorthodox Rhabi Clothing Inc."
              ? styles.selectedProfileButton
              : null,
          ]}
        >
          <Text style={styles.buttonText}>Upgrade</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.accountCard}>
        <View style={styles.accountInfo}>
          <Text style={styles.accountName}>Gaza Products</Text>
          <Text style={styles.accountBalance}>Account Tier: 3 </Text>
          <Text style={styles.accountBalance}>Account Type: Business</Text>
          <Text style={styles.accountBalance}>$30,000</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleProfileSelection("Gaza Products");
          }}
          style={[
            styles.increaseLimitButton,
            selectedProfile === "Gaza Products"
              ? styles.selectedProfileButton
              : null,
          ]}
        >
          <Text style={styles.buttonText}>Upgrade</Text>
        </TouchableOpacity>
      </View>
      <ProfileTab name={selectedProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  accountCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 3,
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  accountBalance: {
    fontSize: 14,
    color: "#666",
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

export default AccountCenter;
