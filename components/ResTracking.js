import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/solid'

export default function ResTracking({track}) {
  return (
    <View className="flex">
    <View className="flex-row justify-between items-center space-x-5 mb-4 h-20 bg-gray-200 rounded-full">   
        <View className="flex-1 ml-10">
            <Text style={{color: themeColors.text}} className=" text-base font-bold">{track.order}</Text>
        </View>
        <View className="flex-row mr-5">
          
            <TouchableOpacity className="bg-purple-500 p-2 h-10 w-24 items-center rounded-lg">
                <Text><Text className="text-black-500 font-semibold">{track.stat}</Text>
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}