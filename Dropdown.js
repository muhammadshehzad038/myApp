import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DropdownMenu from './Dropdown/DropdownMenu';
import { AntDesign } from '@expo/vector-icons';

const Dropdown = () => {
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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpenDropdown}>
        <AntDesign name="ellipsis1" size={24} color="black" />
      </TouchableOpacity>
      <DropdownMenu
        isVisible={isDropdownVisible}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onClose={handleCloseDropdown}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dropdown;
