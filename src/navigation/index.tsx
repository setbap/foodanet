import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ColorSchemeName } from "react-native";
import { RootStackParamList } from "@my-types/index";

import LinkingConfiguration from "./LinkingConfiguration";
import { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen, AboutScreen } from "@my-screens/index";
import {
  BottomTabParamList,
  HomeTabParamList,
  AboutTabParamList,
} from "@my-types/index";
import { Dimensions, Animated } from "react-native";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return (
    <Ionicons size={30} style={{ marginBottom: -3, zIndex: 100 }} {...props} />
  );
}
const HomeTabStack = createStackNavigator<HomeTabParamList>();

function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: "غذا ها" }}
      />
    </HomeTabStack.Navigator>
  );
}

const AboutTabStack = createStackNavigator<AboutTabParamList>();

function AboutTabNavigator() {
  return (
    <AboutTabStack.Navigator>
      <AboutTabStack.Screen
        name="AboutTabScreen"
        component={AboutScreen}
        options={{ headerTitle: "درباره پروژه" }}
      />
    </AboutTabStack.Navigator>
  );
}

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}): JSX.Element {
  const selectedTabIndex = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <BottomTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#ff0000",
          showLabel: false,
          style: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 16,
            elevation: 10,
            marginHorizontal: Dimensions.get("screen").width / 2 - 80,
            width: 160,
            height: 56,
            borderRadius: 16,
          },
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeTabNavigator}
          listeners={{
            tabPress: () => {
              Animated.spring(selectedTabIndex, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          }}
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="fast-food" color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="About"
          listeners={{
            tabPress: () => {
              Animated.spring(selectedTabIndex, {
                toValue: -80,
                useNativeDriver: true,
              }).start();
            },
          }}
          component={AboutTabNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="information-circle" color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
      <Animated.View
        style={{
          position: "absolute",
          height: 44,
          borderRadius: 32,
          borderColor: "activeTabLine",
          backgroundColor: "#f0700020",
          bottom: 48 - 36 + 8,
          width: 60,
          zIndex: 1,
          end: Dimensions.get("screen").width / 2 + 10,
          transform: [
            {
              translateX: selectedTabIndex,
            },
          ],
        }}
      />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();
