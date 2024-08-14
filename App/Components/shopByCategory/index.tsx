import React from 'react';
import { View, Text, Image } from 'react-native';
import { shopdatalist } from '../../Data';
import styles from './styles';
import FastImage from "react-native-fast-image";

export const ShopByCategory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.header}> Shop By Category</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {
          shopdatalist.map((item)=>{
            return (
              <View key={item.id} style={styles.items}>
                  <FastImage style={styles.mainimage} source={item.restaurant_url}/>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
            )}
          )
        }
        </View>
      </View>
    </View>
  );
};
