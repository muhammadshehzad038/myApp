import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, Bars3CenterLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import StarRating from 'react-native-star-rating';
import FruitCardCart from '../components/FruitCardCart';
import { cartItems, featuredFruits } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import MyHeader from '../components/MyHeader';
import { categories2} from '../constants';
import Colors from '../constants/Colors';


  
export default function SupplierInventory(props) {
    const navigation = useNavigation();
    const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: Colors.primary}}>
    <MyHeader
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

  data={categories2}
  keyExtractor={item=> item.id}
  className="overflow-visible"
  renderItem={({item})=>{
    isActive = item.id==activeCategory;
    let activeTextClass = isActive? 'text-white': 'text-gray-700';
    if(item.id === 1) {
    return (
      <TouchableOpacity 
      onPress={()=> setActiveCategory(item.id)} 
      style={{backgroundColor: isActive?  Colors.primary: 'rgba(0,0,0,0.07)'}} 
      className="p-4 px-5 mr-2 rounded-full shadow">
        <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
      </TouchableOpacity>
    )

    }
    if(item.id === 2) {
      return (
        <TouchableOpacity 
        onPress={()=> setActiveCategory(item.id)} 
        style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
        className="p-4 px-5 mr-2 rounded-full shadow">
          <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
        </TouchableOpacity>
      )
      
      }

      if(item.id === 3) {
        return (
          <TouchableOpacity 
          onPress={()=> setActiveCategory(item.id)} 
          style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
          className="p-4 px-5 mr-2 rounded-full shadow">
            <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
          </TouchableOpacity>
        )
        
        }

        if(item.id === 4) {
          return (
            <TouchableOpacity 
            onPress={()=> setActiveCategory(item.id)} 
            style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
            className="p-4 px-5 mr-2 rounded-full shadow">
              <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
            </TouchableOpacity>
          )
          
          }

          if(item.id === 5) {
            return (
              <TouchableOpacity 
              onPress={()=> setActiveCategory(item.id)} 
              style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
              className="p-4 px-5 mr-2 rounded-full shadow">
                <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
              </TouchableOpacity>
            )
            
            }
  }}
/>
</View>

        <View className="cart mx-5 flex-1">
        
        <View style={{height: 60, 
        marginTop: 35, 
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
     cartItems.map((item,index)=>  <FruitCardCart fruit={item} key={index} />)
    }
    </View>
               
 </View>
 </SafeAreaView> 
 </View>   
  )
}

