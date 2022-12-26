import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import screens from "./screens";
const {
  LoginScreen,
  RegistrationScreen,
  CreateScreen,
  PostsScreen,
  ProfileScreen,
} = screens;

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        name="PostsScreen"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name="view-list"
              size={focused ? 44 : 34}
              color={focused ? "orange" : color}
            />
          ),
        }}
        component={PostsScreen}
      />
      <MainTab.Screen
        name="CreateScreen"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name="add-circle"
              size={focused ? 44 : 34}
              color={focused ? "orange" : color}
            />
          ),
        }}
        component={CreateScreen}
      />
      <MainTab.Screen
        name="ProfileScreen"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name="account-circle"
              size={focused ? 44 : 34}
              color={focused ? "orange" : color}
            />
          ),
        }}
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default useRoute;
