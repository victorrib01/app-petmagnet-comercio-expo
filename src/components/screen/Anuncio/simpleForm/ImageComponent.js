import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import * as ImagePicker from 'expo-image-picker'

export default function ImageComponent() {

  const [selectedImg, setSelectedImg] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setSelectedImg({localUri: pickerResult.uri})
    console.log(pickerResult.uri);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity 
          onPress={openImagePickerAsync}
          style={styles.button}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    height: 50,
  }
})