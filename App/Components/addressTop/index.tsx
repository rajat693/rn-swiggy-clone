import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Antdown from "react-native-vector-icons/AntDesign";
import Enthome from "react-native-vector-icons/Entypo";
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import { CloneContext } from "../../usingContextApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { requestUserPermission, NotificationListener } from '../../Utils/notifications';

export const AddressTop = () => {

  const navigation:any = useNavigation();

  const { isLoggedIn, setLoggedInValue }:any = useContext(CloneContext);

  const updateIsLoggedInValue = async () => {
    const LoggedIn = await AsyncStorage.getItem("isLoggedIn");
    console.log(" LoggedIn value : ", LoggedIn);
   
    console.log(typeof(LoggedIn))
    if(LoggedIn == "true")
    {
      setLoggedInValue(true);
      // requestUserPermission();
      // notificationListener();
    }
    else
    setLoggedInValue(false);
    console.log(isLoggedIn);
  }
  
  useEffect(() => {
    updateIsLoggedInValue();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view1a}>
          <View>
          <Enthome style={styles.icon1} name="home" size={22} color="red" />
          </View>
          <View>
          <Text style={styles.text1}>  Home</Text>
          </View>
          <View>
          <Antdown style={styles.icon2} name="down" size={20} />
          </View>
        </View>
        <View style={styles.view1b}>
          <Text style={{color:"#646463", lineHeight:20}}>#54, BTM Layout, Stage 1, Banglore, 154007</Text>
        </View>
        
      </View>
      <View style={styles.view2}>

      <TouchableOpacity onPress={ () => { (isLoggedIn) ? navigation.navigate('PersonalDetails') : navigation.navigate('Login')}}>
      {/* <TouchableOpacity onPress={ () => { navigation.navigate('Login')}}> */}
        <Image style={styles.image} source={require("../../Assets/Images/OtherImages/account.jpeg")}/>
      </TouchableOpacity>

      </View>
    </View>
  );
};
