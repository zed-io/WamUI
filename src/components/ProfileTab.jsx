import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileTab = ({ name, imageSource, onProfilePress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("AccountCenter");
      }}
      style={styles.container}
    >
      <View style={styles.profileInfo}>
        <Image source={{ uri: imageSource }} style={styles.profileImage} />
        <Text style={styles.profileName}>{name || "Select a profile"}</Text>
      </View>
      <Text style={styles.caret}>›</Text>
    </TouchableOpacity>
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
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  caret: {
    fontSize: 20,
  },
});

export default ProfileTab;
