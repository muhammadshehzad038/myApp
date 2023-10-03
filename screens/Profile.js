import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import MyHeader from '../components/MyHeader';

// subscribe for more videos like this :)
export default function Profile() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
         <MyHeader
        Sidebar
        right="more-vertical"
        title="Profile"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />


    <ScrollView>
      <SafeAreaView className="flex mb-32">
    
   
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/avatar.png')} 
                style={{width: 165, height: 150, marginTop: 10}} />
        </View>
        <View className="flex-row">
        <TouchableOpacity  onPress={()=> navigation.navigate('MyProfile')}
                className="py-3 bg-amber-500 rounded-xl"  style={{marginLeft:40, marginTop:40, width: 180}}
            >
                <Text className="font-xl font-bold text-center text-black"  >
                    Edit Profile 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('UploadPortfolio')}
                className="py-3 bg-amber-500 rounded-xl"  style={{marginLeft:30, marginTop:40, width: 180}}
            >
                <Text className="font-xl font-bold text-center text-black">
                   Create Portfolio
                </Text>
            </TouchableOpacity>
        </View>

        <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            
        <TouchableOpacity
                className="py-3 bg-gray-300 mt-12" style={{ marginTop:10, marginBottom:20, height: 60}}
            >
                <Text className="font-4xl font-bold text-center text-black" style={{fontSize:24}}>
                    View more options
                </Text>
            </TouchableOpacity>

        <TouchableOpacity  onPress={()=> navigation.navigate('Portfolio')}
                className="py-3 bg-amber-500 rounded-xl" style={{marginTop: 10, height: 60}}
            >
                <Text className="font-xl  text-center text-black" style={{fontSize:18}}>
                View Portfolio 
                </Text>
            </TouchableOpacity>
           
           <TouchableOpacity onPress={()=> navigation.navigate('CreateInventory')}
                className="py-3 bg-amber-500 rounded-xl" style={{marginTop:40, height: 60}}
            >
                <Text className="font-xl text-center text-black" style={{fontSize:18}}>
                   Create Inventory
                </Text>
            </TouchableOpacity>
         
         <TouchableOpacity onPress={()=> navigation.navigate('CreateStore')}
                className="py-3 bg-amber-500 rounded-xl" style={{marginTop:40, height: 60}}
            >
                <Text className="font-xl text-center text-black" style={{fontSize:18}}>
                Create Store 
                </Text>
            </TouchableOpacity>
           
           <TouchableOpacity onPress={()=> navigation.navigate('OrderTracking')}
                className="py-3 bg-amber-500 rounded-xl" style={{marginTop:40, height: 60}}
            >
                <Text className="font-xl text-center text-black" style={{fontSize:18}}>
                Order Tracking 
                </Text>
            </TouchableOpacity>
           
        
            
           
        </View>
       
      
       
      </View>

      </SafeAreaView>
     
      </ScrollView>
    </View>
  )
}
