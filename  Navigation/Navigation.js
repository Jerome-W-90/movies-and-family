/**
 * Imports
 */
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../components/Search';
import FilmDetail from '../components/FilmDetail';
import MyFavorites from '../components/MyFavorites';

// https://reactnavigation.org/docs/stack-navigator/ (V5)
const Stack = createStackNavigator();

// https://reactnavigation.org/docs/bottom-tab-navigator (V5)
const Tab = createBottomTabNavigator();

function MySearchNavigation() {
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

function MyFavoritesNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MyFavorites"
                component={MyFavorites}
                options={{ title: 'MyFavorites' }}
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
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        switch (route.name) {
                            case "Rechercher":
                                return <Image source={require("../Images/search.png")} />
                            case "Mes favoris":
                                return <Image source={require("../Images/InFavorite.png")} />

                        }
                    },
                })}>
                <Tab.Screen name="Rechercher" component={MySearchNavigation} />
                <Tab.Screen name="Mes favoris" component={MyFavoritesNavigation} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;