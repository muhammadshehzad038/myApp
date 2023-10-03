import { View} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { Contract } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import MyHeader from '../components/MyHeader';
import Contracts from '../components/Contracts';
import { ScrollView } from 'react-native';

  
export default function MyContracts(props) {
    const navigation = useNavigation();
    const [activeCategory, setActiveCategory] = useState('Oranges');

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
    <MyHeader
    back
    onPressBack={() => navigation.goBack()}
    title= 'My Contracts'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
    
  />


    <SafeAreaView className="flex-1 flex justify-between bg-white">
            <View className="flex-row justify-start mx-5">
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



    <ScrollView showsVerticalScrollIndicator={false} >
    {
     Contract.map((item,index)=>  <Contracts con={item} key={index} />)
    }
    </ScrollView>
            
 </View>
 </SafeAreaView> 
 </View>   
  )
}
