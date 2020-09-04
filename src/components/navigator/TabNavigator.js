import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

import {footerColor, white} from '../../assets/helper/Colors';

//Telas da aplicacao
import HomeScreen from '../../components/screen/Home/HomeScreen';
import AnuncioScreen from '../../components/screen/Anuncio/AnuncioScreen';
import PublicacoesScreen from '../../components/screen/Publicacoes/PublicacoesScreen';
import PreferenciasScreen from '../../components/screen/Preferencias/PreferenciasScreen';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={white}
        barStyle={{backgroundColor: footerColor}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="ios-home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Anúncios"
          component={AnuncioScreen}
          options={{
            tabBarLabel: 'Anúncios',
            tabBarIcon: ({color}) => (
              <Icon name="ios-megaphone" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Publicações"
          component={PublicacoesScreen}
          options={{
            tabBarLabel: 'Publicações',
            tabBarIcon: ({color}) => (
              <Icon name="ios-eye" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Preferências"
          component={PreferenciasScreen}
          options={{
            tabBarLabel: 'Preferências',
            tabBarIcon: ({color}) => (
              <Icon name="ios-settings" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
