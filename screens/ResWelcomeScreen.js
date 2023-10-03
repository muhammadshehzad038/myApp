import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import Colors from '../constants/Colors'

export default function ResWelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
            <View className="flex-row justify-center mt-24">
                <Text className="text-purple-500 font-bold text-2xl text-center">Sign Up to get your best experience</Text>
                </View> 
            <View className="flex-row justify-center mt-15">
                <Image source={require("../assets/images/logo4.png")}
                    style={{width: 300, height: 300}} />
            </View>
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('ResSignUp')}
                    className="py-3 bg-purple-500 mx-7" style={{borderRadius: 90, marginTop:10}}>
                        <Text 
                            className="text-xl text-center text-black"
                        >
                            Sign Up
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-lg text-black font-semibold">Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('ResLogin')}>
                        <Text className=" text-lg font-bold text-purple-500"> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
         
     
    </SafeAreaView>
  )
}