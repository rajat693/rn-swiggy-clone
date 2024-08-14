import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
// console.log(windowHeight); //568 for Iphone 7
// console.log(windowWidth);  //390 for Iphone 13 & 320 for Iphone 7

const styles = StyleSheet.create({
    container: {
      // height:"100%",
      width:windowWidth,
      // borderWidth:3,
      borderColor:"red",
      paddingVertical:"3%",
    },
    items: {
      flexDirection:"row",
      // borderWidth:2,
      borderColor:"green",
      paddingHorizontal: "2%",
      marginBottom: "5%",
      width: windowWidth,
      height : windowHeight<600 ? windowHeight * 0.22 : windowHeight * 0.18,
      justifyContent:"space-around",
    },
    view1:{
      width:"36%",
      height:"100%",
      // borderWidth:1,
      borderColor:"blue",
    },
    view2:{
      width:"57%",
      height:"100%",
      // borderWidth:1,
      borderColor:"blue",
      justifyContent:"center",
    },
    mainimage:{
      height:"100%", 
      width:"100%", 
      // borderWidth:1,
    },
    starimage:{
      height:23,
      width:23,
      borderRadius:100,
    },
    text1:{
      fontWeight:"bold",
      // fontSize:20,
      fontSize: windowWidth < 350 ? windowHeight * 0.032 : windowHeight * 0.027,
    },
    text2:{
      fontWeight:"bold",
      // fontSize:18,
      fontSize: windowWidth < 350 ? windowHeight * 0.028 : windowHeight * 0.023
    },
    rest_text:{
      // fontSize:16,
      fontSize: windowWidth < 350 ? windowHeight * 0.025 : windowHeight * 0.02
    },
    offer:{
      color:"white",
      fontWeight:"900",
      // fontSize:16,
      fontSize: windowWidth < 350 ? windowHeight * 0.025 : windowHeight * 0.02,
      position:"absolute",
      bottom:10,
    },
    discount:{
      color:"white",
      // fontSize:12,
      fontSize: windowWidth < 350 ? windowHeight * 0.021 : windowHeight * 0.016
    },
    view:{
      position:"absolute",
      bottom:8,
      left:5,
    },
    starview:{
      width:22,
       height:22,
       paddingTop:3,
       backgroundColor:"green",
       borderRadius:50,
       alignItems:"center",
    },
    header:{
      margin:"2%",
      marginBottom:"5%",
      marginLeft:"4%",
      // fontSize:18,
      fontSize: windowWidth < 350 ? windowHeight * 0.033 : windowHeight * 0.028,
      fontWeight:"bold",
    },
    gradient:{
      height:"100%",
      borderRadius:17,
    }
  });
  
  export default styles;