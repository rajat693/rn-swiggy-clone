import { StyleSheet, Dimensions } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// console.log(windowWidth); //390, 320, scale=1.12
// console.log(windowHeight); //844, 568, scale=1.48

const styles = StyleSheet.create({
    container: {
      marginVertical:ms(9,1.48),
      borderColor:"red",
      // borderWidth:2,
    },
    items: {
      // borderWidth:1,
      borderColor:"green",
      margin: ms(4,1.3),
      height: ms(110,1.48),
      width: ms(120,1.12),
    },
    mainimage:{
      height:"100%", 
      width:"100%", 
      borderWidth:1,
      borderRadius:ms(9,1.12),
    },
    header:{
      marginBottom:ms(8,1.48),
      marginLeft:ms(8,1.12),
        fontSize:ms(19,1.12),
        // fontWeight:ms("800",1.12), //not valid
      fontWeight:"800",
    }
  });

  export default styles;