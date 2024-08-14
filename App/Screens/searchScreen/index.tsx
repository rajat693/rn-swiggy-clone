import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import { datalist } from '../../Data/globalData';
import { styles } from "./style";
import { CloneContext } from '../../usingContextApi';

export const SearchScreen = () => {
  const navigation:any = useNavigation();
  const [inputVal, setInputVal] = useState("");
  // let str="Anna";
  // console.log(datalist[0].title);
  // console.log((datalist[0].title.toLowerCase()).includes(str.toLowerCase()));  //true  
  //include fuction is case sensitive
  const { setClickedRestaurant_id }:any = useContext(CloneContext);

    return (
        <View style={styles.container}>
          
            <View style={styles.searchbar}>
                <View style={styles.view1}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                {/* <TouchableOpacity> */}
                  <AntDesign name="left" size={24} />
                </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TextInput
                    style={styles.textInput}
                    placeholder='Search for restaurants'
                    placeholderTextColor={"gray"}
                    
                    value={inputVal}
                    onChangeText={ text => {
                      setInputVal(text) 
                    }}
                  />
                </View>
                <View style={styles.view3}>
                  {
                    (inputVal!="") ? (
                      <TouchableOpacity onPress={() => setInputVal("")}>
                        <Text style={styles.crossbtn}>X</Text>
                      </TouchableOpacity>
                    ): (
                      null
                    )
                  }                 
                </View>
            </View>
            
            <>
            { 
              datalist.map((item) => {
                return (
                  ((item.title.toLowerCase()).includes(inputVal.toLowerCase()) && inputVal!="" ) ? (
                    
                    <View key={item.restaurant_id} style={styles.restaurants}>
                      
                        <TouchableOpacity onPress={() => { navigation.navigate("RestaurantDetails"); setClickedRestaurant_id(item.restaurant_id);}}>
                          <View style={styles.item_view}>
                            <View style={styles.pic_view}>
                              <Image source={item.restaurant_url} style={{height:"100%", width:"100%", resizeMode:"cover", borderRadius:100}}/>
                            </View>
                            <View style={styles.name_view}>
                              <Text style={{fontSize:18,fontWeight:"bold"}}>{item.title}</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      
                    </View>
                    
                  ) : (
                    null
                  )
                )
              })
            }
            </>
        </View>
    );
};
