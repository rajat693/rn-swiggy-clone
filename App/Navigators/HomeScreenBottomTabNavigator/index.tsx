import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SwiggyScreen, FoodScreen, InstamartScreen } from "../../Screens";

const Tab = createBottomTabNavigator();

export default function HomeScreenBottomTabNavigator() {
  return (

          <Tab.Navigator 
            initialRouteName='Food'
            screenOptions={{
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: "#909091",
              tabBarLabelStyle: {
                fontSize: 14,
              },
            }}  
          >
            <Tab.Screen 
              name="Welcome to Swiggy" component={SwiggyScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialIcon name="home" color={color} size={28} />
                ),
                tabBarLabel: "Swiggy",
              }}
            />
            <Tab.Screen name="Food" component={FoodScreen} 
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="food" color={color} size={28} />
              ),
              headerShown: false

            }}/>
            <Tab.Screen name="Instamart" component={InstamartScreen} 
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcon name="shopping-basket" color={color} size={28} />
              ),
              headerShown: false
            }}/>

          </Tab.Navigator>

  );
}