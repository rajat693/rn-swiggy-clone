import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { BottomSheet } from 'react-native-btr';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import { CloneContext } from "../../usingContextApi";
import auth from '@react-native-firebase/auth';
import { useForm, Controller } from "react-hook-form";
import {Navigations}from "../../Interfaces";
import FastImage from "react-native-fast-image";

export const LoginScreen = () => {

  const [visible, setVisible] = useState(false);
  const navigation:Navigations = useNavigation();
  const countryCode = "+91";

  const { setNumber, setConfirm }: any = useContext(CloneContext);
 
  const toggle = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  const requestOTP = async () => {

    const confirmation = await auth().signInWithPhoneNumber(countryCode+inputValue);
    setConfirm(confirmation);
    // console.log(confirmation)
    // console.log(number);
  } 

  const { control, handleSubmit, formState: { errors }, watch } = useForm();
  let inputValue=""; 
  inputValue = watch("inputField");

  // console.log( typeof inputValue);  //undefined 
  // console.log(inputValue);   //undefined 

  (inputValue==undefined)?(
    inputValue=""
  ):(null)

  const onSubmit = (data: any) => {  //works only when your condition is true
    console.log(data);
    requestOTP(); 
    setNumber(inputValue)
    // console.log(number);
    navigation.navigate("OTP");
    toggle();
  }

  return (
    <View style={styles.container}>

      <View style={styles.topnavigator}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Text><AntDesign name="arrowleft" size={32} color="#464646" /> {"  "}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.midview}>
        <Text style={styles.fadetxt}>
          LIVE {"\n"}
          <Text style={styles.fadetxtinner}>FOR {"\n"}FOOD</Text>
        </Text>
        <View style={styles.imgview}>
          <FastImage style={styles.img} source={require("../../Assets/Images/OtherImages/roll-removebg.png")} />
        </View>
      </View>

      <View style={styles.bottomloginview}>
        <Text style={styles.accounttxt}>ACCOUNT</Text>
        <Text style={styles.loginmaintxt}>Login/Create Account quickly to manage orders</Text>
        <TouchableOpacity style={styles.loginbtn} onPress={toggle}>
          <Text style={styles.logintxt}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.loginmaintxt}>
          By clicking, I accept the 
          <Text style={{fontWeight:"bold", fontSize:15,}}> Terms & Conditions</Text> and 
          <Text style={{fontWeight:"bold", fontSize:15,}}> privacy Policy</Text>
        </Text>

        <View style={{borderWidth:1, marginTop:"5%", marginHorizontal:"1%"}}></View>
      </View>

      <BottomSheet
        visible={visible}
        onBackdropPress={toggle}
      >
        <View style={styles.bottomNavigationView}>
          <Text style={styles.loginsheet}>LOGIN</Text>
          <Text style={styles.txt}>Enter your phone number to proceed{"\n"}</Text>
          <Text style={styles.smalltxt}>10 digit mobile number</Text>

          <Controller
            control={control}
            rules={{
            required: true,
            minLength:10,
            maxLength:10,  
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.numberinput}
                onChangeText={(value)=>{
                  onChange(value)
                } }
                value={value}  
                keyboardType={"numeric"}
                maxLength={10}
              />
            )}
            name="inputField"   
          />
          {errors.inputField && <Text style={{color:"red"}}>please provide a valid 10 digit phone number.</Text>}

            <TouchableOpacity
            onPress = { handleSubmit(onSubmit) }
            style={[styles.continuebtn, errors.inputField || inputValue.length<10 ? { backgroundColor:"#e3a38f"} : { backgroundColor:"#f57953"} ]}>
              {
                ( errors.inputField || inputValue.length<10 ) ? (  
                  <Text style={styles.logintxt1}>Enter Phone Number</Text>
                ):(
                <Text style={styles.logintxt2}>Continue</Text>
                )
              }
            </TouchableOpacity>


          <Text style={styles.continuemaintxt}>
            By clicking, I accept the
            <Text style={{fontWeight:"bold",}}> Terms & Conditions</Text> and 
            <Text style={{fontWeight:"bold",}}> Privacy Policy</Text>
          </Text>
        </View>
      </BottomSheet>

    </View>
  );
};