import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Fontisto from "react-native-vector-icons/Ionicons";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export const SearchBar = () => {
  const navigation:any =useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={()=> navigation.navigate("Search")}>
        <View style={styles.container}>
          <View style={styles.view1}>
          <Text style={{fontSize:16, color:"#464646"}}>Search for restaurant, item or more</Text>
          </View>
          <View>
          <Fontisto name="search" size={22} color="#464646" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
