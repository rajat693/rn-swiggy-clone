import { StyleSheet, Dimensions } from "react-native";
import { s, vs, ms, mvs } from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    logo :{
        width:ms(17,1.12),
        height:ms(17,1.12),
      },
  bottomview:{
    // borderWidth:1,
    // flex:1,
    marginTop:ms(9,1.48),
  },
  menuitems: {
    flexDirection:"row",
    // borderWidth:2,
    borderColor:"green",
    paddingHorizontal: ms(5,1.12),
    marginVertical: ms(12,1.48),
    height:ms(135,1.48),
    width :"100%",
    justifyContent:"space-around",
  },
  view1:{
    width:"38%",
    height:"100%",
    // borderWidth:1,
    borderColor:"blue",
  },
  view2:{
    width:"56%",
    height:"100%",
    // borderWidth:1,
    borderColor:"blue",
    paddingVertical:ms(6,1.48),
  },
    mainimage:{
    height:"95%", 
    width:"100%", 
    // borderWidth:1,
  },
  offer:{
    color:"green",
    fontWeight:"800",
    fontSize:ms(19,1.12),
    // borderWidth:1,
  },
  view:{
    position:"absolute",
    // top:ms(90,1.48),
    bottom:ms(-7,1.48),
    left:ms(5,1.12),
    width:"73%",
    borderRadius:ms(10,1.12),
    height:ms(33,1.48),
    paddingLeft:ms(5,1.12),
    // borderWidth:1,
    // backgroundColor:"white",
    marginHorizontal:ms(13,1.12),
    backgroundColor:"#FCFAFA",
    shadowColor: '#B5B3B3',
    shadowOffset: {
    width: 0,
    height: 0
    },
    shadowRadius: ms(3,1.12),
    shadowOpacity: 1.0,
    alignItems:"center",
    justifyContent:"center",
  },
  header:{
    margin:ms(9,1.48),
    marginLeft:ms(14,1.12),
    fontSize:ms(21,1.12),
    fontWeight:"bold",
  },
  bestseller:{
    color:"red",
    fontWeight:"600",
    fontSize:ms(17,1.12),
    fontFamily:"Times New Roman",
  },
  name:{
    fontSize:ms(19,1.12),
    fontWeight:"600",
  },
  price:{
    fontSize:ms(17,1.12),
    lineHeight:ms(28,1.12),
  },
  phrase:{
    lineHeight:ms(22,1.12),
    color:"#6B6969"
  },
  dropdown: {
    marginVertical: ms(12,1.48),
    marginLeft:ms(10,1.12),
    height: ms(37,1.48),
    width: ms(110,1.12),
    backgroundColor: '#EEEEEE',
    borderRadius: ms(20,1.12),
    paddingHorizontal: ms(3,1.12),
    borderWidth:ms(1,1.12),
    borderColor:"gray",
    alignItems:"center",
    justifyContent:"center",
  },
  imageStyle: {
    width: ms(21,1.12),
    height: ms(21,1.48),
    // borderWidth:1,
    resizeMode:"cover",
    marginLeft:ms(5,1.12),
  },
  placeholderStyle: {
    fontSize: ms(15,1.12),
  },
  selectedTextStyle: {
    fontSize: ms(15,1.12),
    marginLeft: ms(2,1.12),
  },
  iconStyle: {
    width: ms(23,1.12),
    height: ms(23,1.12),
  },
  dropdown2: {
    marginVertical: ms(12,1.48),
    marginLeft:ms(10,1.12),
    height: ms(37,1.48),
    backgroundColor: '#EEEEEE',
    borderRadius: ms(20,1.12),
    paddingHorizontal: ms(8,1.12),
    borderWidth:ms(1,1.12),
    borderColor:"gray",
    alignItems:"center",
    justifyContent:"center",
  },
  bestsellertxt:{
    fontSize:ms(15,1.12),
  }
});

export default styles;