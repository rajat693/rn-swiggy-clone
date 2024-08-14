import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {datalist} from '../../Data';
import {CloneContext} from '../../usingContextApi';
import styles from './styles';
import {SelectCountry} from 'react-native-element-dropdown';
import {local_data} from '../../Data/filterRestaurantMenu';
import { RestaurantsMenuDetails } from '../restaurantsMenuDetails';

export const RestaurantsMenu = () => {
  const { clickedRestaurant_id }:any = useContext(CloneContext);

  const [type, setType] = useState('both');
  const [bestsellerVal, setBestsellerVal] = useState(false);

  const toggle = () =>{
    if(bestsellerVal==false)
    setBestsellerVal(true);
    else
    setBestsellerVal(false);
  }
  
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <SelectCountry
          style={styles.dropdown}
          selectedTextStyle={styles.selectedTextStyle}
          placeholderStyle={styles.placeholderStyle}
          imageStyle={styles.imageStyle}
          iconStyle={styles.iconStyle}
          maxHeight={200}
          value={type}
          data={local_data}
          valueField="value"
          labelField="title"
          imageField="image"
          placeholder="Select type"
          searchPlaceholder="Search..."
          onChange={e => {
            setType(e.value);
          }}
        />
        <View style={styles.dropdown2}>
          <TouchableOpacity onPress={() => toggle()}>
            <Text
              style={[
                styles.bestsellertxt,
                {
                  color: bestsellerVal ? 'red' : 'black',
                  fontWeight: bestsellerVal ? '600' : '400',
                },
              ]}>
              Bestseller
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: '92%',
          borderColor: '#C2C1C1',
          borderWidth: 0.8,
          marginLeft: 15,
        }}
      />

      {datalist.map(element => {
        return (
          // <View >
          //   {
          element.restaurant_id == clickedRestaurant_id ? (

            <View key={element.restaurant_id} style={styles.bottomview}>
              <Text style={styles.header}>Recommended Items</Text>
              {element.menu.map((item, index) => {
                return (                 
                  (type=="veg" && item.veg && bestsellerVal && item.bestseller) ? (
                    <RestaurantsMenuDetails key={index} item={item} index={index}/>
                  ) : 
                  (type=="veg" && item.veg && !bestsellerVal) ? (
                    <RestaurantsMenuDetails key={index} item={item} index={index}/>
                  ) : 
                  (type=="non-veg" && !item.veg && bestsellerVal && item.bestseller) ? (
                    <RestaurantsMenuDetails key={index} item={item} index={index}/>
                  ) :
                  (type=="non-veg" && !item.veg && !bestsellerVal) ? (
                    <RestaurantsMenuDetails key={index} item={item} index={index}/>
                  ) : 
                  (type=="both" && bestsellerVal && item.bestseller) ? (
                    <RestaurantsMenuDetails key={index} item={item} index={index}/>
                  ) :
                  (type=="both" && !bestsellerVal) ? (
                    <RestaurantsMenuDetails key={index} item={item} index={index}/>
                  ) : null
                  )})              
                }
            </View>
          ) : null
          //   }
          // </View>
        );
      })}
    </View>
  );
};
