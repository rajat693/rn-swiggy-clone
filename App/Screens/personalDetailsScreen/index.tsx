import React,{ useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { CloneContext } from "../../usingContextApi";
import styles from './styles';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Navigations}from "../../Interfaces";

export function PersonalDetailsScreen({navigation}:{navigation:Navigations}) {

  const { name, number, email, setLoggedInValue, isLoggedIn }:any  = useContext(CloneContext);

  const signedOut = async () => {
    try {
      await auth().signOut();
      console.log("signed out");

      AsyncStorage.setItem("isLoggedIn", JSON.stringify(false))

      const LoggedIn = await AsyncStorage.getItem("isLoggedIn");
      console.log(" LoggedIn value : ", LoggedIn);

      // console.log(typeof(LoggedIn))  //string
      if(LoggedIn === "true")
      setLoggedInValue(true);
      else
      setLoggedInValue(false);
      console.log(isLoggedIn);

      navigation.navigate("FoodHome");
    } 
    catch (error) {
      console.log('not signed out');
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.view0}>
      </View>

      <View style={styles.view1}>

        <View style={styles.view1a}>
          <TouchableOpacity onPress={()=>{navigation.navigate("FoodHome")}}>
            <AntDesignIcon name="arrowleft" size={30}/>
          </TouchableOpacity>
        </View>

        <View style={styles.view1b}>
        </View>

      </View>

      <View style={styles.view2}>
        <View style={styles.view21}>
          <View style={styles.view21a}>
            <Text style={{fontWeight:"bold", fontSize:18, textTransform:"uppercase"}}>{name}</Text>
          </View>
          <View style={styles.view21b}>
            <TouchableOpacity onPress={()=>{navigation.navigate("EditDetails")}}>
              <Text style={{color:"#ff6600", fontWeight:"bold", fontSize:16}}>EDIT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view22}>
          <Text style={{fontSize:16, color:"#3B3A3A"}}>{number} . {email}</Text>
        </View>
      </View>

      <View style={{ width:"91%", borderColor: 'black', borderWidth:1 }}/>

      <View style={styles.view3}>
        <View style={styles.view3a}>
          <Text>
            <Text style={{fontWeight:"bold", fontSize:16,}}>My Account</Text>{"\n"}
            <Text style={{fontSize:14, lineHeight:20, color:"#3B3A3A"}}>Favourites, Offers & Settings</Text>
          </Text>
        </View>
        <View style={styles.view3b}>
            <AntDesignIcon name="down" size={20} color="#888787"/>
        </View>
      </View>

      <View style={{ width:"91%", borderColor: '#C2C1C1', borderWidth:.5 }}/>

      <View style={styles.view3}>
        <View style={styles.view3a}>
          <Text>
            <Text style={{fontWeight:"bold", fontSize:16,}}>Addresses</Text>{"\n"}
            <Text style={{fontSize:14, lineHeight:20, color:"#3B3A3A"}}>Share, Edit & Add New Addresses</Text>
          </Text>
        </View>
        <View style={styles.view3b}>
            <AntDesignIcon name="right" size={20} color="#888787"/>
        </View>
      </View>

      <View style={{ width:"91%", borderColor: '#C2C1C1', borderWidth:.5 }}/>

      <View style={styles.view3}>
        <View style={styles.view3a}>
          <Text>
            <Text style={{fontWeight:"bold", fontSize:16,}}>Payments & Refunds</Text>{"\n"}
            <Text style={{fontSize:14, lineHeight:20, color:"#3B3A3A"}}>Refund Status & Payment Modes</Text>
          </Text>
        </View>
        <View style={styles.view3b}>
            <AntDesignIcon name="down" size={20} color="#888787"/>
        </View>
      </View>

      <View style={{ width:"91%", borderColor: '#C2C1C1', borderWidth:.5 }}/>

      <View style={styles.view3}>
        <View style={styles.view3a}>
          <Text>
            <Text style={{fontWeight:"bold", fontSize:16,}}>Swiggy Money</Text>{"\n"}
            <Text style={{fontSize:14, lineHeight:20, color:"#3B3A3A"}}>View Account Balance & Transactions History</Text>
          </Text>
        </View>
        <View style={styles.view3b}>
            <AntDesignIcon name="right" size={20} color="#888787"/>
        </View>
      </View>

      <View style={{ width:"91%", borderColor: '#C2C1C1', borderWidth:.5 }}/>

      <View style={styles.view3}>
        <View style={styles.view3a}>
          <Text>
            <Text style={{fontWeight:"bold", fontSize:16,}}>Help</Text>{"\n"}
            <Text style={{fontSize:14, lineHeight:20, color:"#3B3A3A"}}>FAQs & Links</Text>
          </Text>
        </View>
        <View style={styles.view3b}>
            <AntDesignIcon name="right" size={20} color="#888787"/>
        </View>
      </View>

      <View style={styles.view4}>
      </View>

      <View style={styles.view3}>
        <View style={styles.view3a}>
        <TouchableOpacity  onPress={() =>  { signedOut() } }>
            <Text style={{fontWeight:"bold", fontSize:16,}}>LOGOUT OPTIONS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view3b}>
            <AntDesignIcon name="right" size={20} color="#888787"/>
        </View>
      </View>

      <View style={styles.view5}>
        <Text style={{color:"#888787"}}>{"\n"}App version 4.16.5 (1077)</Text>
      </View>
      
    </View>
  );
};


