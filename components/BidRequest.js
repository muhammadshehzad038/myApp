import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';

export default function BidRequest({req}) {
    const navigation = useNavigation();
  return (
      <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-2 mx-2">
    <Image className="rounded-3xl" style={{height: 100, width: 100}} source={req.image}/>
        <View className="flex flex-1 space-y-3 ">
                    <View className="pl-3">
                        <View className="flex-row">
                        <Image style={{height: 20, width: 20,}} source={req.verImage}/>
                        <Text style={{fontSize:12, marginLeft:10}}>{req.Verified}</Text>
                        </View>
                        <Text className="text-xl">{req.name}</Text>
                        <Text className="text-black">Offer price: {req.OfferPrice}</Text>
                    </View>
                    <View className="flex-row pl-3 justify-between items-center">
                    <Text className="text-gray-700 text-lg font-bold">
                          
                        </Text>
                    <View className="flex-row items-center">
                            <TouchableOpacity 
                                onPress={()=> navigation.navigate('AcceptBid')}
                                className="p-1 rounded-full" 
                                style={{backgroundColor: Colors.resprimary}}>
                                <Icon.Check strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                          
                            
                            <TouchableOpacity 
                                
                                className="p-1 rounded-full" 
                                style={{backgroundColor: Colors.resprimary, marginLeft: 20}}>
                                <Icon.X strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                        </View>
                        </View>
                        

                </View>

   </View>
    
  )
}