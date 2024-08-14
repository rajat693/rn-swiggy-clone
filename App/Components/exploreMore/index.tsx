import React from 'react';
import { FlatList, Text, View, Image, ScrollView } from 'react-native';
import { exploredata } from '../../Data';
import styles from "./styles";
import FastImage from "react-native-fast-image";

export const ExploreMore = () => {

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Explore more categories</Text>
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false} 
      >
        <FlatList
          data = {exploredata}
          numColumns={Math.ceil(exploredata.length / 2)}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.items}>
              <FastImage style={styles.mainimage} source={item.restaurant_url}/>
            </View>
          )}
        />
    </ScrollView>
    </View>
  );
}