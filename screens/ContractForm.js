import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import MyHeader2 from '../components/MyHeader2';


export default function Portfolio() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <MyHeader2
        back
        onPressBack={() => navigation.goBack()}
        title= 'Contract Form'
        right="more-vertical"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />

<ScrollView>  


    
<View className="flex-1 bg-white pt-8 mb-20"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
    <Text style={{fontSize: 26, fontWeight: 'bold', marginBottom:40,}} className="text-center text-black mb-5">Contract Form</Text>



         
 <View className="flex p-3 border-black " style={{ height: 900, width: 440, borderWidth: 1, marginLeft:20 }}>
 <Text style={{fontSize:16}} className="text-black ml-1">Restaurant Name</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-5"
                placeholder='Enter Name'
            />
             <Text style={{fontSize:16}} className="text-black ml-1">Supplier Name</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-5"
                placeholder='Enter Name'
            />
            <View className="flex-row">

            <View> 
             <Text style={{fontSize:16}} className="text-black ml-1">Contract Start Date</Text>
            <TextInput
                className="p-2 w-48 bg-gray-100 text-gray-700 rounded-2xl mb-5"
                placeholder='Start Date'
            />
           </View> 

           <View> 
            <Text style={{fontSize:16}} className="text-black ml-8">Contract End Date</Text>
            <TextInput
                className="p-2 ml-8 w-48 bg-gray-100 text-gray-700 rounded-2xl mb-5"
                placeholder='End Date'
            />
            </View> 

            </View>
            
 <Text style={{fontSize:18}} className="text-black ml-1">Contract Details</Text>
 <View className="flex p-3 border-black " style={{ height: 450, width: 400, borderWidth: 1, marginLeft:5 }}>

            <TextInput multiline numberOfLines={8}
                className="p-2 bg-gray-100 text-black rounded-2xl"
                placeholder='The restaurant offers an elegant and refined ambiance, providing guests with a sophisticated dining experience. The Gourmet Haven offers a diverse menu featuring a fusion of international cuisines, prepared with high-quality ingredients. The establishment boasts an extensive wine list and a variety of handcrafted cocktails, catering to different tastes and preferences. The restaurant offers an elegant and refined ambiance, providing guests with a sophisticated dining experience. The Gourmet Haven offers a diverse menu featuring a fusion of international cuisines, prepared with high-quality ingredients. The establishment boasts an extensive wine list and a variety of handcrafted cocktails, catering to different tastes and preferences.'
  />

<Text style={{fontSize:18}} className="text-black ml-1">Terms & Conditions</Text>
<TextInput multiline numberOfLines={8}
                className="p-2 bg-gray-100 text-black rounded-2xl"
                placeholder='1 - The restaurant offers an elegant refined ambiance
2 - providing guests with a sophisticated. 
3 - The Gourmet Haven offers a diverse menu featuring a fusion
4 - International cuisines, prepared with high-quality ingredients. 
5 - The establishment boasts an extensive wine list and a variety of handcrafted cocktails'
  />
</View>


<View className="flex-row mt-12">
<View>   
<Text style={{fontSize:16}} className="text-black ml-1">Restaurant signature</Text>
<Text style={{fontSize:16}} className="text-black mt-10 ml-1">____________________</Text>

</View> 

<View>  
<Text style={{fontSize:16}} className="text-black ml-28">Supplier signature</Text>
<Text style={{fontSize:16}} className="text-black mt-10 ml-28">___________________</Text>

</View>

</View>     


      </View>

      <TouchableOpacity  onPress={()=> navigation.navigate('PersonalChat')}
                className=" bg-purple-500 rounded-xl items-center"  style={{ marginTop:20, marginBottom:20, marginLeft:310, width: 150}}
            >
                <Text className="font-xl font-bold text-center text-black mt-2 mb-2"  >
                    Send Contract 
                </Text>
            </TouchableOpacity>

      </View>
      </ScrollView>   
    </View>
  )
}
