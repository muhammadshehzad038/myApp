import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const DropdownMenu = ({ isVisible, onEdit, onDelete, onClose, navigation }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.option0} onPress={onEdit}>
          <Text style={styles.txt}>Edit Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={onDelete}>
          <Text style={styles.txt}>Delete Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option1} onPress={onClose}>
        <Entypo name="circle-with-cross" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  option: {
    backgroundColor: 'orange',
    color:'#fff',
    padding: 20,
    margin: 3,
    borderRadius: 10,
    width:320
  
  },
  option0: {
    backgroundColor: 'orange',
    color:'#fff',
    padding: 20,
    margin: 3,
    borderRadius: 5,
    width:320
  },
  option1:{
    backgroundColor:'white',
    color:'#fff',
    padding: 15,
    marginTop:15 ,
    borderRadius: 40,
  },
  txt:{
    alignSelf:'center',
    fontSize:16,
    color:'#fff'
  }
  
});

export default DropdownMenu;
