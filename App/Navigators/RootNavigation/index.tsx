import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { CloneProvider } from '../../usingContextApi';
import { BillScreen, EditDetailsScreen, PersonalDetailsScreen, RestaurantDetailsScreen, LoginScreen, OTPScreen, SearchScreen } from "../../Screens";
import HomeScreenBottomTabNavigator from '../HomeScreenBottomTabNavigator';
import { ForegroundHandler, NotificationListener } from '../../Utils/notifications';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    
    <CloneProvider>
      <NavigationContainer>
        { 
          (Platform.OS === 'android') ? (
            <><ForegroundHandler /><NotificationListener /></>
          ) : (
            null
          )
        }
        <Stack.Navigator initialRouteName='FoodHome'>
        {/* <ForegroundHandler/> */}
          <Stack.Screen options={{headerShown: false}} name="FoodHome" component={HomeScreenBottomTabNavigator} />
          <Stack.Screen options={{headerShown: false}} name="PersonalDetails" component={PersonalDetailsScreen} />
          <Stack.Screen options={{headerShown: false}} name="EditDetails" component={EditDetailsScreen} />
          <Stack.Screen options={{headerShown: false}} name="RestaurantDetails" component={RestaurantDetailsScreen} />
          <Stack.Screen options={{headerShown: false}} name="Bill" component={BillScreen} />
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false}} name="OTP" component={OTPScreen} />
          <Stack.Screen options={{headerShown: false}} name="Search" component={SearchScreen} />
        </Stack.Navigator>

      </NavigationContainer>
    </CloneProvider>
  );
}