import React, { useState, useContext, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from '@react-navigation/native';
import styles from "./styles";
import { CloneContext } from "../../usingContextApi";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const OTPScreen = () => {

  const navigation:any = useNavigation();
 
  const { number, confirm, setLoggedInValue, isLoggedIn }:any = useContext(CloneContext);

  const pin1Ref = useRef(null);
  const pin2Ref = useRef();
  const pin3Ref = useRef();
  const pin4Ref = useRef();
  const pin5Ref = useRef();
  const pin6Ref = useRef();

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");
  const [isFocused1, setIsFocusedVal1] = useState<boolean>(false);
  const [isFocused2, setIsFocusedVal2] = useState<boolean>(false);
  const [isFocused3, setIsFocusedVal3] = useState<boolean>(false);
  const [isFocused4, setIsFocusedVal4] = useState<boolean>(false);
  const [isFocused5, setIsFocusedVal5] = useState<boolean>(false);
  const [isFocused6, setIsFocusedVal6] = useState<boolean>(false);

  const [otpVal, setOtpVal] = useState("");
  let disableVal=false;

  const signIn = async () => {
    try {
      await confirm.confirm(otpVal);
      console.log("signed in");

      AsyncStorage.setItem("isLoggedIn", JSON.stringify(true))

      const LoggedIn = await AsyncStorage.getItem("isLoggedIn");
      console.log(" LoggedIn value : ", LoggedIn);

      // console.log(typeof(LoggedIn))  //string
      if(LoggedIn === "true")
      await setLoggedInValue(true);
      else
      await setLoggedInValue(false);
      console.log(isLoggedIn);

      navigation.navigate("PersonalDetails");
    } 
    catch (error) {
      console.log('Invalid code.');
    }
  }

  const [ctr,setctr] = useState(30);

  useEffect(() => {
    if(ctr>0)
    {setTimeout(()=>{
      setctr(ctr-1);
    },1000);}
    else
     return
  }, [ctr])

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topnavigator}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Text><AntDesign name="arrowleft" size={28} color="#464646" /> {"\n"}</Text>
          <Text style={styles.verifytxt}>VERIFY DETAILS</Text>
          <Text style={styles.otptxt}>OTP sent to {number}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainview}>

        <Text style={{color:"#5c5b5b",}}>Enter OTP</Text>

        <View style={styles.inputBox}>

        <View style={[styles.textInputView, isFocused1 ? {borderColor:"red", borderBottomWidth:2} : {borderColor:"black"} ]}>
        <TextInput
          keyboardType={"number-pad"}  //or "numeric" both are same
          maxLength={1}
          autoFocus={true}
          onFocus={()=>setIsFocusedVal1(true)}
          onBlur={()=>setIsFocusedVal1(false)}
          value={pin1}
          onChangeText={(text)=>{
            setPin1(text)
            setOtpVal(otpVal+text)
            if(text) {
              pin2Ref.current.focus();
              console.log(pin2Ref.current.focus())
            }
          }}
          onKeyPress={ e =>{
            if(e.nativeEvent.key==="Backspace" && pin1!=""){
              setOtpVal(otpVal.slice(0,-1))
            }
          }}
          ref={pin1Ref}
          style={styles.textInputTxt}
        />
      </View>

      <View style={[styles.textInputView, isFocused2 ? {borderColor:"red", borderBottomWidth:2} : {borderColor:"black"} ]}>
        <TextInput  
          keyboardType={"number-pad"}
          maxLength={1}
          onFocus={()=>setIsFocusedVal2(true)}
          onBlur={()=>setIsFocusedVal2(false)}
          value={pin2}
          onChangeText={(text)=>{
            setPin2(text)
            setOtpVal(otpVal+text)
            if(text) {
              pin3Ref.current.focus();
            }
          }}
          onKeyPress={ e =>{
            if(e.nativeEvent.key==="Backspace" && pin2==""){
              pin1Ref.current.focus();
            }
            if(e.nativeEvent.key==="Backspace" && pin2!=""){
              setOtpVal(otpVal.slice(0,-1))
            }
          }}
          ref={pin2Ref}
          style={styles.textInputTxt}
        />
      </View>

      <View style={[styles.textInputView, isFocused3 ? {borderColor:"red", borderBottomWidth:2} : {borderColor:"black"} ]}>
        <TextInput
          keyboardType={"number-pad"}
          maxLength={1}
          onFocus={()=>setIsFocusedVal3(true)}
          onBlur={()=>setIsFocusedVal3(false)}
          value={pin3}
          onChangeText={(text)=>{
            setPin3(text)
            setOtpVal(otpVal+text)
            if(text) {
              pin4Ref.current.focus();
            }
          }}
          onKeyPress={ e =>{
            // console.log(pin3)
            if(e.nativeEvent.key==="Backspace" && pin3=="" ){
              pin2Ref.current.focus();
            }
            if(e.nativeEvent.key==="Backspace" && pin3!=""){
              setOtpVal(otpVal.slice(0,-1))
            }
          }}
          ref={pin3Ref}
          style={styles.textInputTxt}
        />
      </View>

      <View style={[styles.textInputView, isFocused4 ? {borderColor:"red", borderBottomWidth:2} : {borderColor:"black"} ]}>
        <TextInput
          keyboardType={"number-pad"}
          maxLength={1}
          onFocus={()=>setIsFocusedVal4(true)}
          onBlur={()=>setIsFocusedVal4(false)}
          value={pin4}
          onChangeText={(text)=>{
            setPin4(text)
            setOtpVal(otpVal+text)
            if(text) {
              pin5Ref.current.focus();
            }
          }}
          onKeyPress={ e =>{
            // console.log(e.nativeEvent.key)  //Backspace
            if(e.nativeEvent.key==="Backspace" && pin4=="" ){
              pin3Ref.current.focus();
            }
            if(e.nativeEvent.key==="Backspace" && pin4!=""){
              setOtpVal(otpVal.slice(0,-1))
            }
          }}
          ref={pin4Ref}
          style={styles.textInputTxt}
        />
      </View>

      <View style={[styles.textInputView, isFocused5 ? {borderColor:"red", borderBottomWidth:2} : {borderColor:"black"} ]}>
        <TextInput
          keyboardType={"number-pad"}
          maxLength={1}
          onFocus={()=>setIsFocusedVal5(true)}
          onBlur={()=>setIsFocusedVal5(false)}
          value={pin5}
          onChangeText={(text)=>{
            setPin5(text)
            setOtpVal(otpVal+text)
            if(text) {
              pin6Ref.current.focus();
            }
          }}
          onKeyPress={ e =>{
            // console.log(pin3)
            if(e.nativeEvent.key==="Backspace" && pin5=="" ){
              pin4Ref.current.focus();
            }
            if(e.nativeEvent.key==="Backspace" && pin5!=""){
              setOtpVal(otpVal.slice(0,-1))
            }
          }}
          ref={pin5Ref}
          style={styles.textInputTxt}
        />
      </View>
      
      <View style={[styles.textInputView, isFocused6 ? {borderColor:"red", borderBottomWidth:2} : {borderColor:"black"} ]}>
        <TextInput
          keyboardType={"number-pad"}
          maxLength={1}
          onFocus={()=>setIsFocusedVal6(true)}
          onBlur={()=>setIsFocusedVal6(false)}
          value={pin6}
          onChangeText={(text)=>{
            setPin6(text)
            setOtpVal(otpVal+text)
          }}
          onKeyPress={ e =>{
            // console.log(pin3)
            if(e.nativeEvent.key==="Backspace" && pin6=="" ){
              pin5Ref.current.focus();
            }
            if(e.nativeEvent.key==="Backspace" && pin6!=""){
              setOtpVal(otpVal.slice(0,-1))
            }
          }}
          ref={pin6Ref}
          style={styles.textInputTxt}
        />
      </View>

      </View>

      {
        (otpVal.length!=6) ? (
          disableVal=true
        ):(
          disableVal=false
        )
      }

        <Text style={{lineHeight:50, color:"#5c5b5b",}}>Didn't receive the OTP? Retry in {ctr}sec</Text>

          <TouchableOpacity
            onPress = { ()=>{ signIn() } }
            disabled={disableVal}
            style={ disableVal ? styles.verifybtn1 : styles.verifybtn2 }
            >
              <Text style={styles.proceedtxt}>VERIFY AND PROCEED</Text>
          </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};