import * as React from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import { AddressTop, GetItQuickly, OfferZone, SearchBar, WhatsInYourMind, FilterRestaurants, RestaurantsToExplore,OfferSlider } from '../../Components';

export function FoodScreen() {
  return (
    <SafeAreaView style={{height:"100%", width:"100%"}}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      // stickyHeaderHiddenOnScroll={true}
      //stickyHeaderIndices={[0]}
      stickyHeaderIndices={[1,7]}
      >
        <AddressTop/>
        <SearchBar/>
        <OfferZone/>
        <OfferSlider/>
        <GetItQuickly/>
        <View style={{ width:"100%", borderColor: '#C2C1C1', borderWidth:1, marginTop:10, }}/>
        <WhatsInYourMind/>
        <FilterRestaurants/>
        <RestaurantsToExplore/>
      </ScrollView>
    </SafeAreaView>
  );
}