  import React from 'react';
  import { FlatList, Text, View, Image, ScrollView } from 'react-native';
  import { itemsdatalist } from "../../Data";
  import styles from './styles';
  
  export const WhatsInYourMind = () => {
  
    return (
      <View style={styles.container}>
      {/* you can't set height of a ScrollView i.e we have written this view */}
      <Text style={styles.header}>What's on your mind?</Text>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false} 
        >
          <FlatList
            //horizontal //error numColumns does not support horizontal
            data = {itemsdatalist}
            numColumns={Math.ceil(itemsdatalist.length / 2)}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.items}>
                <Image style={styles.mainimage} source={item.restaurant_url}/>
                {/* <Image style={styles.mainimage} source={require(item.restaurant_url)}/> */}
                <Text style={styles.name}>{item.name}</Text>
              </View>
            )}
          />
      </ScrollView>
      </View>
    );
  }
