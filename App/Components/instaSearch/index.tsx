import React from 'react';
import { View, Text, TextInput } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from './styles';

export const InstaSearch = () => {
  return (
    <View style={styles.container}> 

      <View style={styles.view1}>
        <View style={styles.view1pt1}>
          <Text style={styles.insta}>instamart</Text>
        </View>
        <View style={styles.view1pt2}>
          <Text style={styles.time}>10-15 mins</Text>
        </View>
      </View>

      <View style={styles.view2}>
        <View style={styles.view2pt1}>
          <TextInput style={styles.txtinput} placeholder={"Search for groceries, veggies and more..."} placeholderTextColor="#818080" />
        </View>
        <View style={styles.view2pt2}>
          <AntDesign name="search1" size={24} color="#818080" />
        </View>
      </View>
    </View>
  );
};
