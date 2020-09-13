/**
 * Imports
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../components/Search';
import FilmDetail from '../components/FilmDetail';

// https://reactnavigation.org/docs/stack-navigator/ (V5)
const Stack = createStackNavigator();

function MyNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={Search}
                options={{ title: 'Rechercher' }}
            />
            <Stack.Screen
                name="FilmDetail"
                component={FilmDetail}
                options={{ title: 'FilmDetail' }}
            />
        </Stack.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyNavigation />
        </NavigationContainer>
    );
};

export default Navigation;