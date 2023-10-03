import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import VegCardCart from '../components/VegCardCart';
import { veg } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import MyHeader2 from '../components/MyHeader2';
import { categories3} from '../constants';
import Colors from '../constants/Colors';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'


  
export default function ResInventory(props) {
    const navigation = useNavigation();
    const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: Colors.primary}}>
    <MyHeader2
    Sidebar
    title= 'Inventory'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
  />


    <SafeAreaView className="flex-1 flex justify-between bg-white">
            <View className="flex-row justify-start mx-5">
        </View>

 {/* categories */}
 <View className="px-5 mt-6">

<FlatList 
  horizontal
  showsHorizontalScrollIndicator={false}

  data={categories3}
  keyExtractor={item=> item.id}
  className="overflow-visible"
  renderItem={({item})=>{
    isActive = item.id==activeCategory;
    let activeTextClass = isActive? 'text-white': 'text-gray-700';
    if(item.id === 1) {
    return (
      <TouchableOpacity 
      onPress={()=> setActiveCategory(item.id)} 
      style={{backgroundColor: isActive?  Colors.resprimary: 'rgba(0,0,0,0.07)'}} 
      className="p-4 px-5 mr-2 rounded-full shadow">
        <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
      </TouchableOpacity>
    )

    }
    if(item.id === 2) {
      return (
        <TouchableOpacity 
        onPress={()=> setActiveCategory(item.id)} 
        style={{backgroundColor: isActive? Colors.resprimary: 'rgba(0,0,0,0.07)'}} 
        className="p-4 px-5 mr-2 rounded-full shadow">
          <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
        </TouchableOpacity>
      )
      
      }

      if(item.id === 3) {
        return (
          <TouchableOpacity 
          onPress={()=> setActiveCategory(item.id)} 
          style={{backgroundColor: isActive? Colors.resprimary: 'rgba(0,0,0,0.07)'}} 
          className="p-4 px-5 mr-2 rounded-full shadow">
            <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
          </TouchableOpacity>
        )
        
        }

        if(item.id === 4) {
          return (
            <TouchableOpacity 
            onPress={()=> setActiveCategory(item.id)} 
            style={{backgroundColor: isActive? Colors.resprimary: 'rgba(0,0,0,0.07)'}} 
            className="p-4 px-5 mr-2 rounded-full shadow">
              <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
            </TouchableOpacity>
          )
          
          }

 
  }}
/>
</View>

        <View className="cart mx-5 flex-1">
        
       {/* search bar */}
       <View className=" mt-10 mb-10 shadow">
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search items' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: themeColors.resbg}}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>


<ScrollView>
    <View className="mb-32">
    {
     veg.map((item,index)=>  <VegCardCart veg={item} key={index} />)
    }
    </View>
    </ScrollView>           
 </View>
 </SafeAreaView> 
 </View>   
  )
}

