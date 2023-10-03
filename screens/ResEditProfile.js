import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import MyHeader2 from '../components/MyHeader2';
import { useNavigation } from '@react-navigation/native';

// subscribe for more videos like this :)
export default function ResEditProfile() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
    <MyHeader2
    title= 'Profile'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
  />

<SafeAreaView className="flex">
    
     
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/avatar.png')} 
                style={{width: 165, height: 150, marginTop: 100}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            
            <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
                value="john snow"
                placeholder='Enter Name'
            />
           
            <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
                value="john@gmail.com"
                placeholder='Enter Email'
            />
         
            <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
                value="09829381989"
                placeholder='Enter contact number'
            />
           
            <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
                value="Islamabad, Pakistan"
                placeholder='Enter your address'
            />
           
          
            <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
                secureTextEntry
                value="test12345"
                placeholder='Enter Password'
            />
          
            <TouchableOpacity onPress={()=> navigation.goBack()}
                className="py-3 bg-purple-500 rounded-xl"
            >
                <Text className="font-xl font-bold text-center text-gray-700">
                    Save Changes
                </Text>
            </TouchableOpacity>
        </View>
       
      
       
      </View>
    </View>
  )
}
