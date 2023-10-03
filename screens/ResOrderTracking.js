import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, Bars3CenterLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { cartItems, featuredFruits, DispachedOrder } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import MyHeader2 from '../components/MyHeader2';
import { TrackingStatus} from '../constants';
import ResTracking from '../components/ResTracking';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

  
export default function ResOrderTracking(props) {
    const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
    <MyHeader2
    back
    onPressBack={() => navigation.goBack()}
    title= 'Order Tracking'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
    
  />


    <SafeAreaView className="flex-1 flex justify-between bg-white">
            <View className="flex-row justify-start mx-5">
        </View>

 {/* categories */}
 <View className="flex-row px-5 mt-6">


     <View className= "ml-5" onPress={this}>
     <Icon
    name='shopping-bag'
    size={40}
    color='#A134F6'
    style={{height:35,width:45}}/>
     <Text style={fontSize= 24}>Dispached</Text>
     </View>

     <View className= "ml-28" onPress={this}>
     <Icon
    name='local-shipping'
    size={40}
    color='#A134F6'
    style={{height:35,width:45}}/>
     <Text style={fontSize= 24}>Recieved</Text>
     </View>

     <View className= "ml-32" onPress={this}>
     <Icon
    name='comment'
    size={40}
    color='#A134F6'
    style={{height:35,width:45}}/>
     <Text style={fontSize= 24}>Review</Text>
     </View>



</View>

        <View className="cart mx-5 flex-1">
        
          {/* search bar */}
          <View className=" mt-10 mb-10 shadow">
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search items' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: themeColors.resbg}}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>




    <View >
    {
     DispachedOrder.map((item,index)=>  <ResTracking track={item} key={index} />)
    }
    </View>
               
 </View>
 </SafeAreaView> 
 </View>   
  )
}