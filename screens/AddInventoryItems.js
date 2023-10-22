import React,{useState,useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import {COLOURS} from '../components/items';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MyHeader from '../components/MyHeader';
import { color } from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';


const AddInventoryItems = ({navigation}) => {

  const [image, setImage] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemID, setItemID] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };   
  
  const addItem = () => {
    const itemData = {
      name: itemName,
      id: itemID,
      quantity: itemQuantity,
      price: itemPrice,
      imageUri: image, // The selected image URI
    };
  
    // Navigate to the next screen and pass the itemData
    navigation.navigate('Categories', { itemData });
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        flexDirection: 'column',
      
        
      }}>
    <MyHeader
    Sidebar
    title= 'Inventory'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
  />
      <View
          style={{
            marginTop: 40,
            width: 200,
            height: 200,
            alignItems: 'center',
            marginLeft:140,
            borderWidth:  2,
            borderColor: COLOURS.lightGray,
            borderBottomLeftRadius:200,
            borderBottomRightRadius:200,
            borderTopLeftRadius:200,
            borderTopRightRadius:200

          }}>
            {image && <Image source={{uri: image}} style={{height:200, width:200, resizeMode:'contain', borderRadius:100}}/>}
            
           
             <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: COLOURS.lightGray,
                borderTopRightRadius: 100,
                borderBottomLeftRadius: 100,
                borderTopLeftRadius: 100,
                borderBottomRightRadius:100,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 90,
                top:160, 
                right: 20, 
                marginLeft: 400
              }}>
                <TouchableOpacity onPress={pickImage}>
              <Entypo
                name="camera"
                style={{fontSize: 18, color: COLOURS.black}}
              />
              </TouchableOpacity>
            </View>
        </View>
<ScrollView>

      <View
        style={{
          flexDirection: 'row',
          maxHeight: 300,
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={{paddingHorizontal: 20}}>
        <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                opacity: 0.8
              
              }}>
              Name
            </Text>
            <TextInput
              style={{
                paddingHorizontal: 10,
                fontSize: 18,
                borderWidth:  2,
                width: 200,
                height: 50,
                borderColor: COLOURS.lightGray,
                color: COLOURS.black,
                fontWeight: '600',
                opacity: 0.6
              }}
              value={itemName}
              onChangeText={(text) => setItemName(text)}/>
          </View>

           <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                opacity: 0.8
              
              }}>
              ID
            </Text>
            <TextInput
              style={{
                paddingHorizontal: 10,
                fontSize: 18,
                borderWidth:  2,
                width: 200,
                height: 50,
                borderColor: COLOURS.lightGray,
                color: COLOURS.black,
                fontWeight: '600',
                opacity: 0.6
              }}
              value={itemID}
              onChangeText={(text) => setItemID(text)}
              />
          </View>

          <View className="flex-row">
          <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                opacity: 0.8
              
              }}>
              Quantity
            </Text>
            <TextInput
              style={{
                paddingHorizontal: 10,
                fontSize: 18,
                borderWidth:  2,
                width: 200,
                height: 50,
                borderColor: COLOURS.lightGray,
                color: COLOURS.black,
                fontWeight: '600',
                opacity: 0.6
              }}
              value={itemQuantity}
              onChangeText={(text)=>{setItemQuantity(text)}}/>
          </View>

          <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                opacity: 0.8
              
              }}>
              Price
            </Text>
            <TextInput
              style={{
                paddingHorizontal: 10,
                fontSize: 18,
                borderWidth:  2,
                width: 200,
                height: 50,
                borderColor: COLOURS.lightGray,
                color: COLOURS.black,
                fontWeight: '600',
                opacity: 0.6
              }}
              value={itemPrice}
               onChangeText={(text) => setItemPrice(text)}
              >
       
            </TextInput>
          </View>
          </View>

        </View>
      
      </View>
   
     
      <View
        style={{
          position: 'relative',
          width: '100%',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={addItem}
          style={{
            width: 450,
            height: 60,
            backgroundColor: COLOURS.accent, 
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop:30,
            marginBottom: 200
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: COLOURS.black,
              letterSpacing: 1,
              marginRight: 10,
            }}>
            Add Item
          </Text>
        
        </TouchableOpacity>
      </View>
      <View>
      </View>
      </ScrollView>
    </View>
  );
};

export default AddInventoryItems;