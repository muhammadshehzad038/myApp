import React from 'react';
import { View, Text, Image } from 'react-native';

const NextScreen = ({ route, }) => {
  const { itemData } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text>Display the item details here:</Text>
      <Text>Name: {itemData.name}</Text>
      <Text>ID: {itemData.id}</Text>
      <Text>Quantity: {itemData.quantity}</Text>
      <Text>Price: {itemData.price}</Text>
      <Image source={{ uri: itemData.imageUri }} style={{ height: 200, width: 200 }} />
    </View>
  );
};

export default NextScreen;
