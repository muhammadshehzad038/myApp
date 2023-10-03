import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';

export default function ResOrderHistory({fruit}) {
    const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center space-x-5 mb-4 mt-10">
        <View className="ml-5">
            <TouchableOpacity className="flex-row justify-center -mb-10 -ml-10 shadow-lg z-20" >
            <Image  source={fruit.image} style={{height: 65,width: 65,  shadowColor: fruit.shadow,
                overflow: 'visible',
                shadowRadius: 15,
                shadowOffset: {width: 0, height: 20},
                shadowOpacity: 0.4,
                }} />
            </TouchableOpacity>
        

            <View 
                style={{ height: 60, width: 60}} 
                className={` rounded-3xl flex justify-end items-center`}>
            </View>
        </View>
        <View className="flex-1 space-y-1">
            <Text style={{color: themeColors.text}} className=" text-base font-bold">Order no.{fruit.id}</Text>
            <Text className="text-purple-500 font-extrabold">{fruit.items}</Text>
            <Text className="text-black font-extrabold">Total: {fruit.Total}</Text>

        </View>
        <View className="flex-row items-center space-x-2">
          
            <TouchableOpacity className="bg-purple-500 p-1 rounded-lg" onPress={()=>navigation.navigate('CartScreen')}>
                <Text>Order Again
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}