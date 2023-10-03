import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, Bars3CenterLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { cartItems, featuredFruits, DispachedOrder } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import MyHeader from '../components/MyHeader';
import { TrackingStatus} from '../constants';
import Tracking from '../components/Tracking';


  
export default function OrderTracking(props) {
    const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
    <MyHeader
    back
    onPressBack={() => navigation.goBack()}
    title= 'Order Tracking'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
    
  />


    <SafeAreaView className="flex-1 flex justify-between bg-white">
            <View className="flex-row justify-start mx-5">
        </View>

 {/* categories */}
 <View className="flex-row px-5 mt-6">


     <View className= "ml-5" onPress={this}>
     <Icon
    name='shopping-bag'
    size={40}
    color='#FF9801'
    style={{height:35,width:45}}/>
     <Text style={fontSize= 24}>Dispached</Text>
     </View>

     <View className= "ml-28" onPress={this}>
     <Icon
    name='local-shipping'
    size={40}
    color='#FF9801'
    style={{height:35,width:45}}/>
     <Text style={fontSize= 24}>Recieved</Text>
     </View>

     <View className= "ml-32" onPress={this}>
     <Icon
    name='comment'
    size={40}
    color='#FF9801'
    style={{height:35,width:45}}/>
     <Text style={fontSize= 24}>Review</Text>
     </View>

{/*<FlatList 
  horizontal
  showsHorizontalScrollIndicator={false}

  data={TrackingStatus}
  keyExtractor={item=> item.id}
  className="overflow-visible"
  renderItem={({item})=>{
    isActive = item.id==activeCategory;
    let activeTextClass = isActive? 'text-white': 'text-gray-700';
    if(item.id === 1) {
    return (
      <TouchableOpacity 
      onPress={()=> setActiveCategory(item.id)} 
      
      style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
      className="p-4 px-5 mr-2 shadow">
        <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
      </TouchableOpacity>
    )

    }
    if(item.id === 2) {
      return (
      

      <View onPress={this}>
     <Icon
    name='search'
    size={25}
    color='#3b5998'
    style={{height:25,width:25}}/>
     <Text style={fontSize= 24}>Sign</Text>
       {/* <TouchableOpacity 
        
        onPress={()=> setActiveCategory(item.id)} 
        style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
        className="p-4 px-5 mr-2 shadow">
          <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
         
      </TouchableOpacity>
      </View>
      )
      
      }

      if(item.id === 3) {
        return (
          <TouchableOpacity 
          onPress={()=> setActiveCategory(item.id)} 
          style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
          className="p-4 px-5 mr-2 shadow">
            <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
          </TouchableOpacity>
        )
        
        }

        if(item.id === 4) {
          return (
            <TouchableOpacity 
            onPress={()=> setActiveCategory(item.id)} 
            style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
            className="p-4 px-5 mr-2 shadow">
              <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
            </TouchableOpacity>
          )
          
          }

          if(item.id === 5) {
            return (
              <TouchableOpacity 
              onPress={()=> setActiveCategory(item.id)} 
              style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
              className="p-4 px-5 mr-2 shadow">
                <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
              </TouchableOpacity>
            )
            
            }
  }}
/>*/}


</View>

        <View className="cart mx-5 flex-1">
        
        <View style={{height: 60, 
        marginTop: 35, 
        marginBottom: 35,
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 15, 
        backgroundColor: '#F5F5F7', 
        borderRadius: 30, 
        alignContent: 'center', 
        flexDirection: 'row', }}
        >
    <Icon name="search"  size={30}/>
    <TextInput style={{fontSize:18, color: "#616888", marginLeft: 5}} placeholder='Search for anything'/>
   </View>



    <View >
    {
     DispachedOrder.map((item,index)=>  <Tracking track={item} key={index} />)
    }
    </View>
               
 </View>
 </SafeAreaView> 
 </View>   
  )
}