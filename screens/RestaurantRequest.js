import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import MyHeader from '../components/MyHeader';
import { request } from '../constants';
import Request from '../components/Request';



export default function RestaurantRequest() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>

<MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title= 'Requests'
        right="more-vertical"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />


 <ScrollView>
      <SafeAreaView  style={{
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
}}>
       
      <View style={{marginTop: 20}}>
       


  
   <View style={{paddingVertical: 10,
                 flexDirection: 'row',
                 justifyContent: 'space-between',}}> 
    <Text style={{fontSize: 25, fontWeight: 'bold'}}>   Restaurant Request</Text>
   </View>
</View>

  <View >
    {
     request.map((item,index)=>  <Request req={item} key={index} />)
    }
    </View>
   
      </SafeAreaView>   
      </ScrollView>

    </View>
     
  )

}