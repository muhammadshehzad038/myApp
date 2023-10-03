import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
//import { SharedElement } from 'react-navigation-shared-element'
import Icon, { Icons } from '../components/Icons'
import MyHeader2 from '../components/MyHeader2'
import Colors from '../constants/Colors'
import { bagsList } from '../constants/Constants'
const { width, height } = Dimensions.get('window');

const colors = [
  Colors.red,
  Colors.green,
  Colors.yellow,
  Colors.black,
]
const ColorsSelector = () => {
  const [selected, setSelected] = useState(0)//index
  return (
    <View style={styles.container}>
      <Text>Colors</Text>
      <View style={{ flexDirection: 'row', marginVertical: 5, }}>
        {colors.map((_, i) => (
          <View key={i} style={[styles.outerCircle, { borderColor: selected == i ? _ : 'transparent' }]}>
            <TouchableOpacity
              onPress={() => setSelected(i)}
              style={[styles.colorBtn, { backgroundColor: _ }]} />
          </View>
        ))}
      </View>
    </View>
  )
}


const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.quantity}>
      <TouchableOpacity style={styles.qtBtn} onPress={() => setQuantity(prev => prev - 1)}>
        <Icon type={Icons.Entypo} name="minus" />
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity style={styles.qtBtn} onPress={() => setQuantity(prev => prev + 1)}>
        <Icon type={Icons.Entypo} name="plus" />
      </TouchableOpacity>
    </View>
  )
}

export default function DetailsScreen({ navigation, route }) {
  const { item } = route.params;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBackgroundColor(Colors.resprimary);
      StatusBar.setBarStyle('light-content')
    })
    return () => unsubscribe;
  }, [navigation])
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      StatusBar.setBackgroundColor(Colors.resprimary);
      StatusBar.setBarStyle('dark-content')
    })
    return () => unsubscribe;
  }, [navigation])
  return (
    <View style={[styles.container, { backgroundColor: Colors.darkGray }]}>
      <MyHeader2
        back
        onPressBack={() => navigation.goBack()}
        right="more-vertical"
        optionalBtn="shopping-cart"
        headerBg={item.bgColor}
        iconColor={Colors.white}
        onRightPress={() => console.log('right')}
      />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.smallText}>{item.subtitle}</Text>
            <Text style={styles.bigText}>{item.title}</Text>
          </View>
          <View>
            <Text style={styles.smallText}>Price</Text>
            <Text style={styles.bigText}>Rs {item.price}</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} resizeMode='center' />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.variants}>
           
         
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 24 }}>Description</Text>
            <Text>Fruits and vegetables contain important vitamins, minerals and plant chemicals. They also contain fibre. There are many varieties of fruit and vegetables available and many ways to prepare, cook and serve them. A diet high in fruit and vegetables can help protect you against cancer, diabetes and heart disease.</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Quantity />
            <TouchableOpacity style={[styles.favoriteBtn, { backgroundColor: Colors.gray }]}>
              <Icon type={Icons.AntDesign} name="heart" size={18} color={Colors.resprimary} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity style={[styles.cartBtm, { borderColor:  Colors.resprimary }]}>
              <Icon type={Icons.AntDesign} name="shoppingcart" color={ Colors.resprimary} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.resprimary }]}>
              <Text style={styles.btnText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  topContainer: {
    height: height / 3,
    padding: 16,
    justifyContent: 'space-between',
  },
  bottomContainer: {
    padding: 16,
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 80,
  },
  bigText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
  },
  smallText: {
    fontSize: 18,
    color: Colors.white,
  },
  image: {
    width: width / 1.5,
    height: width / 1.5,
  },
  imageContainer: {
    position: 'absolute',
    zIndex: 999,
    top: 60,
    alignSelf: 'flex-end',
  },
  colorBtn: {
    height: 16,
    width: 16,
    borderRadius: 6,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  variants: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    marginVertical: 10,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    
  },
  qtBtn: {
    borderWidth: 2,
    borderColor: Colors.resprimary,
    borderRadius: 8,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  favoriteBtn: {
    borderRadius: 17,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBtm: {
    borderRadius: 10,
    width: 50,
    height: 45,
    borderWidth: 2,
    borderColor: Colors.resprimary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  btn: {
    flex: 1,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.white,
  },
})
