import React from 'react';
import {View, Text, Button} from 'react-native';

import Header from './../home/HomeHeader';

const PreferenciasScreen = ({navigation}) => {
  return (
    
    <View>
    <Header/>
      <Text>PreferenciasScreen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default PreferenciasScreen;
