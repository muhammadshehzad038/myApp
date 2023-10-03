import { ImageBackground, View, Text, StatusBar, TouchableOpacity, Image, SafeAreaView, TextInput,  Button, Alert, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { request } from '../constants';
import MyHeader2 from '../components/MyHeader2';
import Colors from '../constants/Colors';
import { StarIcon } from 'react-native-heroicons/solid';



export default function AcceptBid() {
    const navigation = useNavigation();
    const req = request;
  
   
  return (
    <View className="flex-1 ">
 
<MyHeader2
    back
    onPressBack={() => navigation.goBack()}
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
  />

<ScrollView>
    <View className="flex-row bg-white p-3 rounded-3xl shadow-2xl mb-2 mx-2" style={{backgroundColor: themeColors.bg, marginTop:60, height: 250}}>
    <Image className="rounded-3xl" style={{height: 100, width: 100}} source={require('../assets/images/user2.jpg')}/>
        <View className="flex flex-1 space-y-3 ">
                    <View className="pl-3">
                        <Text className="text-xl">Ali</Text>

                        <View className="flex-row ">
                        <StarIcon size="15" color="yellow" />
                        <StarIcon size="15" color="yellow" />
                        <StarIcon size="15" color="yellow" />
                        <StarIcon size="15" color="yellow" />
                        <StarIcon size="15" color="yellow" /> 
                        </View>

                        <Text className="text-purple-700 font-bold">Local Supplier</Text>
                        <Text className="text-black ">Description: In business, a supplier is a person or an entity who delivers top-notch services and goods from manufacturers at reasonable costs to retailers or distributors for sale. They provide deliverables in the form of raw materials, which the manufacturers later process into market-ready end products.</Text>
                        <Text className="text-black mt-3">Total Bids: 100</Text>
                    </View>
                    <View className="flex-row pl-3 justify-between items-center">
                    <Text className="text-gray-700 text-lg font-bold">                          
                    </Text>
                    </View>
                </View>
   </View>
   
          <View className="flex-row justify-between px-5 pt-10 mt-32">
              <View>
                  <Text className="text-lg text-black font-semibold">Delivered in</Text>
                  <Text className="text-3xl font-extrabold text-black">20-30 Minutes</Text>
              </View>
              <Image className="h-24 w-24" source={require('../assets/images/bikeGuy2.gif')} />
          </View>
          
        <View 
          style={{backgroundColor: Colors.resprimary, marginTop: 10}} 
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
            <View style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="p-1 rounded-full">
              <Image style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="w-16 h-16 rounded-full" source={require('../assets/images/user2.jpg')} />
            </View>
            
            <View className="flex-1 ml-3">
                <Text className="text-lg font-bold text-white">Ali Noman</Text>
                <Text className="text-white font-semibold">Your Client</Text>
            </View>
            <View  className="flex-row items-center space-x-3 mr-3">
              <TouchableOpacity className="bg-white p-2 rounded-full">
                <Icon.Phone fill={Colors.resprimary} stroke={Colors.resprimary} strokeWidth="1" />
              </TouchableOpacity>
              
              <TouchableOpacity  onPress={()=> navigation.navigate('PersonalChat')} className="bg-white p-2 rounded-full">
                <Icon.MessageSquare fill={Colors.resprimary} stroke={Colors.resprimary} strokeWidth="5" />
              </TouchableOpacity>
              
            </View>
            
        </View>


        
        </ScrollView>

    
    </View>


  )
}