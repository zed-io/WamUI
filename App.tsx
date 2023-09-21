import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Sidebar from "./src/components/Sidebar";
import UpgradePage from "./src/UpgradePage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Sidebar} />
        <Stack.Screen name="UpgradePage" component={UpgradePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
