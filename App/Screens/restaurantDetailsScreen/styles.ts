import { StyleSheet, Dimensions } from "react-native";
import { s, vs, ms, mvs } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // height:windowHeight,
      width:windowWidth,
    },
    midview:{
      // borderWidth:1,
      height:ms(45,1.48),
      justifyContent:"center",
      alignItems:"center",
      marginTop:ms(14,1.48),
    },
    midtext:{
      fontSize:ms(20,1.12),
      letterSpacing:ms(4,1.12),
    },
    displayView:{
      // borderWidth:1,
      borderRadius:ms(15,1.12),
      paddingVertical:ms(15,1.48),
      padding:ms(8,1.12),
      width:"92%",
      position:"absolute",
      bottom:ms(20,1.48),
      marginHorizontal:ms(13,1.12),
      backgroundColor:"#34804f",
      shadowColor: 'gray',
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowRadius: ms(100, 1.12),
      shadowOpacity: 1.0,
      flexDirection:"row",
    },
    text:{
      // borderWidth:1,
      width:"73%",
      fontSize:ms(15,1.12),
      fontWeight:"bold",
      color:"#E3E2E2",
    },
    txt:{
      color:"#E3E2E2",
      fontWeight:"bold",
      fontSize:ms(17,1.12),
    }
  });

  export default styles;
  