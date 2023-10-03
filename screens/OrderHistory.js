import { View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import ResOrderHistory from '../components/ResOrderHistory';
import { orderhistory } from '../constants';
import MyHeader2 from '../components/MyHeader2';

  
export default function OrderHistory(props) {
    const navigation = useNavigation();
    const [activeCategory, setActiveCategory] = useState('Oranges');

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
    <MyHeader2
    title= 'Order History'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
  />


    <SafeAreaView className="flex-1 flex justify-between bg-white">
            <View className="flex-row justify-start mx-5">
                

        </View>
        <View className="cart mx-5 flex-1">

    <View >
    {
     orderhistory.map((item,index)=>  <ResOrderHistory fruit={item} key={index} />)
    }
    </View>
               
 </View>
 </SafeAreaView> 
 </View>   
  )
}