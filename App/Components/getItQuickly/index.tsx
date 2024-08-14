import React,{useContext} from 'react';
import { SafeAreaView, FlatList, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { datalist } from "../../Data";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from './styles';
import LinearGradient from "react-native-linear-gradient";
import { CloneContext } from '../../usingContextApi';
import { useNavigation } from '@react-navigation/native';

export const GetItQuickly = () => {

  const { setClickedRestaurant_id } :any = useContext(CloneContext);
  const navigation:any = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Get it quickly</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={datalist}
        renderItem={({ item }) => (
          // console.log(item),
          <View style={styles.items}>
            <TouchableOpacity onPress={()=>{ navigation.navigate("RestaurantDetails"); setClickedRestaurant_id(item.restaurant_id) }}>
            <View style={styles.view1}>
                <ImageBackground style={styles.mainimage} imageStyle={{ borderRadius: 15}} source={item.restaurant_url}>
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
              <Text style={{fontWeight:"bold", fontSize:16, width:125}}>{item.title}</Text>
              <View style={styles.desc}>
                <View style={styles.starview}>
                  <AntDesign name="star" color="white" size={10}/>
                </View>
                <Text style={{fontSize:14,}}> {item.rating} . {item.time}</Text>
              </View>
            </View>
            </TouchableOpacity>
          </View>
        )}
        // keyExtractor={item => item.id}

      />
    </SafeAreaView>
  );
}
