import React from 'react'

//React-Navigation Imports
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

//Import Telas da aplicacao
import HomeScreen from '../../components/screen/Home/HomeScreen';
import AnuncioScreen from '../../components/screen/Anuncio/AnuncioScreen';
import PublicacoesScreen from '../../components/screen/Publicacoes/PublicacoesScreen';

import {footerColor, white} from '../../assets/helper/Colors';

const Tab = createMaterialBottomTabNavigator();

function TabScreen() {
    return (
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
        </Tab.Navigator>
    )
}

export default TabScreen
