import React, { useContext } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';
import { datalist } from "../../Data";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import { CloneContext } from '../../usingContextApi';
import styles from './styles';
import LinearGradient from "react-native-linear-gradient";

export const RestaurantsToExplore = () => {

  const { height, width } = useWindowDimensions();
  // console.log(width);
  const { setClickedRestaurant_id }:any = useContext(CloneContext);
  const navigation:any = useNavigation();

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>100+ Restaurants to explore</Text>
      {
        datalist.map((item,index)=> (
          <View key={index}>
            <TouchableOpacity onPress={()=>{ navigation.navigate("RestaurantDetails"); setClickedRestaurant_id(item.restaurant_id) }}>

            <View style={styles.items}>
              
              <View style={styles.view1}>
                <ImageBackground style={styles.mainimage} imageStyle={{ borderRadius: 18}} source={item.restaurant_url}>
                  <LinearGradient colors={['transparent', 'transparent', 'black']} style={styles.gradient}>
                    <View style={styles.view}>
                    <Text>
                      <Text style={styles.offer}>{item.offer}{"\n"}</Text>
                      <Text style={styles.discount}>{item.discount}</Text>
                    </Text>
                    </View>
                  </LinearGradient>
                </ImageBackground>
              </View>

              <View style={styles.view2}>
                <Text style={styles.text1}>
                  {item.title}
                </Text>
                <Text style={styles.text2}>
                  <View style={styles.starview}>
                    <AntDesign name="star" color="white" size={14}/>
                  </View>
                  {" "}{item.rating} {item.orders} . {item.time}
                </Text>
                <Text style={styles.rest_text}>
                  {item.address.name}{"\n"}
                  {item.address.street}, {item.address.distance}
                </Text>
              </View>

            </View>

            </TouchableOpacity>
          </View>
        ))
      }
      <View style={{ height: width<350 ? height * 0.0: height * 0.2 }}></View>
      
    </View>
  );
}
