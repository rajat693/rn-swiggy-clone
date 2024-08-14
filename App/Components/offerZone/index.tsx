import React from 'react';
import { View, Text, Image } from 'react-native';
import AntSearch from "react-native-vector-icons/AntDesign";
import styles from './styles';

export const OfferZone = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image style={styles.image} source={ require("../../Assets/Images/OtherImages/percentage.png")}/>
      </View>
      <View style={styles.view2}>
      <Text style={styles.text}>Get big savings with Offer Zone</Text>
      </View>
      <View style={styles.view3}>
      <AntSearch style={styles.icon} name="right" size={20} color="#464646" />
      </View>
    </View>
  );
};
