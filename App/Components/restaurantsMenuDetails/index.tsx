import React,{useContext, useEffect, useState} from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { Props } from '../../Interfaces';
import { CloneContext } from '../../usingContextApi';

// export const RestaurantsMenuDetails = (props:{item:any, index:any}) => { //using directly
export const RestaurantsMenuDetails = (props:Props) => {
    // console.log(typeof props.item) //object
  const { cart, setCart, updateTotalAmount, updateTotalQty, addTxt, handleAddTxt }:any = useContext(CloneContext);

  const updateCart2 =(id:any) => {
    const found = cart.find((item:any) => item.menu_id===id);
    if(found){
      const newCart= cart.map((item:any)=>{
        if(item.menu_id===id) {
          return {
            ...item, qty:item.qty+1,
          }
        }
        return item;
      })
      setCart(newCart);
      // console.log(newCart);
    }
    else
    setCart([ ...cart, {menu_id:props.item.menu_id, name:props.item.name, price:props.item.price, qty:1, ADD:false}])
  }
  let ctr=0
  const updateCart = (id:any,) => {
    console.log(id)
    console.log(cart)
    //ye logic acha nahi h old fashioned
    {cart.map((element:any) => {
      // console.log(element)
      if(element.menu_id == id)
      {
        ctr=ctr+1;
      }
    })}

    if(ctr) {
      console.log("element exists")
      setCart(cart.map((element:any) => {
        // console.log(element)
        if(element.menu_id == id)
        {
          element.qty=element.qty+1;
          // console.log(cart);
          return element;
        }
        else return element;
      }))
      ctr=0
    }
    else {
      console.log("element doesn't exists"),
      setCart([ ...cart, {menu_id:props.item.menu_id, name:props.item.name, price:props.item.price, qty:1, ADD:false}]),
      // setCart( cart.concat({menu_id:props.item.menu_id, name:props.item.name, price:props.item.price, qty:1, ADD:false})), //both are right
      console.log(cart); //added object show nahi hota because setCart() asynchronous h toh jb 61 line chal rahi hogi toh wo 63 line ko bhi sath hi chala degi(matlab next line phele chalke khatam ho gyi)
      ctr=0
    }
  }

  const Decrement= (id:any) => {
    
      const _cart = cart.map((element:any,index:any) => {
      if(element.menu_id == id)
      element.qty=element.qty-1;
      return element;
      })
      
      const filteredCart = _cart.filter((item:any, index:any)=> item.qty !== 0)
      console.log("filteredCart : ",filteredCart);
      setCart(filteredCart)
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
    // console.log("hello")
    cart.map((element:any) => {
      // console.log(element)
        amount=amount+element.price * element.qty;
        quantity=quantity+element.qty;

    })
    updateTotalAmount(amount);
    updateTotalQty(quantity);
  }
  useEffect( () => { 
    getTotalAmountandQuantity()
  }, [cart])

  function getQuantity(id:any) {
    const found = cart.find((item:any) => item.menu_id===id);
    if(found)
    return found.qty;
    else 
    return null
  }
  function checkIfProductExists(id:any) {
    const found = cart.find((item:any) => item.menu_id===id);
    if(found)
    return true;
    else 
    return false;
  }

  return (
    <View key={props.index}>
    <View style={styles.menuitems}>

      <View style={styles.view2}>
        <Text style={{fontSize: 15}}>
          {props.item.veg ? (
            <Text>
              <FastImage
                style={styles.logo}
                source={require('../../Assets/Images/OtherImages/veglogo.jpg')}
              />{' '}
            </Text>
          ) : (
            <Text>
              <FastImage
                style={styles.logo}
                source={require('../../Assets/Images/OtherImages/nonveglogo.png')}
              />{' '}
            </Text>
          )}
          {props.item.bestseller ? (
            <Text style={styles.bestseller}>bestseller {'\n'}</Text>
          ) : (
            <Text>{'\n'}</Text>
          )}
          <Text style={styles.name}>
            {props.item.name}
            {'\n'}
          </Text>
          <Text style={styles.price}>
            Rs {props.item.price}
            {'\n'}
          </Text>
          <Ionicons name="star" color="orange" size={20} />
          {props.item.ratings} . {props.item.noofraters} ratings {'\n'}
          <Text style={styles.phrase}>{props.item.catchPhrase}</Text>
        </Text>
      </View>

      <View style={styles.view1}>
        <ImageBackground
          style={styles.mainimage}
          imageStyle={{borderRadius: 15}}
          source={props.item.menuimg}>
          <View style={styles.view}>

            { checkIfProductExists(props.item.menu_id) ? 
                <Text style={styles.offer}>
                  <TouchableOpacity
                    onPress={() => {
                      { Decrement(props.item.menu_id) }
                    }}>
                    <Text style={styles.offer}>-</Text>
                  </TouchableOpacity>
                  {'   '}
                  { getQuantity(props.item.menu_id) }
                  {'   '}
                  <TouchableOpacity
                    onPress={() => {
                      { Increment(props.item.menu_id) }
                    }}>
                    <Text style={styles.offer}>+</Text>
                  </TouchableOpacity>
                </Text> : 
                <TouchableOpacity
                  onPress={() => {
                    { updateCart2(props.item.menu_id) }
                  }}>
                  <Text style={styles.offer}>ADD</Text>
                </TouchableOpacity>
            }
          </View>
        </ImageBackground>
      </View>

    </View>

    <View
      style={{
        width: '92%',
        borderColor: '#C2C1C1',
        borderWidth: 0.6,
        marginTop: 0,
        marginLeft: 15,
      }}
    />
  </View>
  )
};
