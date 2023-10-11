import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../firebase'


export default function ResLogin() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
    const loginUser= async(email,password)=>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
        } catch(error) {
            alert(error.message)
        }
    }

  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <ScrollView>
      <SafeAreaView  className="flex ">
      {/*  <View className="flex-row justify-start">
          <TouchableOpacity onPress={()=> navigation.goBack()} 
          className="bg-purple-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
  </View>*/}
        <View  className="flex-row justify-center">
          <Image source={require('../assets/images/supplieroLogo.png')} 
          style={{width: 300, height: 300}} />
        </View>
          
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 20, borderTopRightRadius: 20}} 
        className="flex-1 bg-white px-4 ">
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              value={email}
              placeholder="Enter email"
              onChangeText={(email)=> setEmail(email)}
              //value="john@gmail.com" 
            />

            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput xs
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              value={password}
              placeholder="password"
              onChangeText={(password)=> setPassword(password)}
              //value="test12345" 
            />
            <TouchableOpacity onPress={()=> navigation.navigate('ResForgetPassword')} className="flex items-end">
              <Text className="text-gray-700 mb-5">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="py-3 bg-purple-500 rounded-full">
                 <TouchableOpacity onPress={()=> navigation.navigate('BottomNavigation2')}>
                <Text 
                    className="text-xl font-bold text-center text-black"
                >
                        Login
                </Text>
                </TouchableOpacity>
             </TouchableOpacity>
            
          </View>
          <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
          <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/google.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/apple.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/facebook.png')} className="w-10 h-10" />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-8" style={{marginBottom:20}}>
              <Text className="text-gray-500 font-semibold">
                  Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('ResSignUp')}>
                  <Text className="font-bold text-purple-500"> Sign Up</Text>
              </TouchableOpacity>
          </View>
          
      </View>
      </ScrollView>
    </View>
    
  )
}