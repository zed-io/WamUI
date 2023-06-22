import React from "react";
import { View, StyleSheet } from "react-native";

type ProgressBarProps = {
  totalSteps: number;
  currentStep: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalSteps,
  currentStep,
}) => {
  const steps = Array.from({ length: totalSteps });

  return (
    <View style={styles.container}>
      {steps.map((_, index) => {
        const isCurrentStep = index === currentStep;
        const barColor = isCurrentStep ? "#B34AFF" : "#C7CED0";

        return (
          <View
            key={index}
            style={[
              styles.pageIndicator,
              {
                flex: 1,
                flexDirection: "row",
                backgroundColor: barColor,
                borderRadius: 5,
                marginRight: index < totalSteps - 1 ? 8 : 0,
              },
            ]}
          ></View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 4,
    width: "65%",
    borderRadius: 5,
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  pageIndicator: {
    height: "100%",
    borderRadius: 5,
  },
});

export default ProgressBar;
