import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#EEECEC",
      height:"100%",
      width:"100%",
      // marginTop:"10%",
    },
    topview:{
      // borderWidth:1,
      paddingTop:"10%",
      padding:"2%",
      backgroundColor:"#f0f2f0",
      shadowColor: '#B5B3B3',
      shadowOffset: {
        width: 0,
        height: 2,
        },
      shadowRadius: 10,
      shadowOpacity: 1,
    },
    toptext:{
      fontSize:22,
      fontWeight:"500",
      margin:"1%",
    },
    cartview:{
      // borderWidth:1,
      width:"92%",
      // height:300,
      backgroundColor:"white",
      marginTop:"8%",
      margin:"4%",
      borderRadius:20,
      shadowColor: '#B5B3B3',
      shadowOffset: {
        width: 0,
        height: 1
        },
      shadowRadius: 15,
      shadowOpacity: 1.0,
      paddingVertical:"1.5%",
    },
    midtxt:{
      marginTop:"4%",
      fontSize:18,
      fontWeight:"bold",
      marginHorizontal:"5%",
      color:"#464646",
      // borderWidth:1,
    },
    offerview:{
      // borderWidth:1,
      width:"92%",
      height:"7%",
      backgroundColor:"white",
      margin:"4%",
      // padding:"3%",
      paddingHorizontal:"4%",
      borderRadius:20,
      shadowColor: '#B5B3B3',
      shadowOffset: {
        width: 0,
        height: 0
        },
      shadowRadius: 10,
      shadowOpacity: 1.0,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
    },
    offer1:{
      width:"92%",
      // borderWidth:1,
    },
    offer2:{
      width:"8%",
      // borderWidth:1,
    },
    coupon:{
      fontSize:18,
      fontWeight:"600",
      color:"#464646",
    },
    billview:{
      // borderWidth:1,
      width:"92%",
      // height:260,
      backgroundColor:"white",
      margin:"4%",
      paddingVertical:"3%",
      paddingHorizontal:"4%",
      borderRadius:20,
      shadowColor: '#B5B3B3',
      shadowOffset: {
        width: 0,
        height: 0
        },
      shadowRadius: 15,
      shadowOpacity: 1.0,
      flexDirection:"row",
      justifyContent:"space-between"
    },
    bill1:{
      // borderWidth:1,
      width:"70%",
    },
    bill2:{
      width:"25%",
      // borderWidth:1,
      alignItems:"flex-end",
    },
    billtxt:{
      lineHeight:30,
      fontSize:18,
      color:"#696868",
    },
    billtxttotal:{
      lineHeight:40,
      fontSize:20,
      fontWeight:"600",
      color:"#464646"
    },
    cartmainview:{
      // borderWidth:1,
      marginVertical:"1%",
      height:40,
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center",
    },
    cartpt1:{
      width:"47%",
      // borderWidth:1,
      borderColor:"blue",
    },
    cartpt2:{
      width:"23%",
      borderWidth:1.5,
      // borderColor:"blue",
      borderColor:"#696868",
      borderRadius:5,
      paddingHorizontal:"2%",
    },
    cartpt3:{
      width:"21%",
      // borderWidth:1,
      borderColor:"blue",
  
    },
    txt:{
      fontSize:18,
    },
    innertxt:{
      fontSize:20,
      color:"green",
      fontWeight:"bold",
    },
    bottomtxt:{
      marginTop:"3%",
      fontSize:18,
      fontWeight:"bold",
      marginHorizontal:"5%",
      color:"red",
    },
    pic:{
      width:"5%",
      height:"5%",
      borderRadius:5,
    },
    topnavigator:{
        // borderWidth:1,
        paddingTop:"12%",
        paddingHorizontal:"4%",
        backgroundColor:"#ededed",
    },
    centerview:{
      // borderWidth:1,
      flex:1,
      justifyContent:"center",
      alignItems:"center",
    },
    panimg:{
      // borderWidth:1,
      height:"35%",
      resize:"contain",
      width:"70%",
    },
    foodtext1:{
      fontSize:28,
      fontWeight:"800",
      textAlign:"center",
    },
    foodview:{
      // borderWidth:1,
      width:"80%",
      alignItems:"center",
    },
    foodtext2:{
      fontSize:19,
      marginTop:"3%",
      color:"#464646",
      textAlign:"center",
    },
    browse:{
      borderWidth:1,
      borderRadius:13,
      padding:"4%",
      backgroundColor:"#f5cdbc",
      borderColor:"#f0ab8d",
    },
    browseText:{
      fontSize:17,
      fontWeight:"bold",
      color:"#fc3903",
    }
  });

  export default styles;