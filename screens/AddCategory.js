import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MyHeader from '../components/MyHeader';


export default function AddCategory() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        right="more-vertical"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />

<ScrollView>  


    
<View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
    <Text style={{fontSize: 26, fontWeight: 'bold', marginBottom:40,}} className="text-center text-black mb-5"> Add Category</Text>

  <Text style={{fontSize:18}} className="text-black ml-1">Enter Category Name</Text>
            <TextInput 
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl"
            />


<Text style={{fontSize:18}} className="text-black ml-1 mt-5">Add Picture</Text>
         
 <View className="flex items-center p-3 mb-2 mx-2 mt-2 border-gray-400 " style={{ height: 140, width: 400, borderWidth:  2, borderStyle:  'dashed'}}>
 <Text style={{fontSize: 12,marginTop:20}}>Drag & drop a single file here</Text>

<TouchableOpacity
               className="py-3 bg-amber-500 rounded-xl"  style={{ marginTop:10, width: 180}}
           >
               <Text className="font-xl font-bold text-center text-black"  >
                   Upload 
               </Text>
           </TouchableOpacity>
      </View>

  



      </View>
      <TouchableOpacity  className=" bg-amber-500 rounded-xl"
          onPress={() => navigation.goBack()}
          style={{
            width: '70%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 150,
            marginTop: 50,
            marginLeft: 70
          }}>
          <Text  
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: 1,
              marginRight: 10,
            }}>
            Add
          </Text>
        
        </TouchableOpacity>

      </ScrollView>   
    </View>
  )
}  