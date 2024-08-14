import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
      marginTop:"6%",
      // borderWidth:2,
      borderColor:"red",
      // paddingVertical:10,
      // height:"12%",
      height: windowWidth<350 ? windowHeight * 0.4 : "12%",
      width:"100%",
      marginHorizontal:"1.5%",
    },
    items: {
      // borderWidth:1,
      borderColor:"green",
      paddingHorizontal: ".5%",
      // marginHorizontal: ".5%", //not working
      height:"100%",
      // width:"30%", //not working properly
      // flex:1,
    },
    mainimage:{
      height:"100%", 
      width:"100%",
      resizeMode:"cover",
      borderRadius:20,
      // borderWidth:1,
    },
    view1:{
      // borderWidth:1,
      height:"67%",
      width:"100%",
    },
    view2:{
        marginTop:5,
      // borderWidth:1,
      height:"30%",
      paddingHorizontal:5,
    },
    desc:{
      flex:1,
      flexDirection:"row",
    },
    header:{
        margin:10,
        marginLeft:15,
        fontSize:18,
        fontWeight:"bold",
    },
    small_img:{
        width:20,
        height:20,
        borderRadius:10,
    },
    offer:{
      color:"white",
      fontWeight:"900",
      fontSize:16,
      position:"absolute",
      bottom:10,
    },
    discount:{
      color:"white",
      fontSize:12,
    },
    view:{
      position:"absolute",
      bottom:8,
      left:5,
      // borderWidth:1,
      // backgroundColor: "#000000c0"
    },
    starview:{
      width:16,
       height:16,
       paddingTop:2,
       backgroundColor:"green",
       borderRadius:50,
       alignItems:"center",
    },
    gradient:{
      height:"100%",
      borderRadius:17,
    }
  });

  export default styles;