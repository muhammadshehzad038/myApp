import { View, Text, FlatList, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import supplierCard from './SupplierCards';
import { TouchableOpacity} from 'react-native';
import { ImageBackground } from 'react-native';
import SupplierCards from './SupplierCards';
import MyHeader from '../components/MyHeader';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
//import { firebase } from 'firebase'

export default function SupplierDashboard() {

    const navigation = useNavigation();
    //const windowWidth = Dimensions.get('window').width;
    //const windowHeight = Dimensions.get('window').height;

 
  return (
    <View className="flex-1">
      <MyHeader
        Sidebar
        right="more-vertical"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />
  

   <SafeAreaView
   style={{
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
}}>


    <View style={{marginTop: 20}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>hi!</Text>

    <View style={{height: 60, 
        marginTop: 35, 
        marginBottom: 50,
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
</View>

  
  
  {/*<View style={{flex: 1}}>
  <FlatList 
  showsVerticalScrollIndicator={false} 
  numColumns={2}
  data={SupplierCards}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({item})=><SuppCards SupplierCards={item}/>}
  />
    </View>*/}

<ScrollView showsVerticalScrollIndicator={false}>   
<View className="flex"> 
<TouchableOpacity onPress={()=> navigation.navigate('MyContracts')}>
<View className="flex-row items-center mb-4 mx-1 bg-amber-500" style={{ height: 200, width: 300,  marginLeft: 10, borderRadius:40, borderWidth: 1}}>

<Image source={require('../assets/images/contract.png')} style={{width: 160, height: 150}} />
<View>
<Text style={{fontSize: 28, marginLeft:20 ,marginBottom:10, marginTop:20, fontWeight: 'bold', color: Colors.black}}>Contract</Text>
<Text style={{fontSize: 20, marginLeft:30, color: Colors.black}}>Done: 100</Text>        
<Text style={{fontSize: 20, marginLeft:30, color: Colors.black}}>Pending: 50</Text>        
<Text style={{fontSize: 20, marginLeft:30, color: Colors.black}}>Total:   50</Text>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity  onPress={()=> navigation.navigate('MyBids')}>
<View className="flex-row items-center mb-2 bg-amber-500 " style={{ height: 200, width: 300,  marginLeft: 10, borderRadius:40, borderWidth: 1}}>
<Image source={require('../assets/images/bid2.png')} style={{width: 160, height: 150}} />
<View>
<Text style={{fontSize: 28, marginLeft:30, marginBottom:10, marginTop:20, fontWeight: 'bold', color: Colors.black}}>Bidding</Text>
<Text style={{fontSize: 20, marginLeft:30, color: Colors.black}}>Done: 100</Text>        
<Text style={{fontSize: 20, marginLeft:30, color: Colors.black}}>Pending: 50</Text>        
<Text style={{fontSize: 20, marginLeft:30, color: Colors.black}}>Total: 50</Text>        
</View>
</View>
</TouchableOpacity>

</View>
</ScrollView>
   </SafeAreaView>
   </View>
  )
}





{/*
import { View, Text, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import supplierCard from './SupplierCards';
import { TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import SupplierCards from './SupplierCards';
import Colors from "../constants/Colors";
import MyHeader from '../components/MyHeader';
import { rows } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';


export default function SupplierDashboard() {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const SuppCards = ({SupplierCards}) => {
        return(
          <View className="flex-row">
        <TouchableOpacity activeOpacity={0.8}
      
            style={{marginVertical: 10, 
                    marginHorizontal:5, 
                    borderRadius: 50, 
                    backgroundColor: Colors.primary,
                    width: 420, 
                    height: windowHeight/ 4 -30, 
                    overflow: "hidden", 
                    paddingTop: 25, 
                    paddingLeft: 20, 
                    borderRadius: 15,  }}>  
                <View>             
                <Text style={{fontSize: 24, fontWeight: 'bold', color: Colors.black , paddingBottom: 5}}>{SupplierCards.name}</Text>
                <Text style={{fontSize: 18, color: Colors.black , paddingBottom: 5}}>Done:  {SupplierCards.Done}</Text>
                <Text style={{fontSize: 18, color: Colors.black , paddingBottom: 5}}>Pending:  {SupplierCards.Pending}</Text>
                <Text style={{fontSize: 18, color: Colors.black , paddingBottom: 5}}>total:  {SupplierCards.Total}</Text>
                </View> 
                
                <View>
                <Image source={SupplierCards.image} style={{width: 150, height: 100, marginTop: 10}} />
                </View>
        </TouchableOpacity>
        </View>
  );
};

  return (
    <View className="flex-1 bg-white">
      <MyHeader
        Sidebar
        right="more-vertical"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />

   <SafeAreaView
   style={{
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
}}>


    <View style={{marginTop: 20}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Hey Rimsha</Text>

    <View style={{height: 60, 
        marginTop: 15, 
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

  
   <View style={{paddingVertical: 25,
                 flexDirection: 'row',
                 justifyContent: 'space-between',}}> 
    <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>My Dashboard</Text>
   </View>
</View>

  
  
  <View style={{flex: 1}}>
  <FlatList
        data={SupplierCards}
        keyExtractor={item=> item.id}
        renderItem={({item})=><SuppCards SupplierCards={item}/>}
  />

</View>

   </SafeAreaView>
   </View>
  )
}*/}