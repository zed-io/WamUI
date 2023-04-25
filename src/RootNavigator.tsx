import * as React from 'react';
import { Platform } from 'react-native';

import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';
import Home from './Wam/Home'
// import Home from './ExampleList';
import { examples } from './ExampleList';

const Stack = createStackNavigator();

export default function Root() {
  const cardStyleInterpolator =
    Platform.OS === 'android'
      ? CardStyleInterpolators.forFadeFromBottomAndroid
      : CardStyleInterpolators.forHorizontalIOS;
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          detachPreviousScreen: !navigation.isFocused(),
          cardStyleInterpolator,
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <Appbar.Header>
                {back ? (
                  <Appbar.BackAction onPress={() => navigation.goBack()} />
                ) : (navigation as any).openDrawer ? (
                  <Appbar.Action
                    icon="menu"
                    isLeading
                    onPress={() =>
                      (
                        navigation as any as DrawerNavigationProp<{}>
                      ).openDrawer()
                    }
                  />
                ) : null}
                <Appbar.Content title={title} />
                  <Appbar.Action icon="line-scan" onPress={() => {}} />
                  <Appbar.Action icon="bell-outline" onPress={() => {}} />
              </Appbar.Header>
            );
          },
        };
      }}
    >
      <Stack.Screen
        name="ExampleList"
        component={Home}
        options={{
          title: '@mark',
        }}
      />
      {(Object.keys(examples) as Array<keyof typeof examples>).map((id) => {
        return (
          <Stack.Screen
            key={id}
            name={id}
            component={examples[id]}
            options={{
              title: examples[id].title,
              headerShown: id !== 'themingWithReactNavigation',
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
}
