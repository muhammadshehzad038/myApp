import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import MyHeader from '../components/MyHeader';


// subscribe for more videos like this :)
export default function CreateStore() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>

      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title= 'My store'
        right="more-vertical"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />


      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
       
        </View>
        
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/shopIcon.jpg')} 
                style={{width: 80, height: 80}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            <Text className="text-gray-700 ml-1">Store Name</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                //value="john snow"
                placeholder='Enter Name'
            />
            <Text className="text-gray-700 ml-1">Store description</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                //value="john@gmail.com"
                placeholder='Enter Email'
            />
           <Text className="text-gray-700 ml-1">Store type</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                //value="john snow"
                placeholder='Grocery Store'
            />
            <Text className="text-gray-700 ml-1">Address</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                //value="john snow"
                placeholder='Enter your store address'
            />
           
            <Text className="text-gray-700 ml-1">Password</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                placeholder='Enter Password'
            />
            <Text className="text-gray-700 ml-1">Re-enter Password</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-5"
                placeholder='Enter Password'
            />
            <TouchableOpacity  
                className="py-3 bg-amber-500 rounded-full"
            >
                <TouchableOpacity onPress={()=> navigation.navigate('MyStore')}>
                <Text className="font-x2 font-bold text-center text-gray-700">
                    Create
                </Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
        
       
      </View>

    </View>
  )
}
