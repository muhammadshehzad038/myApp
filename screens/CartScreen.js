import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import StarRating from 'react-native-star-rating';
import Cart from '../components/Cart';
import { cart } from '../constants';

  

export default function CartScreen(props) {
    const navigation = useNavigation();
  return (
    <ScrollView>
    <SafeAreaView className="flex-1 flex justify-between bg-white">
            <View className="flex-row justify-start mx-5">
                <TouchableOpacity onPress={()=> navigation.goBack()} className="border border-purple-500 rounded-xl">
                    <ChevronLeftIcon size="30" color="purple" />
                </TouchableOpacity>
            </View>
            <View className="cart mx-5 flex-1">
                <Text style={{color: themeColors.text}} className="text-2xl py-10">Your <Text className="font-bold">cart</Text></Text>
                <View>
                    {
                       cart.map((item,index)=>  <Cart cart={item} key={index} />)
                    }
                </View>
                <View className="flex-row justify-end py-4">
                    <Text className="text-lg">Total price: <Text className="font-bold text-purple-500">Rs 50,200</Text></Text>
                </View>
            </View>
            <View className="flex-row justify-between items-center mx-7">
                <TouchableOpacity 
                style={{
                    backgroundColor: themeColors.resbg, 
                    opacity: 0.8,
                    shadowColor: 'orange',
                    shadowRadius: 25,
                    shadowOffset: {width: 0, height: 15},
                    shadowOpacity: 0.4,
                }} className="p-3 flex-1 rounded-xl">
                    <Text className="text-xl text-center text-white font-bold">Download Invoice</Text>
                </TouchableOpacity>
            </View>
            
            
        </SafeAreaView>
        </ScrollView>
  )
}