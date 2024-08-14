import React, {Component, useState,  useEffect} from "react";
import { View, StyleSheet, useWindowDimensions, Dimensions } from "react-native";
import Slideshow from "react-native-image-slider-show";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
// console.log(windowWidth);  //for android 392.73

const dataSource = [
  {
    url: require("../../Assets/Images/OfferImages/offer1.jpeg")
  },
  {
    url: require("../../Assets/Images/OfferImages/offer2.jpeg"),
  },
  {
    url: require("../../Assets/Images/OfferImages/offer3.jpeg"),
  }
];

export const OfferSlider = ()=> {

  const [position, setPosition] = useState(0)

  useEffect(()=>{
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  })
  
    return (
      <View style={styles.view}>
        <Slideshow 
        position={position} 
        dataSource={dataSource} 
        height={ windowWidth<350 ? windowHeight * .3 : windowHeight * .28 }
        />
      </View>
    )
}
const styles=StyleSheet.create({
  view:{
    marginTop:"5%",
    // borderWidth:1,
  }
})
