import { StyleSheet, Dimensions } from "react-native";
import { s, vs, ms, mvs } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// console.log(windowWidth); //390, 320, scale=1.12
// console.log(windowHeight); //844, 568, scale=1.48

const styles = StyleSheet.create({
    container: {
      // borderWidth:1,
      height:ms(350,1.48),
      width:windowWidth,
    },
    topview:{
      backgroundColor:"#E7E5E5",
      width:"100%",
      height:"100%",
      padding:ms(11,1.12),
      // marginTop:-10,
      // borderWidth:1,
      borderBottomEndRadius:ms(28,1.12)
    },
    top1:{
      marginTop:ms(25,1.48),
      // borderWidth:1,
      height:ms(27,1.48),
      flexDirection:"row",
      justifyContent:"space-between",
    },
    top2:{
      marginTop:ms(10,1.48),
      borderWidth:ms(.5,1.12),
      borderColor:"#B5B3B3",
      height:ms(260,1.48),
      borderRadius:ms(25,1.12),
      backgroundColor:"#FCFAFA",
      padding:ms(11,1.12),
      shadowColor: '#B5B3B3',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: ms(8,1.48),
      shadowOpacity: 1.0,
      elevation:10, //valid only for android 5+ version
    },
    top1a:{
      width:"12%",
      // borderWidth:1,
      borderColor:"red",
      height:"100%",
    },
    top1b:{
      width:"56%",
      // borderWidth:1,
      borderColor:"red",
      height:"100%",
    },
    top1c:{
      width:"30%",
      // borderWidth:1,
      borderColor:"red",
      height:"100%",
    },
    top2a:{
      flexDirection:"row",
      height:ms(31,1.48),
      // borderWidth:1,
      justifyContent:"space-between",
    },
    top21:{
      // borderWidth:1,
      borderColor:"red",
      width:"70%",
    },
    top22:{
      // borderWidth:1,
      borderColor:"red",
      width:"7%",
    },
    top23:{
      // borderWidth:1,
      borderColor:"red",
      width:"22%",
      justifyContent:"center",
      alignItems:"center",
    },
    top2b:{
      flexDirection:"row",
      // borderWidth:1,
      height:ms(29,1.48)
    },
    top2b1:{
      width:ms(21,1.12),
      height:ms(20,1.48),
      backgroundColor:"green",
      borderRadius:ms(50,1.12),
      alignItems:"center",
      justifyContent:"center",
    },
    });

    export default styles;