import React, {useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { datalist } from '../../Data';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import { CloneContext } from '../../usingContextApi';
import styles from './styles';
import { s, vs, ms, mvs } from 'react-native-size-matters';

export const RestaurantInfo = () => {
  const navigation:any = useNavigation();
  const { clickedRestaurant_id }:any=useContext(CloneContext);
  
  return (
    <View>
      {/* // console.log(datalist[idno-1].title), */}
      
        {
          datalist.map((element)=>{
            return (
              // <View >
              //   <Text></Text>
              // {
                (element.restaurant_id == clickedRestaurant_id)?
                ( 
                  // null
                  // console.log(element.title),
                  // console.log(element.menu[1].index),
                  // {
                  //   element.menu.map((item,index)=> (
                  //     // console.log(index),
                  //     <View key={index}>

                        <View key={element.restaurant_id} style={styles.container}>
                          <View style={styles.topview}>

                          
                            <View style={styles.top1}>
                              <View style={styles.top1a}>
                                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                                  <AntDesign name="arrowleft" color="#6B6969" size={ms(29,1.12)}/>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.top1b}></View>
                              <View style={styles.top1c}>
                                <TouchableOpacity onPress={()=>{}}>
                                <Text style={{fontSize:ms(20,1.12), color:"#6B6969"}}><AntDesign name="search1" size={ms(24,1.12)}/>{" "}Search</Text>
                                </TouchableOpacity>
                              </View>
                            </View>

                            <View style={styles.top2}>

                              <View style={styles.top2a}> 
                                <View style={styles.top21}>
                                <Text style={{fontSize:ms(22,1.12), fontWeight:"bold"}}>{element.title}</Text>
                                </View>
                                <View style={styles.top22}></View>
                                <View style={styles.top23}><Text>
                                  <Ionicons name="share-social" color="#6B6969" size={ms(28,1.12)}/>{"  "}
                                  <Ionicons name="heart-outline" color="#6B6969" size={ms(28,1.12)}/>{"\n"}
                                </Text></View>
                              </View>

                              <View style={styles.top2b}>
                                <View style={styles.top2b1}>
                                  <AntDesign style={{}} name="star" color="white" size={ms(14,1.12)}/>
                                </View>
                                <View style={{}}>
                                  <Text style={{fontWeight:"600", fontSize:ms(16,1.12)}}>  {element.ratings}</Text>
                                </View>
                              </View>

                              <Text>
                                <Text style={{color:"#6B6969",fontSize:ms(15,1.12)}}>
                                  {element.details}{"\n"}{"\n"}
                                </Text>
                                <Text>
                                  <MaterialCommunityIcons name="map-marker-distance" color="#6B6969" size={ms(25,1.12)}/>{"   "}
                                  <Text style={{fontWeight:"700", fontSize:ms(15,1.12)}}>
                                    Outlet{"   "}
                                  </Text>
                                  <Text style={{color:"#6B6969" ,fontSize:ms(15,1.12)}}>
                                    {element.from}{"\n"}{"\n"}
                                  </Text>
                                  
                                  <View style={{flexDirection:"row"}}>
                                    <Text style={{fontWeight:"700", fontSize:ms(15,1.12)}}>
                                      {element.time}
                                    </Text>
                                    <Text style={{color:"#6B6969" ,fontSize:ms(15,1.12) }}>
                                    {"   "}Delivery to Home
                                    </Text>
                                  </View>
                                </Text>

                                <Text style={{color:"#6B6969" ,fontSize:ms(15,1.12) }}>
                                  {"\n"}{"\n"}<MaterialIcons name="directions-bike" size={ms(28,1.12)}/>{"   "}{element.data}
                                </Text>
                              </Text>
                            </View>
                          </View>
                        </View>
                       
                  //     </View>
                  //   ))
                  // }

                ): (
                  null
                )
              // }
              // </View>
            )
          })
        }
      
    
    </View>
  );
};
