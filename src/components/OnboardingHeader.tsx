import { StackHeaderProps } from "@react-navigation/stack";
import React from "react";
import ProgressBar from "./ProgressBar";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const OnboardingHeader = (props: StackHeaderProps) => {
  const totalSteps = 9;
  const currentStep = 0;

  const { navigation } = props;

  return (
    <View
      style={{
        height: 200,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <React.Fragment>
        <Icon
          name="arrow-left"
          size={15}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <ProgressBar totalSteps={totalSteps} currentStep={currentStep} />
      </React.Fragment>
    </View>
  );
};

export default OnboardingHeader;
