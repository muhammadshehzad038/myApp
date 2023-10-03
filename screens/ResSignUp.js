import { View, Text, TouchableOpacity, Image, TextInput , ScrollView} from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


export default function SignUpScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
    <ScrollView>
      <SafeAreaView className="flex">
       
        
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/logo4.png')} 
                style={{width: 250, height: 250, marginTop:4}} />
        </View>
      </SafeAreaView>
      
      <View className="flex-1 bg-white px-4 pt-4"
        style={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
      >
        <View className="form space-y-2">
            <Text className="text-gray-700 ml-1">Full Name</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                //value="john snow"
                placeholder='Enter Name'
            />
            <Text className="text-gray-700 ml-1">Email Address</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                //value="john@gmail.com"
                placeholder='Enter Email'
            />
           <Text className="text-gray-700 ml-1">Enter Phone number</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                //value="john snow"
                placeholder='Enter contact number'
            />
            <Text className="text-gray-700 ml-1">Enter Address</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                //value="john snow"
                placeholder='Enter your house address'
            />
           
            <Text className="text-gray-700 ml-1">Password</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                secureTextEntry
                value="test12345"
                placeholder='Enter Password'
            />
            <Text className="text-gray-700 ml-1">Re-enter Password</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-5"
                secureTextEntry
                value="test12345"
                placeholder='Enter Password'
            />
            <TouchableOpacity onPress={()=> navigation.navigate('ResLogin')}
                className="py-3 bg-purple-500 rounded-full"
            >
                <Text className="font-xl font-bold text-xl text-center text-black">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-2">
            Or
        </Text>
        <View className="flex-row justify-center " style={{marginBottom:10}}>
            <Text className="text-gray-500 text-lg font-bold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('ResLogin')}>
                <Text className="font-bold text-lg text-purple-500"> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}
