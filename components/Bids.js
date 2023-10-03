import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import Colors from '../constants/Colors'

export default function Contracts({con}) {
  return (
  
    <View className="flex-row justify-between items-center space-x-5 mb-4 h-17 bg-gray-300 rounded">
      <View className="ml-5">
            <TouchableOpacity className="flex-row justify-center shadow-lg" >
            <Image source={con.image} style={{height: 65,width: 65,
                overflow: 'visible',
                shadowRadius: 15,
                shadowOffset: {width: 0, height: 20},
                shadowOpacity: 0.4,
                }}/>
            </TouchableOpacity>
            </View>

      

        <View className="flex-1 items-centre">
            <Text style={{color: Colors.primary, fontSize:18}} className=" text-base font-extrabold">{con.name}</Text>
        </View>
            
    </View>
  )
}