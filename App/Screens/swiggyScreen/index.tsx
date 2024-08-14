import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from "react-native-fast-image";

export function SwiggyScreen() {
  return (
    <View style={styles.container}>
      <FastImage style={styles.image} source={require("../../Assets/Images/OtherImages/swiggy.png")}/>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{ flex: 1, justifyContent: 'center', alignItems: 'center' },
  image:{ 
    height:"100%",
    width:"100%",
    resize:"contain"
  },
})