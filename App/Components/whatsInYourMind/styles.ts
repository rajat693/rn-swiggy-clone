import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginTop:"5%",
      // borderWidth:3,
      borderColor:"red",
      height:"11.2%",
    },
    items: {
      // borderWidth:1,
      borderColor:"green",
      paddingHorizontal: "1%",
      marginHorizontal: 2,
      height:90,
      width:80,
      // flex:1,
    },
    mainimage:{
      height:"65%", 
      width:"100%", 
      borderWidth:1,
      borderRadius:100,
      // resizeMode:"stretch",
    },
    name:{
      textAlign:"center",
      fontSize:12,
    },
    header:{
      marginBottom:"5%",
      marginLeft:"4%",
        fontSize:18,
        fontWeight:"bold",
    }
  });

  export default styles;