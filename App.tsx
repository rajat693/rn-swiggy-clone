import React,{useEffect} from 'react';
import RootNavigation from "./App/Navigators/RootNavigation";
import { requestUserPermission, NotificationListener } from './App/Utils/notifications';
import { LogBox, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default function App() {

  LogBox.ignoreAllLogs();
  useEffect(()=>{
    if (Platform.OS === 'android')
    {
      SplashScreen.hide();  
      requestUserPermission();
    }
    // NotificationListener();
  },[])

  return (
    
    <RootNavigation/>
  );
}