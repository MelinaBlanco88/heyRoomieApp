import React from 'react';
import TabNavigator from './TabNavigator';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}

export default MainNavigator;
