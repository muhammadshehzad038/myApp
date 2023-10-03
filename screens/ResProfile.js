import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import MyHeader2 from '../components/MyHeader2';
import Colors from '../constants/Colors'

// subscribe for more videos like this :)
export default function Profile() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
         <MyHeader2
        Sidebar
        right="more-vertical"
        title="Profile"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />
  <View style={{ backgroundColor: Colors.gray}}>
          <View className="flex-row">
            <Image source={require('../assets/images/Res2.png')} 
                style={{width: 165, height: 150, marginBottom:20, marginTop: 50, marginLeft:20}} />
            <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.black, marginTop:70, marginLeft:20}}>Pizza Restaurant</Text>
            <Text style={{ fontSize: 16, color: Colors.black,marginLeft:20}}>Best taste with best quality</Text>
        

          <TouchableOpacity  onPress={()=> navigation.navigate('ResEditProfile')}
                className=" bg-purple-500 rounded-xl items-center"  style={{ marginTop:20, marginBottom:20, marginLeft:20, width: 150}}
            >
                <Text className="font-xl font-bold text-center text-black mt-2 mb-2"  >
                    Edit Profile 
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>

    <ScrollView>
      <SafeAreaView className="flex">
    


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

           
           <TouchableOpacity onPress={()=> navigation.navigate('CreateResInventory')}
                className="py-3 bg-purple-500 rounded-xl" style={{marginTop:40, height: 60}}
            >
                <Text className="font-xl text-center text-black" style={{fontSize:18}}>
                   Create Inventory
                </Text>
            </TouchableOpacity>
         
    
           
           <TouchableOpacity onPress={()=> navigation.navigate('ResOrderTracking')}
                className="py-3 bg-purple-500 rounded-xl" style={{marginTop:40, height: 60}}
            >
                <Text className="font-xl text-center text-black" style={{fontSize:18}}>
                Order Tracking 
                </Text>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={()=> navigation.navigate('ContractForm')}
                className="py-3 bg-purple-500 rounded-xl" style={{marginTop:40, height: 60}}
            >
                <Text className="font-xl text-center text-black" style={{fontSize:18}}>
                Contract Form
                </Text>
            </TouchableOpacity>
            
           
        </View>
       
      
       
      </View>

      </SafeAreaView>
     
      </ScrollView>
    </View>
  )
}
