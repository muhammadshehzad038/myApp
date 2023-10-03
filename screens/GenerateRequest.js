import { ImageBackground, View, Text, StatusBar, TouchableOpacity, Image, SafeAreaView, TextInput,  Button, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { request } from '../constants';
import MyHeader2 from '../components/MyHeader2';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
//import DropDownPicker from 'react-native-dropdown-picker';




export default function GenerateRequest() {
    const navigation = useNavigation();
 
 
    
 
  return (
    <View className="flex-1 ">
 
<MyHeader2
    title= 'Request Generation'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
  />
 <ScrollView>
<ImageBackground source={require('../assets/images/map.png')} style={{height: 500, width: 480}}>
  
    {/* search bar */}
    <View className="mx-5 mt-5 shadow">
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search Suppliers' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: themeColors.resbg}}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>
</ImageBackground>
<View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2 mb-32">
            <Text className="text-gray-700 ml-1">Select Category</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                //value="john snow"
                placeholder='Enter Category'
            />
            <Text className="text-gray-700 ml-1">Select Item</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                //value="john@gmail.com"
                placeholder='Enter item'
            />
           <Text className="text-gray-700 ml-1">Enter price</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                //value="john snow"
                placeholder='Enter price'
            />
            <Text className="text-gray-700 ml-1">Enter description</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                //value="john snow"
                placeholder='Enter description'
            />
       
            <TouchableOpacity onPress={()=> navigation.navigate('SupplierBidRequest')}
                className="py-3 bg-purple-500 rounded-full"
            >
                <Text className="font-xl font-bold text-xl text-center text-black">
                    Place Order
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="py-3 bg-gray-300 rounded-full"
            >
                <Text className="font-xl font-bold text-xl text-center text-black">
                    Cancel
                </Text>
            </TouchableOpacity>
        </View>

      </View>
      </ScrollView> 
    </View>


  )
}