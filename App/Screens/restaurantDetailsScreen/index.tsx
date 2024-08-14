import React, {useContext} from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { RestaurantsMenu,  RestaurantInfo } from '../../Components';
import styles from './styles';
import { CloneContext } from '../../usingContextApi';
import { useNavigation } from '@react-navigation/native';
import {Navigations}from "../../Interfaces";
import { s, vs, ms, mvs } from 'react-native-size-matters';
    
export const RestaurantDetailsScreen = () => {

  const { totalAmount, totalQty }:any = useContext(CloneContext);
  const navigation:Navigations = useNavigation();

  return (
    <View style={styles.container}>
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
      <View>

        <RestaurantInfo/>
        <View style={styles.midview}>
          <Text style={styles.midtext}>MENU</Text>
        </View>
        <RestaurantsMenu/>
        
        <View style={{ height:ms(60,1.48), borderWidth:0}}></View>

      </View>
    </ScrollView>
        {
          (totalQty)? (
              <View style={styles.displayView}>
                <View style={{width:"70%", borderWidth:0}}><Text style={styles.text}>{totalQty} item | Rs{totalAmount}</Text></View>
                <View style={{width:"30%", borderWidth:0}}><TouchableOpacity onPress={()=>{navigation.navigate("Bill")}}>
                  <Text style={styles.txt}>View Cart</Text>
                </TouchableOpacity></View>
              </View>

          ):(
            null
          ) 
        }
    </View>
  );
};
