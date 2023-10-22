
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert
} from 'react-native';
import {Categories, COLOURS} from '../components/items';
import MyHeader from '../components/MyHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import DropdownMenu from '../Dropdown/DropdownMenu';

const SupplierInventory = ({navigation}) => {
  const [currentSelected, setCurrentSelected] = useState([0]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleEdit = () => {
    Alert.alert('Edit', 'Item will be edited.');
    setDropdownVisible(false);
  };

  const handleDelete = () => {
    Alert.alert('Delete', 'Item will be deleted.'); 
    setDropdownVisible(false);
  }; 

  const handleOpenDropdown = () => {
    setDropdownVisible(true);
  };

  const handleCloseDropdown = () => {
    setDropdownVisible(false);
  };

  const renderCategories = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}>
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor:
              currentSelected == index ? COLOURS.accent : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}>
          <View style={{width: 60, height: 60}}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'center',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: '600',
            }}>
            {item.name}
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor:
                currentSelected == index ? COLOURS.white : COLOURS.accentRed,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="angle-right"
              style={{
                fontSize: 12,
                color: currentSelected == index ? COLOURS.black : COLOURS.white,
              }}
            />
          </View>
        </View>
      </TouchableOpacity> 
    );
  };

  const renderItems = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={{
          width: '100%',
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
        
        }}
        onPress={() =>
          navigation.push('details', {
            name: data.name,
            price: data.price,
            image: data.image,
            size: data.size,
            ID: data.ID,
            Qty: data.Qty,
            crust: data.crust,
            delivery: data.delivery,
            ingredients: data.ingredients,
            isTopOfTheWeek: data.isTopOfTheWeek,
            navigation: navigation,
          })
        }>
        <View
          style={{
            width: '90%',
            height: 120,
            backgroundColor: COLOURS.white,
            borderRadius: 10,
            elevation: 4,
            position: 'relative',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
           
            
          }}>
          <View style={{}}>
          <View className="flex-row" >
          <View style={{width: 70, height: 70, marginRight: -45}}>
            <Image
              source={data.image}
              style={{
                marginTop: 20,
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
        
          <View className="flex" style={{padding:2}}>
          <TouchableOpacity
           style={{flexDirection:'row', justifyContent:'space-between'}}
           onPress={handleOpenDropdown}>
          <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                fontWeight: 'bold',
                paddingTop: 15,
                paddingHorizontal:10,
                marginLeft: 100
              }}> 
              {data.name}
            </Text>
            <Entypo 
                name="dots-three-vertical"
                style={{fontSize: 18, color: COLOURS.black, alignSelf:'flex-end', justifyContent:'center'}}
              />
              </TouchableOpacity>
              <DropdownMenu
        isVisible={isDropdownVisible}
        onEdit= {handleEdit}
        onDelete={handleDelete}
        onClose={handleCloseDropdown}
      />
             <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                opacity: 0.5,
                marginLeft: 100,
               
              }}> ID:  
              {data.ID}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                opacity: 0.5,
                marginLeft: 100
              
              }}> Qty: 
              {data.Qty}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                opacity: 0.5,
                marginLeft: 100,
                marginBottom:10
              
              }}> Price: 
              {data.price}
            </Text>
            </View>

            </View>
           


          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOURS.white,
            position: 'relative',
          }}>
         
    <MyHeader
    Sidebar
    title= 'Inventory'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
  />

        <View className="flex-row">
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLOURS.black,
              letterSpacing: 1,
            }}>
            Categories
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('AddCategory')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 14,
              fontWeight: '100',
              color: COLOURS.black,
              letterSpacing: 1,
              color: COLOURS.accent,
              marginLeft: 150
            }}>
            Add more categories
          </Text>
          </TouchableOpacity>
          </View>

          <FlatList
            horizontal={true}
            data={Categories}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLOURS.black,
            }}>
            Items
          </Text>
          {Categories[currentSelected].items.map(renderItems)}
       
        </View>
      
      </ScrollView>
      <TouchableOpacity onPress={()=> navigation.navigate('AddInventoryItems')}
              style={{
                width: 50,
                height: 50,
                backgroundColor: COLOURS.accent,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomRightRadius:20,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 90, 
                right: 20, 
                marginLeft: 400
              }}>
              <Entypo 
                name="plus"
                style={{fontSize: 18, color: COLOURS.black}}
              />
            </TouchableOpacity>
    </View>
  );
};

export default SupplierInventory;