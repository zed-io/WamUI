import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const UpgradePage = () => {
  const [photoIDUploaded, setPhotoIDUploaded] = useState(false);
  const [passportUploaded, setPassportUploaded] = useState(false);

  const handleUploadPhotoID = () => {
    setPhotoIDUploaded(true);
  };

  const handleUploadPassport = () => {
    setPassportUploaded(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KYC Fun Time</Text>
      <View style={styles.uploadSection}>
        <View style={styles.documentCard}>
          <Text style={styles.documentTitle}>Photo ID</Text>
          <TouchableOpacity
            onPress={handleUploadPhotoID}
            style={styles.uploadButton}
          >
            <Text style={styles.buttonText}>
              {photoIDUploaded ? "Uploaded" : "Upload"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.documentCard}>
          <Text style={styles.documentTitle}>Passport</Text>
          <TouchableOpacity
            onPress={handleUploadPassport}
            style={styles.uploadButton}
          >
            <Text style={styles.buttonText}>
              {passportUploaded ? "Uploaded" : "Upload"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  uploadSection: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    elevation: 3,
  },
  documentCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  uploadButton: {
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

export default UpgradePage;
