import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: '#2c3e50',
      height:"100%",
    },
    topnavigator:{
      // borderWidth:1,
      paddingTop:"10%",
      paddingHorizontal:"2.7%",
      backgroundColor:"#efebf2",
      height:"36%",
    },
    midview:{
      height:"21%",
      backgroundColor:"#efebf2",
      // borderWidth:1,
      paddingHorizontal:"2%",
    },
    fadetxt:{
      fontWeight:"900",
      fontSize:50,
      color:"#aca2b3",
      // borderWidth:1,
    },
    fadetxtinner:{
      lineHeight:38,
    },
    imgview:{
      // borderWidth:1,
      borderRadius:100,
      height:"75%",
      width:"33%",
      position:"absolute",
      bottom:"12%",
      left:"35%",
      backgroundColor:"white",
      shadowColor:"#989898",
        shadowOffset:{
          width:0,
          height:2
        },
        shadowRadius:5,
        shadowOpacity:1,
    },
    img:{
      height:"100%",
      width:"100%",
      resize:"contain",
    },
    bottomloginview:{
      padding:"3%",
      // borderWidth:1,
      // flex:1,
      minHeight:"43%",
      paddingVertical:"5%",
    },
    accounttxt:{
      fontSize:22,
      fontWeight:"bold",
    },
    loginmaintxt:{
      fontSize:16,
      lineHeight:20,
      color:"#464646",
    },
    loginbtn:{
      width:"100%",
      backgroundColor:"#f57953",
      padding:"3%",
      marginVertical:"4%",
      alignItems:"center",
    },
    continuebtn:{
      width:"100%",
      // backgroundColor:"#f57953",
      padding:"3%",
      marginVertical:"4%",
      alignItems:"center",
    },
    logintxt1:{
      fontSize:20,
      fontWeight:"bold",
      color:"#f5f3f2",
      // backgroundColor:"#e3937b",
    },
    logintxt2:{
      fontSize:20,
      fontWeight:"bold",
      color:"#f5f3f2",
      // backgroundColor:"#f57953",
    },
    logintxt:{
      fontSize:20,
      fontWeight:"bold",
      color:"#f5f3f2",
      // backgroundColor:"#f57953",
    },
    bottomNavigationView: {
      backgroundColor: '#fff',
      width: '100%',
      height: "50%",
      borderWidth:1,
      padding:"4%",
    },
    loginsheet:{
      fontSize:22,
      fontWeight:"bold",
    },
    txt:{
      fontSize:15,
    },
    smalltxt:{
      fontSize:13,
    },
    numberinput:{
      // borderWidth:1,
      marginVertical:"2%",
      height:45,
      fontSize:18,
      borderBottomWidth:3,
      borderBottomColor:"red",
      fontWeight:"600",
    },
    continuemaintxt:{
      fontSize:15,
      lineHeight:20,
      color:"#464646",
    }
  });
  
export default styles;