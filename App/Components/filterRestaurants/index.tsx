import React from 'react';
  import { FlatList, Text, View} from 'react-native';
  import OctIcons from "react-native-vector-icons/Octicons";
  import { datalists } from "../../Data/filterRestaurantComponentData";
  import styles from './styles';
  
  export const FilterRestaurants = () => {
  
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          data = {datalists}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.items}>
              <Text style={styles.text}>
                {item.title} {" "}
                {item.consistIcon ? (
                  <OctIcons name={item.icon_name} size={16}></OctIcons>
                ):(
                  null
                )
                }
              </Text>
            </View>
          )}
        />
      </View>
    );
  }