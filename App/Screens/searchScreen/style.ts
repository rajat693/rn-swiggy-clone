import {StyleSheet} from "react-native";
import { s, vs, ms, mvs } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        // borderWidth:1,
        height:"100%",
        width:"100%",
        paddingHorizontal:"5%",
        paddingTop:"15%",
    },
    searchbar:{
        borderWidth:2,
        borderColor:"gray",
        padding:"2.5%",
        borderRadius:ms(10,0.3),
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:"3%",
    },
    view1:{
    //   borderWidth:1,
      width:"10%",
    },
    view2:{
      // borderWidth:1,
      width:"80%",
      justifyContent:"center",
    },
    view3:{
    //   borderWidth:1,
      width:"10%",
      alignItems:"center",
    },
    crossbtn:{
      fontSize:ms(24),
      fontWeight:"500",
    },
    textInput:{
      fontSize:ms(20),
      // fontWeight:"bold",
    },
    restaurants:{
      // borderWidth:1,
      marginTop:"5%",
      height:"9%",
    },
    pic_view:{
    //   borderWidth:1,
      width:"20%",
    },
    name_view:{
    //   borderWidth:1,
      justifyContent:"center",
      width:"75%",
    },
    item_view:{
      flexDirection:"row",
      justifyContent:"space-between",
    }
});