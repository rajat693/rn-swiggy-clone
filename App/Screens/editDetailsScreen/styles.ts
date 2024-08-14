import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      height:"100%",
      alignItems: 'center',
      backgroundColor:"white",
    },
    view0:{
      width:"100%",
      height:"7%",
      backgroundColor:"white",
    },
    view1: {
      flexDirection:"row",
      // borderWidth:1,
      // borderColor:"green",
      justifyContent:"space-between",
      backgroundColor:"white",
      width:"100%",
      height:"5%",
      paddingHorizontal:18,
    },
    view1a: {
      // borderWidth:1,
      width:"49%",
    },
    view1b: {
      // borderWidth:1,
      width:"49%",
    },
    view3:{
      // borderWidth:2,
      // borderColor:"green",
      flexDirection:"row",
      width:"100%",
      paddingHorizontal:"4%",
      paddingBottom:"2.5%",
      paddingTop:"6%",
      backgroundColor:"white",
      height:"10%"
    },
    view3a:{
      // borderWidth:1,
      width:"89%",
    },
    view3b:{
      paddingTop:"2.5%",
    },
    input: {
      height: "50%",
      width:"95%",
      // borderWidth: 1,
      // lineHeight:2,
      marginTop:-15,
      fontSize:16,
    },
    greylineview:{ 
      width:"91%", 
      borderColor: '#C2C1C1', 
      borderWidth:.5 
    },
    orangelineview:{ 
      width:"91%", 
      borderColor: '#ff6600', 
      borderWidth:.5 
    },
    newview:{
      // flex:1,
      flexDirection:"row", 
      height:"6%", 
      width:"100%", 
      justifyContent:"space-evenly",
      // borderWidth:1,
      marginTop:"4%",
    },
    updatebtn:{
      backgroundColor:"#F8AC7A", 
      height:"100%", 
      alignItems:"center",
      justifyContent:"center",
      borderRadius:4,
    },
    cancelbtn:{
      backgroundColor:"white", 
      height:"100%",
      borderWidth:1,
      borderColor:"#ff6600",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:3,
    },
  });
  
export default styles;  