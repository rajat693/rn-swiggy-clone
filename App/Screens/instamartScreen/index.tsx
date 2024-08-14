import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { InstaSearch, ShopByCategory, ExploreMore } from '../../Components';

export function InstamartScreen() {
  return (
    // <SafeAreaView>
      // {/* <StatusBar barStyle="light-content" /> */}
    <ScrollView style={{height:"100%", width:"100%"}}
    showsVerticalScrollIndicator={false}>
      <InstaSearch/>
      <ShopByCategory/>
      <ExploreMore/>
      <View style={{height:"35%"}}></View>
    </ScrollView>
    // </SafeAreaView>
  );
}