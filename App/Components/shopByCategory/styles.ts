import { StyleSheet, Dimensions } from "react-native";
import { s, vs, ms, mvs } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// console.log(windowWidth); //390, 320, scale=1.12
// console.log(windowHeight); //844, 568, scale=1.48

const styles = StyleSheet.create({
    container: {
      marginTop:ms(7,1.48),
      // borderWidth:1,
      padding:ms(3,1.12),
    },
    header:{
      fontSize:ms(19,1.12),
      fontWeight:"800",
      marginBottom:ms(10,1.48),
    },
    view:{
      // borderWidth:1,
      justifyContent:"space-between",
    },
    items: {
      // borderWidth:1,
      borderColor:"green",
      marginHorizontal: ms(4,1.12),
      marginVertical:ms(6,1.48),
      // paddingRight:3,
      height:ms(105,1.48),
      width:"22.5%",
    },
    mainimage:{
      height:ms(80,1.48), 
      width:"100%", 
      // borderWidth:1,
      borderRadius:ms(9,1.12),
      // resizeMode:"stretch",
    },
    name:{
      textAlign:"center",
      fontSize:ms(11,1.12),
    },
  });
 export default styles;  