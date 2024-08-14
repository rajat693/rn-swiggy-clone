import { StyleSheet, Dimensions } from "react-native";
import { s, vs, ms, mvs } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// console.log(windowWidth); //390, 320, scale=1.12
// console.log(windowHeight); //844, 568, scale=1.48

const styles = StyleSheet.create({

    container: {
      paddingTop:ms(80,1.48),
      backgroundColor:"#F4DCEA",
      alignItems:"center",
      // borderWidth:1,
      padding:ms(14,1.12),
      paddingBottom:ms(20,1.48),
    },
    view1:{
      // borderWidth:1,
      height:ms(35,1.48),
      flexDirection:"row",
      width:"100%",
      marginBottom:ms(9,1.48),
      alignItems:"center",
    },
    view1pt1:{
      // borderWidth:1,
      width:"67%",
    },
    view1pt2:{
      // borderWidth:1,
      width:"33%",
      borderRadius:ms(8,1.12),
      height:ms(34,1.48),
      borderColor:"#A30053",
      backgroundColor:"#A30053",
      alignItems:"center",
      justifyContent:"center",
    },
    view2:{
      // borderWidth:1,
      borderRadius:ms(7,1.12),
      height:ms(42,1.48),
      flexDirection:"row",
      width:"100%",
      backgroundColor:"white",
      padding:ms(5,1.12),
      justifyContent:"space-between",
      shadowColor: '#989898',
      shadowOffset: {
        width: 0,
        height: ms(2,1.48),
      },
      shadowRadius: ms(5,1.12),
      shadowOpacity: 1.0,
      // borderColor:"#BDBBBB",
    },
    insta:{
      fontSize:ms(30,1.12),
      fontWeight:"800",
      color:"#A30053"
    },
    time:{
      color:"white",
      fontSize:ms(17,1.12),
      fontWeight:"bold",
    },
    view2pt1:{
      // borderWidth:1,
      width:"88%",
      justifyContent:"center",
    },
    view2pt2:{
      // borderWidth:1,
      width:"10%",
      justifyContent:"center",
      alignItems:"center",
    },
    txtinput:{
      fontSize:ms(17,1.12),
    }
  });

  export default styles;