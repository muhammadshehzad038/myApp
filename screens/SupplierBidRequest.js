import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import MyHeader from '../components/MyHeader';
import { Bidrequest } from '../constants';
import BidRequest from '../components/BidRequest';
import { ChevronLeftIcon } from 'react-native-heroicons/solid'



export default function SupplierBidRequest() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 flex bg-white" style={{backgroundColor: themeColors.bg}}>
  <View className="flex-row justify-start mx-5 mt-12">
                <TouchableOpacity onPress={()=> navigation.goBack()} className="border border-purple-500 rounded-xl">
                    <ChevronLeftIcon size="30" color="purple" />
                </TouchableOpacity>
            </View>

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
    <Text style={{fontSize: 25, fontWeight: 'bold', marginLeft:20}}>Bid Requests</Text>
   </View>
</View>

  <View >
    {
     Bidrequest.map((item,index)=>  <BidRequest req={item} key={index} />)
    }
    </View>
   
      </SafeAreaView>   
      </ScrollView>

    </View>
     
  )

}