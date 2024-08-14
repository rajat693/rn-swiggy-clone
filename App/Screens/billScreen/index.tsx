import React,  {useContext, useState, useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import { CloneContext } from '../../usingContextApi';
import { datalist } from '../../Data';
import styles from './styles';
import {Navigations} from "../../Interfaces";
import FastImage from "react-native-fast-image";

export const BillScreen = () => {

  const navigation:Navigations=useNavigation();
  const { clickedRestaurant_id, totalAmount, cart, setCart, updateTotalAmount, updateTotalQty }:any =useContext(CloneContext);
  
  const Decrement= (id:any) => {
    // console.log(id)
    const variable = cart.map((element:any,index:any) => {
      // console.log("index",index)  //ye array(cart) ka index no. h 

      if(element.menu_id == id && element.qty>1 ) {
        element.qty=element.qty-1;
        console.log("cart value  :",cart)
      return element;
      }
      else if(element.menu_id == id && element.qty==1 ) {
        element.qty=element.qty-1;
        // let newcart=[...cart]
        // newcart.splice(index,1) //this is also right but prefer filter method
        // // setCart(newcart)  //this is wrong way
        // console.log("newcart :", newcart)
        return element;
      }
      else 
        return element
      })
      setCart(variable)
  }
  const Increment= (id:any) => {
    setCart(cart.map((element:any) => {
      // console.log(element)
      if(element.menu_id == id)
      {
        element.qty=element.qty+1;
        return element;
      }
      else return element;
    }))
  }

  let amount=0, quantity=0;
  const getTotalAmountandQuantity = () => {
    cart.map((element:any) => {
      // console.log(element)
        amount=amount+element.price * element.qty;
        quantity=quantity+element.qty;

    })
    updateTotalAmount(amount);
    updateTotalQty(quantity);
  }

  function RemoveUnwantedElementsFromCart() {
    const found = cart.find((item:any) => item.qty===0);
    if(found) {      
      const filteredCart = cart.filter((item:any, index:any)=> {
        if(cart[index].qty != 0)
        return item;
      })
      console.log("filteredCart : ",filteredCart)
      setCart(filteredCart)
    }
  }
  useEffect( () => { 
    getTotalAmountandQuantity()
    RemoveUnwantedElementsFromCart()
  }, [cart])

  return (
    <View style={styles.container}>
        {
          (cart.length)?(
            <>
            <View style={styles.topview}>
              <Text style={styles.toptext}>
                <TouchableOpacity onPress={() => { navigation.goBack(); } }>
                  <Text><AntDesign name="arrowleft" size={28} color="#464646" /> {"  "}</Text>
                </TouchableOpacity>
                <Text>{datalist[clickedRestaurant_id - 1].title}</Text>
              </Text>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
            >
                <View style={styles.cartview}>
                  {/* {datalist[clickedRestaurant_id - 1].menu.map((element) => { */}
                  {cart.map((element:any) => {
                    return (
                      // (true) ? (
                        <View key={element.menu_id} style={styles.cartmainview}>

                          <View style={styles.cartpt1}>
                            {/* <>{console.log(element)} */}
                            <Text style={{ fontSize: 20 }}> {element.name}</Text>
                          </View>

                          <View style={styles.cartpt2}>
                            <Text style={styles.txt}>

                              <TouchableOpacity onPress={() => { Decrement(element.menu_id)}}>
                                <Text style={styles.innertxt}>-</Text>
                              </TouchableOpacity>
                              <Text style={styles.innertxt}>  {element.qty}  </Text>
                              <TouchableOpacity onPress={() => { Increment(element.menu_id)}}>
                                <Text style={styles.innertxt}>+</Text>
                              </TouchableOpacity>

                            </Text>
                          </View>

                          <View style={styles.cartpt3}>
                            <Text style={[styles.txt, { fontWeight: "500" }]}>{" "}Rs {element.price * element.qty}</Text>
                          </View>

                        </View> 
                      // ) : (
                      //   null
                      // )                   
                    );

                  })}

                </View>



                <Text style={styles.midtxt}>Offers & Benefits</Text>

                <View style={styles.offerview}>
                  <View style={styles.offer1}>
                    <Text style={styles.coupon}>Apply Coupon</Text>
                  </View>
                  <View style={styles.offer2}>
                    <AntDesign name="right" size={24} color="#464646" />
                  </View>
                </View>

                <Text style={styles.midtxt}>Bill Details</Text>

                <View style={styles.billview}>
                  <View style={styles.bill1}>
                    <Text style={styles.billtxt}>
                      <Text>Item Total{"\n"}</Text>
                      <Text>Delivery Partner Fee{"\n"}</Text>
                      <Text>Taxes and Charges{"\n"}</Text>
                    </Text>
                    <Text style={styles.billtxttotal}>
                      To Pay
                    </Text>
                  </View>
                  <View style={styles.bill2}>
                    <Text style={styles.billtxt}>
                      <Text>Rs {totalAmount}{"\n"}</Text>
                      <Text>Rs 30{"\n"}</Text>
                      <Text>Rs 12.7{"\n"}</Text>
                    </Text>
                    <Text style={styles.billtxttotal}>
                      Rs {totalAmount+43}
                    </Text>
                  </View>
                </View>

                <Text style={styles.midtxt}>Choose or Add Delivery Address</Text>

                <View style={styles.offerview}>
                  <View style={styles.offer1}>
                    <Text style={styles.coupon}>Addresses</Text>
                  </View>
                  <View style={styles.offer2}>
                    <AntDesign name="right" size={24} color="#464646" />
                  </View>
                </View>

                <Text style={styles.bottomtxt}><Text style={{ fontSize: 20, textDecorationLine: "underline" }}>Note </Text>: Review your order and address details to avoid cancellations </Text>

                <View style={{ height: 100 }}>

                </View>
              </ScrollView></>
      
          ):(
            <>
              <View style={styles.topnavigator}>
                <TouchableOpacity onPress={() => { navigation.goBack(); } }>
                  <Text><AntDesign name="arrowleft" size={28} color="#464646" /> {"  "}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.centerview}>
                <FastImage style={styles.panimg} source={require("../../Assets/Images/OtherImages/panwithout-bg.png")} />
                <View style={styles.foodview}>
                  <Text style={styles.foodtext1}>Good Food is Always Cooking</Text>
                  <Text style={styles.foodtext2}>Your cart is empty. Add something from the menu {"\n"}</Text>
                </View>
                
                {/* <TouchableOpacity style={styles.browse} onPress={() => navigation.navigates("FoodHome" ,{}) }>  //both are right */}  
                <TouchableOpacity style={styles.browse} onPress={() => navigation.navigate("FoodHome") }>
                  <Text style={styles.browseText}>Browse Restaurants</Text>
                </TouchableOpacity>

              </View>    
            </>
          )
        }
    </View>
  );
};
