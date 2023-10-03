import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import { firebase } from '../firebase'
import { add } from 'react-native-reanimated'


export default function SignUpScreen() {
    const navigation = useNavigation();
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    const SignupUser=async (fullname ,email,phone,address,password)=>{
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
        firebase.auth().currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url:'http://suppliero.firebaseapp.com',
        }).then(()=>{
            alert('email verification send!')
        }).catch((error)=>{
            alert(error.message)
        }).then(()=>{
            firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({
                fullname,
                email,
                phone,
                address,
                password
            })
        }).catch((error)=>{
            alert(error.message)
        })
    }).catch((error)=>{
          alert(error.message)
    })

   }

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <ScrollView>
      <SafeAreaView className="flex">
       
        
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/logo4.png')} 
                style={{width: 150, height: 150, marginTop:10}} />
        </View>
      </SafeAreaView>
      
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            <Text className="text-gray-700 ml-1">Full Name</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                value={fullname}
                onChangeText={value=> setFullName(value)}
                placeholder='Enter Name'
            />
            <Text className="text-gray-700 ml-1">Email Address</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                value={email}
                onChangeText={value=> setEmail(value)}
                placeholder='Enter Email'
            />
           <Text className="text-gray-700 ml-1">Enter Phone number</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                value={phone}
                onChangeText={value=> setPhone(value)}
                placeholder='Enter contact number'
            />
            <Text className="text-gray-700 ml-1">Enter Address</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                value={address}
                onChangeText={value=> setAddress(value)}
                placeholder='Enter your house address'
            />
           
            <Text className="text-gray-700 ml-1">Password</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
                secureTextEntry
                value={password}
                onChangeText={value=> setPassword(value)}
                placeholder='Enter Password'
            />
            <Text className="text-gray-700 ml-1">Re-enter Password</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-5"
                secureTextEntry
                value={password}
                onChangeText={value=> setPassword(value)}
                placeholder='Enter Password'
            />
            
            <TouchableOpacity onPress={()=>{SignupUser(fullname,email,phone,address,password)}}
                className="py-3 bg-amber-500 rounded-full"
            >
                <Text className="font-xl font-bold text-xl text-center text-black">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-2">
            Or
        </Text>
        <View className="flex-row justify-center ">
            <Text className="text-gray-500 text-lg font-bold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-bold text-lg text-amber-500"> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}
