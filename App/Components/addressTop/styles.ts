import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection:"row",
      marginHorizontal:"4%",
      // borderWidth:1,
      borderColor:"blue",
      justifyContent:"space-between",
      height:"2.9%",
      padding:"1%",
    },
    view1:{
      width:"85%",
      // borderWidth:1,
      height:"100%",
    },
    view1a:{
      flexDirection:"row",
      height:"63%",
      // borderWidth:1,
    },
    view1b:{
      // borderWidth:1,
      height:"38%",
    },
    view2:{
      width:"14%",
      height:"100%",
      // borderWidth:1,
    },
    text1:{
      fontSize:22,
      fontWeight:"bold",
    },
    image:{
      height:"100%",
      width:"95%",
      borderRadius:50,
      resizeMode:"stretch",
    },
    icon1:{
      marginTop:"4%",
    },
    icon2:{
      marginLeft:"7%",
      marginTop:"10%",
    },
  });
  
export default styles;