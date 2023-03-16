import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import Home from '../screens/Home';
import RoomsList from '../screens/RoomsList';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >

            <BottomTabs.Screen name="Home" component={Home}
                options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                    <AntDesign name="home" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
                    <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Home</Text>
                    </View>
                )
                }}
            />

            <BottomTabs.Screen name="RoomsList" component={RoomsList}
                options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                    <FontAwesome5 name="bed" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
                    <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>RoomsList</Text>
                    </View>
                )
                }}
            />
        </BottomTabs.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
      shadowColor: '#7F5DF0',
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 0.25,
      elevation: 5,
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      borderRadius: 15,
      height: 90
    },
    tabBarIcon: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

export default TabNavigator;
