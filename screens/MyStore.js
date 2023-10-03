import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import MyHeader from '../components/MyHeader';

export default function MyStore() {
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
      <SafeAreaView  className="flex">
       
        <View  className="flex-row justify-center">
          <Image source={require('../assets/images/avatar.png')} 
          style={{width: 70, height: 70,  marginBottom: 50}} />
        </View>

        <View  className="flex-row justify-center">
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Food Store</Text>
        </View>

      
      </SafeAreaView>




<View className = "flex-row justify-center mt-5">
 
      
          <View className="py-3 bg-amber-500 rounded-full w-36">
                 <TouchableOpacity onPress={()=> navigation.navigate('CreateStore')}>
                <Text 
                    className="text-xl font-bold text-center text-gray-700">
                        Edit Store
                </Text>
               
                </TouchableOpacity>
           
            
          </View>

          <View          
              className="py-3 ml-5 bg-amber-500 rounded-full w-36">
                 <TouchableOpacity onPress={()=> navigation.navigate('CreateStore')}>
                <Text 
                    className="text-xl font-bold text-center text-gray-700">
                        View Store
                </Text>
               
        
             </TouchableOpacity>
            
          </View>


          </View>

          <View className="flex items-center p-3 mb-2 mx-2 border-amber-500 " style={{ marginTop:50, height: 250, borderWidth:  2}}>
          <View className="flex-row items-center mt-14">
        <Text style={{fontSize: 24}}>You dont have Items</Text>
        </View>
            
          <View className="flex-row items-center">
            <TouchableOpacity            
              className="py-3 ml-5 bg-amber-500 rounded-full w-36 mt-5">
                 <TouchableOpacity onPress={()=> navigation.navigate('AddItem')}>
                <Text 
                    className="text-xl font-bold text-center text-gray-700">
                        Add Item
                </Text>
                </TouchableOpacity>
             </TouchableOpacity>
            
              </View>


      </View>


    </View>
    
  )
}